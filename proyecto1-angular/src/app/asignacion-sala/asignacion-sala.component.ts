import { Component, OnInit } from '@angular/core';
import { AsignacionSala } from './asignacion-sala';
import { AsignacionSalaService } from './asignacion-sala.service';

@Component({
  selector: 'app-asignacion-sala',
  templateUrl: './asignacion-sala.component.html',
  styleUrls: ['./asignacion-sala.component.css']
})
export class AsignacionSalaComponent implements OnInit {

  data: AsignacionSala[];
  current: AsignacionSala;
  crudOperation = { isNew: false, isVisible: false, isEditable: true}
  constructor (private service: AsignacionSalaService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.readAsigSalas().subscribe((res: any[]) => {
      this.data = res;
      this.current = new AsignacionSala();
    });

    this.service.readSalas().subscribe((res: any[]) => {
      this.data = res;
      this.current = new AsignacionSala();
    });
  }

  new() {
    this.current = new AsignacionSala();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res => {
        this.current = new AsignacionSala();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res => {
      this.current = new AsignacionSala();
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

  capturar() {
   // screenshot({ filename: 'shot.jpg' }).then((imgPath) => {
      // imgPath: absolute path to screenshot
      // created in current working directory named shot.png
    //});

  }

  onCancelBtn(){
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable = true;
  }

}
