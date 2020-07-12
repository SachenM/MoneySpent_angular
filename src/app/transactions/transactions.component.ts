import { Component, OnInit } from '@angular/core';
 //import {getTransacType } from './comman-display.component'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transacType :string;

  constructor() { }

  ngOnInit(): void {
    this.transacType =''
  }

  onGetTransacType(stransacType:{tabName:string}){
    this.transacType=stransacType.tabName
    
  }


}
