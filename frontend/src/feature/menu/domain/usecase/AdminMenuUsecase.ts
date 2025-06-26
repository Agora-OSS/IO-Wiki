import type { MenuUsecase } from "@/feature/menu/domain/usecase/MenuUsecase";
import type { MenuType } from "@/feature/menu/domain/entity";
import { BookDashed, BookOpen, Users } from "lucide-react";
import { fx } from "@fxts/core";

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
            icon: Users,
            label: "SignUp Approval",
            href: "/admin/approval",
            target: "_self",
          },
          {
            sort: 2,
            icon: Users,
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
