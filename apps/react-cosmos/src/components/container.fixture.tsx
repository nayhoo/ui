import { typedKeys } from "@/utils/typedKeys";
import { Box } from "@nayhoo/ui/box";
import { Container, ContainerProps } from "@nayhoo/ui/container";
import { container } from "@nayhoo/ui/theme";

const sizes = typedKeys(container.classNames.variants.size);

const ContainerFixture = (props: ContainerProps) => (
  <Container {...props}>
    <Box
      style={{
        border: "2px dashed blue",
        height: "120px",
      }}
    />
  </Container>
);

export default {
  default: () => <ContainerFixture />,
  sizes: () => sizes.map((size) => <ContainerFixture key={size} size={size} />),
};
