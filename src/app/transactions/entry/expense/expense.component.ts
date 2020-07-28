import { Component, OnInit } from '@angular/core';
import { accountDetailsModel } from 'src/app/sharedFolder/model/accountDetailsModel.model';
import { accountsService } from 'src/app/sharedFolder/service/accountsService.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  accounts : accountDetailsModel[] = [];
  Str: string[] =['1111','222'];

  constructor(private accService : accountsService) { }

  ngOnInit(): void {
    this.accounts.push( ...this.accService.accountsList)
    
  }

}
