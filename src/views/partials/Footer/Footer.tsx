import React from "react";
import { STATIC } from "constants/static";
import { IconChevronDown } from "views/objects";
import styles from "./Footer.module.scss";

type Props = {
  version?: string;
  copyright?: string;
  topButtonLabel?: string;
};

const Footer: React.FC<Props> = ({
  version = STATIC.version,
  copyright = `${
    STATIC.profile.firstName
  } ${STATIC.profile.lastName.toUpperCase()}`,
  topButtonLabel = "Get to the top",
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles["p-footer"]}>
      <div className="container">
        <div className="grid grid--yCenter-@xs grid--noWrap-@xs">
          <div className="cell cell--0-@xs">
            <span className={styles["p-footer__version"]}>{version}</span>
          </div>
          <div className="cell cell--@xs">
            <p className={styles["p-footer__copyright"]}>
              {year} &copy; {copyright}{" "}
              <span className={styles["p-footer__copyright-separator"]}>|</span>
              <br /> Made in{" "}
              <span className={styles["p-footer__cocorico"]} tabIndex={0}>
                France
              </span>
            </p>
          </div>
          <div className="cell cell--0-@xs">
            <a
              className={styles["p-footer__page-top"]}
              href="#page-top"
              aria-label={topButtonLabel}
            >
              <IconChevronDown />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
