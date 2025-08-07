import { Box } from "@/components/box";
import { Container } from "@/components/container";
import { sprinkles, theme } from "@/theme";
import { useScrollPosition } from "@nayhoo/hooks";

/** Common Nav component for Nayhoo apps */
export const Nav = ({
  children,
  variant = "fixed",
  fullWidth = false,
  compact = false,
}: {
  children: React.ReactNode;
  variant?: "fixed" | "sticky";
  fullWidth?: boolean;
  compact?: boolean;
}) => {
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 24;

  return (
    <Box
      asChild
      className={sprinkles({
        paddingY: {
          initial: undefined,
          xs: isScrolled || compact ? undefined : 2,
        },
      })}
      style={{
        borderBottom: "1px solid",
        borderColor:
          isScrolled || compact ? theme.semanticColors.line : "transparent",
        position: variant,
        top: 0,
        transition: "border-color 0.4s, padding 0.4s",
        width: "100%",
        zIndex: theme.zIndices[1],
        backgroundColor: `color-mix(in srgb, ${theme.semanticColors.background}, transparent 40%)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <nav>
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
    </Box>
  );
};
