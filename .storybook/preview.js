import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { BREAKPOINTS } from "constants/breakpoints";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "assets/styles/_styles.scss";

addParameters({
  viewport: {
    viewports: {
      xs: {
        name: BREAKPOINTS.XS.NAME,
        styles: {
          width: BREAKPOINTS.XS.SIZE,
          height: "100%",
        },
        type: "mobile",
      },
      sm: {
        name: BREAKPOINTS.SM.NAME,
        styles: {
          width: BREAKPOINTS.SM.SIZE,
          height: "100%",
        },
        type: "tablet",
      },
      md: {
        name: BREAKPOINTS.MD.NAME,
        styles: {
          width: BREAKPOINTS.MD.SIZE,
          height: "100%",
        },
        type: "desktop",
      },
      lg: {
        name: BREAKPOINTS.LG.NAME,
        styles: {
          width: BREAKPOINTS.LG.SIZE,
          height: "100%",
        },
        type: "desktop",
      },
      xl: {
        name: BREAKPOINTS.XL.NAME,
        styles: {
          width: BREAKPOINTS.XL.SIZE,
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
