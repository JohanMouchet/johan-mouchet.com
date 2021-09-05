import React from "react";
import cx from "classnames";
import { STATIC } from "constants/static";
import styles from "./Header.module.scss";

type Props = {
  firstName?: string;
  lastName?: string;
  tagline?: string | React.ReactNode;
};

const Header: React.FC<Props> = ({
  firstName = STATIC.profile.firstName,
  lastName = STATIC.profile.lastName,
  tagline = STATIC.profile.tagline,
}) => (
  <header className={styles["p-header"]}>
    <div className={styles["p-header__inner"]}>
      <h1 className={styles["p-header__heading"]}>
        <span
          className={cx(
            styles["p-header__half"],
            styles["p-header__half--left"]
          )}
        >
          <span className={styles["p-header__text-wrapper"]}>
            <span className={styles["p-header__text"]}>{firstName}</span>
          </span>
        </span>

        <span className={styles["p-header__line"]}></span>

        <span
          className={cx(
            styles["p-header__half"],
            styles["p-header__half--right"]
          )}
        >
          <span className={styles["p-header__text-wrapper"]}>
            <span className={styles["p-header__text"]}>{lastName}</span>
          </span>
        </span>
      </h1>

      <h2 className={styles["p-header__tagline"]}>{tagline}</h2>
    </div>
  </header>
);

export default Header;
