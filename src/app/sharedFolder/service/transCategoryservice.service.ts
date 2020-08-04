import { userService } from "./userDetails.service";
import { transCategoryModel } from "../model/transCategoryModel.model";
import { Injectable } from '@angular/core';



@Injectable()
export class transCategoryService {
    public transCategory : transCategoryModel[] =             [
        new transCategoryModel(1,1,'Food','EXP'),
        new transCategoryModel(1,2,'Grocery','EXP'),
        new transCategoryModel(1,3,'House Rent','EXP'),
        new transCategoryModel(1,4,'Travel','EXP'),
        new transCategoryModel(1,5,'Salary','INC'),
        new transCategoryModel(1,6,'Gift','INC'),
        new transCategoryModel(1,7,'Refund','INC')
    ] ;

    constructor(private userService: userService){
        //this.transCategory.push(...this.userService.users[this.userService.userIDSelected].transCategories)
    }
}