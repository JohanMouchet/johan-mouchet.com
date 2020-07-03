import * as React from "react";
import { PROFILE } from "constants/profile";
import parse from "utils/parse";
import "./Header.scss";

type Props = {
  firstName?: string;
  lastName?: string;
  tagline?: string;
};

const Header = ({
  firstName = PROFILE.firstName,
  lastName = PROFILE.lastName,
  tagline = /*html*/ `Never stop exploring,<br class="p-header__tagline-breaker" /> never stop creating`,
}: Props) => (
  <header className="p-header">
    <div className="p-header__inner">
      <h1 className="p-header__heading">
        <span className="p-header__half p-header__half--left">
          <span className="p-header__text-wrapper">
            <span className="p-header__text">{firstName}</span>
          </span>
        </span>

        <span className="p-header__line"></span>

        <span className="p-header__half p-header__half--right">
          <span className="p-header__text-wrapper">
            <span className="p-header__text">{lastName}</span>
          </span>
        </span>
      </h1>

      <h2 className="p-header__tagline">{parse(tagline)}</h2>
    </div>
  </header>
);

export default Header;
