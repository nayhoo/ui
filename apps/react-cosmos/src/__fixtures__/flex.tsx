import { Card } from "@nayhoo/ui/card";
import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";
import { Separator } from "@nayhoo/ui/separator";
import { Text } from "@nayhoo/ui/text";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [align] = useFixtureSelect("align", {
    options: ["center", "start", "end", "stretch", "baseline"],
  });

  const [direction] = useFixtureSelect("direction", {
    options: ["row", "column", "rowReverse", "columnReverse"],
  });

  const [gap] = useFixtureSelect("gap", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  });

  const [justify] = useFixtureSelect("justify", {
    options: ["center", "start", "end", "between"],
  });

  const [wrap] = useFixtureSelect("wrap", {
    options: ["wrap", "noWrap", "wrapReverse"],
  });

  return (
    <Flex
      align={align}
      direction={direction}
      gap={gap}
      justify={justify}
      wrap={wrap}
    >
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Card key={i}>
            <Heading level="3">Step {i + 1}</Heading>

            <Separator style={{ margin: "20px 0" }} />

            <Text>This is a card component</Text>
          </Card>
        );
      })}
    </Flex>
  );
};
