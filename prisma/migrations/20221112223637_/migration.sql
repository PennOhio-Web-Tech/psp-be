/*
  Warnings:

  - You are about to drop the `toppings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToTopping" DROP CONSTRAINT "_ProductToTopping_B_fkey";

-- DropTable
DROP TABLE "toppings";

-- CreateTable
CREATE TABLE "Topping" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceSmall" DOUBLE PRECISION NOT NULL,
    "priceMedium" DOUBLE PRECISION NOT NULL,
    "priceLarge" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_ProductToTopping" ADD CONSTRAINT "_ProductToTopping_B_fkey" FOREIGN KEY ("B") REFERENCES "Topping"("id") ON DELETE CASCADE ON UPDATE CASCADE;
