import prisma from "../prisma";

import makeMenuDb from "./menu";

const menuDb = makeMenuDb({ prisma });

export { menuDb };
