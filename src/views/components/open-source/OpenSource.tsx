import { parse } from "@/utils/parse/parse";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import styles from "./OpenSource.module.scss";
import { IconArrowUpRight } from "@/views/objects/icons";

export const OpenSource = ({
  projects,
  className,
  ...props
}: {
  projects: {
    link: {
      url: string;
    };
    name: string;
    lede: React.ComponentProps<typeof PrismicRichText>["field"];
    description: React.ComponentProps<typeof PrismicRichText>["field"];
  }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!projects?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["c-open-sources"], className)} {...props}>
      <div className="grid">
        {projects.map((project) => {
          const descriptionPreformatted =
            project.description?.[0]?.type === "preformatted";

          return (
            <div
              className={clsx(
                styles["c-open-source__cell"],
                "cell cell-12 md:cell-5"
              )}
              key={project.name}
            >
              <div className={styles["c-open-source"]}>
                <h4 className={styles["c-open-source__title"]}>
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <IconArrowUpRight
                      className={styles["c-open-source__link"]}
                    />
                  </a>
                </h4>

                <div className={styles["c-open-source__lede"]}>
                  <PrismicRichText field={project.lede} />
                </div>

                <div className={styles["c-open-source__description"]}>
                  {descriptionPreformatted ? (
                    <PrismicRichText
                      field={project.description}
                      components={(type, element, text, children) => (
                        <>{text && parse(text)}</>
                      )}
                    />
                  ) : (
                    <PrismicRichText field={project.description} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
