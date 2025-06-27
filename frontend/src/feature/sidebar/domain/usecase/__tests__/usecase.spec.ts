import { describe, expect, test } from "vitest";
import { navigationUsecase as NavigationUsecase } from "../NavigationUsecase";

describe("NavigationUsecase test", () => {
  test("the navigation sidebar init state is closed(false)", async () => {
    expect(NavigationUsecase.getIsOpenSidebarStore().get()).toBeFalsy();
  });

  test("navigation sidebar open then state change to true", async () => {
    NavigationUsecase.openSidebar();
    expect(NavigationUsecase.getIsOpenSidebarStore().get()).toBeTruthy();
  });

  test("navigation sidebar close then state change to false", async () => {
    expect(NavigationUsecase.closeSidebar()).toBeFalsy();
  });

  test("navigation sidebar init collapsed state is false", async () => {
    expect(NavigationUsecase.getCollapsedStore().get()).toBeFalsy();
  });

  test("navigation sidebar collapse then state change to false", async () => {
    NavigationUsecase.closeSidebar();
    expect(NavigationUsecase.getCollapsedStore().get()).toBeFalsy();
  });

  test("navigation sidebar strtech then state change to true", async () => {
    NavigationUsecase.stretchSidebar();
    expect(NavigationUsecase.getCollapsedStore().get()).toBeFalsy();
  });
});
