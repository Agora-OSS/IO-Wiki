import { NavigationUsecase } from "@/feature/sidebar/domain/usecase";

export const useSidebar = () => {
  return {
    open: NavigationUsecase.openSidebar,
    close: NavigationUsecase.closeSidebar,
    current: NavigationUsecase.currentSidebarState(),
  };
};
