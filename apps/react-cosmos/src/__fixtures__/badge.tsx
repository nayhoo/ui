import { Badge } from "@nayhoo/ui/badge";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [color] = useFixtureSelect("color", {
    options: ["primary", "secondary", "error"],
  });

  const [label] = useFixtureInput("label", "This is a badge");

  const [size] = useFixtureSelect("size", {
    options: ["1", "2"],
  });

  return <Badge color={color} label={label} size={size} />;
};
