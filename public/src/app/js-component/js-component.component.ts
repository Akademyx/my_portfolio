import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-component',
  templateUrl: './js-component.component.html',
  styleUrls: ['./js-component.component.css']
})
export class JsComponentComponent implements OnInit {
  // isHovering= false;
  one = {
    isHovering: false
  }
  two = {
    isHovering: false 
  }

  three = {
    isHovering: false
  }
  projects = [this.one, this.two, this.three];
  constructor() { }

  ngOnInit() {
  }
  
  // hover(num){
  //   if(this.isHovering == false){
  //     this.isHovering = true;
  //   } else {
  //     this.isHovering = false
  //   }
  // }

  hover(num){
    if(this.projects[num].isHovering == false){
      this.projects[num].isHovering = true;
    } else {
      this.projects[num].isHovering = false
    }
  }

}
