// @flow

import * as React from "react";

const ___ = () => {
  return (
	<header className="p-mast-header">
		<div className="p-mast-header__inner">
			<h1 className="p-mast-header__heading">
				<span className="p-mast-header__half p-mast-header__half--left">
					<span className="p-mast-header__text-wrapper">
						<span className="p-mast-header__text">
							Johan
						</span>
					</span>
				</span>

				<span className="p-mast-header__line"></span>

				<span className="p-mast-header__half p-mast-header__half--right">
					<span className="p-mast-header__text-wrapper">
						<span className="p-mast-header__text">
							Mouchet
						</span>
					</span>
				</span>
			</h1>

			<h2 className="p-mast-header__tagline">Never stop exploring,<br className="p-mast-header__tagline-breaker"> never stop creating</h2>
		</div>

		{/* <div className="p-mast-header__language">
			<a className="p-mast-header__language-link" href="en/" hreflang="en">En</a> | <a className="p-mast-header__language-link" href="fr/" hreflang="fr">Fr</a>
		</div> */}
	</header>
	);
};

export default ___;
