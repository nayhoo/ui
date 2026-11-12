import { Box } from "@nayhoo/ui/box";
import { Text } from "@nayhoo/ui/text";

const colors = ["primary", "subtle", "error"] as const;
const sizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
const weights = ["regular", "medium", "bold"] as const;

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
