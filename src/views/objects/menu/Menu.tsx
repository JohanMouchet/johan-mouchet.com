import * as React from "react";
import cx from "classnames";
import "./Menu.scss";
import { IconChevronDown } from "views/objects";

type Submenu = {
  text: string;
  menu?: Menu;
};

type MenuItem = {
  text: string;
  url?: string;
};

type Menu = (MenuItem & Submenu)[];

type Props = {
  menu: Menu;
  className?: string | string[] | { [key: string]: boolean };
};

const Menu: React.FC<Props> = ({ menu, className }) => {
  const renderMenu = (
    menu: Menu,
    isSubmenu?: boolean,
    className?: string | string[] | { [key: string]: boolean }
  ) => {
    const classNames = cx(isSubmenu ? "o-menu__submenu" : "o-menu", className);

    return !menu?.length ? null : (
      <ul className={classNames}>
        {menu.map((item) => (
          <li
            className={cx(
              "o-menu__item",
              item.menu && "o-menu__item--has-children"
            )}
            key={item.text}
          >
            <a
              className={cx(
                "o-menu__link",
                item.menu && "o-menu__submenu-heading"
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

export default Menu;
