import * as React from "react";
import { Link } from "wouter";
import { Default } from "views/layouts";
import { Main } from "views/partials";

const NotFound: React.FC = () => (
  <Default>
    <Main>
      <div className="container u-full--height">
        <div className="grid grid--xCenter-@xs grid--yCenter-@xs u-full--height">
          <div className="cell u-align--center">
            <h1>
              Error 404
              <span className="heading-underline heading-underline--c"></span>
            </h1>
            <p>
              Woops. Looks like this page doesn't exist.
              <br />
              Please get back to the <Link href="/">homepage</Link>.<br />
              <code>'[⁰﹏⁰]'</code>
            </p>
          </div>
        </div>
      </div>
    </Main>
  </Default>
);

export default NotFound;
