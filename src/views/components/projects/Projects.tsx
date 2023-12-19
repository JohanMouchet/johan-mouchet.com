import { parse } from "@/utils/parse/parse";
import { pluralize } from "@/utils/pluralize/pluralize";
import { Badge } from "@/views/objects/badge/Badge";
import { Button } from "@/views/objects/button/Button";
import { Details } from "@/views/objects/details/Details";
import { IconArrowUpRight, IconBookmark } from "@/views/objects/icons";
import { asText } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import styles from "./Projects.module.scss";

const Thumbnail = ({
  name,
  tagline,
  link,
  lede,
  thumbnailSrc,
}: {
  name: string;
  tagline?: string;
  link: {
    url: string;
  };
  lede: React.ComponentProps<typeof PrismicRichText>["field"];
  thumbnailSrc: {
    url: string;
  };
}) => (
  <>
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["c-project__link"]}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles["c-project__thumbnail"]}
        src={thumbnailSrc.url}
        alt=""
        width={400}
        height={225}
        loading="lazy"
      />
      <div className={styles["c-project__overlay"]}>
        <h4 className={styles["c-project__title"]}>{name}</h4>
        <span className={styles["c-project__line"]} />
        {tagline && (
          <span className={styles["c-project__tagline"]}>{tagline}</span>
        )}
        <IconArrowUpRight className={styles["c-project__arrow"]} />
      </div>
    </a>

    {lede && (
      <div className={styles["c-project__lede"]}>
        <PrismicRichText field={lede} />
      </div>
    )}
  </>
);

const Content = ({
  achievements,
  architecture,
}: {
  achievements?: React.ComponentProps<typeof PrismicRichText>["field"];
  architecture?: React.ComponentProps<typeof PrismicRichText>["field"];
}) => {
  const achievementPreformatted = achievements?.[0]?.type === "preformatted";
  const achievementQuantity = achievementPreformatted
    ? asText(achievements)?.match(/<li>/g)?.length
    : achievements?.length;

  return (
    <>
      {achievements && (
        <div className={styles["c-project__detail"]}>
          <b className={styles["c-project__detail-heading"]}>
            Key {pluralize("Achievement", achievementQuantity || 0)}
          </b>

          {achievementPreformatted ? (
            <ul className={styles["c-project__detail-list"]}>
              <PrismicRichText
                field={achievements}
                components={(type, element, text, children) => (
                  <>{text && parse(text)}</>
                )}
              />
            </ul>
          ) : (
            <div className={styles["c-project__detail-list"]}>
              <PrismicRichText field={achievements} />
            </div>
          )}
        </div>
      )}

      {architecture && (
        <div className={styles["c-project__detail"]}>
          <b className={styles["c-project__detail-heading"]}>Architecture</b>
          <div className={styles["c-project__detail-architecture"]}>
            {architecture[0].text.split(", ").map((item: string) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const Links = ({
  links,
}: {
  links?: {
    name: React.ComponentProps<typeof Button>["children"];
    link: {
      url: string;
    };
    icon?: React.ComponentProps<typeof PrismicRichText>["field"];
  }[];
} & React.HTMLProps<HTMLDivElement>) => {
  if (!links?.length) {
    return null;
  }

  return (
    <div className={styles["c-project__links"]}>
      {links.map((link) => (
        <Button
          href={link.link.url}
          icon={
            link.icon ? (
              <PrismicRichText
                field={link.icon}
                components={(type, element, text, children) => (
                  <>{text && parse(text)}</>
                )}
              />
            ) : undefined
          }
          size="sm"
          key={link.link.url}
        >
          {link.name}
        </Button>
      ))}
    </div>
  );
};

export const Projects = ({
  projects,
  className,
  ...props
}: {
  projects: ({
    id?: string;
    highlight?: boolean;
    links?: React.ComponentProps<typeof Links>;
  } & React.ComponentProps<typeof Thumbnail> &
    React.ComponentProps<typeof Content>)[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!projects?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["c-projects"], className)} {...props}>
      <div className="grid">
        {projects.map((project) =>
          project.highlight ? (
            <div
              className="cell cell-12"
              id={project.id || `${project.name}${project.tagline}`}
              key={project.id || `${project.name}${project.tagline}`}
            >
              <div
                className={clsx(
                  styles["c-project"],
                  styles["c-project--highlighted"]
                )}
              >
                <IconBookmark
                  className={styles["c-project__highlight-icon"]}
                  aria-label="Featured"
                />
                <div className="grid">
                  <div className="cell cell-12 sm:cell-6 lg:cell-4">
                    <Thumbnail
                      name={project.name}
                      tagline={project.tagline}
                      link={project.link}
                      lede={project.lede}
                      thumbnailSrc={project.thumbnailSrc}
                    />
                    <Links links={project.links?.links} />
                  </div>
                  <div className="cell cell-12 sm:cell-6 lg:cell-8">
                    <Content
                      achievements={project.achievements}
                      architecture={project.architecture}
                    />
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
              id={project.id || `${project.name}${project.tagline}`}
              key={project.id || `${project.name}${project.tagline}`}
            >
              <div className={styles["c-project"]}>
                <Thumbnail
                  name={project.name}
                  tagline={project.tagline}
                  link={project.link}
                  lede={project.lede}
                  thumbnailSrc={project.thumbnailSrc}
                />
                {(project.achievements || project.architecture) && (
                  <Details summary="Learn more" variant="compact">
                    <div className={styles["c-project__details"]}>
                      <Content
                        achievements={project.achievements}
                        architecture={project.architecture}
                      />
                      <Links links={project.links?.links} />
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
