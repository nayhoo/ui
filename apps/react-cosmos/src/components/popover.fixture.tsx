import { Button } from "@nayhoo/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nayhoo/ui/popover";
import { Text } from "@nayhoo/ui/text";

export default {
  default: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>

      <PopoverContent>
        <Text>I want to be with Ninten</Text>
      </PopoverContent>
    </Popover>
  ),
};
