import { Order } from "../domain/purchases/order"
import { OrdersRepository } from "../repository/order-repository"

interface SubmitOrderRequest {
  customerDocument: string
  total: number
}

export class SubmitOrder {
  constructor(private orderRepository: OrdersRepository) {}

  async execute({ customerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, customerDocument)

    // Persistir no banco de dados
    await this.orderRepository.create(order)
  }
}
