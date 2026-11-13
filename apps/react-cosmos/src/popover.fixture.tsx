"use client";

import { Button } from "@nayhoo/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nayhoo/ui/popover";
import { Text } from "@nayhoo/ui/text";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>

      <PopoverContent>
        <Text>Hi</Text>
      </PopoverContent>
    </Popover>
  );
};
