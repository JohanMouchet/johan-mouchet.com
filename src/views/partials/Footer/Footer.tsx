import React from "react";
import { PROFILE } from "constants/profile";
import { VERSIONS } from "constants/versions";
import { IconChevronDown } from "views/objects";
import "./Footer.scss";

type Props = {
  version?: string;
  copyright?: string;
  topButtonLabel?: string;
};

const Footer: React.FC<Props> = ({
  version = VERSIONS.site,
  copyright = /* html*/ `${
    PROFILE.firstName
  } ${PROFILE.lastName.toUpperCase()}`,
  topButtonLabel = /* html*/ `Get to the top`,
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-footer">
      <div className="container">
        <div className="grid grid--yCenter-@xs grid--noWrap-@xs">
          <div className="cell cell--0-@xs">
            <span className="p-footer__version">{version}</span>
          </div>
          <div className="cell cell--@xs">
            <p className="p-footer__copyright">
              {year} &copy; {copyright}{" "}
              <span className="p-footer__copyright-separator">|</span>
              <br /> Made in{" "}
              <span className="p-footer__cocorico" tabIndex={0}>
                France
              </span>
            </p>
          </div>
          <div className="cell cell--0-@xs">
            <a
              className="p-footer__page-top"
              href="#page-top"
              aria-label={topButtonLabel}
            >
              <IconChevronDown />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
