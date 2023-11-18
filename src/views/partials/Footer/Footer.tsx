import { STATIC } from "@/constants/static";
import { IconChevronDown } from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import styles from "./Footer.module.scss";

export const Footer = ({
  version = STATIC.version,
  copyright = `${
    STATIC.profile.firstName
  } ${STATIC.profile.lastName.toUpperCase()}`,
  topButtonLabel = "Get to the top",
  className,
  ...props
}: {
  version?: string;
  copyright?: string;
  topButtonLabel?: string;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx(styles["p-footer"], className)} {...props}>
      <div className="container">
        <div className="grid grid-y-center grid-no-wrap">
          <div className="cell cell-shrink">
            <span className={styles["p-footer__version"]}>{version}</span>
          </div>
          <div className="cell cell-grow">
            <p className={styles["p-footer__copyright"]}>
              {year} &copy; {copyright}{" "}
              <span className={styles["p-footer__copyright-separator"]}>|</span>
              <br /> Made in{" "}
              <span className={styles["p-footer__cocorico"]} tabIndex={0}>
                France
              </span>
            </p>
          </div>
          <div className="cell cell-shrink">
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
