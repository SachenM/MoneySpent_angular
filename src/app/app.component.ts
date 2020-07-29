import { Component } from '@angular/core';
import { userService } from './sharedFolder/service/userDetails.service';
import { accountsService } from './sharedFolder/service/accountsService.service';
import { transCategoryService } from './sharedFolder/service/transCategoryservice.service';
import { generalCategoryService } from './sharedFolder/service/GeneralCategoryService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [userService,    accountsService,    transCategoryService,    generalCategoryService]
})
export class AppComponent {
  title = 'MoneySpent';
}
