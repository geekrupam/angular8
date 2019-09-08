import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<number>();

  @Output() stopGame = new EventEmitter<{}>();

  counter : number = 0;

   interval;
   started = false;
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.started = true;
    this.interval = window.setInterval(()=>this.startGame.emit(this.counter++), 1000);
  }

  onStopGame(){
this.started = false;
window.clearInterval(this.interval);
  }
}
