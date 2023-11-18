import React from "react";
import cx from "classnames";
import styles from "./Card.module.scss";

type Props = {
  bannerUrl?: string;
  bannerGradient?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "secondary" | "primary" | "hover" | "hover-active" | "forward";
  size?: "sm" | "lg";
  className?: string | string[] | { [key: string]: boolean };
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({
  bannerUrl,
  bannerGradient,
  header,
  children,
  footer,
  variant,
  size,
  className,
}) => {
  const classNames = cx(
    styles["o-card"],
    bannerGradient && styles[`o-card--banner-gradient`],
    variant && styles[`o-card--${variant}`],
    size && styles[`o-card--${size}`],
    className
  );

  return (
    <section className={classNames}>
      {bannerUrl && (
        <div
          className={styles["o-card__banner"]}
          style={
            bannerUrl ? { backgroundImage: `url(${bannerUrl})` } : undefined
          }
        ></div>
      )}
      {header && <header className={styles["o-card__header"]}>{header}</header>}
      {children && <div className={styles["o-card__body"]}>{children}</div>}
      {footer && <footer className={styles["o-card__footer"]}>{footer}</footer>}
    </section>
  );
};

export default Card;
