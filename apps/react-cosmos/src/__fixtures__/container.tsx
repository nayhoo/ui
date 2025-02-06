import { Container, Heading, Text } from "@nayhoo/ui";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3", "4"],
  });

  return (
    <Container size={size}>
      <Heading>Heading</Heading>

      <Text style={{ marginTop: "40px" }}>Text</Text>
    </Container>
  );
};
