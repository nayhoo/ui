"use client";

import { Skeleton } from "@nayhoo/ui/skeleton";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [variant] = useFixtureSelect("variant", {
    options: [
      "avatar1",
      "avatar2",
      "avatar3",
      "avatar4",
      "avatar5",
      "avatar6",
      "text",
      "title",
      "heading",
      "button",
    ],
  });

  return <Skeleton variant={variant} />;
};
