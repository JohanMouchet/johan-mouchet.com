import styles from "@/views/partials/header/Header.module.scss";

export const STATIC = {
  profile: {
    firstName: "Johan",
    lastName: "Mouchet",
    tagline: (
      <>
        Never stop exploring,
        <br className={styles["p-header__tagline-breaker"]} /> never stop
        creating
      </>
    ),
  },
  version: "6.0.0",
};
