{##
 # Personal Works
 #
 # @param {array}   works                  - List of works
 # @param {boolean} works[0].video         - True if work type is video
 # @param {array}   works[0].thumbnailPath - Work thumbnail image path
 # @param {array}   works[0].expandedPath  - Work expanded image path
 #}

{% macro default(options) %}
	<div class="c-personal-works">
		<div class="grid">
			{% for work in options.works %}
				<div class="cell cell--6-@xs cell--4-@sm cell--2-@md">
					<section class="c-personal-work">
						<a class="c-personal-work__overlay" href="{{ work.URL }}" target="_blank">
							<img class="c-personal-work__thumbnail" src="{{ work.thumbnailPath }}" alt="Personal work"/>
							{% if work.sourceIconPath %}
								<span class="c-personal-work__source">
									{{ file_get_contents(work.sourceIconPath)|raw }}
								</span>
							{% endif %}
						</a>
					</section>
				</div>
			{% endfor %}
		</div>
	</div>
{% endmacro %}
