import { typedKeys } from "@/utils/typedKeys";
import { Badge } from "@nayhoo/ui/badge";
import { badge } from "@nayhoo/ui/theme";

const sentiments = typedKeys(badge.classNames.variants.sentiment);
const sizes = typedKeys(badge.classNames.variants.size);

export default {
  default: () => <Badge>default</Badge>,
  sentiments: () =>
    sentiments.map((sentiment) => (
      <Badge key={sentiment} sentiment={sentiment}>
        {sentiment}
      </Badge>
    )),
  sizes: () =>
    sizes.map((size) => (
      <Badge key={size} size={size}>
        size {size}
      </Badge>
    )),
};
