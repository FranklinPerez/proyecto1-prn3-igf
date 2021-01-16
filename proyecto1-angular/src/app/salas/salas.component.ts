import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { ImagenDetalle } from './imagen.model';
import { ImagenesService } from './imagenes.service';
import { Sala } from './sala.model';
import { SalasService } from './salas.service';
//import * as screenshot from 'screenshot-desktop';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  data: Sala[];
  current: Sala;

  public instancia = {
    activa: false,
    capturando: false,
    camera: false,
    screen: false
  }

  videoElement = <HTMLMediaElement>document.getElementById("video");
  videoCameraElement = <HTMLMediaElement>document.getElementById("video-camera");

  displayMediaOptions = {
    video: {
      cursor: 'always',
      frameRate: 0.5
    },
    audio: false
  }

  constructor (private service: SalasService,
    private imagenService: ImagenesService,
    private cookieService: CookieService,
    private authService: AuthService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
    });
    const id = parseInt(this.cookieService.get('usuario_id'));
    this.authService.getUsuarioActual().subscribe((res:Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.SALA);
    })

  }

  new() {
    this.current = new Sala();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res => {
        this.current = new Sala();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res => {
      this.current = new Sala();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row) {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }

  show(row) {
    this.service.readOne(row).subscribe(res => {
      this.crudOperation.isVisible = true;
      this.crudOperation.isNew = false;
      this.crudOperation.isEditable = false;
      this.current = row;
      this.ngOnInit();
    });
  }

  onCancelBtn() {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable = true;
  }

  entrarSala(row) {
    this.instancia.activa = true;
    this.current = row;
    //this.displayMediaOptions.video.frameRate = (1 / (this.current.tiempo_captura * 60));
  }

  salirSala() {
    this.instancia.activa = false;
  }

  async capturar(row) {
    this.instancia.capturando = true;
    this.current = row;

    this.videoElement = <HTMLMediaElement>document.getElementById("video");
    this.videoCameraElement = <HTMLMediaElement>document.getElementById("video-camera");

    const mediaDevices = navigator.mediaDevices as any;
    try {
      this.videoElement.srcObject = await mediaDevices.getDisplayMedia(this.displayMediaOptions);
      if (this.videoElement) {
        this.instancia.screen = true;
        this.videoElement.play();
      }
    } catch (error) {
      console.error("Error: User display screen not found")
      this.videoElement.srcObject = null;
      this.instancia.screen = false;
    }

    try {
      this.videoCameraElement.srcObject = await mediaDevices.getUserMedia(this.displayMediaOptions);
      this.videoCameraElement.play();
      if (this.videoElement) {
        this.instancia.camera = true;
        this.videoCameraElement.play();
      }
    } catch (error) {
      console.error("Error: User camera not found")
      this.videoCameraElement.src = null;
      this.instancia.camera = false;
    }
  }

  parar() {
    if (this.videoElement.srcObject) {
      this.videoElement.srcObject = null;
    }
    if (this.videoCameraElement.srcObject) {
      this.videoCameraElement.srcObject = null;
    }
    this.instancia.capturando = false;
    this.instancia.screen = false;
    this.instancia.camera = false;
  }

  takeSnapshot(row) {
    this.current = row;
    if (this.instancia.activa) {
      if (this.instancia.screen) {
        const canvasDataScreen = this.service.getDataCanvas(this.videoElement);
        const imagenDetalle = new ImagenDetalle();
        
        imagenDetalle.image = canvasDataScreen;
        imagenDetalle.log_empleado_id = 1;
        imagenDetalle.tipo = true;

        this.imagenService.insert(imagenDetalle).subscribe((res) => {
          console.log(res);
        })
      }

      if (this.instancia.camera) {
        const canvasDataCamera = this.service.getDataCanvas(this.videoCameraElement);

        const imagenDetalle = new ImagenDetalle();
        imagenDetalle.image = canvasDataCamera;
        imagenDetalle.log_empleado_id = 1;
        imagenDetalle.tipo = true;

        this.imagenService.insert(imagenDetalle).subscribe((res) => {
          console.log(res);
        })
        //var imgCamera = document.querySelector('img') || document.createElement('img');
        //imgCamera.src = canvasDataCamera;
        //console.log(imgCamera);
        //document.appendChild(imgCamera);
      }

    }
  }

  sendScreen() {
    alert('holi');
  }

}
