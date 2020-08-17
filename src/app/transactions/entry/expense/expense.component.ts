import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { accountDetailsModel } from 'src/app/sharedFolder/model/accountDetailsModel.model';
import { accountsService } from 'src/app/sharedFolder/service/accountsService.service';
import { transCategoryService } from 'src/app/sharedFolder/service/transCategoryservice.service';
import { transCategoryModel } from 'src/app/sharedFolder/model/transCategoryModel.model';
import { generalCategoryModel } from 'src/app/sharedFolder/model/generalCategoryModel.model';
import { generalCategoryService } from 'src/app/sharedFolder/service/GeneralCategoryService.service';
import { transactionService } from 'src/app/sharedFolder/service/transactionService.service';
import { transactionModel } from 'src/app/sharedFolder/model/transactionModel.model';
import { userService } from 'src/app/sharedFolder/service/userDetails.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  accounts : accountDetailsModel[] = [];
  transCategories : transCategoryModel[] = [];
  generalCategories : generalCategoryModel[] = [];
  Str: string[] =['1111','222'];

  @ViewChild('amountInput') acc_nameInputref : ElementRef;

  constructor(private accService : accountsService,
    private transCatService : transCategoryService,
    private generalCatService : generalCategoryService,
    private transacService : transactionService,
    private userService : userService) { }

  ngOnInit(): void {
    this.accounts.push( ...this.accService.accountsList)
    this.transCategories.push(...this.transCatService.transCategory.filter(function(transCategoryModel){return transCategoryModel.cat_type == 'EXP'; }))
    this.generalCategories.push(...this.generalCatService.generalCategory)
  }

  onExpenseSubmit(){  
    console.log('submit')
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

    this.transacService.transactionList.push(
      new transactionModel(
        this.userService.userIDSelected,
        Math.max.apply(Math, this.transacService.transactionList.map(function(array) { return array.trans_ID;})) + 1,
        dateTime,
        1,
        1,
        1,
        2,
        this.acc_nameInputref.nativeElement.value,
        ''      
      ))

      this.accService.updateAccountbalance(1,this.acc_nameInputref.nativeElement.value)

  }

}
