// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Reference
 *
 * @param {array}  context  - Used to get _SITE['rurl'] for smooth-scroll
 * @param {string} id       - Reference id, need to match note id
 * @param {string} [prefix] - Reference prefix, in case of multiple footnotes on the page
 * @param {string} text     - Reference text
 */

// TODO: "context" was passed in the macro

const ref = (props: Props) => {
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
	{%- spaceless %}
		<sup>
			<a id={`hash-footnote-ref:${ props.prefix && (props.prefix + '-') }${props.id}`} className="o-footnote-ref" href={`${context._SITE['rurl'] }#footnote:${props.prefix && (props.prefix + '-')}${ props.id}`}>
				{- props.text -}
			</a>
		</sup>
	{% endspaceless -%}
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

/**
 * Notes
 *
 * @param {array}  context                      - Used to get _SITE['rurl'] for smooth-scroll
 * @param {string} id                           - Note id, need to match reference id
 * @param {string} [prefix]                     - Note prefix, in case of multiple footnotes on the page
 * @param {string} text                         - Note text
 * @param {string} [metadata.contextClass]      - Note context class
 * @param {array}  [metadata.additionalClasses] - Notes additional classes
 */

// TODO: "context" was passed in the macro

const notes = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-footnotes",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (
	<ol className={___Class}>
		{props.notes.map(note => (
			<li id={`hash-footnote:${props.prefix && (props.prefix + '-') }${ note.id}`} className={'o-footnotes__note'|contextClass(contextClass)}>
				{ note.text|raw }
				<a href={`${context._SITE['rurl'] }#footnote-ref:${props.prefix && (props.prefix + '-') }{ note.id}`} className="footnote-backref">&#x21a9;</a>
			</li>
		))}
	</ol>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
