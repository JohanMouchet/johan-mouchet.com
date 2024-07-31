import { parse } from "@/utils/parse/parse";
import { Carousel } from "@/views/objects/carousel/Carousel";
import { IconArrowUpRight } from "@/views/objects/icons";
import { PrismicRichText } from "@prismicio/react";
import { ClassValue } from "clsx";
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
} & Omit<React.ComponentProps<typeof Carousel>, "slides">) => {
  if (!projects?.length) {
    return null;
  }

  return (
    <Carousel
      {...props}
      size="md"
      slides={projects.map((project) => {
        const descriptionPreformatted =
          project.description?.[0]?.type === "preformatted";

        return {
          id: project.name,
          content: (
            <>
              <h4 className={styles["c-open-source__title"]}>
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <IconArrowUpRight className={styles["c-open-source__link"]} />
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
            </>
          ),
        };
      })}
      className={className}
    />
  );
};
