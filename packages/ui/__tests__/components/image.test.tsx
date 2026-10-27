import { Image } from "@/components/image";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

describe("image", () => {
  describe("a11y", () => {
    test("should render as <img>", async () => {
      const { container } = await render(
        <Image src="/ninten.png" alt="A good boy" />,
      );

      expect(container.querySelector("img")).toBeInTheDocument();
    });
  });
});
