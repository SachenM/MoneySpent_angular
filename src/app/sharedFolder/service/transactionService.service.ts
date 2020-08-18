import { transactionModel } from "../model/transactionModel.model";
import { EventEmitter, Injectable } from '@angular/core';
import { userService } from './userDetails.service';

@Injectable()
export class transactionService {
    public transactionList : transactionModel[] = [new transactionModel(1,1,'2020-7-19','00:00:00',1,1,0,1,150.00,'Anugragha')];


    transactionUpdation = new EventEmitter<transactionModel[]>();

    constructor(private userSer: userService){
        // this.accountsList.push(...this.userSer.users[this.userSer.userIDSelected].accounts)
     }


    insertTransaction(icat_id:number, isubcat_id:number, ifromAcc:number, iToAcc:number, iAmount:number,ides:string){
        //get last trans ID        
        var ID :number = Math.max.apply(Math, this.transactionList.map((a)=>{return a.trans_ID}) );

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //var dateTime = date+' '+time;

        console.log('today' +today + ' : dateTime : ' + date + time  + '  : ' + date.split('-')[1] + ' ' + (today.getMonth()+1))

        this.transactionList.push(
            new transactionModel(this.userSer.userIDSelected,+ID + 1,date,time,
        icat_id,isubcat_id,ifromAcc,iToAcc,iAmount,ides )
        )

         this.transactionUpdation.emit(this.transactionList)
    }

}