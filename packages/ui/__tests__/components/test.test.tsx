import { Text } from "@/components/text";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("text", () => {
  describe("props", () => {
    test("should render default props", () => {
      const { container } = render(<Text />);

      expect(container.querySelector("span")).toBeTruthy();
    });

    test("should render text", () => {
      const { getByText } = render(<Text>My text</Text>);

      expect(getByText("My text")).toBeTruthy();
    });

    test.for(["label", "li", "p"] as const)(
      "should render as %s and pass on styles",
      (Element) => {
        const { container } = render(
          <Text asChild className="custom-class">
            <Element>{Element}</Element>
          </Text>,
        );

        expect(
          container.querySelector(Element)?.classList.contains("custom-class"),
        ).toBeTruthy();
      },
    );

    test("should accept custom styles via class", () => {
      const { container } = render(<Text className="custom-class another" />);
      expect(container.querySelector(".custom-class")).toBeTruthy();
      expect(container.querySelector(".another")).toBeTruthy();
    });
  });
});
