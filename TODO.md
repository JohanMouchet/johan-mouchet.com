# TODO

- Fix broken space `{" "}`
- File structure:
  ```
    src/views/components/
      comp-name/ (camel)
        - index.js
        - CompName.js (capitalized)
        - CompName.scss
  ```
- Add `modifierClasses` to `cx`
  ```
    cx(
      {
        "block--modifier": is-modifier
      }
    );
  ```
- Combine `additionalClasses` and `contextClass`: extraClass?
- Use defaultProps when needed
- Fix Tabs, Accordion, Alert, Table Numerical column
- Improve Storybook: https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/
- Add Jest snapshots
- Use Environment Variables to load on prod only (ex Analytics): https://create-react-app.dev/docs/adding-custom-environment-variables#!

# Fix

- Keep Sass prefix `t-`, explore `@use`?
- Address `// TODO`
