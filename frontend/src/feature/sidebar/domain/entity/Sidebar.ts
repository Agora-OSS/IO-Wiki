import { logger } from "@nanostores/logger";
import { atom } from "nanostores";

export class Sidebar {
  readonly isOpen = atom(false);
  readonly collapsed = atom(false);

  constructor() {
    logger({
      "SidebarStore - isOpen": this.isOpen,
      "SidebarStore - collapsed": this.collapsed,
    });
  }
}
