"use client";

import { cn } from "@/core/utils";
import { useMobile } from "@/core/utils/useMobile";
import { useSidebar } from "@/core/utils/useSidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/core/widgets/tooltip";

import type React from "react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  collapsed: boolean;
}

export function NavItem({
  icon: Icon,
  label,
  href,
  collapsed,
}: NavItemProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const { close } = useSidebar();
  const isMobile = useMobile();

  const handleClick = () => {
    if (isMobile) {
      close()
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            target="_blank"
            rel="noreferrer"
            href={href}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              collapsed ? "justify-center" : "gap-3",
            )}
            onClick={handleClick}
          >
            <Icon className="h-4 w-4" />
            {!collapsed && <span className="truncate">{label}</span>}
          </a>
        </TooltipTrigger>
        {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
