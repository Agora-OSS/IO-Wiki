import type { MenuType } from "@/feature/menu/domain/entity";

export interface MenuUsecase {
  getMenues(): MenuType[];
}
