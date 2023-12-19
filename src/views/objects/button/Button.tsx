import clsx, { ClassValue } from "clsx";
import styles from "./Button.module.scss";

export const Button = ({
  variant,
  size,
  icon,
  block,
  onClick,
  children,
  className,
  ...props
}: (
  | { href: string; type?: undefined }
  | { type?: "button" | "submit" | "reset"; href?: undefined }
) & {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  icon?: React.ReactNode;
  block?: boolean | "sm" | "md";
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  className?: ClassValue;
}) => {
  const classNames = clsx(
    styles["o-button"],
    size && styles[`o-button--${size}`],
    variant && styles[`o-button--${variant}`],
    block &&
      styles[
        `${
          typeof block === "string" ? `${block}:` : block === true && ""
        }o-button--block`
      ],
    !!icon && styles["o-button--icon"],
    className
  );

  if (!!props.href) {
    return (
      <a className={classNames} {...props}>
        {icon ? (
          <>
            {icon}
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </a>
    );
  }

  return (
    <button className={classNames} type={props.type ?? "button"} {...props}>
      {icon ? (
        <>
          {icon}
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
