import { IconChevronDown } from "@/views/objects/icons/";
import clsx, { ClassValue } from "clsx";
import styles from "./Menu.module.scss";

type Submenu = {
  text: string;
  menu?: MainMenu;
};

type MainMenu = ({
  text: string;
  url?: string;
} & Submenu)[];

export const Menu = ({
  menu,
  className,
  ...props
}: {
  menu: MainMenu;
  className?: ClassValue;
} & React.HTMLProps<HTMLUListElement>) => {
  const renderMenu = (
    menu: MainMenu,
    isSubmenu?: boolean,
    className?: ClassValue
  ) => {
    const classNames = clsx(
      isSubmenu ? styles["o-menu__submenu"] : styles["o-menu"],
      className
    );

    return !menu?.length ? null : (
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

            {item.menu && renderMenu(item.menu, true)}
          </li>
        ))}
      </ul>
    );
  };

  return renderMenu(menu, false, className);
};
