import { Box } from "@nayhoo/ui/box";
import { Link } from "@nayhoo/ui/link";
import { Text } from "@nayhoo/ui/text";

const sizes = ["inherit", "1", "2", "3"] as const;

export default {
  default: () => {
    return <Link href="#swag">Open in new tab</Link>;
  },
  sizes: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {sizes.map((size) => (
          <Text key={size}>
            <Link href="#swag" key={size} size={size}>
              Size {size}
            </Link>
          </Text>
        ))}
      </Box>
    );
  },
  asChild: () => {
    return (
      <Link asChild>
        <span>Link</span>
      </Link>
    );
  },
};
