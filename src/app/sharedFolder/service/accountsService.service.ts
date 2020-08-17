import { userService } from "./userDetails.service";
import { accountDetailsModel } from "../model/accountDetailsModel.model";
import {  Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class accountsService   {
    accountDetailsChanged = new EventEmitter<accountDetailsModel[]>();



    public accountsList : accountDetailsModel[] =             [
        new accountDetailsModel(1,1,'HDFC','W',550.00,'Y'),
        new accountDetailsModel(1,2,'Bank Savings','S',85000.00,'Y'),
        new accountDetailsModel(1,3,'SBI','W',550.00,'Y'),
        new accountDetailsModel(1,4,'Wallet','W',550.00,'Y')
    ] ;
    constructor(private userSer: userService){
       // this.accountsList.push(...this.userSer.users[this.userSer.userIDSelected].accounts)
    }

    updateAccountbalance(Acc_ID :Number,amount:number){
        
       var x= this.accountsList.filter(function(a){return a.acc_ID==Acc_ID;})
       console.log('acc : ' +this.accountsList[0].balance + '  :  ' + x.length+ '  :  ' +  amount)    
       x[0].balance = +x[0].balance +  +amount;

       this.accountDetailsChanged.emit(this.accountsList)
 
    }

}