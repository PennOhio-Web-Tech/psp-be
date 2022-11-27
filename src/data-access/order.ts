import { Prisma } from "@prisma/client";
import { MakeDb } from "../@types/db";

export default function makeOrderDb({ prisma }: MakeDb) {
  return Object.freeze({
    getOrders,
    addOrder,
    deleteOrder,
    findById,
  });

  async function getOrders() {
    return await prisma.order.findMany({
      where: { isDeleted: false },
      include: { orderProducts: { include: { orderToppings: true } } },
    });
  }

  async function addOrder(orderCreateInput: Prisma.OrderCreateArgs) {
    console.log({ orderCreateInput });
    return await prisma.order.create(orderCreateInput);
  }

  async function deleteOrder(orderId: string) {
    return await prisma.order.update({
      where: { id: orderId },
      data: { isDeleted: true },
    });
  }

  async function findById(orderId: string) {
    return await prisma.order.findUnique({
      where: { id: orderId },
    });
  }
}
