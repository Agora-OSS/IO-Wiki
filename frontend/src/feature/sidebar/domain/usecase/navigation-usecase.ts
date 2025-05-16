import { Sidebar } from "@/feature/sidebar/domain/entity";

class NavigationUsecase {
  private readonly sidebar = new Sidebar();

  openSidebar() {
    this.sidebar.isOpen.set(true);
  }

  closeSidebar() {
    this.sidebar.isOpen.set(false);
  }

  collapse() {
    this.sidebar.collapsed.set(true);
  }

  stretch() {
    this.sidebar.collapsed.set(false);
  }

  getIsOpenSidebarStore() {
    return this.sidebar.isOpen;
  }

  getCollapsedStore() {
    return this.sidebar.collapsed;
  }
}

export const navigationUsecase = new NavigationUsecase();
