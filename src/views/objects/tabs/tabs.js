// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Tabs
 *
 * @param {string} tabs.thumb                   - Tab thumb title
 * @param {string} tabs.panel                   - Tab panel content
 * @param {string} [metadata.contextClass]      - Tabs context class
 * @param {array}  [metadata.additionalClasses] - Tabs additional classes
 */

const ___ = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
	"o-tabs",
	props.metadata.contextClass,
	props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return (
	<div className="___Class js-tabs">
		<ul className={'o-tabs__thumbs'|contextClass(contextClass)}>
			{% for tab in props.tabs %}
				<li className={`${'o-tabs__thumb'|contextClass(contextClass) } js-tabs-thumb wow fadeInUp`} {% if loop.index > 1 %}data-wow-delay={`${loop.index0 * 0.15 }s`}{% endif %}>
					<button className={'o-tabs__button'|contextClass(contextClass)}>{ tab.thumb }</button>
				</li>
			{% endfor %}
		</ul>
		<ul className={'o-tabs__panels'|contextClass(contextClass)}>
			{% for tab in props.tabs %}
				<li className={`${'o-tabs__panel'|contextClass(contextClass) } js-tabs-panel`}>
					{ tab.panel }
				</li>
			{% endfor %}
		</ul>
	</div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
