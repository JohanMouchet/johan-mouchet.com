import * as React from "react";
import { ProgressBar } from "views/objects";

type Props = {
  skills: React.ComponentProps<typeof ProgressBar>[];
};

const Skills: React.FC<Props> = ({ skills }) =>
  !skills ? null : (
    <ul className="c-skills o-list--unstyled">
      {skills.map((skill) => (
        <li className="c-skill" key={skill.label}>
          <ProgressBar
            label={skill.label}
            filling={skill.filling}
            progress={skill.progress}
            total="10"
            detailsOnHover
          />
        </li>
      ))}
    </ul>
  );

export default Skills;
