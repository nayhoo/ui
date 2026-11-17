"use client";

import { Button } from "@nayhoo/ui/button";
import { useToast } from "@nayhoo/ui/providers/toast-provider";

// eslint-disable-next-line react/display-name
export default () => {
  const toast = useToast();

  const handleOnClick = () => {
    toast.success({ title: "Hi", description: "This is a toast" });
  };

  return <Button onClick={handleOnClick}>Press me</Button>;
};
