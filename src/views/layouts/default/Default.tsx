import * as React from "react";
import { Header, Footer } from "views/partials";
import "./Default.scss";

const Default = ({ children }: Node) => (
  <div className="l-layout">
    <div className="l-layout__background"></div>
    <div className="l-layout__inner">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);

export default Default;
