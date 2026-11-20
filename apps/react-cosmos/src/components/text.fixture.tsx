import { Text } from "@nayhoo/ui/text";
import { text } from "@nayhoo/ui/theme";
import { typedKeys } from "../utils/typedKeys";

const colors = typedKeys(text.classNames.variants.color);
const sizes = typedKeys(text.classNames.variants.size);
const weights = typedKeys(text.classNames.variants.weight);

export default {
  default: () => <Text>default</Text>,
  colors: () =>
    colors.map((color) => (
      <Text key={color} color={color}>
        {color}
      </Text>
    )),
  sizes: () =>
    sizes.map((size) => (
      <Text key={size} size={size}>
        text {size}
      </Text>
    )),
  weights: () =>
    weights.map((weight) => (
      <Text key={weight} weight={weight}>
        {weight}
      </Text>
    )),
  asChild: () => (
    <Text asChild>
      <span>Text</span>
    </Text>
  ),
};
