"use client";

import { Card } from "@nayhoo/ui/card";
import { Heading } from "@nayhoo/ui/heading";
import { Separator } from "@nayhoo/ui/separator";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Card>
      <Heading as="h5">This is a card component</Heading>

      <Separator
        variant="secondary"
        style={{ margin: `${theme.space[4]} 0` }}
      />

      <Text>This is a card component</Text>
    </Card>
  );
};
