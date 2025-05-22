"use client";

import { TextField } from "@nayhoo/ui/text-field";
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
    //  @ts-expect-error TODO: look into overlapping props
    <TextField cursor={cursor} error={error} size={size} variant={variant} />
  );
};
