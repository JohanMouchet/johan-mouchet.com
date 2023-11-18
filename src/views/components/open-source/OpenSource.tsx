import { parse } from "@/utils/parse/parse";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import styles from "./OpenSource.module.scss";

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
} & React.HTMLProps<HTMLDivElement>) =>
  !projects?.length ? null : (
    <div className={clsx(styles["c-open-sources"], className)} {...props}>
      <div className="grid">
        {projects.map((project) => {
          const descriptionPreformatted =
            project.description?.[0]?.type === "preformatted";

          return (
            <div
              className="cell cell-12 sm:cell-6 lg:cell-4"
              key={project.name}
            >
              <h3 className={styles["c-open-source__title"]}>
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h3>

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
          );
        })}
      </div>
    </div>
  );
