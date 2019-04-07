import { Component, OnInit } from '@angular/core';
import { createInjectable } from '@angular/compiler/src/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
declare var $:any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  constructor() { }

  ngOnInit() {
     
      this.captions = true;
  }

  cargarslider(){
    this.anchuraToSlider = this.widthSlider;
    
  }

  resetearSlider(){
    this.anchuraToSlider = null;
  }

  getAutor(event){
    //console.log(event);
    this.autor = event;
  }

}
