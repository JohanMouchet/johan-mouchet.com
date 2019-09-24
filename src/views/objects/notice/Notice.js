// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Notice
 *
 * @param {string}  primary                      - Notice primary content
 * @param {string}  [secondary]                  - Notice secondary content
 * @param {boolean} closeButton                  - Notice close button
 * @param {string}  [metadata.contextClass]       - Notice context class
 * @param {array}   [metadata.additionalClasses] - Notice additional classes
 */

const ___ = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
	"o-notice",
	props.metadata.contextClass,
	props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return (
	<div className={`${___Class} js-notice`}>
		<div className="container container--lg">
			<div className="grid grid--yCenter-@xs">
				<div className="cell cell--@xs">
					<div className={'o-notice__primary'|contextClass(contextClass)}>
						{ props.primary|raw }
					</div>
				</div>
				{% if props.secondary %}
					<div className="cell cell--0-@xs">
						<div className={'o-notice__secondary'|contextClass(contextClass)}>
							{ props.secondary|raw }
						</div>
					</div>
				{% endif %}
				{% if props.closeButton %}
					<div className="cell cell--0-@xs">
						<button className={`${'o-notice__close'|contextClass(contextClass) } js-notice-close`}>&#x2716;</button>
					</div>
				{% endif %}
			</div>
		</div>
	</div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
