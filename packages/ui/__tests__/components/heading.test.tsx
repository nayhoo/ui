import { Heading } from "@/components/heading";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("heading", () => {
  describe("a11y", () => {
    test("should render as <h1> by default", async () => {
      const { container } = await render(<Heading />);

      expect(container.querySelector("h1")).toBeInTheDocument();
    });
  });

  describe("props", () => {
    test("should render text", async () => {
      const { getByText } = await render(<Heading>My heading</Heading>);

      expect(getByText("My heading")).toBeInTheDocument();
    });

    test.for(["h1", "h2", "h3", "h4", "h5", "h6"] as const)(
      "should render as %s for as %s",
      async (elementType) => {
        const { container } = await render(<Heading as={elementType} />);

        expect(container.querySelector(elementType)).toBeInTheDocument();
      },
    );

    test.for(["h1", "h2", "h3", "h4", "h5", "h6"] as const)(
      "should render as h1 for styleAs %s",
      async (elementType) => {
        const { container } = await render(<Heading styleAs={elementType} />);

        expect(container.querySelector("h1")).toBeInTheDocument();
      },
    );

    test("should accept custom styles via class", async () => {
      const { getByText } = await render(
        <Heading className="custom-class another">My heading</Heading>,
      );
      expect(getByText("My heading")).toHaveClass("custom-class another");
    });
  });
});
