import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@nayhoo/ui";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Press me</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          New Tab <div>⌘+T</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <div>⌘+N</div>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Private Window <div>⇧+⌘+N</div>
        </DropdownMenuItem>
        {/* <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            More Tools
            <div>
              <ChevronRightIcon />
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>
                Save Page As… <div>⌘+S</div>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub> */}

        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          className="DropdownMenuCheckboxItem"
          // checked={bookmarksChecked}
          // onCheckedChange={setBookmarksChecked}
        >
          {/* <DropdownMenuItemIndicator>
            <CheckIcon />
          </DropdownMenuItemIndicator> */}
          Show Bookmarks <div>⌘+B</div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="DropdownMenuCheckboxItem"
          // checked={urlsChecked}
          // onCheckedChange={setUrlsChecked}
        >
          {/* <DropdownMenuItemIndicator>
            <CheckIcon />
          </DropdownMenuItemIndicator> */}
          Show Full URLs
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup
        // value={person} onValueChange={setPerson}
        >
          <DropdownMenuRadioItem value="pedro">
            {/* <DropdownMenuItemIndicator>
              <DotFilledIcon />
            </DropdownMenuItemIndicator> */}
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">
            {/* <DropdownMenuItemIndicator>
              <DotFilledIcon />
            </DropdownMenuItemIndicator> */}
            Colm Tuite
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
