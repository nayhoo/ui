import { Box } from "@nayhoo/ui/box";
import { Text } from "@nayhoo/ui/text";
import { text } from "@nayhoo/ui/theme";
import { typedKeys } from "./utils/typedKeys";

const colors = typedKeys(text.classNames.variants.color);
const sizes = typedKeys(text.classNames.variants.size);
const weights = typedKeys(text.classNames.variants.weight);

export default {
  default: () => {
    return <Text>Text</Text>;
  },
  colors: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {colors.map((color) => (
          <Text key={color} color={color}>
            {color}
          </Text>
        ))}
      </Box>
    );
  },
  sizes: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {sizes.map((size) => (
          <Text key={size} size={size}>
            Text {size}
          </Text>
        ))}
      </Box>
    );
  },
  weights: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {weights.map((weight) => (
          <Text key={weight} weight={weight}>
            {weight}
          </Text>
        ))}
      </Box>
    );
  },
  asChild: () => {
    return (
      <Text asChild>
        <span>Text</span>
      </Text>
    );
  },
};
