import { userDetails } from "../model/userDetailsModel.model";
import { accountDetailsModel } from "../model/accountDetailsModel.model";
import { transactionModel } from "../model/transactionModel.model";
import { transCategoryModel } from "../model/transCategoryModel.model";
import { generalCategoryModel } from "../model/generalCategoryModel.model";

export class userService{
    public userIDSelected : number = 0;

    public users : userDetails[] = [
        new userDetails(
            1,
            'Sachen',
            'M',
            25,
            [
                new accountDetailsModel(1,'HDFC','W',550.00,'Y'),
                new accountDetailsModel(2,'Bank Savings','S',85000.00,'Y'),
                new accountDetailsModel(3,'SBI','W',550.00,'Y'),
                new accountDetailsModel(4,'Wallet','W',550.00,'Y')
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
                new transCategoryModel(1,'Food','EXP'),
                new transCategoryModel(2,'Grocery','EXP'),
                new transCategoryModel(3,'House Rent','EXP'),
                new transCategoryModel(4,'Travel','EXP'),
                new transCategoryModel(5,'Salary','INC'),
                new transCategoryModel(6,'Gift','INC'),
                new transCategoryModel(7,'Refund','INC')
            ],
            [
                new generalCategoryModel(1,'Yearly'),
                new generalCategoryModel(2,'Monthly'),
                new generalCategoryModel(3,'Daily')
            ]    
            )
    ]

    getAccountsList(){
        return this.users[this.userIDSelected].accounts
    }

}