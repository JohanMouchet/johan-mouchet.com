import { parse } from "./parse";

it("Converts an HTML string to JSX (through html-react-parser)", () =>
  expect(parse(`<p>string</p>`)).toStrictEqual(<p>string</p>));

it("Strips out dangerous HTML (through dompurify)", () =>
  expect(parse(`<p><script>alert("unsafe")</script>safe</p>`)).toStrictEqual(
    <p>safe</p>
  ));
