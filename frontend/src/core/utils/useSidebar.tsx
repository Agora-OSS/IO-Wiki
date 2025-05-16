import { NavigationUsecase } from "@/core/usecases/navigation"

export const useSidebar = () => {
  return {
    open : NavigationUsecase.openSidebar,
    close : NavigationUsecase.closeSidebar,
    current : NavigationUsecase.currentSidebarState()
  }
}