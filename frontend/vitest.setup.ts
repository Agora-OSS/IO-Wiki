import { server } from "@/mock/node";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
