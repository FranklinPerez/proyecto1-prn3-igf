import { Component, OnInit } from '@angular/core';
import { Panel } from './panel';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  data: Panel[];
  current_produ: Panel;
  crud_operation = {is_new: false, is_visible:false}
  constructor(private service: PanelService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current_produ= new Panel();
    });
  }

  new(){
    this.current_produ = new Panel();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
        this.current_produ = new Panel();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produ = new Panel();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_produ = row;
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

}
