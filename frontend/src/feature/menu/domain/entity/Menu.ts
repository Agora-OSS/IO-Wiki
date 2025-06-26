import type { HTMLAttributeAnchorTarget } from "react";
import type { ExtractEntityProperty } from "@/core/utils/types";

export type MenuType = ExtractEntityProperty<Menu> & {
  icon: React.ElementType &
    React.ForwardRefExoticComponent<never> &
    React.RefAttributes<SVGSVGElement>;
};

export class Menu {
  readonly sort;
  readonly label;
  readonly href;
  readonly icon;
  readonly target?;
  readonly childMenu?;

  private constructor(
    sort: number,
    label: string,
    href: string,
    icon: React.ElementType &
      React.ForwardRefExoticComponent<never> &
      React.RefAttributes<SVGSVGElement>,
    target?: HTMLAttributeAnchorTarget,
    childMenu?: Menu[],
  ) {
    this.sort = sort;
    this.label = label;
    this.href = href;
    this.icon = icon;
    this.target = target;
    this.childMenu = childMenu;
  }

  static create(menuProps: MenuType) {
    return new Menu(
      menuProps.sort,
      menuProps.label,
      menuProps.href,
      menuProps.icon,
      menuProps.target,
      menuProps.childMenu,
    );
  }
}
