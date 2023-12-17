import clsx, { ClassValue } from "clsx";
import styles from "./Button.module.scss";

export const Button = ({
  type = "button",
  url,
  variant,
  size,
  icon,
  block,
  children,
  className,
  ...props
}: {
  type: "anchor" | "button" | "submit" | "reset";
  url?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  icon?: React.ReactNode;
  block?: boolean | "sm" | "md";
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

  if (type === "anchor") {
    return (
      <a className={classNames} href={url} {...props}>
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
    <button className={classNames} type={type} {...props}>
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
