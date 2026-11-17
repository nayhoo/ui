import { Button } from "@/components/button";
import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";

const Icon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="icon"
  >
    <path
      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

describe("button", () => {
  describe("a11y", () => {
    test("should render as <button>", async () => {
      const { container } = await render(<Button />);

      expect(container.querySelector("button")).toBeInTheDocument();
    });

    test("should render button as role", async () => {
      const { getByRole } = await render(<Button />);

      expect(getByRole("button")).toBeInTheDocument();
    });

    test("should focus and trigger onClick on {Enter}", async () => {
      const mockFn = vi.fn();

      const { getByRole } = await render(<Button onClick={mockFn} />);

      const button = getByRole("button");

      expect(button).not.toHaveFocus();

      button.element().focus();

      expect(button).toHaveFocus();

      await userEvent.keyboard("{Enter}");

      expect(mockFn).toHaveBeenCalledOnce();
    });
  });

  describe("props", () => {
    test("should render children as text", async () => {
      const { getByText } = await render(<Button>My button</Button>);

      expect(getByText("My button")).toBeInTheDocument();
    });

    test("should accept custom styles via class", async () => {
      const { getByRole } = await render(
        <Button className="custom-class another" />,
      );

      expect(getByRole("button")).toHaveClass("custom-class another");
    });

    test("should render a spinner when loading", async () => {
      const { getByRole } = await render(<Button loading />);

      expect(getByRole("button", { disabled: true })).toBeInTheDocument();
      expect(getByRole("status")).toBeInTheDocument();
    });

    test("should render a left icon button", async () => {
      const { getByTestId } = await render(<Button leftIcon={Icon} />);

      expect(getByTestId("icon")).toBeInTheDocument();
    });

    test("should render a right icon button", async () => {
      const { getByTestId } = await render(<Button rightIcon={Icon} />);

      expect(getByTestId("icon")).toBeInTheDocument();
    });
  });
});
