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
  | {
      href: string;
      target?: React.ComponentProps<"a">["target"];
      rel?: React.ComponentProps<"a">["rel"];
      type?: undefined;
    }
  | {
      href?: undefined;
      target?: undefined;
      rel?: undefined;
      type?: React.ComponentProps<"button">["type"];
    }
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
      <a className={classNames} onClick={onClick} {...props}>
        {icon ? (
          <>
            {icon}
            {children && <span>{children}</span>}
          </>
        ) : (
          children
        )}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      type={props.type ?? "button"}
      onClick={onClick}
      {...props}
    >
      {icon ? (
        <>
          {icon}
          {children && <span>{children}</span>}
        </>
      ) : (
        children
      )}
    </button>
  );
};
