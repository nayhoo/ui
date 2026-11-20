import { typedKeys } from "@/utils/typedKeys";
import { IconButton, IconButtonProps } from "@nayhoo/ui/icon-button";
import { iconButton } from "@nayhoo/ui/theme";

const sizes = typedKeys(iconButton.classNames.variants.size);
const variants = typedKeys(iconButton.classNames.variants.variant);

const Icon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const IconButtonFixture = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Icon />
  </IconButton>
);

export default {
  default: () => <IconButtonFixture />,
  loading: () => <IconButtonFixture loading />,
  round: () => <IconButtonFixture round />,
  sizes: () =>
    sizes.map((size) => <IconButtonFixture key={size} size={size} />),
  variants: () =>
    variants.map((variant) => (
      <IconButtonFixture key={variant} variant={variant} />
    )),
};
