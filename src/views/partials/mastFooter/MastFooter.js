// @flow

import * as React from "react";
import { GLOBAL } from "../../../constants/global";
import "./mast-footer.scss";
import { ArrowDown } from "../../../assets/images/icons/arrow-down.svg";

const MastFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-mast-footer">
      <div className="container">
        <div className="grid grid--yCenter-@xs grid--noWrap-@xs">
          <div className="cell cell--0-@xs">
            <span className="p-mast-footer__version">
              {GLOBAL.version.site}
            </span>
          </div>
          <div className="cell cell--@xs">
            <p className="p-mast-footer__copyright">
              {year} &copy; Johan MOUCHET{" "}
              <span className="p-mast-footer__copyright-separator">|</span>
              <br /> Made in{" "}
              <span className="p-mast-footer__cocorico">France</span>
            </p>
          </div>
          <div className="cell cell--0-@xs">
            <a className="p-mast-footer__page-top" href="#" title="Go top">
              {ArrowDown}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MastFooter;
