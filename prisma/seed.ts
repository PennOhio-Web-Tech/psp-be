import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.topping.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.menu.deleteMany();

  await prisma.topping.createMany({
    data: [
      {
        name: "Pepperoni",
        priceSmall: 1.0,
        priceMedium: 1.5,
        priceLarge: 2.25,
      },
      {
        name: "Sausage",
        priceSmall: 1.0,
        priceMedium: 1.5,
        priceLarge: 2.25,
      },
      {
        name: "Mushrooms",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Onions",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Green Peppers",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Black Olives",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Pineapple",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Spinach",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Bacon",
        priceSmall: 1.0,
        priceMedium: 1.5,
        priceLarge: 2.25,
      },
      {
        name: "Extra Cheese",
        priceSmall: 0.5,
        priceMedium: 0.75,
        priceLarge: 1.0,
      },
      {
        name: "Ham",
        priceSmall: 1.0,
        priceMedium: 1.5,
        priceLarge: 2.25,
      },
      {
        name: "Ground Beef",
        priceSmall: 1.0,
        priceMedium: 1.5,
        priceLarge: 2.25,
      },
      {
        name: "Anchovies",
        priceSmall: 1.0,
        priceMedium: 1.5,
        priceLarge: 2.25,
      },
    ],
  });
  const toppings = await prisma.topping.findMany();
  await prisma.menu.create({
    data: {
      name: "dinner",
      categories: {
        create: [
          {
            name: "pizza",
            description: "pizza",
            products: {
              create: [
                {
                  name: "small pizza",
                  description: "small pizza",
                  price: 8,
                  topping: {
                    connect: toppings.map((t) => ({ id: t.id })),
                  },
                },
                {
                  name: "medium pizza",
                  description: "medium pizza",
                  price: 10,
                  topping: {
                    connect: toppings.map((t) => ({ id: t.id })),
                  },
                },
                {
                  name: "large pizza",
                  description: "large pizza",
                  price: 12,
                  topping: {
                    connect: toppings.map((t) => ({ id: t.id })),
                  },
                },
              ],
            },
          },
          {
            name: "appetizers",
            description: "appetizers",
            products: {
              create: [
                {
                  name: "breadsticks",
                  description: "breadsticks",
                  price: 4.5,
                },
                {
                  name: "mozarella sticks",
                  description: "mozarella sticks",
                  price: 5.25,
                },
                {
                  name: "garlic bread",
                  description: "garlic bread",
                  price: 6.75,
                },
              ],
            },
          },
          {
            name: "salads",
            description: "salads",
            products: {
              create: [
                {
                  name: "garden salad",
                  description: "garden salad",
                  price: 6.75,
                },
                {
                  name: "caesar salad",
                  description: "caesar salad",
                  price: 7.25,
                },
                {
                  name: "chef salad",
                  description: "chef salad",
                  price: 8.25,
                },
                {
                  name: "greek salad",
                  description: "greek salad",
                  price: 8.75,
                },
              ],
            },
          },
          {
            name: "wings",
            description: "wings",
            products: {
              create: [
                {
                  name: "dozen BBQ",
                  description: "half dozen BBQ",
                  price: 4.25,
                },
                {
                  name: "half dozen buffalo",
                  description: "half dozen buffalo",
                  price: 4.25,
                },
                {
                  name: "half dozen honey garlic",
                  description: "half dozen",
                  price: 4.25,
                },
                {
                  name: "dozen BBQ",
                  description: "dozen BBQ",
                  price: 8.0,
                },
                {
                  name: "dozen buffalo",
                  description: "dozen buffalo",
                  price: 8.0,
                },
                {
                  name: "dozen honey garlic",
                  description: "dozen",
                  price: 8.0,
                },
              ],
            },
          },
          {
            name: "desert",
            description: "deserts",
            products: {
              create: [
                {
                  name: "chocolate lava cake",
                  description: "chocolate lava cake",
                  price: 4.25,
                },
                {
                  name: "cinnasticks",
                  description: "cinnasticks",
                  price: 4.25,
                },
              ],
            },
          },
        ],
      },
    },
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
