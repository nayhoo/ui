import { typedKeys } from "@/utils/typedKeys";
import { TextField } from "@nayhoo/ui/text-field";
import { textField } from "@nayhoo/ui/theme";

const cursors = typedKeys(textField.classNames.variants.cursor);
const sizes = typedKeys(textField.classNames.variants.size);
const variants = typedKeys(textField.classNames.variants.variant);

export default {
  default: () => <TextField />,
  cursors: () =>
    cursors.map((cursor) => (
      <TextField key={cursor} cursor={cursor} placeholder={cursor} />
    )),
  error: () => <TextField error placeholder="error" />,
  sizes: () =>
    sizes.map((size) => (
      <TextField key={size} size={size} placeholder={`size ${size}`} />
    )),
  variants: () =>
    variants.map((variant) => (
      <TextField key={variant} variant={variant} placeholder={variant} />
    )),
};
