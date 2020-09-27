import { parse } from "utils/parse";

export const STATIC = {
  profile: {
    firstName: "Johan",
    lastName: "Mouchet",
    tagline: parse(
      /* html */
      `Never stop exploring,<br class='p-header__tagline-breaker' /> never stop creating`
    ),
  },
  version: "5.3.0",
};
