import React from "react";
import { parse } from ".";

it("Converts an HTML string to JSX (through html-react-parser)", () =>
  expect(
    parse(
      /* html */
      `<p>string</p>`
    )
  ).toStrictEqual(<p>string</p>));

it("Strips out dangerous HTML (through dompurify)", () =>
  expect(
    parse(
      /* html */
      `<p><script>alert("unsafe")</script>safe</p>`
    )
  ).toStrictEqual(<p>safe</p>));
