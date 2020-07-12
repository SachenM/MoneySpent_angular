import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {
  @Output() transacTypeSelected = new EventEmitter<{tabName : String;}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onTypeSelected(TranscTypeSelected : string){
    this.transacTypeSelected.emit({tabName : TranscTypeSelected});
  }

}
