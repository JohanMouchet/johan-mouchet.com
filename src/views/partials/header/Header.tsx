import { STATIC } from "@/constants/static";
import clsx, { ClassValue } from "clsx";
import styles from "./Header.module.scss";

export const Header = ({
  firstName = STATIC.profile.firstName,
  lastName = STATIC.profile.lastName,
  tagline = STATIC.profile.tagline,
  className,
  ...props
}: {
  firstName?: string;
  lastName?: string;
  tagline?: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => (
  <header className={clsx(styles["p-header"], className)} {...props}>
    <div className={styles["p-header__inner"]}>
      <h1 className={styles["p-header__heading"]}>
        <span
          className={clsx(
            styles["p-header__half"],
            styles["p-header__half--left"]
          )}
        >
          <span className={styles["p-header__text-wrapper"]}>
            <span className={styles["p-header__text"]}>{firstName}</span>
          </span>
        </span>

        <span className={styles["p-header__line"]} />

        <span
          className={clsx(
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
