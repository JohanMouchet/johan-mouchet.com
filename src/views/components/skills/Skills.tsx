import { Badge } from "@/views/objects/badge/Badge";
import clsx, { ClassValue } from "clsx";
import styles from "./Skills.module.scss";

export const Skills = ({
  skills,
  className,
  ...props
}: {
  skills: { label: string }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!skills?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["c-skills"], className)} {...props}>
      {skills.map((skill) => (
        <code key={skill.label}>{skill.label}</code>
      ))}
    </div>
  );
};
