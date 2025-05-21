import { LoginForm } from "@/feature/account/components";
import reactRenderer from "@astrojs/react/server.js";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, it } from "vitest";

it("should render LoginForm Component", async () => {
  const container = await AstroContainer.create();
  container.addServerRenderer({
    name: reactRenderer.name,
    renderer: reactRenderer,
  });

  const result = await container.renderToString(LoginForm, {});

  expect(result).toContain("이메일");
  expect(result).toContain("비밀번호");
});
