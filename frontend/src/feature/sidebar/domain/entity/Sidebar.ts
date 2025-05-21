import { logger } from "@nanostores/logger";
import { persistentAtom } from "@nanostores/persistent";

export class Sidebar {
  readonly isOpen = persistentAtom<boolean>("sidebar", false, {
    encode: JSON.stringify,
    decode: JSON.parse,
  });
  readonly collapsed = persistentAtom<boolean>("side-collapsed", false, {
    encode: JSON.stringify,
    decode: JSON.parse,
  });

  constructor() {
    logger({
      "SidebarStore - isOpen": this.isOpen,
      "SidebarStore - collapsed": this.collapsed,
    });
  }

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  collapse() {
    this.collapsed.set(true);
  }

  stretch() {
    this.collapsed.set(false);
  }
}
