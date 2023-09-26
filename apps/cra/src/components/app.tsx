import React from "react";
import { Button } from "@dream/components/button";
import { meaningOfLife } from "@dream/foo";
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
