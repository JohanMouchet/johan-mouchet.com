// @flow

import * as React from "react";
import cx from "classnames";
import "./breadcrumb.scss";

type Props = {
  levels: [
    {
      title: string,
      url: string
    }
  ],
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Breadcrumb = (props: Props) => {
  const { levels, metadata } = props;

  const BreadcrumbClass = cx(
    "o-breadcrumb",
    metadata.contextClass,
    metadata.additionalClasses
  );

  const lastLevel = levels.length - 1;
  return (
    <>
      <ol className={BreadcrumbClass}>
        {levels.map((level, index) => (
          <li
            className="o-breadcrumb__level wow fadeInUp"
            data-wow-delay={index > 0 && (index * 0.15)`s`}
          >
            <a className="o-breadcrumb__link" href={level.url && !lastLevel}>
              {level.title}
            </a>
          </li>
        ))}
      </ol>
      {/* TODO: check if work? */}
      {/* <pre> */}
      <script type="application/ld+json">
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
      </script>
      {/* </pre> */}
    </>
  );
};

export default Breadcrumb;
