import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Separator } from "@nayhoo/ui/separator";

export default {
  horizontal: () => {
    return (
      <Box display="flex" direction="column" gap="4">
        <Button>button</Button>
        <Separator decorative />
        <Button>button</Button>
        <Separator decorative />
        <Button>button</Button>
      </Box>
    );
  },
  vertical: () => {
    return (
      <Box display="flex" align="center" gap="4" style={{ height: 24 }}>
        <Button>button</Button>
        <Separator orientation="vertical" decorative />
        <Button>button</Button>
        <Separator orientation="vertical" decorative />
        <Button>button</Button>
      </Box>
    );
  },
};
