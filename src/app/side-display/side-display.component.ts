import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/sharedFolder/service/userDetails.service';
import { transactionService } from 'src/app/sharedFolder/service/transactionService.service';
import { transactionModel } from 'src/app/sharedFolder/model/transactionModel.model';
import { accountDetailsModel } from 'src/app/sharedFolder/model/accountDetailsModel.model';
import { accountsService } from 'src/app/sharedFolder/service/accountsService.service';
import { transCategoryModel } from '../sharedFolder/model/transCategoryModel.model';

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
      this.netBalance = this.getBalance(this.accService.accountsList,'W')
      this.netSavings = this.getBalance(this.accService.accountsList,'S')
    })
    this.netBalance =  this.getBalance(this.accService.accountsList,'W') 
    this.netSavings = this.getBalance(this.accService.accountsList,'S')

    this.transacService.transactionUpdation.subscribe((trans:transactionModel[])=>{
      this.monthIncome = this.getMothlyTransac(trans,'Income')
      this.monthExpense = this.getMothlyTransac(trans,'Expense')
    })

    this.monthIncome = this.getMothlyTransac(this.transacService.transactionList,'Income')
    this.monthExpense = this.getMothlyTransac(this.transacService.transactionList,'Expense')
  }

  getBalance(array: accountDetailsModel[],type :string){
    return array.filter((a)=>{return a.acc_type==type}).map(function(array) { return array.balance; }).reduce(function(acc,cur){return acc+cur;})
  }

  getMothlyTransac(TransaArr: transactionModel[], type:string){
    var today = new Date();

    
    if(type=='Income'){
      return TransaArr.filter((a)=>{return +a.trans_date.split('-')[1]==(today.getMonth()+1) && a.fromAcc_id == -1}).map(function(array) { return array.transAmount; }).reduce(function(acc,cur){return +acc + +cur;},0);
    }
    else (type=='Expense')
    {
      return TransaArr.filter((a)=>{return +a.trans_date.split('-')[1]==(today.getMonth()+1) && a.toAcc_id == -1}).map(function(array) { return array.transAmount; }).reduce(function(acc,cur){return +acc + +cur;},0)
    }
    
  }

}
