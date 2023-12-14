import { meaningOfLife } from "@nayhoo/utils";
import { darkTheme, globalStyles } from "@nayhoo/components/stitches.config";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Paragraph,
  Text,
  TextField,
  Tooltip,
} from "@nayhoo/components";
import reactLogo from "./assets/react.svg";
import React, { useState } from "react";
import "./App.css";

globalStyles();

const App = () => {
  const [count, setCount] = useState(meaningOfLife);

  return (
    <Box className={count % 2 === 0 ? darkTheme : undefined}>
      <Flex justify="center" css={{ mb: "$2" }}>
        <Link href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Image src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Flex>
      <Heading size="4">Vite + React</Heading>
      <Box css={{ p: "$6" }}>
        <Box css={{ mb: "$2" }}>
          <Tooltip content="note: even 🌚, odd 🌝">
            <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
          </Tooltip>
        </Box>
        <Paragraph>
          Edit <Text as="code">src/App.tsx</Text> and save to test HMR
        </Paragraph>
      </Box>
      <Paragraph color="secondary">Click on the Vite and React logos to learn more</Paragraph>
    </Box>
  );
};

export default App;
