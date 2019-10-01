// @flow

import * as React from "react";

const ___ = children => {
  return (
    <Fragment>
      <!doctype html>
      <html lang="en" className="no-js">
        <head>
          <title>{_PAGE.title}</title>
          <meta charset="UTF-8" />

          <meta name="description" content={_PAGE.description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={_PAGE.title} />
          <meta property="og:site_name" content="Johan Mouchet" />
          <meta property="og:description" content={_PAGE.description} />
          <meta
            property="og:image"
            content={`${_GLOBAL.paths.img}theme/og-image.jpg`}
          />
          {/* <meta property="og:url" content={`___${ _SITE['hosturl']} + ${_SITE['baseurl']} + ${_SITE['rurl']}}`} /> */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* <base href="http://localhost:81/johan-mouchet/client" /> */}

          {/* JS detection */}
          <script>
            {
              (document.documentElement.className = document.documentElement.className.replace(
                /\bno-js\b/,
                "js"
              ))
            }
          </script>
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Abril+Fatface|Material+Icons"
            rel="stylesheet"
          />
          {/* Stylesheet */}
          <link
            rel="stylesheet"
            type="text/css"
            href={`${_GLOBAL.paths.css}style.css?v=${_GLOBAL.version.css}`}
          />

          {/* Favicon */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={`${_GLOBAL.paths.img}theme/favicon.gif`}
          />
        </head>
        <body>
          {children}

          {/* Jquery */}
          <script src="https://code.jquery.com/jquery-3.1.1.min.js" />

          {/* Bundle */}
          <script
            src={`${_GLOBAL.paths.js}bundle.js?v=${_GLOBAL.version.js}`}
          />

          {/* Wow.js */}
          <script src={`${_GLOBAL.paths.js}vendors/wow.js`} />
          <script>{new WOW().init()}</script>

          {/* Standalone */}
          {script | raw}

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-48120304-1"
          />
          {/* TODO: Check gtag */}
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);
              gtag('js', new Date());
              gtag('config', 'UA-48120304-1');
            `}
          </script>
        </body>
        {`<!-- (∅‿∅) Hi -->`}
      </html>
    </Fragment>
  );
};

export default ___;
