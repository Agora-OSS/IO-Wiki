import { logger } from "@nanostores/logger";
import { atom } from "nanostores";

export class Sidebar {
  readonly state;

  constructor() {
    this.state = atom<boolean>(false);

    logger({
      SidebarStore: this.state,
    });
  }
}
