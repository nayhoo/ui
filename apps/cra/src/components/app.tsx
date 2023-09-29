import React from "react";
import { Button } from "@nayhoo/components/button";
import { meaningOfLife } from "@nayhoo/utils";
import { useTest } from "@hooks/test";

export const App = () => {
  useTest();

  return (
    <div>
      {meaningOfLife}
      <Button />
    </div>
  );
};
