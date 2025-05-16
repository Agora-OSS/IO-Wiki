import { describe, expect, test } from "vitest";
import { navigationUsecase as NavigationUsecase } from "../navigation-usecase";

describe("NavigationUsecase test", () => {
  test("the navigation sidebar init state is closed(false)", async () => {
    expect(NavigationUsecase.currentSidebarState()).toBeFalsy();
  });

  test("navigation sidebar open then state change to true", async () => {
    expect(NavigationUsecase.openSidebar()).toBeTruthy();
  });

  test("navigation sidebar close then state change to false", async () => {
    expect(NavigationUsecase.closeSidebar()).toBeFalsy();
  });
});
