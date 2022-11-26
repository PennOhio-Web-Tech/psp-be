import { z } from "zod";

import { orderCreateDTOValidator } from "../validators/order";

export type OrderCreateDTO = z.infer<typeof orderCreateDTOValidator>;
