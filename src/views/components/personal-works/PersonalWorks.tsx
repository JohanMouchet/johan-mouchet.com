import React from "react";
import { IconUnsplash, IconYoutube } from "views/objects";
import styles from "./PersonalWorks.module.scss";

type Props = {
  works: Array<{
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
  }>;
};

const PersonalWorks: React.FC<Props> = ({ works }) => {
  const getIcon = (icon: string) => {
    if (icon === "unsplash") {
      return <IconUnsplash />;
    } else if (icon === "youtube") {
      return <IconYoutube />;
    }
  };

  return !works?.length ? null : (
    <div className={styles["c-personal-works"]}>
      <div className="grid">
        {works.map((work) => (
          <div
            className="cell cell--6-@xs cell--4-@sm cell--2-@md u-vr--bottom-1-@xs u-vr--bottom-0-@md"
            key={work.link.url}
          >
            <section className={styles["c-personal-work"]}>
              <a
                className={styles["c-personal-work__overlay"]}
                href={work.link.url}
              >
                <img
                  className={styles["c-personal-work__thumbnail"]}
                  src={work.thumbnailSrc?.url || work.thumbnailExternalSrc?.url}
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

export default PersonalWorks;
