import { meaningOfLife } from "@nayhoo/utils";
import { darkTheme, globalStyles } from "@nayhoo/components/stitches.config";
import { Button, Container } from "@nayhoo/components";
import React, { useState } from "react";
import "./App.css";
import { useBodyClassToggle } from "@nayhoo/hooks";

globalStyles();

const App = () => {
  const [count, setCount] = useState(meaningOfLife);

  const isDarkTheme = count % 2 === 0;

  useBodyClassToggle(darkTheme, isDarkTheme);

  return (
    <Container size="1">
      {/* TODO: example page */}

      <Button onClick={() => setCount((count) => count + 1)} variant="outline">
        count is {count}
      </Button>
    </Container>
  );
};

export default App;
