import * as React from "react";
import cx from "classnames";
import "./Breadcrumb.scss";

type Props = {
  levels: [
    {
      title: string;
      url: string;
    }
  ];
  className?: string | Array<string> | Object;
};

const Breadcrumb = ({ levels, className }: Props) => {
  const classNames = cx("o-breadcrumb", className);
  const lastLevel = levels?.length - 1;

  return !levels ? null : (
    <>
      <ol className={classNames}>
        {levels.map((level, index) => (
          <li
            className="o-breadcrumb__level u-animation u-animation--fade-in-up"
            style={{ animationDelay: index > 0 && index * 0.15 + "s" }}
            key={level.url}
          >
            <a
              className="o-breadcrumb__link"
              href={index !== lastLevel && level.url}
            >
              {level.title}
            </a>
          </li>
        ))}
      </ol>
      {/* TODO: check if work? */}
      {/* <pre> */}
      {/* <script type="application/ld+json">
       {`
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
      ${levels.map(
         (level, index) =>
           ({
             "@type": "ListItem",
             position: index,
             item: {
               "@type": "Thing",
               "@id": level.url,
               name: level.title
             }
           }(index !== lastLevel) && ",")
       )}
      ]
      `}
      </script> */}
      {/* </pre> */}
    </>
  );
};

export default Breadcrumb;
