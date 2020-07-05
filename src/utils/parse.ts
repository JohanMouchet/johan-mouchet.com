import DOMPurify from "dompurify";
import HTMLReactParser from "html-react-parser";

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
