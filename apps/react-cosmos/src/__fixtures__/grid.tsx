import { Card, Grid, Heading, Separator, Text } from "@nayhoo/ui";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [align] = useFixtureSelect("align", {
    options: ["center", "start", "end", "stretch", "baseline"],
  });

  const [columns] = useFixtureSelect("columns", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  });

  const [flow] = useFixtureSelect("flow", {
    options: ["row", "column", "dense", "rowDense", "columnDense"],
  });

  const [justify] = useFixtureSelect("justify", {
    options: ["center", "start", "end", "between"],
  });

  const [gap] = useFixtureSelect("gap", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  });

  const [gapX] = useFixtureSelect("gapX", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  });

  const [gapY] = useFixtureSelect("gapY", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  });

  const [rows] = useFixtureSelect("rows", {
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  });

  return (
    <Grid
      align={align}
      columns={columns}
      flow={flow}
      gap={gap}
      gapX={gapX}
      gapY={gapY}
      justify={justify}
      rows={rows}
    >
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Card key={i}>
            <Heading level="3">Step {i + 1}</Heading>

            <Separator style={{ margin: "20px 0" }} />

            <Text>This is a card component</Text>
          </Card>
        );
      })}
    </Grid>
  );
};
