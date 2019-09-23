<footer className="p-mast-footer">
	<div className="container">
		<div className="grid grid--yCenter-@xs grid--noWrap-@xs">
			<div className="cell cell--0-@xs">
				<span className="p-mast-footer__version">{ _GLOBAL.version.site }</span>
			</div>
			<div className="cell cell--@xs">
				<p className="p-mast-footer__copyright">{ "now"|date("Y") } &copy; Johan MOUCHET <span className="p-mast-footer__copyright-separator">|</span><br> Made in <span className="p-mast-footer__cocorico">France</span></p>
			</div>
			<div className="cell cell--0-@xs">
				<a className="p-mast-footer__page-top" href="#" title="Go top">{ file_get_contents(_GLOBAL.paths.img ~ "icons/arrow-down.svg")|raw }</a>
			</div>
		</div>
	</div>
</footer>
