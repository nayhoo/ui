import { Box } from "@nayhoo/ui/box";
import { Heading } from "@nayhoo/ui/heading";

const as = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const weights = ["regular", "medium", "bold"] as const;

export default {
  default: () => {
    return <Heading>Heading</Heading>;
  },
  levels: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {as.map((tag) => (
          <Heading key={tag} as={tag}>
            {tag} heading
          </Heading>
        ))}
      </Box>
    );
  },
  weights: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {weights.map((weight) => (
          <Heading key={weight} weight={weight}>
            {weight} heading
          </Heading>
        ))}
      </Box>
    );
  },
  styleAs: () => {
    return (
      <Box display="flex" gap="4" direction="column">
        {as.map((tag) => (
          <Heading key={tag} styleAs={tag}>
            h1 (styled as {tag})
          </Heading>
        ))}
      </Box>
    );
  },
};
