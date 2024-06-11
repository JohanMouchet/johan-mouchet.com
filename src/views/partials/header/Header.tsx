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
    <h1 className={styles["p-header__heading"]}>
      {firstName} {lastName}
    </h1>
    <span className={styles["p-header__tagline"]}>{tagline}</span>
  </header>
);
