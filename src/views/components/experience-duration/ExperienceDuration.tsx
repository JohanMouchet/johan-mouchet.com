import { duration } from "@/utils/duration/duration";
import clsx, { ClassValue } from "clsx";
import styles from "./ExperienceDuration.module.scss";

export const ExperienceDuration = ({
  experiences,
  className,
  ...props
}: {
  experiences: {
    startDate: Date | string;
    endDate: Date | string;
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
          const startDate =
            typeof experience.startDate === "string"
              ? new Date(experience.startDate)
              : experience.startDate;
          const endDate = experience.present
            ? new Date()
            : typeof experience.endDate === "string"
            ? new Date(experience.endDate)
            : experience.endDate;

          return {
            start: startDate,
            end: endDate || new Date(),
          };
        })
      )}
    </span>
  );
};
