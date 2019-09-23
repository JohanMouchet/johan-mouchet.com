/**
 * Social Media
 *
 * @param {array}  medias 		       - List of medias
 * @param {string} medias[0]name     - media name
 * @param {string} medias[0]URL      - media URL
 * @param {string} medias[0]iconPath - media iconPath
 */

{% macro default(options) %}
	<div className="grid">
		{% for media in options.medias %}
			<div className="c-social-media cell cell--6-@xs cell--4-@sm cell--12-@md">
				<a className="c-social-media__link" href="{ media.URL }" title="Follow me on { media.name }" target="_blank">
					{ file_get_contents(media.iconPath)|raw }{ media.name }
				</a>
			</div>
		{% endfor %}
	</div>
{% endmacro %}
