import { render, screen } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import { NavItem } from "..";

beforeEach(() => {
  render(
    <NavItem
      icon="symbol"
      label="Test Navigation Item"
      href="*"
      collapsed={false}
    />,
  );
});

it("should render Navigation Item Component", async () => {
  await screen.findByText(/Test Navigation Item/);
});
