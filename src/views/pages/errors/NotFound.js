import * as React from "react";
import { Default } from "views/layouts";

const NotFound = () => (
  <Default
    id="not-found"
    title="Johan Mouchet - 404 not found"
    description="Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications."
  >
    <main className="l-main">
      <div className="container u-full--height">
        <div className="grid grid--xCenter-@xs grid--yCenter-@xs u-full--height">
          <div className="cell u-align--center">
            <h1>
              Error 404
              <i className="heading-underline heading-underline--c wow"></i>
            </h1>
            <p>
              Woops. Looks like this page doesn't exist.
              <br />
              Please get back to the <a href="/">homepage</a>.<br />
              <code>'[⁰﹏⁰]'</code>
            </p>
          </div>
        </div>
      </div>
    </main>
  </Default>
);

export default NotFound;
