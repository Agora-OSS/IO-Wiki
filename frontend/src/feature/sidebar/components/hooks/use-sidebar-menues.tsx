import { NavFolder, NavItem } from "@/core/widgets/navigation";
import type { MenuType } from "@/feature/menu/domain/entity";
import {
  AdminMenuUsecase,
  DefaultMenuUsecase,
} from "@/feature/menu/domain/usecase";
import { Asterisk } from "lucide-react";

export const useSidebarMenues = () => {
  const defaultSidebarRender = (menues: MenuType[], collapsed: boolean) =>
    menues.map((attr) => (
      <NavItem
        key={crypto.randomUUID()}
        icon={attr.icon}
        label={attr.label}
        href={attr.href}
        collapsed={collapsed}
        target={attr.target}
      />
    ));

  return {
    menues: DefaultMenuUsecase.getMenues().sort(),
    render: defaultSidebarRender,
  };
};

export const useAdminSidebarMenues = () => {
  const adminSidebarRender = (
    menues: MenuType[],
    collapsed: boolean,
    deps: number,
  ) => {
    return menues.map((attr) =>
      attr.childMenu ? (
        <NavFolder
          key={crypto.randomUUID()}
          label={attr.label}
          icon={Asterisk}
          depth={deps}
          collapsed={collapsed}
        >
          {adminSidebarRender(attr.childMenu, collapsed, deps + 1)}
        </NavFolder>
      ) : (
        <NavItem
          key={crypto.randomUUID()}
          icon={attr.icon}
          label={attr.label}
          href={attr.href}
          collapsed={collapsed}
          target={attr.target}
        />
      ),
    );
  };

  return {
    menues: AdminMenuUsecase.getMenues(),
    render: adminSidebarRender,
  };
};
