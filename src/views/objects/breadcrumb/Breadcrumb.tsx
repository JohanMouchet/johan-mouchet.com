import clsx, { ClassValue } from "clsx";
import styles from "./Breadcrumb.module.scss";

export const Breadcrumb = ({
  levels,
  className,
  ...props
}: {
  levels: Array<{
    title: string;
    link: {
      url: string;
    };
  }>;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLOListElement>, "type">) => {
  const lastLevel = levels?.length - 1;

  return !levels?.length ? null : (
    <>
      <ol className={clsx(styles["o-breadcrumb"], className)} {...props}>
        {levels.map((level, index) => (
          <li
            className={clsx(
              styles["o-breadcrumb__level"],
              "u-animation",
              "u-animation--fade-in-up"
            )}
            style={{
              animationDelay: index > 0 ? `${index * 0.15}s` : undefined,
            }}
            key={level.link.url}
          >
            <a
              className={styles["o-breadcrumb__link"]}
              href={index !== lastLevel ? level.link.url : undefined}
            >
              {level.title}
            </a>
          </li>
        ))}
      </ol>

      <script type="application/ld+json">
        {`{
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
        ${levels.map(
          (level, index) => `{
          "@type": "ListItem",
          "position": ${index + 1},
          "item": {
            "@type": "Thing",
            "@id": "${level.link.url}",
            "name": "${level.title}"
          }
        }`
        )}
        ]
      }`}
      </script>
    </>
  );
};
