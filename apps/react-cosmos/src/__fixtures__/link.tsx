import { Link } from "@nayhoo/ui";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [color] = useFixtureSelect("color", {
    options: ["primary", "secondary", "error", "subtle"],
  });

  return <Link color={color}>This is some link.</Link>;
};
