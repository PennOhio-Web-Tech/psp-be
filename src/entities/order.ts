import { z } from "zod";
import { OrderCreateDTO } from "../@types/Order";
import { orderCreateDTOValidator } from "../validators/order";

export default function buildMakeOrder() {
  return function makeOrder(orderCreateInput: OrderCreateDTO) {
    try {
      orderCreateDTOValidator.parse(orderCreateInput);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log({ error });
        throw new Error(error.issues[0].message);
      }
    }

    return Object.freeze({
      getSubtotal: () => orderCreateInput.subtotal,
      getTax: () => orderCreateInput.tax,
      getTotal: () => orderCreateInput.total,
      getPaymentMethod: () => orderCreateInput.paidWith,
      getProducts: () => orderCreateInput.products,
    });
  };
}
