import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";

const colors = ["primary", "secondary", "error", "subtle"] as const;
const levels = ["1", "2", "3", "4", "5", "6"] as const;
const weights = ["regular", "medium", "bold"] as const;

export default {
  default: () => {
    return <Heading>Heading</Heading>;
  },
  colors: () => {
    return (
      <Flex gap="4" direction="column">
        {colors.map((color) => (
          <Heading key={color} color={color}>
            {color}
          </Heading>
        ))}
      </Flex>
    );
  },
  levels: () => {
    return (
      <Flex gap="4" direction="column">
        {levels.map((level) => (
          <Heading key={level} level={level}>
            Heading {level}
          </Heading>
        ))}
      </Flex>
    );
  },
  weights: () => {
    return (
      <Flex gap="4" direction="column">
        {weights.map((weight) => (
          <Heading key={weight} weight={weight}>
            {weight}
          </Heading>
        ))}
      </Flex>
    );
  },
};
