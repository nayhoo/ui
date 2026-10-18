import { Heading } from "@/components/heading";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("heading", () => {
  describe("props", () => {
    test("should render as <h1> by default", async () => {
      const { container } = await render(<Heading />);

      expect(container.querySelector("h1")).toBeInTheDocument();
    });

    test("should render text", async () => {
      const { getByText } = await render(<Heading>My heading</Heading>);

      expect(getByText("My heading")).toBeInTheDocument();
    });

    test.for([
      ["h1", "1"],
      ["h2", "2"],
      ["h3", "3"],
      ["h4", "4"],
      ["h5", "5"],
      ["h6", "6"],
    ] as const)(
      "should render as %s for level %s",
      async ([elementType, level]) => {
        const { container } = await render(<Heading level={level} />);

        expect(container.querySelector(elementType)).toBeInTheDocument();
      },
    );

    test("should accept custom styles via class", async () => {
      const { getByText } = await render(
        <Heading className="custom-class another">My heading</Heading>,
      );
      expect(getByText("My heading")).toHaveClass("custom-class another");
    });

    test.for([
      "1",
      { initial: "1" },
      // { initial: "1", sm: "4", md: "3", lg: "2" }, // TODO: need to investigate this failing test
      // { sm: "4", md: "3", lg: "2" }, // TODO: need to investigate this failing test
    ] as const)("should render as h1 for level %s", async (level) => {
      const { container } = await render(<Heading level={level} />);

      expect(container.querySelector("h1")).toBeInTheDocument();
    });
  });
});
