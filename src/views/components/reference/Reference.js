/**
 * References
 *
 * @param {boolean} requestOnly                       - True if references only available upon request
 * @param {array}  references                         - List of reference
 * @param {string} references[0].name                 - Reference name
 * @param {string} references[0].relation             - Reference relation
 * @param {string} references[0].company[0].name      - Reference company name
 * @param {string} references[0].company[0].URL       - Reference company URL
 * @param {string} references[0].jobTitle             - Reference jobTitle
 * @param {string} references[0].contacts[0].mail     - Reference contacts mail
 * @param {string} references[0].contacts[0].linkedin - Reference contacts linkedin
 */

{% macro default(options) %}
	{% if options.requestOnly %}
		<p><i>Available upon <a href="#p-contact">request</a>.</i></p>
	{% else %}
		<div className="grid">
			{% for reference in options.references %}
				<div className="cell cell--12-@xs cell--6-@md cell--4-@lg">
					<section className="c-reference">
						<h3 className="c-reference__name">{ reference.name }</h3>
						<div>
							<span className="c-reference__relation">{ reference.relation }</span>, <span className="c-reference__company"><a href="{ reference.company.URL }" target="_blank" className="external-link">{ reference.company.name }</a></span> &mdash; <span className="c-reference__job-title">{ reference.jobTitle }</span>
						</div>
						<ul className="c-reference__contacts o-list--unstyled">
							<li><a className="c-reference__email" href="mailto:{ reference.contacts.mail }">{ reference.contacts.mail }</a></li>
							<li><a className="c-reference__linkedin" href="{ reference.contacts.linkedin }">LinkedIn</a></li>
						</ul>
					</section>
				</div>
			{% endfor %}
		</div>
	{% endif %}
{% endmacro %}
