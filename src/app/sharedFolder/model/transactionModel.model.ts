
export class transactionModel {
    constructor(
        public user_ID : number,
        public trans_ID : number,
        public trans_date : string,
        public trans_time : string,
        public cat_id : number,
        public subCat_id : number,
        public fromAcc_id : number,
        public toAcc_id : number,
        public transAmount : number,
        public description : string
    ){    }
}