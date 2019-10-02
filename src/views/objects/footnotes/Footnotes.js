// @flow

import * as React from "react";
import cx from "classnames";
import "./footnotes.scss";

type ReferenceProps = {
  context: Array<mixed>,
  id: string,
  prefix: ?string,
  text: string,
};

// TODO: "context" was passed in the macro

const Reference = (props: ReferenceProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	return (
	{%- spaceless %}
		<sup>
			<a id={`hash-footnote-ref:${ props.prefix && (props.prefix + '-') }${props.id}`} className="o-footnote-ref" href={`${context._SITE['rurl'] }#footnote:${props.prefix && (props.prefix + '-')}${ props.id}`}>
				{props.text}
			</a>
		</sup>
	{% endspaceless -%}
  );
};

Reference.defaultProps = {
  prop1: 2
};

export { Reference };

type NotesProps = {
  context: Array<mixed>,
  id: string,
  prefix: ?string,
  text: string,
  metadata.contextClass: ?string,
  metadata.additionalClasses: ?Array<mixed>,
};

// TODO: "context" was passed in the macro

const Notes = (props: NotesProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const NotesClass = cx(
	  "o-footnotes",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		"Notes--prop1": prop1
	  }
	);
  
	return (
	<ol className={NotesClass}>
		{props.notes.map(note => (
			<li id={`hash-footnote:${props.prefix && (props.prefix + '-') }${ note.id}`} className='o-footnotes__note'>
				{ note.text|raw }
				<a href={`${context._SITE['rurl'] }#footnote-ref:${props.prefix && (props.prefix + '-') }{ note.id}`} className="footnote-backref">&#x21a9;</a>
			</li>
		))}
	</ol>
  );
};

Notes.defaultProps = {
  prop1: 2
};

export default Notes;
