import settings from "assets/styles/settings/_settings.scss";

export const TYPOGRAPHY = {
  SANS: {
    NAME: "Sans-serif",
    STACK: settings.s_typography_sans,
    SASS_SETTING: "$s-font-family-sans",
  },
  SERIF: {
    NAME: "Serif",
    STACK: settings.s_typography_serif,
    SASS_SETTING: "$s-font-family-serif",
  },
  DISPLAY: {
    NAME: "Display",
    STACK: settings.s_typography_display,
    SASS_SETTING: "$s-font-family-display",
  },
  MONO: {
    NAME: "Monospace",
    STACK: settings.s_typography_mono,
    SASS_SETTING: "$s-font-family-mono",
  },
};
