import { IconUnsplash, IconYoutube } from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import styles from "./PersonalWorks.module.scss";

export const PersonalWorks = ({
  works,
  className,
  ...props
}: {
  works: {
    link: {
      url: string;
    };
    thumbnailSrc: {
      url: string;
    };
    thumbnailExternalSrc: {
      url: string;
    };
    icon: "unsplash" | "youtube";
  }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!works?.length) {
    return null;
  }

  const getIcon = (icon: string) => {
    if (icon === "unsplash") {
      return <IconUnsplash />;
    } else if (icon === "youtube") {
      return <IconYoutube />;
    }
  };

  return (
    <div className={clsx(styles["c-personal-works"], className)} {...props}>
      {works.map((work) => (
        <a
          className={styles["c-personal-work"]}
          href={work.link.url}
          key={work.link.url}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles["c-personal-work__thumbnail"]}
            src={work.thumbnailSrc?.url || work.thumbnailExternalSrc?.url}
            width={167}
            height={251}
            alt={`Personal work on ${work.icon}`}
            loading="lazy"
          />
          {work.icon && (
            <span className={styles["c-personal-work__source"]} aria-hidden>
              {getIcon(work.icon)}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};
