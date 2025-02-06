import { Text } from "@nayhoo/ui";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [color] = useFixtureSelect("color", {
    options: ["primary", "secondary", "error", "subtle"],
  });

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  });

  const [weight] = useFixtureSelect("weight", {
    options: ["regular", "medium", "bold"],
  });

  return (
    <Text color={color} size={size} weight={weight}>
      This is some text.
    </Text>
  );
};
