import { Component } from '@angular/core';
import { userService } from './sharedFolder/service/userDetails.service';
import { accountsService } from './sharedFolder/service/accountsService.service';
import { transCategoryService } from './sharedFolder/service/transCategoryservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [userService,accountsService,transCategoryService]
})
export class AppComponent {
  title = 'MoneySpent';
}
