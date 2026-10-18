import { Button } from "@/components/button";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

const Icon = (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    data-testid="icon"
  >
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
  </svg>
);

describe("button", () => {
  describe("props", () => {
    test("should render button", async () => {
      const { getByRole } = await render(<Button />);

      expect(getByRole("button")).toBeInTheDocument();
    });

    test("should render children as text", async () => {
      const { getByText } = await render(<Button>My button</Button>);

      expect(getByText("My button")).toBeInTheDocument();
    });

    test("should render as <button> by default", async () => {
      const { container } = await render(<Button />);

      expect(container.querySelector("button")).toBeInTheDocument();
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
      const { getByRole, getByTestId } = await render(
        <Button leftIcon={Icon} />,
      );

      expect(getByRole("button")).toHaveAttribute("data-left-icon");
      expect(getByTestId("icon")).toBeInTheDocument();
    });

    test("should render a right icon button", async () => {
      const { getByRole, getByTestId } = await render(
        <Button rightIcon={Icon} />,
      );

      expect(getByRole("button")).toHaveAttribute("data-right-icon");
      expect(getByTestId("icon")).toBeInTheDocument();
    });
  });
});
