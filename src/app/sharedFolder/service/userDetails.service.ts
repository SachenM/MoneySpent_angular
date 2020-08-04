import { userDetails } from "../model/userDetailsModel.model";
import { accountDetailsModel } from "../model/accountDetailsModel.model";
import { transactionModel } from "../model/transactionModel.model";
import { transCategoryModel } from "../model/transCategoryModel.model";
import { generalCategoryModel } from "../model/generalCategoryModel.model";

export class userService{
    public userIDSelected : number = 0;

    public users : userDetails[] = [
        new userDetails(1,'Sachen','M',25),
        new userDetails(2,'Rajan','M',23)
    ]

    getAccountsList(){
        return 
    }

}