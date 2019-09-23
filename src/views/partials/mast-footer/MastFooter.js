<footer class="p-mast-footer">
	<div class="container">
		<div class="grid grid--yCenter-@xs grid--noWrap-@xs">
			<div class="cell cell--0-@xs">
				<span class="p-mast-footer__version">{{ _GLOBAL.version.site }}</span>
			</div>
			<div class="cell cell--@xs">
				<p class="p-mast-footer__copyright">{{ "now"|date("Y") }} &copy; Johan MOUCHET <span class="p-mast-footer__copyright-separator">|</span><br> Made in <span class="p-mast-footer__cocorico">France</span></p>
			</div>
			<div class="cell cell--0-@xs">
				<a class="p-mast-footer__page-top" href="#" title="Go top">{{ file_get_contents(_GLOBAL.paths.img ~ "icons/arrow-down.svg")|raw }}</a>
			</div>
		</div>
	</div>
</footer>
