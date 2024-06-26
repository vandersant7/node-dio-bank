export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0){
      this.balance += value
      console.log("Depósito realizado com sucesso!")
      return
    }
    throw new Error("O valor do depósito precisa ser maior que zero.")
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value <= this.balance) {
      this.balance -= value
      console.log('Voce sacou')
      return
    }
    throw new Error("Saldo insulficiente")
  }

  getBalance = (): void => {
    console.log(`Seu saldo é: ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getAccountStatus = (): boolean => {
    return this.validateStatus()
  }

}
