import { parse } from "utils/parse";
import styles from "views/partials/Header/Header.module.scss";

export const STATIC = {
  profile: {
    firstName: "Johan",
    lastName: "Mouchet",
    tagline: parse(
      /* html */
      `Never stop exploring,<br class=${styles["p-header__tagline-breaker"]} /> never stop creating`
    ),
  },
  version: "5.3.0",
};
