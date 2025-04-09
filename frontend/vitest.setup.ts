import handlers from "@/mock/handler";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

const server = setupServer(...handlers);

beforeAll(() => {
	console.info("Starting MSW server...");
	server.listen({ onUnhandledRequest: "error" });
});

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
