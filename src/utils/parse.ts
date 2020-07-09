import DOMPurify from "dompurify";
import HTMLReactParser from "html-react-parser";

/**
 * Converts an HTML string to a sanitize JSX element
 *
 * @param html The HTML string to parse
 * @param HTMLReactParserOptions [HTMLReactParser](https://github.com/remarkablemark/html-react-parser) parsing options
 * @param DOMPurifyConfig [DOMPurify](https://github.com/cure53/DOMPurify) sanitizing options
 */

const parse = (
  html: string,
  /* eslint-disable @typescript-eslint/no-explicit-any */
  HTMLReactParserOptions?: {
    [key: string]: any;
  },
  DOMPurifyConfig?: {
    [key: string]: any;
  }
  /* eslint-enable */
): React.ReactNode =>
  HTMLReactParser(
    DOMPurify.sanitize(html, DOMPurifyConfig || {}),
    HTMLReactParserOptions
  );

export default parse;
