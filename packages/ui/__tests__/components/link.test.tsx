import { Link } from "@/components/link";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("link", () => {
  describe("a11y", () => {
    test("should render link as role", async () => {
      const { getByRole } = await render(<Link />);

      expect(getByRole("link")).toBeInTheDocument();
    });

    test("should focus", async () => {
      const { getByRole } = await render(<Link href="/ninten" />);

      const link = getByRole("link");

      expect(link).toHaveAttribute("href", "/ninten");

      expect(link).not.toHaveFocus();

      link.element().focus();

      expect(link).toHaveFocus();
    });
  });

  describe("props", () => {
    test("should render children as text", async () => {
      const { getByText } = await render(<Link>My link</Link>);

      expect(getByText("My link")).toBeInTheDocument();
    });

    test("should render as span and pass on role and styles", async () => {
      const { getByText } = await render(
        <Link asChild className="custom-class">
          <span>My link</span>
        </Link>,
      );

      expect(getByText("My link")).toHaveClass("custom-class");
    });

    test("should accept custom styles via class", async () => {
      const { getByText } = await render(
        <Link className="custom-class another">My link</Link>,
      );

      expect(getByText("My link")).toHaveClass("custom-class another");
    });
  });
});
