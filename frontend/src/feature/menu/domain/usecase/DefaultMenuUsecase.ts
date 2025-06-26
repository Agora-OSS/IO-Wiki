import type { MenuUsecase } from "@/feature/menu/domain/usecase/MenuUsecase";
import { Menu, type MenuType } from "@/feature/menu/domain/entity";
import { BookOpen, LogIn, UserPlus } from "lucide-react";
import { fx, pipe } from "@fxts/core";

class DefaultMenuUsecase implements MenuUsecase {
  getMenues(): MenuType[] {
    return fx([
      {
        sort: 1,
        label: "Login",
        href: "/login",
        icon: LogIn,
        target: "_self",
      },
      {
        sort: 2,
        icon: UserPlus,
        label: "Member Register",
        href: "/register",
        target: "_self",
      },
      {
        sort: 3,
        icon: BookOpen,
        label: "Documentation",
        href: "/docs",
      },
    ]).toArray();
  }
}

const defaultMenuUsecase = new DefaultMenuUsecase();
export { defaultMenuUsecase };
