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
        title: "Hi",
        description: "This is a toast",
        status,
        action: <Button>View</Button>,
      }}
    />
  );
};
