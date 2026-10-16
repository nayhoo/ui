import { Flex } from "@nayhoo/ui/flex";
import { Text } from "@nayhoo/ui/text";

const colors = ["primary", "secondary", "error", "subtle"] as const;
const sizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
const weights = ["regular", "medium", "bold"] as const;
const elements = ["label", "li", "p"] as const;

export default {
  default: () => {
    return <Text>Text</Text>;
  },
  colors: () => {
    return (
      <Flex gap="4" direction="column">
        {colors.map((color) => (
          <Text key={color} color={color}>
            {color}
          </Text>
        ))}
      </Flex>
    );
  },
  sizes: () => {
    return (
      <Flex gap="4" direction="column">
        {sizes.map((size) => (
          <Text key={size} size={size}>
            Text {size}
          </Text>
        ))}
      </Flex>
    );
  },
  weights: () => {
    return (
      <Flex gap="4" direction="column">
        {weights.map((weight) => (
          <Text key={weight} weight={weight}>
            {weight}
          </Text>
        ))}
      </Flex>
    );
  },
  asChild: () => {
    return (
      <Flex gap="4" direction="column">
        {elements.map((Element) => (
          <Text key={Element} asChild>
            <Element>{Element}</Element>
          </Text>
        ))}
      </Flex>
    );
  },
};
