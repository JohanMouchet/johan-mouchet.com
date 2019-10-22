# TODO

- Use Absolute Imports: https://create-react-app.dev/docs/importing-a-component#absolute-imports
  - add in .flowconfig https://create-react-app.dev/docs/adding-flow
- Fix broken space `{" "}`
- Inline cx, from `className={`class \${newClass}`}` to `className={cx("class", {"newClass": isTrue})}`
- Add `modifierClasses` to `cx`
  ```
    cx(
      {
        "block--modifier": is-modifier
      }
    );
  ```
- Combine `additionalClasses` and `contextClass`: extraClass?
- Replace old `prop.text/label` by `children`
- Use defaultProps when needed
- Fix Tabs, Accordion, Alert, Table Numerical column
- Improve Storybook: https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/
- Add Jest snapshots
- Use Environment Variables to load on prod only: https://create-react-app.dev/docs/adding-custom-environment-variables#!

# Fix

- Keep Sass prefix `t-`, explore `@use`?
- Address `// TODO`
