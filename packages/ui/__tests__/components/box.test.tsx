import { Box } from "@/components/box";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("box", () => {
  describe("props", () => {
    test("should render as <div>", async () => {
      const { container } = await render(<Box />);

      expect(container.querySelector("div")).toBeInTheDocument();
    });

    test("should render as span and pass on styles", async () => {
      const { getByText } = await render(
        <Box asChild className="custom-class">
          <span>My box?</span>
        </Box>,
      );

      expect(getByText("My box?")).toHaveClass("custom-class");
    });
  });
});
