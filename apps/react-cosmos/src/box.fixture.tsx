import { Box } from "@nayhoo/ui/box";
import { Text } from "@nayhoo/ui/text";

export default {
  default: () => {
    return (
      <Box>
        <Text>ninten :)</Text>
      </Box>
    );
  },
  flex: () => {
    return (
      <Box display="flex" gap="4">
        <Text>nin</Text>
        <Text>ten</Text>
        <Text>:)</Text>
      </Box>
    );
  },
  grid: () => {
    return (
      <Box display="grid" columns="3" gap="4">
        <Text>nin</Text>
        <Text>ten</Text>
        <Text>:)</Text>
      </Box>
    );
  },
  asChild: () => {
    return (
      <Box style={{ color: "red" }} asChild>
        <Text>ninten</Text>
      </Box>
    );
  },
};
