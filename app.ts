import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(10)
companyAccount.withdraw(10)
companyAccount.getBalance()

const plusAccount: PlusAccount = new PlusAccount('William', 30)
console.log(plusAccount)
plusAccount.deposit(200)
plusAccount.getBalance()
plusAccount.deposit(100)
plusAccount.getBalance()
plusAccount.withdraw(50)
plusAccount.getBalance()

