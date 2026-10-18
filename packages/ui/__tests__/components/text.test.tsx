import { Text } from "@/components/text";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("text", () => {
  describe("props", () => {
    test("should render as <p> by default", async () => {
      const { container } = await render(<Text />);

      expect(container.querySelector("p")).toBeTruthy();
    });

    test("should render text", async () => {
      const { getByText } = await render(<Text>My text</Text>);

      expect(getByText("My text")).toBeTruthy();
    });

    test("should render as span and pass on styles", async () => {
      const { getByText } = await render(
        <Text asChild className="custom-class">
          <span>My text</span>
        </Text>,
      );

      expect(getByText("My text")).toHaveClass("custom-class");
    });

    test("should accept custom styles via class", async () => {
      const { getByText } = await render(
        <Text className="custom-class another">My text</Text>,
      );

      expect(getByText("My text")).toHaveClass("custom-class another");
    });
  });
});
