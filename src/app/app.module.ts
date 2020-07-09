import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { CommanDisplayComponent } from './comman-display/comman-display.component';
import { SideDisplayComponent } from './side-display/side-display.component';
import { EntryComponent } from './entry/entry.component';
import { TransferComponent } from './transfer/transfer.component';
import { OthersComponent } from './others/others.component';
import { ServiceComponent } from './others/service/service.component';
import { ReportsComponent } from './others/reports/reports.component';

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
    ReportsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
