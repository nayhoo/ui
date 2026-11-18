"use client";

import { Button } from "@nayhoo/ui/button";
import { ToastClose, useToast } from "@nayhoo/ui/providers/toast-provider";

// eslint-disable-next-line react/display-name
export default () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: Intl.DateTimeFormat("en-AU", {
            dateStyle: "full",
            timeStyle: "short",
          }).format(new Date()),
          action: (
            <ToastClose asChild>
              <Button sentiment="brand" size="1">
                Undo
              </Button>
            </ToastClose>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
};
