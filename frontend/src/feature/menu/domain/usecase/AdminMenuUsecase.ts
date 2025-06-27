import type { MenuType } from "@/feature/menu/domain/entity";
import type { MenuUsecase } from "@/feature/menu/domain/usecase/MenuUsecase";
import { fx } from "@fxts/core";
import { BookDashed, UserCheck, UserCog, Users } from "lucide-react";

class AdminMenuUsecase implements MenuUsecase {
  getMenues(): MenuType[] {
    return fx([
      {
        sort: 1,
        label: "Dashboard",
        href: "/admin",
        icon: BookDashed,
        target: "_self",
      },
      {
        sort: 2,
        icon: Users,
        label: "Member Management",
        href: "/admin/member",
        target: "_self",
        childMenu: [
          {
            sort: 1,
            icon: UserCheck,
            label: "SignUp Approval",
            href: "/admin/approval",
            target: "_self",
          },
          {
            sort: 2,
            icon: UserCog,
            label: "Member List",
            href: "/admin/list",
            target: "_self",
          },
        ],
      },
    ]).toArray();
  }
}

const adminMenuUsecase = new AdminMenuUsecase();
export { adminMenuUsecase };
