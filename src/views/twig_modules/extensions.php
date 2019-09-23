<?php

	$twig->addFunction(
		new Twig_SimpleFunction(
			'file_get_contents',
			function ($path) {
				return file_get_contents($path);
			}
		)
	);

?>
