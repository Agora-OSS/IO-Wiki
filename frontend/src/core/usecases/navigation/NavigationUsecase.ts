import { atom } from "nanostores";

const isSidebarOpen = atom(false);

class NavigationUsecase {
  openSidebar() {
    isSidebarOpen.set(true);

    return isSidebarOpen.get();
  }

  closeSidebar() {
    isSidebarOpen.set(false);

    return isSidebarOpen.get();
  }

  currentSidebarState() {
    return isSidebarOpen.get();
  }
}

export const navigationUsecase = new NavigationUsecase();
