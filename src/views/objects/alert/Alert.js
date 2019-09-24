// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Alert
 *
 * @param {string}  [type = info]                - Alert type
 * @param {string}  content                      - Alert content
 * @param {boolean} [hidden = false]             - Alert visibility
 * @param {boolean} [closable]                   - Alert closable capacity
 * @param {string}  [metadata.contextClass]      - Alert context class
 * @param {array}   [metadata.additionalClasses] - Alert additional classes
 */

const ___ = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
	"o-alert",
	props.metadata.contextClass,
	props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return (
	{% if props.type == 'info' %}
		{% set icon = 'info' %}
	{% elseif props.type == 'success' %}
		{% set icon = 'check_circle' %}
	{% elseif props.type == 'warning' %}
		{% set icon = 'warning' %}
	{% elseif props.type == 'danger' %}
		{% set icon = 'error' %}
	{% endif %}

	<div className={`${___Class} o-alert--${ props.type|default('info') } ${ not props.hidden && 'is--visible'} ${ props.closable && 'js-alert'} wow`}>
		<i className={`${'o-alert__icon'|contextClass(contextClass) } material-icons`}>{ icon|default('info') }</i>
		<div className={'o-alert__content'|contextClass(contextClass)}>{ props.content|raw }</div>
		{% if props.closable %}
			<button className={`${'o-alert__close'|contextClass(contextClass) } js-alert-close`}>&#x2716;</button>
		{% endif %}
	</div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
