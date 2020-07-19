import { userService } from "./userDetails.service";
import { accountDetails } from "../model/accountDetails.model";
import {  Injectable } from '@angular/core';

@Injectable()
export class accountsService   {
    public accountsList : accountDetails[] = [ ]  ;
    constructor(private userSer: userService){
        this.accountsList.push(...this.userSer.users[this.userSer.userIDSelected].accounts)
    }



}