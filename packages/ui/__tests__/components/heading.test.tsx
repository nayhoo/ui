import { Heading } from "@/components/heading";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("heading", () => {
  describe("props", () => {
    test("should render default props", () => {
      const { container } = render(<Heading />);

      expect(container.querySelector("h1")).toBeTruthy();
    });

    test("should render text", () => {
      const { getByText } = render(<Heading>My heading</Heading>);

      expect(getByText("My heading")).toBeTruthy();
    });

    test.for([
      ["h1", "1"],
      ["h2", "2"],
      ["h3", "3"],
      ["h4", "4"],
      ["h5", "5"],
      ["h6", "6"],
    ] as const)("should render as %s for level %s", ([elementType, level]) => {
      const { container } = render(<Heading level={level} />);

      expect(container.querySelector(elementType)).toBeTruthy();
    });

    test("should accept custom styles via class", () => {
      const { container } = render(
        <Heading className="custom-class another" />,
      );
      expect(container.querySelector(".custom-class")).toBeTruthy();
      expect(container.querySelector(".another")).toBeTruthy();
    });

    test.for([
      "1",
      { initial: "1" },
      // { initial: "1", sm: "4", md: "3", lg: "2" }, // TODO: need to investigate this failing test
      // { sm: "4", md: "3", lg: "2" }, // TODO: need to investigate this failing test
    ] as const)("should render as h1 for level %s", (level) => {
      const { container } = render(<Heading level={level} />);

      expect(container.querySelector("h1")).toBeTruthy();
    });
  });
});
