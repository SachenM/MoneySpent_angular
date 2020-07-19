import { Component } from '@angular/core';
import { userService } from './sharedFolder/service/userDetails.service';
import { accountsService } from './sharedFolder/service/accountsService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [userService,accountsService]
})
export class AppComponent {
  title = 'MoneySpent';
}
