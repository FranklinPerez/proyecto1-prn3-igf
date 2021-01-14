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
 
  crudOperation = { isNew: false, isVisible: false, isEditable: true}
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