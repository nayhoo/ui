import { Card, Heading, Separator, Text } from "@nayhoo/ui";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [disableElevation] = useFixtureInput("disableElevation", false);

  const [variant] = useFixtureSelect("variant", {
    options: ["outline", "ghost"],
  });

  return (
    <Card disableElevation={disableElevation} variant={variant}>
      <Heading level="3">This is a card component</Heading>

      <Separator style={{ margin: "20px 0" }} />

      <Text>This is a card component</Text>
    </Card>
  );
};
