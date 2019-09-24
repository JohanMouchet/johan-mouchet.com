// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Pagination
 *
 * @param {int}   [range]                      - Pagination number of links displayed on each side of the current, all links are displayed if not specified.
 * @param {int}   current                      - Pagination active index
 * @param {array} links                        - Pagination list of index link
 * @param {array} [metadata.additionalClasses] - Pagination additional classes
 */

const ___ = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
    "___",
    {
      prop1: "___--prop1"
    }
  );

  return (
	{% set contextClass = props.metadata.contextClass %}
	{% set additionalClasses = props.metadata.additionalClasses %}

	{% set current = props.current|abs %}
	{% set range = props.range %}
	{% set lowerRange = current - range %}
	{% set upperRange = current + range + 1 %}
	{% set links = props.links %}

	<ol className="{ contextClass } o-pagination { additionalClasses|additionalClasses }">
		/* First */
		{% if current >= 3 %}
			<li className="{ 'o-pagination__index'|contextClass(contextClass) } o-pagination__index--first">
				<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links|first }">
					<i className="{ 'o-pagination__icon'|contextClass(contextClass) } material-icons wow fadeInRight" data-wow-delay=".15s">first_page</i>
				</a>
			</li>
		{% endif %}

		/* Prev */
		{% if current >= 2 %}
			<li className="{ 'o-pagination__index'|contextClass(contextClass) } o-pagination__index--prev">
				<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links[current - 2] }">
					<i className="{ 'o-pagination__icon'|contextClass(contextClass) } material-icons wow fadeInRight">chevron_left</i>
				</a>
			</li>
		{% endif %}

		/* Range */
		{% if range %}
			/* Lower */
			{% for link in lowerRange..current %}
				{% set currentIndex = current - loop.revindex %}

				{% if currentIndex >= 1 %}
					<li className="{ 'o-pagination__index'|contextClass(contextClass) }">
						{% if loop.first and currentIndex >= 1 %}
							<a className="{ 'o-pagination__link'|contextClass(contextClass) }">...</a>
						{% else %}
							<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links[currentIndex - 1] }">{ currentIndex }</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}

			/* Current */
			<li className="{ 'o-pagination__index'|contextClass(contextClass) } is--active">
				<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links[current - 1] }">{ current }</a>
			</li>

			/* Upper */
			{% for link in current..upperRange %}
				{% set currentIndex = current + loop.index %}

				{% if currentIndex <= links|length %}
					<li className="{ 'o-pagination__index'|contextClass(contextClass) }">
						{% if loop.last %}
							<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links|last }">{ links|length }</a>
						{% elseif loop.revindex == 2 and currentIndex <= links|length - 2 %}
							<a className="{ 'o-pagination__link'|contextClass(contextClass) }">...</a>
						{% else %}
							<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links[currentIndex - 1] }">{ currentIndex }</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}
		{% else %} /* No Range */
			{% for link in links %}
				<li className="{ 'o-pagination__index'|contextClass(contextClass) } { loop.index == current ? 'is--active' }"><a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ link }">{ loop.index }</a></li>
			{% endfor %}
		{% endif %}

		/* Next */
		{% if current <= links|length - 2 %}
			<li className="{ 'o-pagination__index'|contextClass(contextClass) } o-pagination__index--next">
				<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links[current] }">
					<i className="{ 'o-pagination__icon'|contextClass(contextClass) } material-icons wow fadeInLeft">chevron_right</i>
				</a>
			</li>
		{% endif %}

		/* Last */
		{% if current <= links|length - 3 %}
			<li className="{ 'o-pagination__index'|contextClass(contextClass) } o-pagination__index--last">
				<a className="{ 'o-pagination__link'|contextClass(contextClass) }" href="{ links|last }">
					<i className="{ 'o-pagination__icon'|contextClass(contextClass) } material-icons wow fadeInLeft" data-wow-delay=".15s">last_page</i>
				</a>
			</li>
		{% endif %}
	</ol>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
