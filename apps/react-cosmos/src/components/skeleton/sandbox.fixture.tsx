"use client";

import { Skeleton } from "@nayhoo/ui/skeleton";
import { Text } from "@nayhoo/ui/text";
import { useFixtureInput } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [loaded] = useFixtureInput("loaded", false);

  return (
    <Skeleton loaded={loaded}>
      <Text>Skeleton</Text>
    </Skeleton>
  );
};
