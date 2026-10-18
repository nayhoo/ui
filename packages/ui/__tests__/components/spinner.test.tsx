import { Spinner } from "@/components/spinner";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("spinner", () => {
  describe("a11y", () => {
    test("should render status as role and Loading as aria-label", () => {
      const { getByRole } = render(<Spinner />);

      expect(getByRole("status", { name: "Loading" })).toBeTruthy();
    });
  });
  describe("props", () => {
    test("should render spinner", () => {
      render(<Spinner data-testid="spinner" />);

      expect(screen.getByTestId("spinner")).toBeTruthy();
    });

    test("should accept custom styles via class", () => {
      const { container } = render(
        <Spinner className="custom-class another" data-testid="spinner" />,
      );
      expect(container.querySelector(".custom-class")).toBeTruthy();
      expect(container.querySelector(".another")).toBeTruthy();
    });
  });
});
