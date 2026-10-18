import { IconButton } from "@/components/icon-button";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("icon-button", () => {
  describe("props", () => {
    test("should render icon button", async () => {
      const { getByRole } = await render(<IconButton />);

      expect(getByRole("button")).toBeInTheDocument();
    });

    test("should render as <button> by default", async () => {
      const { container } = await render(<IconButton />);

      expect(container.querySelector("button")).toBeInTheDocument();
    });

    test("should accept custom styles via class", async () => {
      const { getByRole } = await render(
        <IconButton className="custom-class another" />,
      );

      expect(getByRole("button")).toHaveClass("custom-class another");
    });

    test("should render a spinner when loading", async () => {
      const { getByRole } = await render(<IconButton loading />);

      expect(getByRole("button", { disabled: true })).toBeInTheDocument();
      expect(getByRole("status")).toBeInTheDocument();
    });
  });
});
