export class Order {
  public createdAt: Date
  private total: number
  private custumerDocument: string;

  constructor(total: number, custumerDocument: string) {
    this.createdAt = new Date()
    this.custumerDocument = custumerDocument
    this.total = total
  }
}