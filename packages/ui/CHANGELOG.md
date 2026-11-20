# @nayhoo/ui

## 0.28.0

### Minor Changes

- ace13b4: exported Accordion, AspectRatio props; deprecated Badge label for children; fixed TextField size prop; Image loading is overrideable (defaulted to lazy); set Container width to 100%
- a2c3d58: added top level props size, variant and onOverlay for dropdown menu, popover and select

## 0.27.1

### Patch Changes

- 7f51f2d: fixed dark mode toasts and is now more aligned with the themes

## 0.27.0

### Minor Changes

- fcadee1: added `styleAs` prop to links for button and icon button variants

### Patch Changes

- ca56d4f: updated card and dialog spacing

## 0.26.0

### Minor Changes

- d3ea91e: added background color tokens. updated color palette
- 1453891: added border tokens
- d11dd88: added text color tokens

### Patch Changes

- d4923ee: updated button colors and re-added round prop
- d602e18: added color tokens; revamped color usage
- 7f8e9b9: Removed `sizes` tokens in place of `space` tokens. Updated button sizes and loading states
- 4b8d3b7: Added letter spacing and line heights to `Text` and `Heading`
- 66901a0: Updated theme token naming

## 0.25.4

### Patch Changes

- 6c33506: Updated providers and theme .css export path
- ca8b913: updated import paths. fixed Link font issues

## 0.25.3

### Patch Changes

- 3e9552a: css build output has been cut down to what's important. using vanilla extract global themes with [data-theme] attribute

## 0.25.2

### Patch Changes

- 505fcad: Removed transparent nav background

## 0.25.1

### Patch Changes

- 849dce5: Added missing box.css.ts export

## 0.25.0

### Minor Changes

- 462805f: Added wrap variant to `Box`

## 0.24.0

### Minor Changes

- 7d80fb7: added flex and grid responsive variants to `Box`; deprecated `Flex` and `Grid`
- 4b902b3: Added display responsive variant to `Box`

## 0.23.0

### Minor Changes

- 2dc6000: Removed sprinkles in favour of homemade-recipes; Updated Nav `variant` prop to `fixed`
- e9e86fd: Removed `Paragraph` for `Text`. Added new recipe for `Heading`
- 32f5f76: Removed `Label` in favour of the radix form label

### Patch Changes

- 17eb0ee: Updated tooltip component z-indexing
- 0de6323: Added `link` role attribute to `Link`
- d976cfe: Removed `sm` responsive variant for `Button`
- 96fdf92: Made alt and src required for `Image`. Lazy loading images

## 0.22.0

### Minor Changes

- 2429b42: revamped `zIndices` theme options and updated usage
- 2429b42: removed the dialog overlay blur effect

## 0.21.0

### Minor Changes

- 7b4feee: added `leftIcon` and `rightIcon` props to the `Button` component
