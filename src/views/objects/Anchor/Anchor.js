// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Anchor
 *
 * @param {array}  context                      - Used to get _SITE['rurl'] for smooth-scroll
 * @param {string} tag                          - Element tag (ex: h2)
 * @param {string} id                           - Element id for anchor reference
 * @param {string} text                         - Element text
 * @param {string} [marker : "#"]               - Anchor marker
 * @param {string} [metadata.contextClass]      - Anchor context class
 * @param {object} [metadata.attributes]        - Element attributes
 */

// TODO: "context" was passed in the macro

const ___ = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "u-anchor",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<{ props.tag } id="{ props.id }" className="___Class" {[...props.metadata.attributes]}>
		<a href="{ context._SITE['rurl'] }#{ props.id }" className="{ 'u-anchor__link'|contextClass(contextClass) }">{ props.marker|default('#') }</a>
		{- props.text|raw -}
	</{ props.tag }>
	);
};

___.defaultProps = {
  prop1: 2
};

export default ___;
