// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Breadcrumb
 *
 * @param {string} levels.title                 - Breadcrumb level title
 * @param {string} levels.url                   - Breadcrumb title relative url
 * @param {string} [metadata.contextClass]      - Breadcrumb context class
 * @param {array}  [metadata.additionalClasses] - Breadcrumb additional classes
 */

// TODO: "context" was passed in the macro

const ___ = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-breadcrumb",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (
	<ol className="___Class">
		{% for level in props.levels %}
			<li className="{ 'o-breadcrumb__level'|contextClass(contextClass) } wow fadeInUp" {% if loop.index > 1 %}data-wow-delay="{ loop.index0 * 0.15 }s"{% endif %}>
				<a className="{ 'o-breadcrumb__link'|contextClass(contextClass) }" {% if level.url and not loop.last %}href="{ level.url }"{% endif %}>{ level.title }</a>
			</li>
		{% endfor %}
	</ol>

	/* <pre> */
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
			{%- for level in props.levels -%}
				{
					"@type": "ListItem",
					"position": { loop.index },
					"item": {
					"@type": "Thing",
						"@id": "{ context._SITE['hosturl'] }{ context._SITE['baseurl'] }{ loop.last ? context._SITE['rurl'] : level.url  }",
						"name": "{ level.title }"
					}
				}
				{- not loop.last ? ',' -}
			{%- endfor -%}
			]
		}
	</script>
	/* </pre> */
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
