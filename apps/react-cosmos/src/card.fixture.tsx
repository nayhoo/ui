"use client";

import { Card } from "@nayhoo/ui/card";
import { Heading } from "@nayhoo/ui/heading";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Card>
      <Heading as="h5">This is a card component</Heading>

      <Text style={{ marginTop: theme.space[2] }}>
        This is a card component
      </Text>
    </Card>
  );
};
