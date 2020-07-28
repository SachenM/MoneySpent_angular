import { userDetails } from "../model/userDetailsModel.model";
import { accountDetailsModel } from "../model/accountDetailsModel.model";
import { transactionModel } from "../model/transactionModel.model";
import { transCategoryModel } from "../model/transCategoryModel.model";
import { subCategoryModel } from "../model/subCategoryModel.model";

export class userService{
    public userIDSelected : number = 0;

    public users : userDetails[] = [
        new userDetails(
            1,
            'Sachen',
            'M',
            25,
            [
                new accountDetailsModel(1,'Wallet1','W',550.00,'Y'),
                new accountDetailsModel(2,'Bank Savings','S',85000.00,'Y'),
                new accountDetailsModel(3,'Wallet2','W',550.00,'Y'),
                new accountDetailsModel(4,'Wallet3','W',550.00,'Y'),
                new accountDetailsModel(5,'Wallet4','W',550.00,'Y'),
            ],
            [
                new transactionModel(1,
                    '7/19/2020',
                    1,
                    1,
                    0,
                    1,
                    150.00,
                    'Anugragha')
                ],
            [
                new transCategoryModel(
                    1,
                    'card',
                    'EXP'
                )
            ],
            [
                new subCategoryModel(
                    1,
                    'Food'
                )]    
            )
    ]

    getAccountsList(){
        return this.users[this.userIDSelected].accounts
    }

}