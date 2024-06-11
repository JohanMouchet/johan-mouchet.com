import { STATIC } from "@/constants/static";
import { Button } from "@/views/objects/button/Button";
import { IconChevronDown } from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import styles from "./Footer.module.scss";

export const Footer = ({
  version = STATIC.version,
  copyright = `${
    STATIC.profile.firstName
  } ${STATIC.profile.lastName.toUpperCase()}`,
  location = STATIC.profile.location,
  topButtonLabel = "Get to the top",
  className,
  ...props
}: {
  version?: string;
  copyright?: string;
  location?: string;
  topButtonLabel?: string;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx(styles["p-footer"], className)} {...props}>
      <div className="grid grid-y-center grid-no-wrap">
        <div className="cell cell-shrink">
          <span className={styles["p-footer__version"]}>{version}</span>
        </div>
        <div className="cell cell-grow">
          <p className={styles["p-footer__copyright"]}>
            {year} &copy; {copyright}{" "}
            <span className={styles["p-footer__copyright-separator"]}>
              &mdash;
            </span>
            <br /> Based in {location}
          </p>
        </div>
        <div className="cell cell-shrink">
          <Button
            aria-label={topButtonLabel}
            variant="secondary"
            href="#page-top"
            icon={<IconChevronDown className={styles["p-footer__page-top"]} />}
          />
        </div>
      </div>
    </footer>
  );
};
