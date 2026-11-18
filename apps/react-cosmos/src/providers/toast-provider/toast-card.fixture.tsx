"use client";

import { Button } from "@nayhoo/ui/button";
import { ToastCard } from "@nayhoo/ui/providers/toast-provider";
import { useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [status] = useFixtureSelect("status", {
    options: ["default", "success", "error"],
  });

  return (
    <ToastCard
      toast={{
        title: "Scheduled: Catch up",
        description: Intl.DateTimeFormat("en-AU", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date()),
        status,
        action: (
          <Button sentiment="brand" size="1">
            Undo
          </Button>
        ),
      }}
    />
  );
};
