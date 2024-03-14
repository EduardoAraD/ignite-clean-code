export class Recipient {
  public street: string
  public number: number
  public zipCode: string

  constructor(street: string,number: number, zipCode: string ) {
    this.number = number
    this.street = street
    this.zipCode = zipCode
  }
}
