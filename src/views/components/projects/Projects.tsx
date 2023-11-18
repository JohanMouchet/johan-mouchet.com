import { parse } from "@/utils/parse/parse";
import { pluralize } from "@/utils/pluralize/pluralize";
import { Details } from "@/views/objects/details/Details";
import { asText } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import styles from "./Projects.module.scss";

type Thumbnail = {
  name: string;
  tagline?: string;
  link: {
    url: string;
  };
  lede: React.ComponentProps<typeof PrismicRichText>["field"];
  thumbnailSrc: {
    url: string;
  };
};

type Content = {
  highlight?: boolean;
  achievements?: React.ComponentProps<typeof PrismicRichText>["field"];
  architecture?: React.ComponentProps<typeof PrismicRichText>["field"];
  libraries?: React.ComponentProps<typeof PrismicRichText>["field"];
};

export const Projects = ({
  projects,
  className,
  ...props
}: {
  projects: (Thumbnail & Content)[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const renderThumbnail = (project: Thumbnail) => (
    <>
      <a href={project.link.url} className={styles["c-project__link"]}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles["c-project__thumbnail"]}
          src={project.thumbnailSrc.url}
          alt=""
          loading="lazy"
        />
        <div className={styles["c-project__overlay"]}>
          <h4 className={styles["c-project__title"]}>{project.name}</h4>
          <span className={styles["c-project__line"]} />
          {project.tagline && (
            <span className={styles["c-project__tagline"]}>
              {project.tagline}
            </span>
          )}
        </div>
      </a>

      {project.lede && (
        <div className={styles["c-project__lede"]}>
          <PrismicRichText field={project.lede} />
        </div>
      )}
    </>
  );

  const renderContent = (project: Content) => {
    const achievementPreformatted =
      project.achievements?.[0]?.type === "preformatted";
    const achievementQuantity = achievementPreformatted
      ? asText(project.achievements)?.match(/<li>/g)?.length
      : project.achievements?.length;

    return (
      <>
        {project.achievements && (
          <div className={styles["c-project__detail"]}>
            <b className={styles["c-project__detail-heading"]}>
              Key {pluralize("Achievement", achievementQuantity || 0)}
            </b>

            {achievementPreformatted ? (
              <ul className={styles["c-project__detail-list"]}>
                <PrismicRichText
                  field={project.achievements}
                  components={(type, element, text, children) => (
                    <>{text && parse(text)}</>
                  )}
                />
              </ul>
            ) : (
              <div className={styles["c-project__detail-list"]}>
                <PrismicRichText field={project.achievements} />
              </div>
            )}
          </div>
        )}

        {project.architecture && (
          <div className={styles["c-project__detail"]}>
            <b className={styles["c-project__detail-heading"]}>Architecture</b>
            <div className={styles["c-project__detail-list"]}>
              <PrismicRichText field={project.architecture} />
            </div>
          </div>
        )}

        {project.libraries && (
          <div className={styles["c-project__detail"]}>
            <b className={styles["c-project__detail-heading"]}>
              {pluralize(
                "Library",
                asText(project.libraries).split(", ").length || 1
              )}
            </b>
            <div className={styles["c-project__detail-list"]}>
              <PrismicRichText field={project.libraries} />
            </div>
          </div>
        )}
      </>
    );
  };

  return !projects?.length ? null : (
    <div className={clsx(styles["c-projects"], className)} {...props}>
      <div className="grid">
        {projects.map((project) =>
          project.highlight ? (
            <div
              className="cell cell-12"
              key={`${project.name}${project.tagline || ""}`}
            >
              <div
                className={clsx(
                  styles["c-project"],
                  styles["c-project--highlighted"]
                )}
              >
                <div className="grid">
                  <div className="cell cell-12 sm:cell-6 lg:cell-4">
                    {renderThumbnail(project)}
                  </div>
                  <div className="cell cell-12 sm:cell-6 lg:cell-8">
                    {renderContent(project)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={clsx("cell cell-12 sm:cell-6", {
                "lg:cell-4": project.lede,
                "lg:cell-3": !project.lede,
              })}
              key={`${project.name}${project.tagline || ""}`}
            >
              <div className={styles["c-project"]}>
                {renderThumbnail(project)}
                {(project.achievements ||
                  project.architecture ||
                  project.libraries) && (
                  <Details summary="Learn more" variant="compact">
                    <div className={styles["c-project__details"]}>
                      {renderContent(project)}
                    </div>
                  </Details>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
