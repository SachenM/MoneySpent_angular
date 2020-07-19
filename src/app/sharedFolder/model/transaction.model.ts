import { accountDetails } from "./accountDetails.model";
import { transCategory } from "./transCategory.model";
import { subCategory } from "./subCategory.model";

export class transaction {
    constructor(
        public trans_ID : number,
        public trans_date : string,
        public cat_id : number,
        public subCat_id : number,
        public fromAcc_id : number,
        public toAcc_id : number,
        public transAmount : number,
        public description : string
    ){    }
}