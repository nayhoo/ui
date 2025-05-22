"use client";

import { Checkbox } from "@nayhoo/ui/checkbox";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  return <Checkbox size={size} />;
};
