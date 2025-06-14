"use client";

import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  BookOpen,
  Command,
  Home,
  LifeBuoy,
  LogIn,
  Menu,
  UserPlus,
  X,
} from "lucide-react";
import { type PropsWithChildren, useState } from "react";

import { TooltipProvider } from "@/core/widgets/tooltip";

import { cn } from "@/core/utils";
import { useMobile } from "@/core/utils/useMobile";
import { Button } from "@/core/widgets/button";
import { NavItem } from "@/core/widgets/navigation";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useSidebar } from "./use-sidebar";

export const Sidebar: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isCreateDocumentOpen, setIsCreateDocumentOpen] = useState(false);
  const isMobile = useMobile();
  const {
    sidebarCollapsedState,
    sidebarOpenState,
    collapse,
    stretch,
    open,
    close,
  } = useSidebar();
  // 모바일에서는 항상 전체 너비로 표시

  const handleCreateDocument = () => {
    setIsCreateDocumentOpen(true);
  };

  // 모바일에서 사이드바 외부 클릭 시 닫기
  const handleBackdropClick = () => {
    if (isMobile) {
      close();
    }
  };

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
              <NavItem
                icon={Home}
                label="Home"
                href="/"
                collapsed={sidebarCollapsedState && !isMobile}
                target="_self"
              />

              {/* TODO : Implement Authentication Logic
              {isAuthenticated ? (
                children
              ) : ( */}
              <>
                <NavItem
                  icon={LogIn}
                  label="로그인"
                  href="/login"
                  collapsed={sidebarCollapsedState && !isMobile}
                  target="_self"
                />
                <NavItem
                  icon={UserPlus}
                  label="회원가입"
                  href="/register"
                  collapsed={sidebarCollapsedState && !isMobile}
                />
                <NavItem
                  icon={BookOpen}
                  label="Documentation"
                  href="/docs"
                  collapsed={sidebarCollapsedState && !isMobile}
                />
                <NavItem
                  icon={LifeBuoy}
                  label="Support"
                  href="/support"
                  collapsed={sidebarCollapsedState && !isMobile}
                />
              </>
              {/* TODO : Implement Authentication Logic
              )}
               */}
            </nav>
          </ScrollArea>
          {/* TODO : Implement Authentication Logic

            <div className="border-t p-2">
            {isAuthenticated && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-center gap-2 ${collapsed && !isMobile ? "px-2" : ""}`}
                    onClick={handleCreateDocument}
                  >
                    <Plus className="h-4 w-4" />
                    {(!collapsed || isMobile) && <span>새로운 문서 생성</span>}
                  </Button>
                </TooltipTrigger>
                {collapsed && !isMobile && (
                  <TooltipContent side="right">새로운 문서 생성</TooltipContent>
                )}
              </Tooltip>
            )} 
          </div>*/}

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
