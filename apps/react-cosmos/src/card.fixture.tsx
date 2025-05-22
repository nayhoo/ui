"use client";

import { Card } from "@nayhoo/ui/card";
import { Heading } from "@nayhoo/ui/heading";
import { Separator } from "@nayhoo/ui/separator";
import { Text } from "@nayhoo/ui/text";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Card>
      <Heading level="3">This is a card component</Heading>

      <Separator style={{ margin: "20px 0" }} />

      <Text>This is a card component</Text>
    </Card>
  );
};
