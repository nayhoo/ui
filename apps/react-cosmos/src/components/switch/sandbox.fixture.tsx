"use client";

import { Switch } from "@nayhoo/ui/switch";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  return <Switch size={size} />;
};
