"use client";

import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Asterisk,
  BookOpen,
  Command,
  Home,
  LogIn,
  Menu,
  Plus,
  UserPlus,
  X,
} from "lucide-react";
import { type PropsWithChildren, useEffect, useId, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/core/widgets/tooltip";

import { cn } from "@/core/utils";
import { useMobile } from "@/core/utils/useMobile";
import { Button } from "@/core/widgets/button";
import { NavFolder, NavItem } from "@/core/widgets/navigation";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useAccount } from "@/feature/account/components/hooks";
import { fx, isEmpty, not } from "@fxts/core";
import {
  useSidebarMenues,
  useSidebar,
  useAdminSidebarMenues,
} from "@/feature/sidebar/components/hooks";

export const Sidebar: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isAuthenticated, setIsAthenticated] = useState<boolean>(false);
  const [isCreateDocumentOpen, setIsCreateDocumentOpen] = useState(false);
  const accountHook = useAccount();
  const isMobile = useMobile();
  const {
    sidebarCollapsedState,
    sidebarOpenState,
    collapse,
    stretch,
    open,
    close,
  } = useSidebar();
  const { menues: defaultMenues, render: defaultMenuesRender } =
    useSidebarMenues();
  const { menues: adminMenues, render: adminMenuesRender } =
    useAdminSidebarMenues();

  const handleCreateDocument = () => {
    setIsCreateDocumentOpen(true);
  };

  // 모바일에서 사이드바 외부 클릭 시 닫기
  const handleBackdropClick = () => {
    if (isMobile) {
      close();
    }
  };

  useEffect(() => {
    accountHook.then((account) => {
      isEmpty(account.email)
        ? setIsAthenticated(false)
        : setIsAthenticated(true);
    });
  }, [accountHook]);

  return (
    <>
      {/* 모바일 백드롭 */}
      {isMobile && sidebarOpenState && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleBackdropClick();
          }}
          role="button"
          tabIndex={0}
        />
      )}

      <TooltipProvider>
        <div
          className={cn(
            "fixed z-50 flex h-screen flex-col border-r bg-background transition-all duration-300",
            isMobile
              ? sidebarOpenState
                ? "left-0 w-[280px]"
                : "-left-[280px] w-[280px]"
              : sidebarCollapsedState
                ? "w-16 items-center"
                : "w-64",
            !isMobile && "relative",
          )}
        >
          <div className="flex h-14 items-center border-b px-3 py-4">
            <a href="/" className="flex items-center gap-2">
              <Command className="h-6 w-6" />
              {(!sidebarCollapsedState || isMobile) && (
                <span className="font-semibold">IO Wiki</span>
              )}
            </a>
            <div className="ml-auto flex items-center gap-1">
              {isMobile ? (
                <Button
                  className=" cursor-pointer"
                  variant="ghost"
                  size="icon"
                  onClick={() => close()}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close sidebar</span>
                </Button>
              ) : (
                !sidebarCollapsedState && (
                  <Button
                    className=" cursor-pointer"
                    variant="ghost"
                    size="icon"
                    onClick={() => collapse()}
                  >
                    <ArrowLeftFromLine className="h-4 w-4" />
                    <span className="sr-only">Toggle sidebar</span>
                  </Button>
                )
              )}
            </div>
          </div>
          <ScrollArea className="flex-1 py-2">
            <nav className="grid gap-1 px-2">
              {defaultMenuesRender(
                defaultMenues,
                sidebarCollapsedState && !isMobile,
              )}
              {isAuthenticated && (
                <NavFolder
                  label="Admin"
                  icon={Asterisk}
                  depth={0}
                  collapsed={sidebarCollapsedState}
                >
                  {adminMenuesRender(
                    adminMenues,
                    sidebarCollapsedState && !isMobile,
                    0,
                  )}
                </NavFolder>
              )}
            </nav>
          </ScrollArea>

          <div className="border-t p-2">
            {!sidebarCollapsedState && isAuthenticated && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-center gap-2 ${!isMobile ? "px-2" : ""}`}
                    onClick={() => handleCreateDocument()}
                  >
                    <Plus className="h-4 w-4" />
                    <span>새로운 문서 생성</span>
                  </Button>
                </TooltipTrigger>
              </Tooltip>
            )}
          </div>

          {!isMobile && sidebarCollapsedState && (
            <Button
              className="mb-4 cursor-pointer"
              variant="ghost"
              size="icon"
              onClick={() => stretch()}
            >
              <ArrowRightFromLine className="h-4 w-4" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          )}
        </div>
      </TooltipProvider>
      {isMobile && (
        <div className="absolute w-full border-b p-4">
          <Button variant="ghost" size="icon" onClick={() => open()}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      )}
    </>
  );
};
