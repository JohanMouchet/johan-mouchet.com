// @flow

import * as React from "react";
import cx from "classnames";
import "./card.scss";

/**
 * @param {string} [banner]                     - Card banner
 * @param {string} [bannerUrl]                  - Card banner URL
 * @param {string} [header]                     - Card header
 * @param {string} [body]                       - Card body
 * @param {string} [footer]                     - Card footer
 * @param {string} [metadata.contextClass]      - Card context class
 * @param {array}  [metadata.modifierClasses]   - Card modifiers classes
 * @param {array}  [metadata.additionalClasses] - Card additional classes
 */

const Card = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const CardClass = cx(
	"o-card",
	props.metadata.contextClass,
	props.metadata.modifierClasses,
	props.metadata.additionalClasses,
    {
      "Card--prop1": prop1
    }
  );

  return (
	<section className={CardClass}>
		{% if props.banner || props.bannerUrl %}
			{% set tag = !props.header ? 'header' : 'div' %}

			<{ tag } className='o-card__banner' style={props.bannerUrl && ${`backgroundImage: url('${ props.bannerUrl }')`}}>
				{ props.banner === true ? '' : props.banner|raw }
			</{ tag }>
		{% endif %}
		{props.header &&
			<header className='o-card__header'>
				{ props.header|raw }
			</header>
		}
		{props.body &&
			<div className='o-card__body'>
				{ props.body|raw }
			</div>
		}
		{props.footer &&
			<footer className='o-card__footer'>
				{ props.footer|raw }
			</footer>
		}
	</section>
  );
};

Card.defaultProps = {
  prop1: 2
};

export default Card;
