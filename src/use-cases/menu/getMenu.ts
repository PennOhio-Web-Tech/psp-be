import { MakeGetMenu } from "../../@types/Menu";

export default function makeGetMenu({ menuDb }: MakeGetMenu) {
  return async function getMenu() {
    const menu = await menuDb.getMenu();
    return menu;
  };
}
