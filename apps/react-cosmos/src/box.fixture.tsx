import { Box } from "@nayhoo/ui/box";
import { theme } from "@nayhoo/ui/theme";

export default {
  default: () => {
    return (
      <Box
        style={{
          height: "100px",
          width: "100px",
          border: `2px solid ${theme.semanticColors.primary.primary11}`,
          borderRadius: theme.radii[4],
          backgroundColor: theme.semanticColors.primary.primary4,
        }}
      />
    );
  },
};
