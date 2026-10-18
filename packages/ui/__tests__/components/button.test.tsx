import { Button } from "@/components/button";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("button", () => {
  describe("props", () => {
    test("should render button", async () => {
      const { getByRole } = await render(<Button />);

      expect(getByRole("button")).toBeTruthy();
    });

    test("should render children as text", async () => {
      const { getByText } = await render(<Button>My button</Button>);

      expect(getByText("My button")).toBeTruthy();
    });

    test("should render as <button> by default", async () => {
      const { container } = await render(<Button />);

      expect(container.querySelector("button")).toBeTruthy();
    });

    test("should accept custom styles via class", async () => {
      const { getByRole } = await render(
        <Button className="custom-class another" />,
      );

      expect(getByRole("button")).toHaveClass("custom-class another");
    });
  });
});
