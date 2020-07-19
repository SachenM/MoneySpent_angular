import { accountDetails } from "./accountDetails.model";
import { transaction } from "./transaction.model";
import { transCategory } from "./transCategory.model";
import { subCategory } from "./subCategory.model";

export class userDetails {
    constructor(
        public userID : number,
        public f_name : string,
        public l_name : string,
        public age : number,

        public accounts : accountDetails[],
        public transactions : transaction[],
        public transCategories : transCategory[],
        public subCategories : subCategory[]

    ){

    }
}