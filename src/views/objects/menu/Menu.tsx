import { IconChevronDown } from "@/views/objects/icons/";
import clsx, { ClassValue } from "clsx";
import styles from "./Menu.module.scss";

type Submenu = {
  menu?: Menu;
};

type Menu = ({
  text: string;
  url?: string;
} & Submenu)[];

const MenuPrimitive = ({
  menu,
  isSubmenu,
  className,
  ...props
}: {
  menu: Menu;
  isSubmenu?: boolean;
  className?: ClassValue;
} & React.HTMLProps<HTMLUListElement>) => {
  if (!menu?.length) {
    return null;
  }

  const classNames = clsx(
    isSubmenu ? styles["o-menu__submenu"] : styles["o-menu"],
    className
  );

  return (
    <ul className={classNames} {...props}>
      {menu.map((item) => (
        <li
          className={clsx(
            styles["o-menu__item"],
            item.menu && styles["o-menu__item--has-children"]
          )}
          key={item.text}
        >
          <a
            className={clsx(
              styles["o-menu__link"],
              item.menu && styles["o-menu__submenu-heading"]
            )}
            href={item.url}
            tabIndex={!item.url ? 0 : undefined}
          >
            {item.text}
            {item.menu && <IconChevronDown />}
          </a>

          {item.menu && <MenuPrimitive menu={item.menu} isSubmenu />}
        </li>
      ))}
    </ul>
  );
};

export const Menu = ({
  menu,
  className,
  ...props
}: {
  menu: Menu;
  className?: ClassValue;
} & React.HTMLProps<HTMLUListElement>) => (
  <MenuPrimitive menu={menu} className={className} {...props} />
);
