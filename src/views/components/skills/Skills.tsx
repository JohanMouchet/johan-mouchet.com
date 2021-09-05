import React from "react";
import { ProgressBar } from "views/objects";
import styles from "views/objects/list/List.module.scss";

type Props = {
  skills: Pick<
    React.ComponentProps<typeof ProgressBar>,
    "label" | "filling" | "progress"
  >[];
};

const Skills: React.FC<Props> = ({ skills }) =>
  !skills?.length ? null : (
    <ul className={styles["o-list--unstyled"]}>
      {skills.map((skill) => (
        <li key={skill.label}>
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
