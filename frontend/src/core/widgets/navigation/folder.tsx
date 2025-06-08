import { cn } from "@/core/utils";
import { NavItem } from "@/core/widgets/navigation";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import type React from "react";
import { type PropsWithChildren, useState } from "react";

interface NavFolderProps {
  label: string;
  icon?: React.ElementType;
  depth: number;
  collapsed: boolean;
}

export function NavFolder({
  label,
  icon: Icon,
  children,
  depth,
  collapsed,
}: PropsWithChildren<NavFolderProps>) {
  const [isOpen, setIsOpen] = useState(false);

  if (depth === 5) {
    return (
      <NavItem icon={FileText} label={label} href="#" collapsed={collapsed} />
    );
  }

  return (
    <div>
      <button
        type="button"
        className={cn(
          "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground gap-3",
          isOpen && "bg-accent text-accent-foreground",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {!collapsed && (
          <>
            <span className="text-left flex-1 truncate">{label}</span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </>
        )}
      </button>
      {isOpen && !collapsed && <div className="ml-4">{children}</div>}
    </div>
  );
}
