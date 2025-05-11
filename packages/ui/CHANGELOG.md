# @nayhoo/ui

## 0.12.0

### Minor Changes

- 9af6789: feat: export homemade-recipe

### Patch Changes

- 9338182: chore: upgrade homemade-recipes to v0.3

## 0.11.1

### Patch Changes

- c46d684: fix: corrected import path

## 0.11.0

### Minor Changes

- 675bc5d: feat: added homemadeRecipes for button, flex and grid

## 0.10.2

### Patch Changes

- 988ba48: fix(ui): passing params to theme script

## 0.10.1

### Patch Changes

- 5e5faff: refactor(ui): using https://github.com/pacocoursey/next-themes more as a reference for ThemeProvider
- 5e5faff: chore(ui): export useToast hook

## 0.10.0

### Minor Changes

- 881c4cb: feat(ui): added popover component

### Patch Changes

- 881c4cb: refactor(ui): button as child for select trigger; viewport within content
- 881c4cb: fix(ui): increased z-index on menu style

## 0.9.6

### Patch Changes

- 8da8b02: fix(ui): resolved pseudo-classes issue

## 0.9.5

### Patch Changes

- 5ab702e: refactor: renamed toast context to be inline with theme context
- aa14804: fix(ui): resolved theme provider theme on initial load

## 0.9.4

### Patch Changes

- a633665: refactor: panels to use outlines instead of a shadow
- a633665: feat(ui): added round prop for buttons

## 0.9.3

### Patch Changes

- bed89c4: refactor(ui): improved theme provider. added setTheme and themes context values, no FOUC, added system theme
- bed89c4: refactor(ui): renamed toaster to toastprovider

## 0.9.2

### Patch Changes

- d15193c: fix(ui): decreased text size for tooltip content
- d15193c: fix(ui): using theme tokens for html/body background & color properties
- d15193c: chore: added global styles via globalStyle
- d15193c: fix: fixed panel text and shadow color for dark mode
- d15193c: fix(ui): applied the theme class to the document.body programmatically
- d15193c: chore(ui): added default duration (10 mins) for error toasts

## 0.9.1

### Patch Changes

- c326c96: refactor: use vanilla-extract style when recipe is not required

## 0.9.0

### Minor Changes

- f757a52: feat(ui): added toaster provider

### Patch Changes

- cc23ca2: chore(ui): removed main and types from package.json

## 0.8.0

### Minor Changes

- b8313f6: feat: added select component

### Patch Changes

- b8313f6: refactor: updated package exports

## 0.7.0

### Minor Changes

- d6cd1cd: feat: added tooltip component

## 0.6.1

### Patch Changes

- a9ce637: fix(ui): corrected switch thumb position

## 0.6.0

### Minor Changes

- db7c734: feat(ui): added checkbox component
- d35ced4: feat(ui): added Label component

## 0.5.1

### Patch Changes

- 00baad6: chore: updated dropdown menu styles

## 0.5.0

### Minor Changes

- 90330fd: feat(ui): button color prop removed for variants; textContrast color removed; success color added

### Patch Changes

- 90330fd: fix: passed through size prop to SwitchThumb; tweaked switch styles
- 90330fd: fix(ui): updated panel boxShadow to use theme colors

## 0.4.2

### Patch Changes

- 893cb84: fix(ui): overridden current boxShadow when error is true for <TextField />

## 0.4.1

### Patch Changes

- d6220d7: chore: fixed type names for panel and status
- d6220d7: fix(ui): passed through missing variants to statusRecipe
- d6220d7: refactor: added new pick function to 'pick' out recipe variants from props
- d6220d7: fix(ui): pass through variant props to dropdown-menu and menu recipes
- d6220d7: docs(ui): removed lightTheme from example
- d6220d7: fix(ui): passed through missing props to avatar recipes; passed fallback prop to <AvatarFallback />
- d6220d7: chore(ui): cleaned up prop type names

## 0.4.0

### Minor Changes

- acaaf8c: feat(ui): added theme-provider

### Patch Changes

- f9bf089: docs(ui): updated README.md

## 0.3.1

### Patch Changes

- 1e4a360: Reordered button recipe variants to give 'shape' precedence over 'size'.
