"use client";

import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Heading } from "@nayhoo/ui/heading";
import { Nav } from "@nayhoo/ui/nav";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Nav>
      <Box display="flex" align="center" justify="between">
        <Heading as="h5">Nayhoo</Heading>

        <Box display="flex" gap="2">
          <Button size="2">Log in</Button>
          <Button size="2" variant="solid" sentiment="accented">
            Get started
          </Button>
        </Box>
      </Box>
    </Nav>
  );
};
