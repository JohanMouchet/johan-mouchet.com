import * as React from "react";
import { Header, Footer } from "views/partials";
import "./Default.scss";

type Props = {
  children: React.ReactNode;
};

const Default: React.FC<Props> = ({ children }) => (
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
