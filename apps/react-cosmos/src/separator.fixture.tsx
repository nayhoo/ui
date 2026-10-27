import { Button } from "@nayhoo/ui/button";
import { Flex } from "@nayhoo/ui/flex";
import { Separator } from "@nayhoo/ui/separator";

export default {
  horizontal: () => {
    return (
      <Flex direction="column" gap="4">
        <Button>My button</Button>
        <Separator decorative />
        <Button>My button</Button>
        <Separator decorative />
        <Button>My button</Button>
      </Flex>
    );
  },
  vertical: () => {
    return (
      <Flex align="center" gap="4" style={{ height: 24 }}>
        <Button>My button</Button>
        <Separator orientation="vertical" decorative />
        <Button>My button</Button>
        <Separator orientation="vertical" decorative />
        <Button>My button</Button>
      </Flex>
    );
  },
};
