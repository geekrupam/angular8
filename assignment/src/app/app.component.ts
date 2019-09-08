import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  counter : number[] = [];

  onGameStarted(counter1 : number){
    console.log("Started event :" +event);
     this.counter.push(counter1);
  }

  onGameStopped( ){
    console.log("Stopped event ");

  }
}
