
		/* Jquery */
		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

		/* Bundle */
		<script src="{ _GLOBAL.paths.js }bundle.js?v={ _GLOBAL.version.js }"></script>

		/* Wow.js */
		<script src="{ _GLOBAL.paths.js }vendors/wow.js"></script>
		<script>
			new WOW().init();
		</script>

		/* Standalone */
		{ script|raw }

		/* Google Analytics */
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-48120304-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-48120304-1');
		</script>
	</body>
	<!-- (∅‿∅) Hi -->
</html>
