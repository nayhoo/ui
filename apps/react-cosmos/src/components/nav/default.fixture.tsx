"use client";

// TODO: can this not be a client component?

import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Heading } from "@nayhoo/ui/heading";
import { Nav, NavProps } from "@nayhoo/ui/nav";

export const NavFixture = (props: NavProps) => (
  <Box style={{ height: "200vh", width: "100%" }}>
    <Nav {...props}>
      <Box align="center" display="flex" justify="between">
        <Heading as="h5">Nayhoo</Heading>

        <Box display="flex" gap="2">
          <Button size="2">Log in</Button>
          <Button sentiment="brand" size="2" variant="solid">
            Get started
          </Button>
        </Box>
      </Box>
    </Nav>
  </Box>
);

// eslint-disable-next-line react/display-name
export default () => <NavFixture />;
