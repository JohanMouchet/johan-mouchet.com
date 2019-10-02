// @flow

import * as React from "react";
import cx from "classnames";
import "./menu.scss";
import { Button } from "../";

// TODO: {% import _self as menu %}

type Props = {
  menu: {
		text: ?string,
		button: ?string,
		url: ?string
	},
  metadata: {
    additionalClasses: ?Array<string>,
  }
};

// TODO: "isSubmenu" was passed in the macro

const Menu = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const MenuClass = cx({
	  'o-menu': !isSubmenu,
	  'o-menu__submenu': isSubmenu,
	});
  
	return (
	<ul className={MenuClass}>
		{/* TODO: fix %for (.filter()?) */}
		{% for item in props.menu if item.text || item.button %}
			<li className={`o-menu__item ${ item.menu && 'o-menu__item--has-children' } ${ item.metadata.additionalClasses|additionalClasses}`}>
				{item.text &&
					(<a className={`o-menu__link ${ item.menu && 'o-menu__submenu-heading'}`} href={item.url|raw} tabindex={!item.url && "0"}>
						{item.text|raw}
					</a>)}
				{item.button && <Button props={item.button} />}
				
				{item.menu && <Menu props={item, true }/>}
			</li>
		{% endfor %}
	</ul>
  );
};

Menu.defaultProps = {
  prop1: 2
};

export default Menu;
