import { Sidebar } from "@/feature/sidebar/domain/entity";

class NavigationUsecase {
  private readonly sidebar = new Sidebar();

  openSidebar() {
    this.sidebar.state.set(true);

    return this.sidebar.state.get();
  }

  closeSidebar() {
    this.sidebar.state.set(false);

    return this.sidebar.state.get();
  }

  currentSidebarState() {
    return this.sidebar.state.get();
  }
}

export const navigationUsecase = new NavigationUsecase();
