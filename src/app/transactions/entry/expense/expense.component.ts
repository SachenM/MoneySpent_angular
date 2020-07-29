import { Component, OnInit } from '@angular/core';
import { accountDetailsModel } from 'src/app/sharedFolder/model/accountDetailsModel.model';
import { accountsService } from 'src/app/sharedFolder/service/accountsService.service';
import { transCategoryService } from 'src/app/sharedFolder/service/transCategoryservice.service';
import { transCategoryModel } from 'src/app/sharedFolder/model/transCategoryModel.model';
import { generalCategoryModel } from 'src/app/sharedFolder/model/generalCategoryModel.model';
import { generalCategoryService } from 'src/app/sharedFolder/service/GeneralCategoryService.service';

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

  constructor(private accService : accountsService,
    private transCatService : transCategoryService,
    private generalCatService : generalCategoryService) { }

  ngOnInit(): void {
    this.accounts.push( ...this.accService.accountsList)
    this.transCategories.push(...this.transCatService.transCategory.filter(function(transCategoryModel){return transCategoryModel.cat_type == 'EXP'; }))
    this.generalCategories.push(...this.generalCatService.generalCategory)
  }

}
