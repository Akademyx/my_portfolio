import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-component',
  templateUrl: './js-component.component.html',
  styleUrls: ['./js-component.component.css']
})
export class JsComponentComponent implements OnInit {
  showButton= false;
  constructor() { }

  ngOnInit() {
  }
  hover(){
    if(this.showButton == false){
      this.showButton = true;
    } else {
      this.showButton = false
    }
  }

}
