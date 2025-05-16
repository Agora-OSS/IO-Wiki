import { NavigationUsecase } from "@/feature/sidebar/domain/usecase";
import { useStore } from "@nanostores/react";

export const useSidebar = () => {
  const isOpen = useStore(NavigationUsecase.getIsOpenSidebarStore());
  const collapsed = useStore(NavigationUsecase.getCollapsedStore());

  return {
    open: () => NavigationUsecase.openSidebar(),
    close: () => NavigationUsecase.closeSidebar(),
    collapse: () => NavigationUsecase.collapse(),
    stretch: () => NavigationUsecase.stretch(),
    sidebarOpenState: isOpen,
    sidebarCollapsedState: collapsed,
  };
};
