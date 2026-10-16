<!-- https://vitest.dev/guide/browser/component-testing -->

1. Critical User Paths → Always test these
2. Error Handling → Test failure scenarios
3. Edge Cases → Empty data, extreme values
4. Accessibility → Screen readers, keyboard nav
5. Performance → Large datasets, animations

unit testing -> .test.ts

component testing -> .test.tsx

```ts
describe("component", () => {
  describe("a11y", () => {
    ...
  });

  describe("props", () => {
    test("should render default props", () => {
      ...
    });
  })
})

```

visual regression testings -> .vrt.test.tsx
