import { SubmitOrder } from "./use-cases/submit-order";
import { PostgresOrdersRepository } from "./repository/postgress/postgress-order-repository";

const submitOrder = new SubmitOrder(
  new PostgresOrdersRepository(),
)

submitOrder.execute({ customerDocument: '', total: 2000 })
