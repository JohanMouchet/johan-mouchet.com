{##
 # Breadcrumb
 #
 # @param {string} levels.title                 - Breadcrumb level title
 # @param {string} levels.url                   - Breadcrumb title relative url
 # @param {string} [metadata.contextClass]      - Breadcrumb context class
 # @param {array}  [metadata.additionalClasses] - Breadcrumb additional classes
 #}

{% macro default(context, options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<ol class="{{ contextClass }} o-breadcrumb {{ additionalClasses|additionalClasses }}">
		{% for level in options.levels %}
			<li class="{{ 'o-breadcrumb__level'|contextClass(contextClass) }} wow fadeInUp" {% if loop.index > 1 %}data-wow-delay="{{ loop.index0 * 0.15 }}s"{% endif %}>
				<a class="{{ 'o-breadcrumb__link'|contextClass(contextClass) }}" {% if level.url and not loop.last %}href="{{ level.url }}"{% endif %}>{{ level.title }}</a>
			</li>
		{% endfor %}
	</ol>

	{# <pre> #}
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
			{%- for level in options.levels -%}
				{
					"@type": "ListItem",
					"position": {{ loop.index }},
					"item": {
					"@type": "Thing",
						"@id": "{{ context._SITE['hosturl'] }}{{ context._SITE['baseurl'] }}{{ loop.last ? context._SITE['rurl'] : level.url  }}",
						"name": "{{ level.title }}"
					}
				}
				{{- not loop.last ? ',' -}}
			{%- endfor -%}
			]
		}
	</script>
	{# </pre> #}
{% endmacro %}
