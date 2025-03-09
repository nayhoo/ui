import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
} from "@nayhoo/ui/menu";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Menu open>
      <MenuContent>
        <MenuItem>
          New Tab <div>⌘+T</div>
        </MenuItem>
        <MenuItem>
          New Window <div>⌘+N</div>
        </MenuItem>
        <MenuItem disabled>
          New Private Window <div>⇧+⌘+N</div>
        </MenuItem>
        {/* <MenuSub>
          <MenuSubTrigger>
            More Tools
            <div>
              <ChevronRightIcon />
            </div>
          </MenuSubTrigger>
          <MenuPortal>
            <MenuSubContent sideOffset={2} alignOffset={-5}>
              <MenuItem>
                Save Page As… <div>⌘+S</div>
              </MenuItem>
              <MenuItem>Create Shortcut…</MenuItem>
              <MenuItem>Name Window…</MenuItem>
              <MenuSeparator />
              <MenuItem>Developer Tools</MenuItem>
            </MenuSubContent>
          </MenuPortal>
        </MenuSub> */}

        <MenuSeparator />

        <MenuCheckboxItem
        // checked={bookmarksChecked}
        // onCheckedChange={setBookmarksChecked}
        >
          {/* <MenuItemIndicator>
            <CheckIcon />
          </MenuItemIndicator> */}
          Show Bookmarks <div>⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem
        // checked={urlsChecked}
        // onCheckedChange={setUrlsChecked}
        >
          {/* <MenuItemIndicator>
            <CheckIcon />
          </MenuItemIndicator> */}
          Show Full URLs
        </MenuCheckboxItem>

        <MenuSeparator />

        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup
        // value={person} onValueChange={setPerson}
        >
          <MenuRadioItem value="pedro">
            {/* <MenuItemIndicator>
              <DotFilledIcon />
            </MenuItemIndicator> */}
            Pedro Duarte
          </MenuRadioItem>
          <MenuRadioItem value="colm">
            {/* <MenuItemIndicator>
              <DotFilledIcon />
            </MenuItemIndicator> */}
            Colm Tuite
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
};
