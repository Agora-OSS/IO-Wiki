import { Sidebar } from "@/feature/sidebar/domain/entity";

class NavigationUsecase {
  private readonly sidebar = new Sidebar();

  openSidebar() {
    this.sidebar.open();
  }

  closeSidebar() {
    this.sidebar.close();
  }

  collapseSidebar() {
    this.sidebar.collapse();
  }

  stretchSidebar() {
    this.sidebar.stretch();
  }

  getIsOpenSidebarStore() {
    return this.sidebar.isOpen;
  }

  getCollapsedStore() {
    return this.sidebar.collapsed;
  }
}

export const navigationUsecase = new NavigationUsecase();
