import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.getAccountStatus() === true) {
      this.balance += amount
      return console.log('Voce pegou um empréstimo')
    }
    throw new Error('Não foi possível realizar o impréstimo');
    
  }
}
