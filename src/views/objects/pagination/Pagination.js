{##
 # Pagination
 #
 # @param {int}   [range]                      - Pagination number of links displayed on each side of the current, all links are displayed if not specified.
 # @param {int}   current                      - Pagination active index
 # @param {array} links                        - Pagination list of index link
 # @param {array} [metadata.additionalClasses] - Pagination additional classes
 #}

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	{% set current = options.current|abs %}
	{% set range = options.range %}
	{% set lowerRange = current - range %}
	{% set upperRange = current + range + 1 %}
	{% set links = options.links %}

	<ol class="{{ contextClass }} o-pagination {{ additionalClasses|additionalClasses }}">
		{# First #}
		{% if current >= 3 %}
			<li class="{{ 'o-pagination__index'|contextClass(contextClass) }} o-pagination__index--first">
				<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links|first }}">
					<i class="{{ 'o-pagination__icon'|contextClass(contextClass) }} material-icons wow fadeInRight" data-wow-delay=".15s">first_page</i>
				</a>
			</li>
		{% endif %}

		{# Prev #}
		{% if current >= 2 %}
			<li class="{{ 'o-pagination__index'|contextClass(contextClass) }} o-pagination__index--prev">
				<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links[current - 2] }}">
					<i class="{{ 'o-pagination__icon'|contextClass(contextClass) }} material-icons wow fadeInRight">chevron_left</i>
				</a>
			</li>
		{% endif %}

		{# Range #}
		{% if range %}
			{# Lower #}
			{% for link in lowerRange..current %}
				{% set currentIndex = current - loop.revindex %}

				{% if currentIndex >= 1 %}
					<li class="{{ 'o-pagination__index'|contextClass(contextClass) }}">
						{% if loop.first and currentIndex >= 1 %}
							<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}">...</a>
						{% else %}
							<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links[currentIndex - 1] }}">{{ currentIndex }}</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}

			{# Current #}
			<li class="{{ 'o-pagination__index'|contextClass(contextClass) }} is--active">
				<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links[current - 1] }}">{{ current }}</a>
			</li>

			{# Upper #}
			{% for link in current..upperRange %}
				{% set currentIndex = current + loop.index %}

				{% if currentIndex <= links|length %}
					<li class="{{ 'o-pagination__index'|contextClass(contextClass) }}">
						{% if loop.last %}
							<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links|last }}">{{ links|length }}</a>
						{% elseif loop.revindex == 2 and currentIndex <= links|length - 2 %}
							<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}">...</a>
						{% else %}
							<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links[currentIndex - 1] }}">{{ currentIndex }}</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}
		{% else %} {# No Range #}
			{% for link in links %}
				<li class="{{ 'o-pagination__index'|contextClass(contextClass) }} {{ loop.index == current ? 'is--active' }}"><a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ link }}">{{ loop.index }}</a></li>
			{% endfor %}
		{% endif %}

		{# Next #}
		{% if current <= links|length - 2 %}
			<li class="{{ 'o-pagination__index'|contextClass(contextClass) }} o-pagination__index--next">
				<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links[current] }}">
					<i class="{{ 'o-pagination__icon'|contextClass(contextClass) }} material-icons wow fadeInLeft">chevron_right</i>
				</a>
			</li>
		{% endif %}

		{# Last #}
		{% if current <= links|length - 3 %}
			<li class="{{ 'o-pagination__index'|contextClass(contextClass) }} o-pagination__index--last">
				<a class="{{ 'o-pagination__link'|contextClass(contextClass) }}" href="{{ links|last }}">
					<i class="{{ 'o-pagination__icon'|contextClass(contextClass) }} material-icons wow fadeInLeft" data-wow-delay=".15s">last_page</i>
				</a>
			</li>
		{% endif %}
	</ol>
{% endmacro %}
