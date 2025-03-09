import { Status } from "@nayhoo/ui/status";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  const [variant] = useFixtureSelect("variant", {
    options: ["blue", "gray", "green", "red", "yellow"],
  });

  return <Status size={size} variant={variant} />;
};
