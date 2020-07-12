import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comman-display',
  templateUrl: './comman-display.component.html',
  styleUrls: ['./comman-display.component.css']
})
export class CommanDisplayComponent implements OnInit,OnChanges {
  @Input('getTransacType') TransacType:string;
  header:string;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.header = this.TransacType
    //this.header = 'GPP';
  }

 

}
