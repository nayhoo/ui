import { typedKeys } from "@/utils/typedKeys";
import { Checkbox } from "@nayhoo/ui/checkbox";
import { checkbox } from "@nayhoo/ui/theme";

const sizes = typedKeys(checkbox.classNames.variants.size);

export default {
  default: () => <Checkbox />,
  sizes: () => sizes.map((size) => <Checkbox key={size} size={size} />),
};
