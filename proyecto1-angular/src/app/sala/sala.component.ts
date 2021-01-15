import { Component, OnInit } from '@angular/core';
import { Sala } from './sala.model';
import { SalaService } from './sala.service';
//import * as screenshot from 'screenshot-desktop';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  data: Sala[];
  current: Sala;

  instancia = {
    activa: false,
    capturando: false,
    camera: false,
    screen:false
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

  crudOperation = { isNew: false, isVisible: false, isEditable: true }
  constructor (private service: SalaService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
      this.current = new Sala();
    });
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

  entrarSala(row) {
    this.instancia.activa = true;
  }

  salirSala() {
    this.instancia.activa = false;

  }

  onCancelBtn() {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable = true;
  }

  async capturar(row) {
    this.instancia.capturando = true;
    this.current = row;

    this.videoElement = <HTMLMediaElement>document.getElementById("video");
    this.videoCameraElement = <HTMLMediaElement>document.getElementById("video-camera");

    console.log(this.videoElement)
    console.log(this.videoCameraElement)

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
    this.instancia.capturando = true;

    if (this.videoElement.srcObject) {
      //let tracks = this.videoElement.srcObject.getTracks();
      //tracks.forEach(track => track.stop());
      this.videoElement.srcObject = null;
    }
    if (this.videoCameraElement.srcObject) {
      //let tracksCamera = this.videoCameraElement.srcObject.getTracks()
      //tracksCamera.forEach(track => track.stop());
      this.videoCameraElement.srcObject = null;
    }
    this.instancia.screen = false;
    this.instancia.camera = false;
  }

  takeSnapshot() {
    if (this.instancia.activa) {
      if (this.instancia.screen) {
        const canvasDataScreen = this.getDataCanvas(this.videoElement);
        var imgScreen = document.querySelector('img') || document.createElement('img');
        imgScreen.src = canvasDataScreen;
        console.log(imgScreen);
        document.appendChild(imgScreen);
      }
      if (this.instancia.camera) {
        const canvasDataCamera = this.getDataCanvas(this.videoCameraElement);
      
        var imgCamera = document.querySelector('img') || document.createElement('img');
        imgCamera.src = canvasDataCamera;
        console.log(imgCamera);
        //document.appendChild(imgCamera);
      }

    }
  }

  getDataCanvas(mediaElement) {
    var context;
    var width = mediaElement.offsetWidth  , height = mediaElement.offsetHeight;

    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext('2d');
    context.drawImage(mediaElement, 0, 0, width, height);
    const canvasData = canvas.toDataURL('image/png');
    return canvasData;
  }


}
