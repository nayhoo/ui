import {
  button,
  ButtonVariants,
  iconButton,
  IconButtonVariants,
} from "@/theme";
import { link, LinkVariants } from "@/theme/styles/link.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";

export type LinkProps = React.ComponentProps<"a"> &
  (
    | ({
        styleAs: "Button";
      } & ButtonVariants)
    | ({
        styleAs: "IconButton";
      } & IconButtonVariants)
    | ({
        styleAs?: undefined;
      } & LinkVariants)
  );

const getStyleAs = (props: LinkProps) => {
  if (props.styleAs === "Button") {
    const [variants, { styleAs, ...rest }] = extractVariantsFromProps(
      props,
      ...button.variants(),
    );

    return [button(variants), rest] as const;
  }

  if (props.styleAs === "IconButton") {
    const [variants, { styleAs, ...rest }] = extractVariantsFromProps(
      props,
      ...iconButton.variants(),
    );

    return [iconButton(variants), rest] as const;
  }

  const [variants, { styleAs, ...rest }] = extractVariantsFromProps(
    props,
    ...link.variants(),
  );

  return [link(variants), rest] as const;
};

export const Link = ({ className, children, ...props }: LinkProps) => {
  const [cn, rest] = getStyleAs(props);

  return (
    <a role="link" {...rest} className={mergeClasses(cn, className)}>
      {children}
    </a>
  );
};
