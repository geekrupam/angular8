import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  buttonClicked = true;
  clicks = [];
  anInt = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(){

    this.buttonClicked = !this.buttonClicked;
    this.anInt = this.anInt+1;
    this.clicks.push(this.anInt);
    return !this.buttonClicked;
  }
}
