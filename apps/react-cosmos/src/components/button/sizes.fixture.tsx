"use client";

import { typedKeys } from "@/utils/typedKeys";
import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { button } from "@nayhoo/ui/theme";

const sizes = typedKeys(button.classNames.variants.size);

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Box display="flex" gap="4" direction="column">
      {sizes.map((size) => (
        <Button key={size} size={size}>
          Size {size}
        </Button>
      ))}
    </Box>
  );
};
