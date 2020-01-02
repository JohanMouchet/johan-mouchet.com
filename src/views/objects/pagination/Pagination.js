// // @flow

// import * as React from "react";
// import cx from "classnames";
// import "./Pagination.scss";

// type LinkProps = {
//   current: boolean,
//   first: boolean,
//   prev: boolean,
//   next: boolean,
//   last: boolean,
//   link: string,
//   children?: Node
// };

// const Link = (props: LinkProps) => {
//   const { current, first, prev, next, last, link, children } = props;

//   const classNames = cx(
//     "o-pagination__index",
//     current && "is--active",
//     first && "o-pagination__index--first",
//     prev && "o-pagination__index--prev",
//     next && "o-pagination__index--next",
//     last && "o-pagination__index--last"
//   );

//   return (
//     <li className={classNames}>
//       <a className="o-pagination__link" href={link}>
//         {children}
//       </a>
//     </li>
//   );
// };

// type IconProps = {
//   first: boolean,
//   prev: boolean,
//   next: boolean,
//   last: boolean
// };

// const Icon = (props: IconProps) => {
//   const { first, prev, next, last } = props;

//   const classNames = cx(
//     "o-pagination__icon",
//     "material-icons",
//     "wow",
//     (first || prev) && "fadeInLeft",
//     (next || last) && "fadeInRight"
//   );

//   return (
//     <i className={classNames} data-wow-delay={(first || last) && ".15s"}>
//       {first && "first_page"}
//       {prev && "chevron_left"}
//       {next && "chevron_right"}
//       {last && "last_page"}
//     </i>
//   );
// };

// type Props = {
//   range: number,
//   current: number,
//   links: Array<string>,
//   className?: string | Array | Object
// };

// const Pagination = (props: Props) => {
//   const { range, current, links, className } = props;

//   const classNames = cx("o-pagination", className);

//   // TODO: contextClass()

//   const lower = current - range;
//   const upper = current + range;
//   const linksLength = links.length;

//   //     [<, 1, 2(current), 3, 4, 5(upper), ..., 12, >, >>]
//   // [<<, <, ..., 2(lower), 3, 4, 5(current), 6, 7, 8(upper), ..., 12, >, >>]
//   //           [<<, <, ..., 6(lower), 7, 8, 9(current), 10, 11, 12(upper), >]

//   return !links ? null : (
//     <ol className={classNames}>
//       {/* first: lower > 1 */}
//       {/* prev: current > 1 */}

//       {links.map((link, index) => {
//         // TODO: start at 1
//         // TODO: use key
//         //
//         // ...: lower > 2
//         // lowerRange: index < current
//         // current
//         // upperRange: index > current
//         // ...: upper < linksLength - 2
//         // last: upper < linksLength - 1
//         //
//         // <Link href={link} first>
//         //   <Icon first />
//         // </Link>
//       })}

//       {/* next: current < linksLength */}
//       {/* last: upper < linksLength */}
//     </ol>
//   );
// };

// export default Pagination;
