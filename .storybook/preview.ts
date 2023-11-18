import "@/assets/styles/_styles.scss";
import { BREAKPOINTS } from "@/constants/breakpoints/breakpoints";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "About",
          "Styles",
          "Objects",
          "Components",
          "Partials",
          "Layout",
        ],
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: "xs",
          styles: {
            width: BREAKPOINTS.XS,
            height: "100%",
          },
          type: "mobile",
        },
        sm: {
          name: "sm",
          styles: {
            width: BREAKPOINTS.SM,
            height: "100%",
          },
          type: "tablet",
        },
        md: {
          name: "md",
          styles: {
            width: BREAKPOINTS.MD,
            height: "100%",
          },
          type: "desktop",
        },
        lg: {
          name: "lg",
          styles: {
            width: BREAKPOINTS.LG,
            height: "100%",
          },
          type: "desktop",
        },
        xl: {
          name: "xl",
          styles: {
            width: BREAKPOINTS.XL,
            height: "100%",
          },
          type: "desktop",
        },
      },
    },
  },
};

export default preview;
