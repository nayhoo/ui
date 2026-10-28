import { Nav } from "@/patterns";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("spinner", () => {
  describe("a11y", () => {
    test("should render as <nav>", async () => {
      const { container } = await render(<Nav>Nav</Nav>);

      expect(container.querySelector("nav")).toBeInTheDocument();
    });
  });
});
