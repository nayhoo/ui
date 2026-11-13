"use client";

import { Button } from "@nayhoo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@nayhoo/ui/dropdown-menu";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Dropdown menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>New Tab ⌘+T</DropdownMenuItem>
        <DropdownMenuItem>New Window ⌘+N</DropdownMenuItem>
        <DropdownMenuItem disabled>New Private Window ⇧+⌘+N</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Show Bookmarks ⌘+B</DropdownMenuItem>
        <DropdownMenuItem>Show Full URLs</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuItem>Pedro Duarte</DropdownMenuItem>
        <DropdownMenuItem>Colm Tuite</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
