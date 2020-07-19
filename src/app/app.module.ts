import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { NavTabComponent } from './transactions/nav-tab/nav-tab.component';
import { CommanDisplayComponent } from './transactions/comman-display/comman-display.component';
import { SideDisplayComponent } from './side-display/side-display.component';
import { EntryComponent } from './transactions/entry/entry.component';
import { TransferComponent } from './transactions/transfer/transfer.component';
import { OthersComponent } from './transactions/others/others.component';
import { ServiceComponent } from './transactions/others/service/service.component';
import { ReportsComponent } from './transactions/others/reports/reports.component';
import { ExpenseComponent } from './transactions/entry/expense/expense.component';
import { IncomeComponent } from './transactions/entry/income/income.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingComponent } from './setting/setting.component';
import { ChangeColorDirective } from './sharedFolder/directive/change-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    NavTabComponent,
    CommanDisplayComponent,
    SideDisplayComponent,
    EntryComponent,
    TransferComponent,
    OthersComponent,
    ServiceComponent,
    ReportsComponent,
    ExpenseComponent,
    IncomeComponent,
    TransactionsComponent,
    SettingComponent,    
    ChangeColorDirective,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
