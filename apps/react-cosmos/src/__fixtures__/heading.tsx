import { Heading } from "@nayhoo/ui";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [color] = useFixtureSelect("color", {
    options: ["primary", "secondary", "error", "subtle"],
  });

  const [level] = useFixtureSelect("level", {
    options: ["1", "2", "3", "4", "5", "6"],
  });

  const [weight] = useFixtureSelect("weight", {
    options: ["regular", "medium", "bold"],
  });

  return (
    <Heading color={color} level={level} weight={weight}>
      This is some heading.
    </Heading>
  );
};
