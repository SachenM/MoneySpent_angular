import { accountDetailsModel } from "./accountDetailsModel.model";
import { transactionModel } from "./transactionModel.model";
import { transCategoryModel } from "./transCategoryModel.model";
import { generalCategoryModel } from "./generalCategoryModel.model";

export class userDetails {
    constructor(
        public userID : number,
        public f_name : string,
        public l_name : string,
        public age : number,

        // public accounts : accountDetailsModel[],
        // public transactions : transactionModel[],
        // public transCategories : transCategoryModel[],
        // public GeneralCategories : generalCategoryModel[]

    ){

    }
}