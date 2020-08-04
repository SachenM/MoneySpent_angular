import { generalCategoryModel } from "../model/generalCategoryModel.model";
import { userService } from "./userDetails.service";
import { Injectable } from '@angular/core';

@Injectable()
export class generalCategoryService {
    public generalCategory : generalCategoryModel[] =             [
        new generalCategoryModel(1,1,'Yearly'),
        new generalCategoryModel(1,2,'Monthly'),
        new generalCategoryModel(1,3,'Daily')
    ]  ;

    constructor(private userSer : userService){   
        //this.generalCategory.push(...this.userSer.users[this.userSer.userIDSelected].GeneralCategories) 
    }
}

