// @flow

import * as React from "react";

const ___ = () => {
  return (
	<!doctype html>
	<html lang="en" className="no-js">
		<head>
			<title>{ _PAGE.title }</title>
			<meta charset="UTF-8">

			<meta name="description" content={_PAGE.description}>
			<meta property="og:type" content="website">
			<meta property="og:title" content={_PAGE.title}>
			<meta property="og:site_name" content="Johan Mouchet">
			<meta property="og:description" content={_PAGE.description}>
			<meta property="og:image" content={`${_GLOBAL.paths.img }theme/og-image.jpg`}>
			/* <meta property="og:url" content="___{ _SITE['hosturl'] ~ _SITE['baseurl'] ~ _SITE['rurl']}> */

			<meta name="viewport" content="width=device-width, initial-scale=1">

			/* <base href="http://localhost:81/johan-mouchet/client"> */

			/* JS detection */
			<script>document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');</script>
			/* Google Fonts */
			<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Material+Icons" rel="stylesheet">
			/* Stylesheet */
			<link rel="stylesheet" type="text/css" href={`${_GLOBAL.paths.css }style.css?v={ _GLOBAL.version.css}`}>

			/* Favicon */
			<link rel="shortcut icon" type="image/x-icon" href={`${_GLOBAL.paths.img }theme/favicon.gif`}>
		</head>

		<body {% if _PAGE.id %}id={`page-${ _PAGE.id}`}{% endif %}>
	);
};

export default ___;