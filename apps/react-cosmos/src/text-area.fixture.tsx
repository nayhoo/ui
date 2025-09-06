"use client";

import { TextArea } from "@nayhoo/ui/text-area";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [cursor] = useFixtureSelect("cursor", {
    options: ["text", "default"],
  });

  const [error] = useFixtureInput("error", false);

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3"],
  });

  const [variant] = useFixtureSelect("variant", {
    options: ["outline", "ghost"],
  });

  return (
    <TextArea cursor={cursor} error={error} size={size} variant={variant} />
  );
};
