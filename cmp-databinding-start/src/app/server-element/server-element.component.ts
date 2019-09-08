import { Component, OnInit , Input,
   ViewEncapsulation, OnChanges, SimpleChanges,
    DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
 DoCheck,OnChanges, OnInit ,
 AfterContentChecked,
 AfterContentInit,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy{
 @Input('srvElement') element :{type: string, name:string, content:string};
 
 @Input() name : string;
 @ViewChild('heading', {static:true}) header : ElementRef;
 @ContentChild('contentParagraph', {static:true}) paragraph : ElementRef;
 
 constructor() {
    console.log("constructor called");
   }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log("AfterViewInit called");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }
}
