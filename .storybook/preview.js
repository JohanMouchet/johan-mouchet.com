import React from 'react';
import { addParameters, addDecorator } from "@storybook/react";
import { BREAKPOINTS } from "../src/constants/breakpoints";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import "assets/styles/_styles.scss";

addParameters({
  viewport: {
    viewports: {
      xs: {
        name: "xs",
        styles: {
          width: BREAKPOINTS.xs,
          height: "100%"
        },
        type: "mobile"
      },
      sm: {
        name: "sm",
        styles: {
          width: BREAKPOINTS.sm,
          height: "100%"
        },
        type: "tablet"
      },
      md: {
        name: "md",
        styles: {
          width: BREAKPOINTS.md,
          height: "100%"
        },
        type: "desktop"
      },
      lg: {
        name: "lg",
        styles: {
          width: BREAKPOINTS.lg,
          height: "100%"
        },
        type: "desktop"
      },
      xl: {
        name: "xl",
        styles: {
          width: BREAKPOINTS.xl,
          height: "100%"
        },
        type: "desktop"
      }
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(storyFn => <div className="container">{storyFn()}</div>);
