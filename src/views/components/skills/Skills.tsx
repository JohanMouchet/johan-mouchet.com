import styles from "@/views/objects/list/List.module.scss";
import { ProgressBar } from "@/views/objects/progress-bar/ProgressBar";
import clsx, { ClassValue } from "clsx";

export const Skills = ({
  skills,
  className,
  ...props
}: {
  skills: Pick<
    React.ComponentProps<typeof ProgressBar>,
    "label" | "filling" | "progress"
  >[];
  className?: ClassValue;
} & React.HTMLProps<HTMLUListElement>) => {
  if (!skills?.length) {
    return null;
  }

  return (
    <ul className={clsx(styles["o-list--unstyled"], className)} {...props}>
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
};
