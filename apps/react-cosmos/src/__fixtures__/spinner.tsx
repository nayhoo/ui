import { Spinner } from "@nayhoo/ui/spinner";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  });

  return <Spinner size={size} />;
};
