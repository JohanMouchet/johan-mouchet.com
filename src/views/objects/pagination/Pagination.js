// @flow

import * as React from "react";
import cx from "classnames";
import "./pagination.scss";

type LinkProps = {
  current: Boolean,
  first: Boolean,
  prev: Boolean,
  next: Boolean,
  last: Boolean,
  link: string
};

const Link = (props: LinkProps, children: Node) => {
  const { current, first, prev, next, last, link } = props;

  const linkClass = cx("o-pagination__index", {
    "is--active": current,
    "o-pagination__index--first": first,
    "o-pagination__index--prev": prev,
    "o-pagination__index--next": next,
    "o-pagination__index--last": last
  });

  return (
    <li className={linkClass}>
      <a className="o-pagination__link" href={link}>
        {children}
      </a>
    </li>
  );
};

type IconProps = {
  first: Boolean,
  prev: Boolean,
  next: Boolean,
  last: Boolean
};

const Icon = (props: IconProps) => {
  const { first, prev, next, last } = props;

  const iconClass = cx("o-pagination__icon", "material-icons", "wow", {
    fadeInLeft: first || prev,
    fadeInRight: next || last
  });

  return (
    <i className={iconClass} data-wow-delay={(first || last) && ".15s"}>
      {first && "first_page"}
      {prev && "chevron_left"}
      {next && "chevron_right"}
      {last && "last_page"}
    </i>
  );
};

type Props = {
  range: number,
  current: number,
  links: Array
};

const Pagination = (props: Props) => {
  const { range, current, links } = props;

  const PaginationClass = cx(
    "o-pagination",
    props.metadata.contextClass,
    props.metadata.additionalClasses
  );

  // TODO: contextClass()

  // [1(current), 2, 3, upper, ..., 12, >, >>]
  // [<, 1(lower), 2, 3, 4(current), 5, 6, 7(upper),..., 12, >, >>]
  // [<<, <, ..., 2(lower), 3, 4, 5(current), 6, 7, 8(upper), ..., 12, >, >>]
  //					 [<<, <, ..., 6(lower), 7, 8, 9(current), 10, 11, 12(upper), >]
  // 															[<<, <, ..., 9(lower), 10, 11, 12(current)]

  const current = props.current;
  const range = props.range;
  const lower = current - range;
  const upper = current + range;
  const linksLength = links.length;

  return (
    <ol className={PaginationClass}>
      {/* first: lower > 1 */}
      {/* prev: current > 1 */}

      {links.map((link, index) => {
        // TODO: start at 1
        //
        // ...: lower > 2
        // lowerRange: index < current
        // current
        // upperRange: index > current
        // ...: upper < linksLength
        // last:
        //
        <Link href={link} first>
          <Icon first />
        </Link>;
      })}

      {/* next: current < linksLength */}
      {/* last: upper < linksLength */}
    </ol>
  );
};

export default Pagination;
