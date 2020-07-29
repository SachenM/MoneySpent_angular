import { Component, OnInit } from '@angular/core';
import { accountDetailsModel } from 'src/app/sharedFolder/model/accountDetailsModel.model';
import { transCategoryModel } from 'src/app/sharedFolder/model/transCategoryModel.model';
import { generalCategoryModel } from 'src/app/sharedFolder/model/generalCategoryModel.model';
import { accountsService } from 'src/app/sharedFolder/service/accountsService.service';
import { transCategoryService } from 'src/app/sharedFolder/service/transCategoryservice.service';
import { generalCategoryService } from 'src/app/sharedFolder/service/GeneralCategoryService.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  accounts : accountDetailsModel[] = [];
  transCategories : transCategoryModel[] = [];
  generalCategories : generalCategoryModel[] = [];
  

  constructor(private accService : accountsService,
    private transCatService : transCategoryService,
    private generalCatService : generalCategoryService) { }

  ngOnInit(): void {
    this.accounts.push( ...this.accService.accountsList)
    this.transCategories.push(...this.transCatService.transCategory.filter(function(transCategoryModel){return transCategoryModel.cat_type == 'INC'; }))
    this.generalCategories.push(...this.generalCatService.generalCategory)
  }
}
