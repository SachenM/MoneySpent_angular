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

  @ViewChild('amountInput') amountInputref : ElementRef;
  @ViewChild('acc_nameInput') acc_nameInputRef : ElementRef

  constructor(private accService : accountsService,
    private transCatService : transCategoryService,
    private generalCatService : generalCategoryService,
    private transacService : transactionService,
    private userService : userService) { }

  ngOnInit(): void {
    this.accService.accountDetailsChanged.subscribe((acc:accountDetailsModel[])=>{
      this.accounts=[] 
    this.accounts.push( ...this.accService.accountsList)
    })
    this.accounts.push( ...this.accService.accountsList)
    console.log('Acc length : ' + this.accounts.length)
    this.transCategories.push(...this.transCatService.transCategory.filter(function(transCategoryModel){return transCategoryModel.cat_type == 'EXP'; }))
    this.generalCategories.push(...this.generalCatService.generalCategory)
  }

  onExpenseSubmit(){  
    console.log('submit')
    this.transacService.insertTransaction(1,1,this.acc_nameInputRef.nativeElement.value,-1,
      this.amountInputref.nativeElement.value,'' )

      this.accService.updateAccountbalance(this.acc_nameInputRef.nativeElement.value,
        (+this.amountInputref.nativeElement.value) * (-1))


//this.accService.accountsList[0].acc_ID
  }

}
