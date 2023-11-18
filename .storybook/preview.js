import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { BREAKPOINTS } from "constants/breakpoints";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import "assets/styles/_styles.module.scss";

addParameters({
  viewport: {
    viewports: {
      xs: {
        name: 'xs',
        styles: {
          width: BREAKPOINTS.XS,
          height: "100%",
        },
        type: "mobile",
      },
      sm: {
        name: 'sm',
        styles: {
          width: BREAKPOINTS.SM,
          height: "100%",
        },
        type: "tablet",
      },
      md: {
        name: 'md',
        styles: {
          width: BREAKPOINTS.MD,
          height: "100%",
        },
        type: "desktop",
      },
      lg: {
        name: 'lg',
        styles: {
          width: BREAKPOINTS.LG,
          height: "100%",
        },
        type: "desktop",
      },
      xl: {
        name: 'xl',
        styles: {
          width: BREAKPOINTS.XL,
          height: "100%",
        },
        type: "desktop",
      },
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator((storyFn) => <div className="container">{storyFn()}</div>);

export const parameters = {
  options: {
    storySort: {
      order: ['About', 'Styles', 'Objects', 'Components', 'Partials', 'Layout'], 
    },
  },
};