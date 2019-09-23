/**
 * Menu
 *
 * @param {array}  menu                                 - List of menu item
 * @param {string} [menu[0].text]                       - Menu item type link
 * @param {string} [menu[0].button]                     - Menu item type button (using o-button)
 * @param {string} [menu[0].url]                        - Menu item link URL
 * @param {array}  [menu[0].metadata.additionalClasses] - Menu item additional classes
 */

{% macro default(options, isSubmenu) %}
	{% import "objects/o-button.html" as button %}

	{% import _self as menu %}

	<ul className="{ not isSubmenu ? 'o-menu' : 'o-menu__submenu' }">
		{% for item in options.menu if item.text or item.button %}
			<li className="o-menu__item { item.menu ? 'o-menu__item--has-children' } { item.metadata.additionalClasses|additionalClasses }">
				{% if item.text %}
					<a className="o-menu__link { item.menu ? 'o-menu__submenu-heading' }" {% if item.url %}href="{ item.url|raw }"{% else %}tabindex="0"{% endif %}>
						{- item.text|raw -}
					</a>
				{% elseif item.button %}
					{ button.default(item.button) }
				{% endif %}

				{% if item.menu %}
					{ menu.default(item, true) }
				{% endif %}
			</li>
		{% endfor %}
	</ul>
{% endmacro %}
