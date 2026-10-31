import { Container } from "@/components/container";
import { navRecipe } from "@/theme/recipes/nav.css";
import { theme } from "@/theme/themes/theme-contract.css";
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
};

export const Nav = ({
  children,
  compact = false,
  fixed = false,
  fullWidth = false,
}: NavProps) => {
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 24;

  const nav = navRecipe({
    compact: {
      initial: true,
      xs: compact || isScrolled,
    },
    fixed,
  });

  return (
    <nav className={nav}>
      <Container
        size={fullWidth ? "4" : "3"}
        style={{
          padding: theme.space[2],
          width: "100%",
        }}
      >
        {children}
      </Container>
    </nav>
  );
};
