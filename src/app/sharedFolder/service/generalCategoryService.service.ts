import { generalCategoryModel } from "../model/generalCategoryModel.model";
import { userService } from "./userDetails.service";
import { Injectable } from '@angular/core';

@Injectable()
export class generalCategoryService {
    public generalCategory : generalCategoryModel[] = [];

    constructor(private userSer : userService){   
        this.generalCategory.push(...this.userSer.users[this.userSer.userIDSelected].GeneralCategories) 
    }
}

