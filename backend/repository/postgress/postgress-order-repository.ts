import { Order } from "../../domain/purchases/order";
import { OrdersRepository } from "../order-repository";

export class PostgresOrdersRepository implements OrdersRepository {
  async create(order: Order): Promise<void> {
    // salve o order no banco de dados
  }
}