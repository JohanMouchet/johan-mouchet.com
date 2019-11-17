// @flow

import * as React from "react";
import { ProgressBar } from "views/objects";

type Props = {
  skills: typeof ProgressBar
};

const Skills = (props: Props) => {
  const { skills } = props;

  return !skills ? null : (
    <ul className="c-skills o-list--unstyled">
      {skills.map(skill => (
        <li className="c-skill" key={skill.label}>
          <ProgressBar
            label={skill.label}
            filling={skill.filling}
            tooltip={skill.tooltip}
            tooltipOnHover
          />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
