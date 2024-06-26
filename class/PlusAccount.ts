import { DioAccount } from './DioAccount'

export class PlusAccount extends DioAccount {
    
    plusDeposit(amount: number){
        if(amount > 0) {
            this.balance += amount + 10
        }
    }
}
