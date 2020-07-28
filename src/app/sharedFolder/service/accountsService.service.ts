import { userService } from "./userDetails.service";
import { accountDetailsModel } from "../model/accountDetailsModel.model";
import {  Injectable } from '@angular/core';

@Injectable()
export class accountsService   {
    public accountsList : accountDetailsModel[] = [ ]  ;
    constructor(private userSer: userService){
        this.accountsList.push(...this.userSer.users[this.userSer.userIDSelected].accounts)
    }



}