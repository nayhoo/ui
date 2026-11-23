import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Separator } from "@nayhoo/ui/separator";

export default {
  horizontal: () => (
    <Box direction="column" display="flex" gap="4">
      <Button>button</Button>
      <Separator decorative />
      <Button>button</Button>
      <Separator decorative />
      <Button>button</Button>
    </Box>
  ),
  vertical: () => (
    <Box display="flex" gap="4" style={{ height: 32 }}>
      <Button>button</Button>
      <Separator orientation="vertical" decorative />
      <Button>button</Button>
      <Separator orientation="vertical" decorative />
      <Button>button</Button>
    </Box>
  ),
};
