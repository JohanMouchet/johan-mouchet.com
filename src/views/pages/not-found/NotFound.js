import * as React from "react";
import { PROFILE } from "constants/profile";
import { Link } from "wouter";
import { Default } from "views/layouts";
import { Main } from "views/partials";

const NotFound = () => (
  <Default
    metadata={{
      id: /*html*/ `not-found`,
      title: /*html*/ `${PROFILE.firstName} ${PROFILE.lastName} - 404 not found`,
      description: /*html*/ `Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications.`,
    }}
  >
    <Main>
      <div className="container u-full--height">
        <div className="grid grid--xCenter-@xs grid--yCenter-@xs u-full--height">
          <div className="cell u-align--center">
            <h1>
              Error 404
              <i className="heading-underline heading-underline--c"></i>
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
