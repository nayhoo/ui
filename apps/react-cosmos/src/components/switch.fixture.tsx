import { typedKeys } from "@/utils/typedKeys";
import { Switch } from "@nayhoo/ui/switch";
import { _switch } from "@nayhoo/ui/theme";

const sizes = typedKeys(_switch.classNames.variants.size);

export default {
  default: () => <Switch />,
  sizes: () => sizes.map((size) => <Switch key={size} size={size} />),
};
