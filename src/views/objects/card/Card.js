// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Card
 *
 * @param {string} [banner]                     - Card banner
 * @param {string} [bannerUrl]                  - Card banner URL
 * @param {string} [header]                     - Card header
 * @param {string} [body]                       - Card body
 * @param {string} [footer]                     - Card footer
 * @param {string} [metadata.contextClass]      - Card context class
 * @param {array}  [metadata.modifierClasses]   - Card modifiers classes
 * @param {array}  [metadata.additionalClasses] - Card additional classes
 */

const ___ = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
	"o-card",
	props.metadata.contextClass,
	props.metadata.modifierClasses,
	props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return (
	<section className={___Class}>
		{% if props.banner or props.banner is same as(true) or props.bannerUrl %}
			{% set tag = not props.header ? 'header' : 'div' %}

			<{ tag } className={'o-card__banner'|contextClass(contextClass)} {% if props.bannerUrl %}style="background-image: url('{ props.bannerUrl }')"{% endif %}>
				{ props.banner is same as(true) ? '' : props.banner|raw }
			</{ tag }>
		{% endif %}
		{% if props.header %}
			<header className={'o-card__header'|contextClass(contextClass)}>
				{ props.header|raw }
			</header>
		{% endif %}
		{% if props.body %}
			<div className={'o-card__body'|contextClass(contextClass)}>
				{ props.body|raw }
			</div>
		{% endif %}
		{% if props.footer %}
			<footer className={'o-card__footer'|contextClass(contextClass)}>
				{ props.footer|raw }
			</footer>
		{% endif %}
	</section>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
