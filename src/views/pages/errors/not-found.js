{% set _PAGE = {
		id: "not-found",
		title: "Johan Mouchet - 404 not found",
		description: "Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications.",
	}
%}

{% extends "layouts/l-default.html" %}

{% block pagecontent %}
<main class="l-main">
	<div class="container">
		<article class="l-article u-align--center">
			<h1>Error 404<i class="heading-underline heading-underline--c wow"></i></h1>
			<p>
				Woops. Looks like this page doesn't exist.<br>
				Please get back to the <a href="/">homepage</a>.<br>
				<code>'[⁰﹏⁰]'</code>
			</p>
		</article>
	</div>
</main>
{% endblock %}
