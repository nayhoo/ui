import { Container } from "@/components/container";
import { nav } from "@/theme";
import { theme } from "@/theme/themes/theme-contract.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { useScrollPosition } from "@nayhoo/hooks";

type NavProps = {
  children: React.ReactNode;
  /**
   * @default
   * false
   */
  compact?: boolean;
  /**
   * @default
   * false
   */
  fixed?: boolean;
  /**
   * @default
   * false
   */
  fullWidth?: boolean;
} & ComponentProps<"nav">;

export const Nav = ({
  compact = false,
  fixed = false,
  fullWidth = false,
  ...props
}: NavProps) => {
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 24;

  return (
    <nav
      {...props}
      className={mergeClasses(
        nav({
          compact: {
            initial: true,
            xs: compact || isScrolled,
          },
          fixed,
        }),
        props.className,
      )}
    >
      <Container
        size={fullWidth ? "4" : "3"}
        style={{
          padding: theme.space[2],
          width: "100%",
        }}
      >
        {props.children}
      </Container>
    </nav>
  );
};
