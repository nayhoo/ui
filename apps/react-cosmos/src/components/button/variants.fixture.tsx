"use client";

import { typedKeys } from "@/utils/typedKeys";
import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { button } from "@nayhoo/ui/theme";

const variants = typedKeys(button.classNames.variants.variant);
const sentiments = typedKeys(button.classNames.variants.sentiment);

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Box display="flex" gap="4" direction="column">
      {sentiments.map((sentiment) => (
        <Box key={sentiment} display="flex" gap="4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant} sentiment={sentiment}>
              {variant} {sentiment}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  );
};
