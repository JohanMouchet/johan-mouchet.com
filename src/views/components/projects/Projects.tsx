import { parse } from "@/utils/parse/parse";
import { pluralize } from "@/utils/pluralize/pluralize";
import { Button } from "@/views/objects/button/Button";
import {
  IconArrowLineLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@/views/objects/icons";
import { asText } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
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
              <code key={item}>{item}</code>
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
          variant="secondary"
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
    name: string;
    tagline?: string;
    link: {
      url: string;
    };
    links?: React.ComponentProps<typeof Links>;
  } & React.ComponentProps<typeof Thumbnail> &
    React.ComponentProps<typeof Content>)[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [selectedSnap, setSelectedSnap] = useState(0);
  const updateScrollSnapState = useCallback(
    (emblaApi: UseEmblaCarouselType[1]) => {
      if (!emblaApi) return;

      setSelectedSnap(emblaApi.selectedScrollSnap());
    },
    []
  );
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  if (!projects?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["c-projects"], className)} {...props}>
      {projects?.length > 1 && (
        <div className={styles["c-projects__navigation"]}>
          {selectedSnap + 1} / {projects?.length}
          {emblaApi?.canScrollNext() ? (
            <button
              className={styles["c-projects__next"]}
              aria-label="Next"
              onClick={scrollNext}
            >
              <IconArrowRight />
            </button>
          ) : (
            <button
              className={styles["c-projects__next"]}
              aria-label="Back to start"
              onClick={() => emblaApi?.scrollTo(0)}
            >
              <IconArrowLineLeft />
            </button>
          )}
        </div>
      )}
      <div className={styles["c-projects__carousel"]} ref={emblaRef}>
        <div className={styles["c-projects__container"]}>
          {projects.map((project) => (
            <div
              className={styles["c-project__slide"]}
              id={project.id || `${project.name}${project.tagline}`}
              key={project.id || `${project.name}${project.tagline}`}
            >
              <div className={clsx(styles["c-project"])}>
                <div className="grid">
                  <div className="cell cell-12">
                    <h4 className={styles["c-project__title"]}>
                      <a
                        href={project.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                        {project.tagline && <> &mdash; {project.tagline}</>}
                        <IconArrowUpRight
                          className={styles["c-project__link"]}
                        />
                      </a>
                    </h4>
                  </div>
                  <div className="cell cell-12 md:cell-6 lg:cell-4">
                    <Thumbnail
                      lede={project.lede}
                      thumbnailSrc={project.thumbnailSrc}
                    />
                    <Links links={project.links?.links} />
                  </div>
                  <div className="cell cell-12 md:cell-6 lg:cell-8">
                    <Content
                      achievements={project.achievements}
                      architecture={project.architecture}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
