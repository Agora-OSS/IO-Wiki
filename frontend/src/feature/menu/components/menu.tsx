import { NavFolder, NavItem } from "@/core/widgets/navigation";
import type { MenuType } from "../domain/entity";

type DefaultMenuProps = {
  menues?: MenuType[];
  collapsed: boolean;
  deps?: number;
};

export const Menu: React.FC<DefaultMenuProps> = ({
  menues,
  collapsed,
  deps = 0,
}) => {
  return (
    <>
      {menues?.map((attr) =>
        attr.childMenu ? (
          <NavFolder
            key={crypto.randomUUID()}
            label={attr.label}
            icon={attr.icon}
            depth={deps}
            collapsed={collapsed}
          >
            <Menu
              menues={attr.childMenu}
              collapsed={collapsed}
              deps={deps + 1}
            />
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
      )}
    </>
  );
};
