import { IconButton } from "@/components/icon-button";
import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";

describe("icon-button", () => {
  describe("a11y", () => {
    test("should render as <button>", async () => {
      const { container } = await render(<IconButton />);

      expect(container.querySelector("button")).toBeInTheDocument();
    });

    test("should render button as role", async () => {
      const { getByRole } = await render(<IconButton />);

      expect(getByRole("button")).toBeInTheDocument();
    });

    test("should focus and trigger onClick on {Enter}", async () => {
      const mockFn = vi.fn();

      const { getByRole } = await render(<IconButton onClick={mockFn} />);

      const button = getByRole("button");

      expect(button).not.toHaveFocus();

      button.element().focus();

      expect(button).toHaveFocus();

      userEvent.keyboard("{Enter}");

      expect(mockFn).toHaveBeenCalledOnce();
    });
  });

  describe("props", () => {
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
