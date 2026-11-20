import { typedKeys } from "@/utils/typedKeys";
import { Heading } from "@nayhoo/ui/heading";
import { heading } from "@nayhoo/ui/theme";

const as = typedKeys(heading.classNames.variants.as);
const weights = typedKeys(heading.classNames.variants.weight);

export default {
  default: () => <Heading>default</Heading>,
  levels: () =>
    as.map((tag) => (
      <Heading key={tag} as={tag}>
        {tag} heading
      </Heading>
    )),
  weights: () =>
    weights.map((weight) => (
      <Heading key={weight} weight={weight}>
        {weight} heading
      </Heading>
    )),
  styleAs: () =>
    as.map((tag, i) => (
      <Heading key={i} styleAs={tag}>
        h1 (styled as {tag})
      </Heading>
    )),
};
