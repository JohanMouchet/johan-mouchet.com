// @flow

import * as React from "react";
import { HTML, MastHeader, MastFooter } from "../partials";

type Props = {
  title: string,
  description: string,
  id: string
};

const Default = (props, children) => {
  const { title, description, id } = props;

  return (
    <HTML title={title} description={description} id={id}>
      <MastHeader />
      {children}
      <MastFooter />
    </HTML>
  );
};

export default Default;
