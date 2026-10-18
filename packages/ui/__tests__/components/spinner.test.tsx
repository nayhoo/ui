import { Spinner } from "@/components/spinner";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("spinner", () => {
  describe("a11y", () => {
    test("should render Loading as aria-label", async () => {
      const { getByRole } = await render(<Spinner />);

      expect(getByRole("status", { name: "Loading" })).toBeTruthy();
    });
  });
  describe("props", () => {
    test("should render spinner", async () => {
      const { getByRole } = await render(<Spinner />);

      expect(getByRole("status")).toBeTruthy();
    });

    test("should accept custom styles via class", async () => {
      const { getByRole } = await render(
        <Spinner className="custom-class another" />,
      );

      expect(getByRole("status")).toHaveClass("custom-class another");
    });
  });
});
