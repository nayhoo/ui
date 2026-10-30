import { Box } from "@nayhoo/ui/box";

export default {
  default: () => {
    return (
      <Box>
        <span>ninten :)</span>
      </Box>
    );
  },
  flex: () => {
    return (
      <Box display="flex" gap="4">
        <span>nin</span>
        <span>ten</span>
        <span>:)</span>
      </Box>
    );
  },
  grid: () => {
    return (
      <Box display="grid" columns="3" gap="4">
        <span>nin</span>
        <span>ten</span>
        <span>:)</span>
      </Box>
    );
  },
  asChild: () => {
    return (
      <Box style={{ color: "red" }} asChild>
        <span>ninten</span>
      </Box>
    );
  },
};
