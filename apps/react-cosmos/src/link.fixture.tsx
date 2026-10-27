import { Flex } from "@nayhoo/ui/flex";
import { Link } from "@nayhoo/ui/link";

const colors = ["primary", "secondary", "error", "subtle"] as const;

export default {
  default: () => {
    return <Link href="#swag">Open in new tab</Link>;
  },
  colors: () => {
    return (
      <Flex gap="4" direction="column">
        {colors.map((color) => (
          <Link href="#swag" key={color} color={color}>
            {color}
          </Link>
        ))}
      </Flex>
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
