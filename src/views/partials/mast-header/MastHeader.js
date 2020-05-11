// @flow

import * as React from "react";
import { PROFILE } from "constants/profile";
import parse from "utils/parse";
import "./MastHeader.scss";

type Props = {
  firstname: string,
  lastname: string,
  tagline: string,
};

const MastHeader = ({
  firstName = /*html*/ PROFILE.firstName,
  lastName = /*html*/ PROFILE.lastName,
  tagline = /*html*/ `Never stop exploring, <br className="p-mast-header__tagline-breaker" /> never stop creating`,
}: Props) => (
  <header className="p-mast-header">
    <div className="p-mast-header__inner">
      <h1 className="p-mast-header__heading">
        <span className="p-mast-header__half p-mast-header__half--left">
          <span className="p-mast-header__text-wrapper">
            <span className="p-mast-header__text">{firstName}</span>
          </span>
        </span>

        <span className="p-mast-header__line"></span>

        <span className="p-mast-header__half p-mast-header__half--right">
          <span className="p-mast-header__text-wrapper">
            <span className="p-mast-header__text">{lastName}</span>
          </span>
        </span>
      </h1>

      <h2 className="p-mast-header__tagline">{parse(tagline)}</h2>
    </div>
  </header>
);

export default MastHeader;
