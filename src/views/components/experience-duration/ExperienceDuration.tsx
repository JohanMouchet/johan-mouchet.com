import { duration } from "@/utils/duration/duration";
import clsx, { ClassValue } from "clsx";
import styles from "./ExperienceDuration.module.scss";

export const ExperienceDuration = ({
  experiences,
  className,
  ...props
}: {
  experiences: {
    /** ISO string date */
    startDate: string;
    /** ISO string date */
    endDate: string;
  }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!experiences?.length) {
    return null;
  }

  return (
    <span
      className={clsx(styles["c-experience-duration"], className)}
      {...props}
    >
      {duration(
        experiences.map((experience: any) => {
          const startDate = new Date(experience.startDate);
          const endDate = experience.present
            ? new Date()
            : new Date(experience.endDate);

          return {
            start: startDate,
            end: endDate || new Date(),
          };
        })
      )}
    </span>
  );
};
