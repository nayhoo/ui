import { Nav } from "@/components/nav";
import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

vi.mock(import("@nayhoo/hooks"), () => ({
  useScrollPosition: vi.fn(),
}));

describe("nav", () => {
  describe("a11y", () => {
    test("should render as <nav>", async () => {
      const { container } = await render(<Nav>Nav</Nav>);

      expect(container.querySelector("nav")).toBeInTheDocument();
    });
  });
});
