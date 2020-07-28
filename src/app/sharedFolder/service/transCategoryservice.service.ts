import { userService } from "./userDetails.service";
import { transactionModel } from "../model/transactionModel.model";
import { transCategoryModel } from "../model/transCategoryModel.model";
import { Injectable } from '@angular/core';

// import {  Injectable } from '@angular/core';
// import { transCategory } from "../model/transCategory.model";

// @Injectable()
// export class transCategoryService   {
//     public Trans : transCategory[] = [ ]  ;
//     constructor(private userSer: userService){
//         this.Trans.push(...this.userSer.users[this.userSer.userIDSelected].accounts)
//     }



// }

@Injectable()
export class transCategoryService {
    public transCategory : transCategoryModel[] = [] ;

    constructor(private userService: userService){
        this.transCategory.push(...this.userService.users[this.userService.userIDSelected].transCategories)
    }
}