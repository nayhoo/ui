"use client";

import { Avatar } from "@nayhoo/ui/avatar";
import { Box } from "@nayhoo/ui/box";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@nayhoo/ui/dropdown-menu";
import { Heading } from "@nayhoo/ui/heading";
import { Nav } from "@nayhoo/ui/nav";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Nav compact>
      <Box display="flex" justify="between">
        <Heading as="h5">My app</Heading>
        <DropdownMenu onOverlay size="1">
          <DropdownMenuTrigger asChild>
            <Avatar fallback="T" interactive round />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </Nav>
  );
};
