// SOLID
// Princípios
// - SRP (Single Responsability Principle) -> fazer só uma coisa
// - OCP (Open Closed Principle) -> adicionar comportamento, não modifica-lo
// - LSP (Liskov Substitution Principle)
// - ISP (Interface Segregation Principle)
// - DIP (Dependency Inversion Principle)


// billet, credit, debit
interface Card {
  number: number
  cvv: number
  expiration: number
}

interface PaymentMethod {
  getDiscountAmount:(amount: number) => number
}
class Billet implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.1
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number
  constructor(installments: number) {
    this.installments = installments
  }

  getDiscountAmount(amount: number) {
    if(this.installments === 1) {
      return amount * 0.05
    }
    if(this.installments <= 6) {
      return amount * 0.02
    }
    return 0;
  }
}

class Debit implements PaymentMethod, Card {
  getDiscountAmount(amount: number) {
    return amount * 0.05
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.2
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }

  public execute(amount: number){
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(8))
calculateOrderDiscount.execute(2000)


class SubmitOrderInvoice {
  public execute(){
    // emissão da nota
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}