<?php
	/**
	 * Context Class
	 * Set a class and prepend it's context prefix
	 *
	 * @param {string} class   - class
	 * @param {string} context - context prefix
	 *
	 * @example {{ 'bloc__element'|contextClass(options.metadata.contextClass) }}
	 */

	$twig->addFilter(
		new Twig_SimpleFilter (
			'contextClass',
			function ($class, $context) {
				if (!empty($context)) {
					return $context . '-' . $class . ' ' . $class;
				} else {
					return $class;
				}
			}
		)
	);

	/**
	 * Modifier Classes
	 * Set a bloc class and append its modifier(s) using the BEM format
	 *
	 * @param {string} bloc      - Bloc class
	 * @param {array}  modifiers - Array of modifier classes
	 *
	 * @example {{ 'bloc'|modifierClasses(options.metadata.modifiers) }}
	 */

	$twig->addFilter(
		new Twig_SimpleFilter (
			'modifierClasses',
			function ($bloc, $modifiers) {
				$classes = array($bloc);

				if (!empty($modifiers)) {
					foreach ($modifiers as $modifier) {
						$classes[] = $bloc.'--'.$modifier;
					}
				}

				return implode(' ', $classes);
			}
		)
	);

	/**
	 * Additional Classes
	 * Set additional classes inside a class attribute
	 *
	 * @param {array} classes - Array of classes
	 *
	 * @example {{ options.metadata.additionalClasses|additionalClasses }}
	 */

	$twig->addFilter(
		new Twig_SimpleFilter (
			'additionalClasses',
			function ($classes) {
				if (!empty($classes)) {
					return implode(" ", $classes);
				}
			}
		)
	);

	/**
	 * Attributes
	 * Set attributes
	 *
	 * @param {object} attributes - Object of attributes
	 *
	 * @example {{ options.metadata.attributes|attributes|raw }}
	 */

	$twig->addFilter(
		new Twig_SimpleFilter (
			'attributes',
			function ($attributes) {
				if (!empty($attributes)) {
					$attributesList = array();

					foreach ($attributes as $name => $value) {
						if ($value == "") {
							$attributesList[] = $name;
						}
						elseif ($value == "%noAttribute%") {}
						else {
							$attributesList[] = $name.'="'.$value.'"';
						}
					}

					return implode(' ', $attributesList);
				}
			}
		)
	);
?>
