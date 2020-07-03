import * as React from "react";
import { ProgressBar } from "views/objects";

type Props = {
  skills: typeof ProgressBar[];
};

const Skills = ({ skills }: Props) =>
  !skills ? null : (
    <ul className="c-skills o-list--unstyled">
      {skills.map((skill) => (
        // @ts-ignore
        <li className="c-skill" key={skill.label}>
          <ProgressBar
            // @ts-ignore
            label={skill.label}
            // @ts-ignore
            filling={skill.filling}
            // @ts-ignore
            progress={skill.progress}
            total="10"
            detailsOnHover
          />
        </li>
      ))}
    </ul>
  );

export default Skills;
