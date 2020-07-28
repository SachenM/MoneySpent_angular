export class accountDetailsModel {
    constructor(
        public acc_ID : number,
        public acc_name : string,
        public acc_type : string,
        public balance : number,
        public defaultAcc : string
    ){    }
}