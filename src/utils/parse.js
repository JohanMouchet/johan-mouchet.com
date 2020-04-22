// @flow

import DOMPurify from "dompurify";
import HTMLReactParser from "html-react-parser";

const parse = (html: string) => HTMLReactParser(DOMPurify.sanitize(html));

export default parse;
