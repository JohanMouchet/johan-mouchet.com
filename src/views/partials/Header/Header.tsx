import React from "react";
import { STATIC } from "constants/static";
import "./Header.scss";

type Props = {
  firstName?: string;
  lastName?: string;
  tagline?: string | React.ReactNode;
};

const Header: React.FC<Props> = ({
  firstName = STATIC.profile.firstName,
  lastName = STATIC.profile.lastName,
  tagline = STATIC.profile.tagline,
}) => (
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

      <h2 className="p-header__tagline">{tagline}</h2>
    </div>
  </header>
);

export default Header;
