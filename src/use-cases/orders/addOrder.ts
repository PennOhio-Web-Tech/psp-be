import { Prisma } from "@prisma/client";
import { OrderCreateDTO } from "../../@types/Order";
import { OrderDb } from "../../data-access";
import { makeOrder } from "../../entities";

type MakeOrder = {
  orderDb: OrderDb;
};

export default function makeAddOrder({ orderDb }: MakeOrder) {
  return async function addOrder(order: OrderCreateDTO) {
    const newOrder = makeOrder(order);

    const orderCreated: Prisma.OrderCreateArgs = {
      data: {
        subtotal: newOrder.getSubtotal(),
        tax: newOrder.getTax(),
        total: newOrder.getTotal(),
        paidWith: newOrder.getPaymentMethod(),
        orderProducts: {
          create: newOrder.getProducts().map((product) => {
            return {
              productName: product.productName,
              productPrice: product.productPrice,
              orderToppings: {
                create: product.toppings.map((topping) => {
                  return {
                    toppingName: topping,
                  };
                }),
              },
            };
          }),
        },
      },
      include: { orderProducts: { include: { orderToppings: true } } },
    };

    return await orderDb.addOrder(orderCreated);
  };
}
