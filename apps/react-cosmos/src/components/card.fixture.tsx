import { Card } from "@nayhoo/ui/card";
import { Heading } from "@nayhoo/ui/heading";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";

export default {
  default: () => (
    <Card>
      <Heading as="h5">Heading</Heading>
      <Text style={{ marginTop: theme.space[2] }}>Text text text</Text>
    </Card>
  ),
};
