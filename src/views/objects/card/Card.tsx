import clsx, { ClassValue } from "clsx";
import styles from "./Card.module.scss";

export const Card = ({
  bannerUrl,
  bannerGradient,
  header,
  children,
  footer,
  variant,
  size,
  className,
  ...props
}: {
  bannerUrl?: string;
  bannerGradient?: boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "secondary" | "primary" | "hover" | "hover-active" | "forward";
  size?: "sm" | "lg";
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLDivElement>, "size">) => {
  const classNames = clsx(
    styles["o-card"],
    bannerGradient && styles[`o-card--banner-gradient`],
    variant && styles[`o-card--${variant}`],
    size && styles[`o-card--${size}`],
    className
  );

  return (
    <section className={classNames} {...props}>
      {bannerUrl && (
        <div
          className={styles["o-card__banner"]}
          style={
            bannerUrl ? { backgroundImage: `url(${bannerUrl})` } : undefined
          }
        />
      )}
      {header && <header className={styles["o-card__header"]}>{header}</header>}
      {children && <div className={styles["o-card__body"]}>{children}</div>}
      {footer && <footer className={styles["o-card__footer"]}>{footer}</footer>}
    </section>
  );
};
