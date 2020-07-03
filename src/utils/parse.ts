import DOMPurify from "dompurify";
import HTMLReactParser from "html-react-parser";

const parse = (
  html: string,
  HTMLReactParserOptions?: {
    [key: string]: any;
  },
  DOMPurifyConfig?: {
    [key: string]: any;
  }
): React.ReactNode =>
  HTMLReactParser(
    DOMPurify.sanitize(html, DOMPurifyConfig || {}),
    HTMLReactParserOptions
  );

export default parse;
