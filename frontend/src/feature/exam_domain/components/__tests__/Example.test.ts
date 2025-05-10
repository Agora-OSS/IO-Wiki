import Example from "@/feature/exam_domain/components/Example.astro";
import reactRenderer from "@astrojs/react/server.js";
import vueRenderer from "@astrojs/vue/server.js";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, it } from "vitest";

it("should render Example Component", async () => {
  const container = await AstroContainer.create();
  container.addServerRenderer({
    name: reactRenderer.name,
    renderer: reactRenderer,
  });
  container.addServerRenderer({
    name: vueRenderer.name,
    renderer: vueRenderer,
  });
  container.addClientRenderer({
    name: "@astrojs/react",
    entrypoint: "@astrojs/react/client.js",
  });

  const result = await container.renderToString(Example, {
    // slots: {
    //   default: "Card content",
    // },
  });

  expect(result).toContain("Example Component");
  expect(result).toContain("This is an example component.");
});
