import { Default } from "@/views/layouts/default/Default";
import { Main } from "@/views/partials/main/Main";
import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => (
  <Default>
    <Main>
      <div className="container u-full--height">
        <div className="grid grid-x-center xs-grid-y-center u-full--height">
          <div className="cell u-align--center">
            <h1>
              Error 404
              <span className="u-heading__underline u-heading__underline--c" />
            </h1>
            <p>
              Woops. Looks like this page doesn&apos;t exist.
              <br />
              Please get back to the <Link href="/">homepage</Link>.<br />
              <code>&apos;[⁰﹏⁰]&apos;</code>
            </p>
          </div>
        </div>
      </div>
    </Main>
  </Default>
);

export default NotFound;
