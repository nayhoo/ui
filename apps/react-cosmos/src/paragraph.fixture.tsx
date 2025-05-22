"use client";

import { Paragraph } from "@nayhoo/ui/paragraph";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [color] = useFixtureSelect("color", {
    options: ["primary", "secondary", "error", "subtle"],
  });

  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  const [weight] = useFixtureSelect("weight", {
    options: ["regular", "medium", "bold"],
  });

  return (
    <Paragraph color={color} size={size} weight={weight}>
      This is some paragraph.
    </Paragraph>
  );
};
