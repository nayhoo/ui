import { Switch } from "@nayhoo/ui";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  return <Switch size={size} />;
};
