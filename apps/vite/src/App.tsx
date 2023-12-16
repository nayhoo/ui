import { meaningOfLife, sleep } from "@nayhoo/utils";
import { darkTheme, globalStyles } from "@nayhoo/components/stitches.config";
import {
  Box,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Flex,
  Heading,
  Image,
  Link,
  Paragraph,
  Text,
  Tooltip,
} from "@nayhoo/components";
import reactLogo from "./assets/react.svg";
import React, { useState } from "react";
import "./App.css";
import { useBodyClassToggle } from "@nayhoo/hooks";

globalStyles();

const App = () => {
  const [count, setCount] = useState(meaningOfLife);
  const [loading, setLoading] = useState(false);

  const isDarkTheme = count % 2 === 0;

  useBodyClassToggle(darkTheme, isDarkTheme);

  return (
    <Box>
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
      <Paragraph color="secondary" css={{ mb: "$2" }}>
        Click on the Vite and React logos to learn more
      </Paragraph>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent
          components={{
            Footer: (
              <DialogFooter justify="between">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button
                  loading={loading}
                  onClick={async () => {
                    setLoading(true);
                    await sleep(2000);
                    setLoading(false);
                  }}
                >
                  Ok!
                </Button>
              </DialogFooter>
            ),
          }}
        >
          <DialogTitle>Hello!</DialogTitle>
          <DialogDescription>
            You are viewing the {isDarkTheme ? "dark" : "light"} theme!
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default App;
