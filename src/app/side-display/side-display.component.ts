import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/sharedFolder/service/userDetails.service';
import { transactionService } from 'src/app/sharedFolder/service/transactionService.service';
import { transactionModel } from 'src/app/sharedFolder/model/transactionModel.model';
import { accountDetailsModel } from 'src/app/sharedFolder/model/accountDetailsModel.model';
import { accountsService } from 'src/app/sharedFolder/service/accountsService.service';

@Component({
  selector: 'app-side-display',
  templateUrl: './side-display.component.html',
  styleUrls: ['./side-display.component.css']
})
export class SideDisplayComponent implements OnInit {
  netBalance : Number;  netSavings : number;  
  monthIncome : number; monthExpense : number; monthSavings : number;


  constructor(
    private userService : userService,
    private accService : accountsService,
    private transacService : transactionService
  ) { }

  ngOnInit(): void {
    this.accService.accountDetailsChanged.subscribe((acc:accountDetailsModel[])=>{
      this.netBalance =  this.accService.accountsList.map(function(array) { return array.balance; }).reduce(function(acc,cur){return acc+cur;})
    })

    //this.netBalance =  this.accService.accountsList.map(function(array) { return array.balance; }).reduce(function(acc,cur){return acc+cur;})
  }

}
