// @flow

import * as React from "react";
import { VERSIONS } from "constants/versions";
import { PROFILE } from "constants/profile";
import { ReactComponent as IconArrowDown } from "assets/images/icons/arrow-down.svg";
import "./MastFooter.scss";

type Props = {
  version: string,
  copyright: string,
  topButtonTitle: String,
};

const MastFooter = ({
  version = VERSIONS.site,
  copyright = /* html*/ `${
    PROFILE.firstName
  } ${PROFILE.lastName.toUpperCase()}`,
  topButtonTitle = /* html*/ `Get to the top`,
}: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-mast-footer">
      <div className="container">
        <div className="grid grid--yCenter-@xs grid--noWrap-@xs">
          <div className="cell cell--0-@xs">
            <span className="p-mast-footer__version">{version}</span>
          </div>
          <div className="cell cell--@xs">
            <p className="p-mast-footer__copyright">
              {year} &copy; {copyright}{" "}
              <span className="p-mast-footer__copyright-separator">|</span>
              <br /> Made in{" "}
              <span className="p-mast-footer__cocorico">France</span>
            </p>
          </div>
          <div className="cell cell--0-@xs">
            <a
              className="p-mast-footer__page-top"
              href="#page-top"
              title={topButtonTitle}
            >
              <IconArrowDown />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MastFooter;
