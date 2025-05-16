import { beforeEach, expect, it } from "vitest";
import { NavFolder, NavItem } from "..";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(
    <NavFolder label="Test Folder Component" depth={0} collapsed={false}>
      <NavItem
        icon="symbol"
        label="Test Navigation Item - 1"
        href="*"
        collapsed={false}
      />
      <NavItem
        icon="symbol"
        label="Test Navigation Item - 2"
        href="*"
        collapsed={false}
      />
      <NavItem
        icon="symbol"
        label="Test Navigation Item - 3"
        href="*"
        collapsed={false}
      />
    </NavFolder>,
  );
});

it("should render each item component after a click event", async () => {
  const folder = await screen.findByText(/Test Folder Component/);

  await userEvent.click(folder);

  await screen.findByText(/Test Navigation Item - 1/);
  await screen.findByText(/Test Navigation Item - 2/);
  await screen.findByText(/Test Navigation Item - 3/);
});
