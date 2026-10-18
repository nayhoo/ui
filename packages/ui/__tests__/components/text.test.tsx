import { Text } from "@/components/text";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("text", () => {
  describe("props", () => {
    test("should render default props", () => {
      const { container } = render(<Text />);

      expect(container.querySelector("p")).toBeTruthy();
    });

    test("should render text", () => {
      const { getByText } = render(<Text>My text</Text>);

      expect(getByText("My text")).toBeTruthy();
    });

    test("should render as span and pass on styles", () => {
      const { container } = render(
        <Text asChild className="custom-class">
          <span>My text</span>
        </Text>,
      );

      expect(
        container.querySelector("span")?.classList.contains("custom-class"),
      ).toBeTruthy();
    });

    test("should accept custom styles via class", () => {
      const { container } = render(<Text className="custom-class another" />);
      expect(container.querySelector(".custom-class")).toBeTruthy();
      expect(container.querySelector(".another")).toBeTruthy();
    });
  });
});
