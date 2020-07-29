import { userService } from "./userDetails.service";
import { transCategoryModel } from "../model/transCategoryModel.model";
import { Injectable } from '@angular/core';



@Injectable()
export class transCategoryService {
    public transCategory : transCategoryModel[] = [] ;

    constructor(private userService: userService){
        this.transCategory.push(...this.userService.users[this.userService.userIDSelected].transCategories)
    }
}