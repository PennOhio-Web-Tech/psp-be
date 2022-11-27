import prisma from "../prisma";

import makeMenuDb from "./menu";
import makeOrderDb from "./order";

const menuDb = makeMenuDb({ prisma });
const orderDb = makeOrderDb({ prisma });

export { menuDb, orderDb };

export type OrderDb = ReturnType<typeof makeOrderDb>;
export type MenuDb = ReturnType<typeof makeMenuDb>;
