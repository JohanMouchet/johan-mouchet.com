<?php
	$twig->addGlobal('_GLOBAL',
		$_GLOBAL = array(
			"paths" => array(
				"css"=> "assets/dist/css/",
				"img"=> "assets/dist/img/",
				"js"=> "assets/dist/js/"
			),
			"version" => array(
				"site"=> "4.0.0",
				"css"=> "1.0.0",
				"js"=> "1.0.0"
			)
		)
	);
?>
