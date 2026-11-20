import { typedKeys } from "@/utils/typedKeys";
import { Spinner } from "@nayhoo/ui/spinner";
import { spinner } from "@nayhoo/ui/theme";

const sizes = typedKeys(spinner.classNames.variants.size);

export default {
  default: () => <Spinner />,
  sizes: () => sizes.map((size) => <Spinner key={size} size={size} />),
};
