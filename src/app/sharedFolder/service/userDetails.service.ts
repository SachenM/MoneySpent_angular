import { userDetails } from "../model/userDetails.model";
import { accountDetails } from "../model/accountDetails.model";
import { transaction } from "../model/transaction.model";
import { transCategory } from "../model/transCategory.model";
import { subCategory } from "../model/subCategory.model";

export class userService{
    public userIDSelected : number = 0;

    public users : userDetails[] = [
        new userDetails(
            1,
            'Sachen',
            'M',
            25,
            [
                new accountDetails(1,'Wallet','W',550.00,'Y'),
                new accountDetails(2,'Bank Savings','S',85000.00,'Y'),
                new accountDetails(3,'Wallet','W',550.00,'Y'),
                new accountDetails(4,'Wallet','W',550.00,'Y'),
                new accountDetails(5,'Wallet','W',550.00,'Y'),
            ],
            [
                new transaction(1,
                    '7/19/2020',
                    1,
                    1,
                    0,
                    1,
                    150.00,
                    'Anugragha')
                ],
            [
                new transCategory(
                    1,
                    'card',
                    'EXP'
                )
            ],
            [
                new subCategory(
                    1,
                    'Food'
                )]    
            )
    ]

    getAccountsList(){
        return this.users[this.userIDSelected].accounts
    }

}