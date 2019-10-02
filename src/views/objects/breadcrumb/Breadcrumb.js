// @flow

import * as React from "react";
import cx from "classnames";
import "./breadcrumb.scss";

type Props = {
  levels.title: string,
  levels.url: string,
  metadata.contextClass: ?string,
  metadata.additionalClasses: ?Array<mixed>,
};

// TODO: "context" was passed in the macro

const Breadcrumb = (props: Props) => {
  const { prop1, prop2 } = props;

  const BreadcrumbClass = cx(
    "o-breadcrumb",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Breadcrumb--prop1": prop1
    }
  );

  const lastLevel = levels.length + 1;

  return (
    <Fragment>
      <ol className={BreadcrumbClass}>
        {props.levels.map((level, index) => (
          <li
            className="o-breadcrumb__level wow fadeInUp"
            data-wow-delay={index > 0 && (index * 0.15)`s`}
          >
            <a
              className="o-breadcrumb__link"
              href={level.url && !lastLevel}
            >
              {level.title}
            </a>
          </li>
        ))}
      </ol>
      // TODO: fix %for
      {/* <pre> */}
      <script type="application/ld+json">
        {`
			"@context": "http://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				${props.levels.map(
          (level, index) =>
            ({
              "@type": "ListItem",
              position: index,
              item: {
                "@type": "Thing",
                "@id": `${context._SITE["hosturl"]}${context._SITE["baseurl"]}${
                  level === lastLevel ? context._SITE["rurl"] : level.url
                }`,
                name: level.title
              }
            }(index !== lastLevel) && ",")
        )}
			]
		`}
      </script>
      {/* </pre> */}
    </Fragment>
  );
};

Breadcrumb.defaultProps = {
  prop1: 2
};

export default Breadcrumb;
