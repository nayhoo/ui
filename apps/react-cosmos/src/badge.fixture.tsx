"use client";

import { Badge } from "@nayhoo/ui/badge";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [sentiment] = useFixtureSelect("sentiment", {
    options: ["accented", "neutral", "caution", "negative", "positive"],
  });

  const [label] = useFixtureInput("label", "This is a badge");

  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  return <Badge sentiment={sentiment} label={label} size={size} />;
};
