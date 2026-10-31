import { Flex } from "@nayhoo/ui/flex";
import { Spinner } from "@nayhoo/ui/spinner";

const sizes = ["sm", "md", "lg"] as const;

export default {
  default: () => {
    return <Spinner />;
  },
  sizes: () => {
    return (
      <Flex gap="4" direction="column">
        {sizes.map((size) => (
          <Spinner key={size} size={size} />
        ))}
      </Flex>
    );
  },
};
