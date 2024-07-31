import { parse } from "@/utils/parse/parse";
import { pluralize } from "@/utils/pluralize/pluralize";
import { Button } from "@/views/objects/button/Button";
import { Carousel } from "@/views/objects/carousel/Carousel";
import { IconArrowUpRight, IconPlus } from "@/views/objects/icons";
import { List } from "@/views/objects/list/List";
import { asText } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { ClassValue } from "clsx";
import { useState } from "react";
import styles from "./Projects.module.scss";

const Thumbnail = ({
  lede,
  thumbnailSrc,
}: {
  lede: React.ComponentProps<typeof PrismicRichText>["field"];
  thumbnailSrc: {
    url: string;
  };
}) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className={styles["c-project__thumbnail"]}
      src={thumbnailSrc.url}
      alt=""
      width={400}
      height={225}
      loading="lazy"
    />

    {lede && (
      <div className={styles["c-project__lede"]}>
        <PrismicRichText field={lede} />
      </div>
    )}
  </>
);

const Links = ({
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
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
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
        <div className={styles["c-project__content"]}>
          <b className={styles["c-project__content-heading"]}>
            Key {pluralize("Achievement", achievementQuantity || 0)}
          </b>

          {achievementPreformatted ? (
            <ul className={styles["c-project__content-list"]}>
              <PrismicRichText
                field={achievements}
                components={(type, element, text, children) => (
                  <>{text && parse(text)}</>
                )}
              />
            </ul>
          ) : (
            <div className={styles["c-project__content-list"]}>
              <PrismicRichText field={achievements} />
            </div>
          )}
        </div>
      )}

      {architecture && (
        <div className={styles["c-project__content"]}>
          <b className={styles["c-project__content-heading"]}>Architecture</b>
          <div className={styles["c-project__content-architecture"]}>
            {architecture[0].text.split(", ").map((item: string) => (
              <code key={item}>{item}</code>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const Project = ({
  project,
}: {
  project: React.ComponentProps<typeof Projects>["projects"][number];
}) => (
  <>
    <h4 className={styles["c-project__title"]}>
      <a href={project.link.url} target="_blank" rel="noopener noreferrer">
        {project.name}
        {project.tagline && <> &mdash; {project.tagline}</>}
        <IconArrowUpRight className={styles["c-project__link"]} />
      </a>
    </h4>
    <div className="grid">
      <div className="cell cell-12 md:cell-4">
        <Thumbnail lede={project.lede} thumbnailSrc={project.thumbnailSrc} />
        <Links links={project.links?.links} />
      </div>
      <div className="cell cell-12 md:cell-8">
        <Content
          achievements={project.achievements}
          architecture={project.architecture}
        />
      </div>
    </div>
  </>
);

export const Projects = ({
  highlighted,
  projects,
  className,
  ...props
}: {
  highlighted?: boolean;
  projects: ({
    id?: string;
    name: string;
    tagline?: string;
    link: {
      url: string;
    };
    links?: React.ComponentProps<typeof Links>;
  } & React.ComponentProps<typeof Thumbnail> &
    React.ComponentProps<typeof Content>)[];
  className?: ClassValue;
}) => {
  const [expanded, setExpanded] = useState(highlighted);
  const [startIndex, setStartIndex] = useState(0);

  if (!projects?.length) {
    return null;
  }

  if (expanded) {
    return (
      <Carousel
        slides={projects.map((project, i) => ({
          id: project.id || `${i}`,
          content: <Project project={project} />,
        }))}
        startIndex={startIndex}
        close={setExpanded}
        {...props}
      />
    );
  }

  return (
    <List striped="horizontal" size="lg">
      {projects.map((project, i) => (
        <li key={project.id || `${project.name}${project.tagline}`}>
          <button
            onClick={() => {
              setStartIndex(i);
              setExpanded(true);
            }}
            className={styles["c-project__list-item"]}
          >
            <IconPlus />
            {project.name}
            {project.tagline && <> &mdash; {project.tagline}</>}
          </button>
        </li>
      ))}
    </List>
  );
};
