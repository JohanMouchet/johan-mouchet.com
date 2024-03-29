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
      <div className="grid">
        {works.map((work) => (
          <div
            className="cell cell-6 sm:cell-4 md:cell-2 u-vr--bottom-1 md:u-vr--bottom-0"
            key={work.link.url}
          >
            <section className={styles["c-personal-work"]}>
              <a
                className={styles["c-personal-work__overlay"]}
                href={work.link.url}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles["c-personal-work__thumbnail"]}
                  src={work.thumbnailSrc?.url || work.thumbnailExternalSrc?.url}
                  width={200}
                  height={200}
                  alt={`Personal work on ${work.icon}`}
                  loading="lazy"
                />
                {work.icon && (
                  <span
                    className={styles["c-personal-work__source"]}
                    aria-hidden
                  >
                    {getIcon(work.icon)}
                  </span>
                )}
              </a>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
