// @flow

import * as React from "react";
import cx from "classnames";
import "./Menu.scss";
import { Button } from "views/objects";

type MenuItem = {
  text: string,
  url?: string,
  button?: Button,
  className?: string | Array | Object,
  menu?: [MenuItem]
};

type Props = {
  menu: [MenuItem]
};

const Menu = (props: Props) => {
  const { menu } = props;

  const renderMenu = (menu, isSubmenu) => {
    const MenuClass = cx({
      "o-menu": !isSubmenu,
      "o-menu__submenu": isSubmenu
    });

    return (
      menu && (
        <ul className={MenuClass}>
          {!menu
            ? null
            : menu.map(item => (
                <li
                  className={cx(
                    "o-menu__item",
                    { "o-menu__item--has-children": item.menu },
                    item.className
                  )}
                >
                  {(item.text && (
                    <a
                      className={cx("o-menu__link", {
                        "o-menu__submenu-heading": item.menu
                      })}
                      href={item.url}
                      tabIndex={!item.url && "0"}
                    >
                      {item.text}
                    </a>
                  )) ||
                    (item.button && <Button {...item.button} />) ||
                    (item.menu && renderMenu(menu, true))}
                  {/* TODO: Pass children to Button */}
                </li>
              ))}
        </ul>
      )
    );
  };

  return renderMenu(menu);
};

export default Menu;
