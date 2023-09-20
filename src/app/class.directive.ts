import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit {
  //@Input() backgroundColor:string | undefined;

  constructor(private element :  ElementRef) { 
    //console.log('class directive used!')
  }

  ngOnInit(){    
    //this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @Input('appClass') set backgroundColor(color:string){
      this.element.nativeElement.style.backgroundColor = color
  }

}
