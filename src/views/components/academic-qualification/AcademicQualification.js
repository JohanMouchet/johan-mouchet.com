{##
 # Academic Qualifications
 #
 # @param {array}  qualifications 		                 - List of qualifications
 # @param {string} qualifications[0].establishment.name - Qualification establishment name
 # @param {string} qualifications[0].establishment.URL  - Qualification establishment URL
 # @param {string} qualifications[0].location           - Qualification location
 # @param {int}    qualifications[0].graduationYear     - Qualification graduationYear
 # @param {string} qualifications[0].title              - Qualification title
 #}

{% macro default(options) %}
	{% for qualification in options.qualifications %}
		<section class="c-academic-qualification">
			<h3 class="c-academic-qualification__heading">
				<a class="c-academic-qualification__establishment" href="{{ qualification.establishment.URL }}">{{ qualification.establishment.name }}</a>, {{ qualification.location }}
			</h3>
			<span class="c-academic-qualification__graduation-year">{{ qualification.graduationYear }}</span>
			<p class="c-academic-qualification__title">{{ qualification.title }}</p>
		</section>
	{% endfor %}
{% endmacro %}
