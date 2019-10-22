import * as React from "react";
import { Default } from "../layouts";
import {
  Blockquote,
  Label,
  Field,
  Toggle,
  File,
  Select,
  Textarea,
  Range,
  Button,
  ButtonSocial,
  ButtonSocialBadge,
  Card,
  Figure,
  Breadcrumb,
  Tabs,
  Accordion,
  Pagination,
  Alert,
  ProgressBar,
  Badge,
  FootnotesReference,
  FootnotesNotes,
  Loader,
  Notice
} from "../objects";
import { ReactComponent as IconFacebook } from "../../assets/images/icons/simple-icons/facebook.svg";
import { ReactComponent as IconGooglePlus } from "../../assets/images/icons/simple-icons/googleplus.svg";
import { ReactComponent as IconLinkedIn } from "../../assets/images/icons/simple-icons/linkedin.svg";
import { ReactComponent as IconPinterest } from "../../assets/images/icons/simple-icons/pinterest.svg";
import { ReactComponent as IconTwitter } from "../../assets/images/icons/simple-icons/twitter.svg";

const StyleGuide = () => {
  return (
    <Default
      metadata={{
        id: "styleguide",
        title: "Johan Mouchet - Styleguide",
        description:
          "Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications."
      }}
    >
      <>
        <div className="container container--xl" id="styleGuide">
          <div className="grid">
            <aside className="l-aside l-aside--capped cell cell--12-@xs cell--2-@md">
              <h2>Table of content</h2>
              <ol className="o-list--lg o-list--hStriped o-list--linkBlock">
                <li>
                  <a href="style-guide#sg-colorPalette">Color palette</a>
                </li>
                <li>
                  <a href="style-guide#sg-typography">Typography</a>
                </li>
                <li>
                  <a href="style-guide#sg-blockquote">Blockquote</a>
                </li>
                <li>
                  <a href="style-guide#sg-grid">Grid</a>
                </li>
                <li>
                  <a href="style-guide#sg-form">Form</a>
                </li>
                <li>
                  <a href="style-guide#sg-button">Button</a>
                </li>
                <li>
                  <a href="style-guide#sg-list">List</a>
                </li>
                <li>
                  <a href="style-guide#sg-table">Table</a>
                </li>
                <li>
                  <a href="style-guide#sg-card">Card</a>
                </li>
                <li>
                  <a href="style-guide#sg-figure">Figure</a>
                </li>
                <li>
                  <a href="style-guide#sg-breadcrumb">Breadcrumb</a>
                </li>
                <li>
                  <a href="style-guide#sg-tabs">Tabs</a>
                </li>
                <li>
                  <a href="style-guide#sg-accordion">Accordion</a>
                </li>
                <li>
                  <a href="style-guide#sg-pagination">Pagination</a>
                </li>
                <li>
                  <a href="style-guide#sg-alert">Alert</a>
                </li>
                <li>
                  <a href="style-guide#sg-tooltip">Tooltip</a>
                </li>
                <li>
                  <a href="style-guide#sg-progress-bar">Progress bar</a>
                </li>
                <li>
                  <a href="style-guide#sg-badge">Badge</a>
                </li>
                <li>
                  <a href="style-guide#sg-loader">Loader</a>
                </li>
                <li>
                  <a href="style-guide#sg-footnotes">Footnotes</a>
                </li>
                <li>
                  <a href="style-guide#sg-guidelines">Coding guidelines</a>
                </li>
              </ol>
            </aside>

            <main className="l-main cell cell--12-@xs cell--10-@md u-counter">
              <h1>
                Style guide <i className="heading-underline wow"></i>
              </h1>
              <article
                id="sg-colorPalette"
                className="l-article l-article--noTSpacing"
              >
                <h2
                  className="u-counter__StyleGuide-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-colorPalette"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Color palette
                </h2>
                <div className="grid color-palette-row">
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-primary-lighter</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--primary-lighter"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-primary</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--primary"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-primary-darker</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--primary-darker"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>

                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-secondary-lighter</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--secondary-lighter"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-secondary</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--secondary"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-secondary-darker</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--secondary-darker"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>

                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-gray-lighter</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--gray-lighter"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-gray</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--gray"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--4-@sm">
                    <Card
                      banner
                      body='<div className="sg-swatch__color-code"></div><code className="sg-swatch__color-name u-select--all">$color-gray-darker</code>'
                      metadata={{
                        contextClass: "sg-swatch",
                        additionalClasses: ["sg-swatch--gray-darker"],
                        modifierClasses: ["sm "]
                      }}
                    />
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-typography" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-typography"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Typography
                </h2>
                <div className="grid">
                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--3-@md">
                    <Card
                      header='<span className="sg-typeface__glyph">Aa</span>'
                      body='<h3>Primary typeface</h3><p className="sg-typeface__name"></p>'
                      metadata={{
                        context: "sg-typeface",
                        additionalClasses: ["sg-typeface--font-primary"]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--3-@md">
                    <Card
                      header='<span className="sg-typeface__glyph">Aa</span>'
                      body='<h3>Secondary typeface</h3><p className="sg-typeface__name"></p>'
                      metadata={{
                        context: "sg-typeface",
                        additionalClasses: ["sg-typeface--font-secondary"]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--3-@md">
                    <Card
                      header='<span className="sg-typeface__glyph">Aa</span>'
                      body='<h3>Tertiary typeface</h3><p className="sg-typeface__name"></p>'
                      metadata={{
                        context: "sg-typeface",
                        additionalClasses: ["sg-typeface--font-tertiary"]
                      }}
                    />
                  </div>
                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--3-@md">
                    <Card
                      header='<span className="sg-typeface__glyph">Aa</span>'
                      body='<h3>Quaternary typeface</h3><p className="sg-typeface__name"></p>'
                      metadata={{
                        context: "sg-typeface",
                        additionalClasses: ["sg-typeface--font-quaternary"]
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid--lgGutter-@xs">
                  <div className="cell cell--12-@xs cell--5-@md">
                    <h3>Headings</h3>
                    <h1 className="u-heading--xl">
                      Heading xl <br />
                      <code>.u-heading--xl</code>
                    </h1>
                    <h1 className="u-heading--lg">
                      Heading lg <code>.u-heading--lg</code>
                    </h1>
                    <h1>
                      Heading 1 <code>.u-heading--1</code>
                      <i className="heading-underline wow"></i>{" "}
                      <code>&gt; .heading-underline--c|r</code>
                    </h1>
                    <h2>
                      Heading 2 <code>.u-heading--2</code>
                    </h2>
                    <h3>
                      Heading 3 <code>.u-heading--3</code>
                    </h3>
                    <h4>
                      Heading 4 <code>.u-heading--4</code>
                    </h4>
                    <h5>
                      Heading 5 <code>.u-heading--5</code>
                    </h5>
                    <h6>
                      Heading 6 <code>.u-heading--6</code>
                    </h6>
                    <h6 className="u-heading--sm">
                      Heading sm <code>.u-heading--sm</code>
                    </h6>
                    <h6 className="u-heading--xs">
                      Heading xs <code>.u-heading--xs</code>
                    </h6>
                  </div>

                  <div className="cell cell--12-@xs cell--7-@md">
                    <h3>Paragraphs</h3>
                    <p>
                      Grumpy wizards make toxic brew for the evil queen and
                      jack. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Fuga, distinctio? Aliquam, voluptas. Aspernatur
                      quaerat consequatur laudantium facilis placeat beatae
                      autem.
                    </p>

                    <h3>Text Formats</h3>

                    <table className="o-table o-table--v-sm u-vr--top-0-@xs">
                      <thead>
                        <tr>
                          <th>Element</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <code>&lt;a&gt;</code>
                          </td>
                          <td>
                            <a href="#">Link text</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;strong&gt;</code>
                          </td>
                          <td>
                            <strong>Strong text</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;em&gt;</code>
                          </td>
                          <td>
                            <em>Emphasized text</em>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;small&gt;</code>
                          </td>
                          <td>
                            <small>Small text</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;sup&gt;</code>
                          </td>
                          <td>
                            Text <sup>Superscript</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;sub&gt;</code>
                          </td>
                          <td>
                            Text <sub>Subscript</sub>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;code&gt;</code>
                          </td>
                          <td>
                            <code>Code text</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;kbd&gt;</code>
                          </td>
                          <td>
                            <kbd>Keyboard text</kbd>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;abbr&gt;</code>
                          </td>
                          <td>
                            <abbr title="Abbreviation">Abbreviation text</abbr>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;mark&gt;</code>
                          </td>
                          <td>
                            <mark>Marked text</mark>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>&lt;hr&gt;</code>
                          </td>
                          <td>
                            <hr
                              className="wow"
                              style={{ marginTop: "0", marginBottom: "0" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--primary
                            </code>
                          </td>
                          <td>
                            <span className="u-color--primary">
                              Primary text
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--secondary
                            </code>
                          </td>
                          <td>
                            <span className="u-color--secondary">
                              Secondary text
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--dimmed
                            </code>
                          </td>
                          <td>
                            <span className="u-color--dimmed">Dimmed text</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--success
                            </code>
                          </td>
                          <td>
                            <span className="u-color--success">
                              Success text
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--info
                            </code>
                          </td>
                          <td>
                            <span className="u-color--info">Info text</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--warning
                            </code>
                          </td>
                          <td>
                            <span className="u-color--warning">
                              Warning text
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code className="u-select--all">
                              .u-color--danger
                            </code>
                          </td>
                          <td>
                            <span className="u-color--danger">Danger text</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-blockquote" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-blockquote"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Blockquote
                </h2>
                <Blockquote
                  quote="Design is not just what it looks like and feels like. Design is how it works."
                  cite='<a href="#">Steve Jobs</a>'
                />

                <p>
                  <em>Optional:</em> <code>&gt; .o-blockquote__cite</code>
                </p>

                <h3>
                  Pulled <code>&amp;.o-blockquote--pulled</code>
                </h3>
                <Blockquote
                  quote="Design is not just what it looks like and feels like. Design is how it works."
                  cite='<a href="#">Steve Jobs</a>'
                  metadata={{
                    modifierClasses: ["pulled"]
                  }}
                />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, cupiditate, rerum. Porro fuga laudantium tempore!
                  Illum modi natus, reiciendis? Saepe quos id sunt. Iste
                  officiis facilis, velit facere culpa iusto. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Hic autem laborum,
                  iusto quis sapiente! Corporis quia sit doloremque harum modi
                  distinctio perspiciatis molestiae a quo soluta quidem, fugiat
                  ad tempora. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Harum delectus vero, cupiditate iusto
                  voluptates commodi excepturi, dolores ipsa perspiciatis quo
                  officia numquam eveniet praesentium, ad expedita. Rem
                  voluptatem ipsam temporibus. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-grid" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-grid" className="u-anchor__link">
                    #
                  </a>
                  Grid
                </h2>
                <p>
                  <a href="https://github.com/JohanMouchet/flexboxgrid-sass">
                    Flexbox Grid Sass
                  </a>
                  . Look at a{" "}
                  <a href="http://codepen.io/johanmouchet/pen/ORKLdm">demo</a>
                </p>
                <p>
                  <strong>Columns:</strong> 12
                  <br />
                  <strong>Gutters width:</strong> <code>1rem</code>
                  <br />
                  <strong>Nestable:</strong> Yes
                  <br />
                  <strong>Direction:</strong> Row
                </p>
                <table className="o-table o-table--responsive o-table--responsive-shadow">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Extra small</th>
                      <th>Small</th>
                      <th>Medium</th>
                      <th>Large</th>
                      <th>Extra large</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Device</th>
                      <td>Phone</td>
                      <td>Tablet</td>
                      <td>Desktop</td>
                      <td>Large desktop</td>
                      <td>Extra large desktop</td>
                    </tr>
                    <tr>
                      <th scope="row">Breakpoint</th>
                      <td>&gt; 0</td>
                      <td>&ge; 425px</td>
                      <td>&ge; 768px</td>
                      <td>&ge; 1024px</td>
                      <td>&ge; 1280px</td>
                    </tr>
                    <tr>
                      <th scope="row">Suffix</th>
                      <td>
                        <code>@xs</code>
                      </td>
                      <td>
                        <code>@sm</code>
                      </td>
                      <td>
                        <code>@md</code>
                      </td>
                      <td>
                        <code>@lg</code>
                      </td>
                      <td>
                        <code>@xl</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>Syntax</h3>
                <pre>
                  <code>
                    &lt;div className="container <i>container--*</i>"&gt;
                    &lt;div className="grid <i>g--modifier-*</i>"&gt; &lt;div
                    className="cell <i>c--modifier-*</i>"&gt;&lt;/div&gt;
                    &lt;/div&gt; &lt;/div&gt;
                  </code>
                </pre>
                <em>Responsive:</em> *<code>@xs|@sm|@md|@lg|@xl</code>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-form" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-form" className="u-anchor__link">
                    #
                  </a>
                  Form
                </h2>
                <p>
                  <em>Suggestion:</em> use the <a href="#grid">grid</a> and
                  optionally fieldsets for layout.
                </p>
                <p>
                  <em>Recommendation:</em> use input types (
                  <code>[type="email"]</code>, <code>[type="tel"]</code> etc.)
                  for client-side form validation.
                </p>

                <form className="o-form" method="post" action="">
                  <fieldset className="o-form__fieldset">
                    <legend className="o-form__legend">Fieldset legend</legend>
                    <div className="grid">
                      <div className="cell cell--12-@xs cell--6-@sm">
                        <div className="o-form__group">
                          <Label id="input-1" text="Text input" />

                          <Field
                            id="input-1"
                            type="text"
                            name="input-1"
                            metadata={{
                              attributes: {
                                placeholder: "Username",
                                required: ""
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="cell cell--12-@xs cell--6-@sm">
                        <div className="o-form__group">
                          <Label id="input-2" text="Text input disabled" />

                          <Field
                            id="input-2"
                            type="text"
                            name="input-2"
                            metadata={{
                              attributes: {
                                placeholder: "Disabled",
                                disabled: ""
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="cell cell--12-@xs cell--6-@sm">
                        <div className="o-form__group">
                          <Label id="select-1" text="Select" />

                          <Select
                            id="select-1"
                            name="select-1"
                            options={[
                              {
                                text: "Option 1",
                                value: "option-1"
                              },
                              {
                                text: "Option 2",
                                value: "option-2"
                              },
                              {
                                text: "Option 3",
                                value: "option-3"
                              }
                            ]}
                          />
                        </div>
                      </div>

                      <div className="cell cell--12-@xs cell--6-@sm">
                        <div className="o-form__group">
                          <Label id="input-3" text="Search" />

                          <Field
                            id="input-3"
                            type="search"
                            name="input-3"
                            metadata={{
                              attributes: {
                                placeholder: "Keyword"
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="cell cell--12-@xs">
                        <div className="o-form__group">
                          <Textarea
                            name="textarea-1"
                            metadata={{
                              attributes: {
                                rows: "4",
                                placeholder: "Textarea"
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="cell cell--12-@xs cell--6-@md">
                        <div className="o-form__group">
                          <Label
                            id="radio-1"
                            text="Radio"
                            metadata={{
                              modifierClasses: ["block"]
                            }}
                          />

                          <Toggle
                            id="radio-1"
                            type="radio"
                            name="radioChoice"
                            value="option-1"
                            text="Option 1"
                            metadata={{
                              attributes: {
                                checked: ""
                              }
                            }}
                          />

                          <Toggle
                            type="radio"
                            name="radioChoice"
                            value="option-2"
                            text="Option 2"
                          />

                          <Toggle
                            type="radio"
                            name="radioChoice"
                            value="disabled"
                            text="Disabled"
                            metadata={{
                              attributes: {
                                disabled: ""
                              }
                            }}
                          />
                        </div>

                        <div className="o-form__group">
                          <Label
                            id="checkbox-1"
                            text="Checkbox"
                            metadata={{
                              modifierClasses: ["block"]
                            }}
                          />

                          <Toggle
                            id="checkbox-1"
                            type="checkbox"
                            name="checkboxChoice"
                            value="option-1"
                            text="Option 1"
                            metadata={{
                              attributes: {
                                checked: ""
                              }
                            }}
                          />

                          <Toggle
                            type="checkbox"
                            name="checkboxChoice"
                            value="option-2"
                            text="Option 2"
                          />

                          <Toggle
                            type="checkbox"
                            name="checkboxChoice"
                            value="disabled"
                            text="Disabled"
                            metadata={{
                              attributes: {
                                disabled: ""
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="cell cell--12-@xs cell--6-@md">
                        <div className="o-form__group">
                          <Label id="range-1" text="Range" />
                          <Range id="range-1" type="range" name="range-1" />
                        </div>

                        <div className="o-form__group">
                          <Label
                            id="file-1"
                            text="File"
                            metadata={{
                              modifierClasses: ["block"]
                            }}
                          />

                          <File
                            id="file-1"
                            name="file-1"
                            text="Choose a file"
                            metadata={{
                              attributes: {
                                multiple: ""
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="o-form__fieldset">
                    <legend className="o-form__legend">
                      Form field states
                    </legend>
                    <p>
                      <code>.o-form__group</code>{" "}
                      <code>&amp;--success|error|warning</code>
                      <br />
                      <br />
                      <em>Recommendation:</em> use{" "}
                      <a href="style-guide#sg-alert">alerts</a> for state
                      messages
                    </p>
                    <div className="grid">
                      <div className="cell cell--12-@xs cell--4-@sm">
                        <div className="o-form__group o-form__group--success">
                          <Label id="input-success" text="Success" />

                          <Field
                            id="input-success"
                            type="text"
                            name="input-success"
                            metadata={{
                              attributes: {
                                placeholder: "Text"
                              }
                            }}
                          />

                          <Alert
                            type="success"
                            content="<strong>Success</strong> message"
                            closable
                          />
                        </div>
                      </div>
                      <div className="cell cell--12-@xs cell--4-@sm">
                        <div className="o-form__group o-form__group--error">
                          <Label id="input-error" text="Error" />

                          <Field
                            id="input-error"
                            type="text"
                            name="input-error"
                            metadata={{
                              attributes: {
                                placeholder: "Text"
                              }
                            }}
                          />

                          <Alert
                            type="danger"
                            content="<strong>Error</strong> message"
                            closable
                          />
                        </div>
                      </div>
                      <div className="cell cell--12-@xs cell--4-@sm">
                        <div className="o-form__group o-form__group--warning">
                          <Label id="input-warning" text="Warning" />

                          <Field
                            id="input-warning"
                            type="text"
                            name="input-warning"
                            metadata={{
                              attributes: {
                                placeholder: "Text"
                              }
                            }}
                          />

                          <Alert
                            type="warning"
                            content="<strong>Warning</strong> message"
                            closable
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-button" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-button" className="u-anchor__link">
                    #
                  </a>
                  Button
                </h2>
                <div className="grid">
                  <div className="cell cell--12-@xs cell--3-@sm u-vr--bottom-1-@xs u-vr--bottom-0-@sm">
                    <Button type="anchor" url="#">
                      Button
                    </Button>

                    <code>.o-button</code>
                  </div>

                  <div className="cell cell--12-@xs cell--3-@sm u-vr--bottom-1-@xs u-vr--bottom-0-@sm">
                    <Button
                      type="anchor"
                      url="#"
                      metadata={{
                        modifierClasses: ["primary"]
                      }}
                    >
                      Button
                    </Button>

                    <code>&amp;.o-button--primary</code>
                  </div>

                  <div className="cell cell--12-@xs cell--3-@sm u-vr--bottom-1-@xs u-vr--bottom-0-@sm">
                    <Button
                      type="anchor"
                      url="#"
                      metadata={{
                        modifierClasses: ["secondary"]
                      }}
                    >
                      Button
                    </Button>

                    <code>&amp;.o-button--secondary</code>
                  </div>

                  <div className="cell cell--12-@xs cell--3-@sm u-vr--bottom-1-@xs u-vr--bottom-0-@sm">
                    <Button
                      type="anchor"
                      url="#"
                      metadata={{
                        attributes: {
                          disabled: ""
                        }
                      }}
                    >
                      Button
                    </Button>

                    <code>&amp;[disabled]</code>
                  </div>
                </div>

                <p>
                  <em>Modifiers:</em> <code>&amp;.o-button--sm</code>,{" "}
                  <code>&amp;.o-button--lg</code>,{" "}
                  <code>&amp;.o-button--block</code>
                </p>
                <p>
                  <em>Optional:</em> <code>&gt; .o-button-spacer</code>
                </p>

                <h3>
                  Social button <code>&amp;.o-button--social</code>
                </h3>
                <p>
                  Based on{" "}
                  <a href="https://github.com/bradvin/social-share-urls/">
                    Social Share URLs
                  </a>{" "}
                  using <a href="https://simpleicons.org/">Simple Icons</a> set
                  (see on{" "}
                  <a href="https://github.com/danleech/simple-icons">GitHub</a>
                  ). Replace{" "}
                  <code>
                    <i>{`{URL}`}</i>
                  </code>
                  ,{" "}
                  <code>
                    <i>{`{TITLE}`}</i>
                  </code>{" "}
                  and{" "}
                  <code>
                    <i>{`{DESCRIPTION}`}</i>
                  </code>
                  .
                </p>

                <p>
                  <em>Modifiers:</em>{" "}
                  <code>
                    &amp;.o-button--social-<i>{`{BRAND}`}</i>
                  </code>
                </p>
                <p>
                  <em>Optional:</em>
                  <code>&gt; .o-button__icon</code>,{" "}
                  <code>&gt; .o-button__text</code>,{" "}
                  <code>&gt; .o-button__counter</code>
                </p>

                <h4>Share</h4>
                <div className="grid">
                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="https://www.facebook.com/sharer/sharer.php?u={URL}&t={TITLE}"
                      icon={<IconFacebook />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Share on Facebook"
                        }
                      }}
                    >
                      Share
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="https://twitter.com/intent/tweet?source={URL}&text={TITLE}:%20{URL}"
                      icon={<IconTwitter />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Tweet this"
                        }
                      }}
                    >
                      Tweet
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="https://plus.google.com/share?url={URL}"
                      icon={<IconGooglePlus />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Share on Google+"
                        }
                      }}
                    >
                      Share
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="http://pinterest.com/pin/create/button/?url={URL}&description={DESCRIPTION}"
                      icon={<IconPinterest />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Pin it"
                        }
                      }}
                    >
                      Pin it
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="http://www.linkedin.com/shareArticle?mini=true&url={URL}&title={TITLE}&summary={DESCRIPTION}&source={URL}"
                      icon={<IconLinkedIn />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Share on LinkedIn"
                        }
                      }}
                    >
                      Share
                    </ButtonSocial>
                  </div>
                </div>

                <div className="grid">
                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="https://www.facebook.com/sharer/sharer.php?u={URL}&t={TITLE}"
                      icon={<IconFacebook />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Share on Facebook"
                        },
                        modifierClasses: ["social-facebook"]
                      }}
                    >
                      Share
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="https://twitter.com/intent/tweet?source={URL}&text={TITLE}:%20{URL}"
                      icon={<IconTwitter />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Tweet this"
                        },
                        modifierClasses: ["social-twitter"]
                      }}
                    >
                      Tweet
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="https://plus.google.com/share?url={URL}"
                      icon={<IconGooglePlus />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Share on Google+"
                        },
                        modifierClasses: ["social-googleplus"]
                      }}
                    >
                      Share
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="http://pinterest.com/pin/create/button/?url={URL}&description={DESCRIPTION}"
                      icon={<IconPinterest />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Pin it"
                        },
                        modifierClasses: ["social-pinterest"]
                      }}
                    >
                      Pin it
                    </ButtonSocial>
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocial
                      url="http://www.linkedin.com/shareArticle?mini=true&url={URL}&title={TITLE}&summary={DESCRIPTION}&source={URL}"
                      icon={<IconLinkedIn />}
                      counter={10}
                      metadata={{
                        attributes: {
                          title: "Share on LinkedIn"
                        },
                        modifierClasses: ["social-linkedin"]
                      }}
                    >
                      Share
                    </ButtonSocial>
                  </div>
                </div>

                <h4>Follow</h4>
                <p>
                  <em>Modifier:</em> <code>&amp;.o-button--social-badge</code>
                </p>
                <div className="grid">
                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge url="{URL}" icon={<IconFacebook />} />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge url="{URL}" icon={<IconTwitter />} />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge url="{URL}" icon={<IconGooglePlus />} />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge url="{URL}" icon={<IconPinterest />} />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge url="{URL}" icon={<IconLinkedIn />} />
                  </div>
                </div>

                <div className="grid">
                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge
                      url="{URL}"
                      icon={<IconFacebook />}
                      metadata={{
                        modifierClasses: ["social-facebook"]
                      }}
                    />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge
                      url="{URL}"
                      icon={<IconTwitter />}
                      metadata={{
                        modifierClasses: ["social-twitter"]
                      }}
                    />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge
                      url="{URL}"
                      icon={<IconGooglePlus />}
                      metadata={{
                        modifierClasses: ["social-googleplus"]
                      }}
                    />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge
                      url="{URL}"
                      icon={<IconPinterest />}
                      metadata={{
                        modifierClasses: ["social-pinterest"]
                      }}
                    />
                  </div>

                  <div className="cell cell--6-@xs cell--@sm u-vr--bottom-1-@xs">
                    <ButtonSocialBadge
                      url="{URL}"
                      icon={<IconLinkedIn />}
                      metadata={{
                        modifierClasses: ["social-linkedin"]
                      }}
                    />
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-list" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-list" className="u-anchor__link">
                    #
                  </a>
                  List
                </h2>
                <div className="grid">
                  <div className="cell cell--12-@xs cell--6-@sm">
                    <h3>Unordered list</h3>
                    <ul>
                      <li>li 1</li>
                      <li>
                        li 2
                        <ul>
                          <li>child li 1</li>
                          <li>
                            child li 2
                            <ul>
                              <li>grandchild li 1</li>
                              <li>grandchild li 2</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@sm">
                    <h3>Ordered list</h3>
                    <ol>
                      <li>li 1</li>
                      <li>
                        li 2
                        <ol>
                          <li>child li 1</li>
                          <li>
                            child li 2
                            <ol>
                              <li>grandchild li 1</li>
                              <li>grandchild li 2</li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <p>
                    <em>Modifiers:</em> <code>&amp;.o-list--unstyled</code>,{" "}
                    <code>&amp;.o-list--inline</code>,{" "}
                    <code>&amp;.o-list--hStriped</code>,{" "}
                    <code>&amp;.o-list--vStriped</code>,{" "}
                    <code>&amp;.o-list--lg</code>,{" "}
                    <code>&amp;.o-list--linkBlock</code>,{" "}
                    <code>&amp;.o-list--hover</code>,{" "}
                    <code>&amp;.o-list--active &gt; li.is--active</code>
                  </p>

                  <div className="cell cell--12-@xs">
                    <h3>Description list</h3>
                    <dl>
                      <dt>Item 1 </dt>
                      <dd>Definition</dd>
                      <dt>Item 2</dt>
                      <dd>Definition</dd>
                    </dl>
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-table" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-table" className="u-anchor__link">
                    #
                  </a>
                  Table
                </h2>
                <p>
                  <em>Optional:</em> <code>&lt;thead&gt;</code>,{" "}
                  <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>
                </p>
                <p>
                  <em>Modifiers:</em> <code>&amp;.o-table--a-top</code>,{" "}
                  <code>&amp;.o-table--a-bottom</code>
                </p>
                <p>
                  <em>Suggestion:</em> use <code>.u-counter</code> to number
                  table rows
                </p>
                <div className="grid grid--lgGutter-@xs">
                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Default <code>.o-table</code>
                    </h3>
                    <table className="o-table">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$20</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Sum</td>
                          <td>$200</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Vertical <code>&amp;.o-table--vertical</code>
                    </h3>
                    <table className="o-table o-table--vertical">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Income</th>
                          <th>Outcome</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$150</td>
                          <td>$50</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$120</td>
                          <td>$40</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$50</td>
                          <td>$30</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$60</td>
                          <td>$10</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Striped <code>&amp;.o-table--striped</code>
                    </h3>
                    <table className="o-table o-table--striped">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Hover <code>&amp;.o-table--hover</code>
                    </h3>
                    <table className="o-table o-table--hover">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Responsive <code>&amp;.o-table--responsive</code>
                    </h3>
                    <p>
                      <em>Optional:</em>{" "}
                      <code>&amp;.o-table--responsive-shadow</code>
                      <br />
                      (Not compatible with <code>
                        .o-table--striped
                      </code> and <code>.o-table--hover</code>)
                    </p>
                    <table className="o-table o-table--responsive o-table--responsive-shadow">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Income</th>
                          <th>Outcome</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$150</td>
                          <td>$50</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$120</td>
                          <td>$40</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$50</td>
                          <td>$30</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$60</td>
                          <td>$10</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>Numerical column (JS)</h3>
                    <p>
                      <code>.js-table-numerical</code>{" "}
                      <code>th.js-table-numerical-col</code>
                      <br />
                      Right align a column that contain numbers.
                    </p>
                    <table className="o-table js-table-numerical">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th className="js-table-numerical-col">Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Small <code>&amp;.o-table--sm</code> <small>or</small>{" "}
                      <code>&amp;.o-table--v-sm</code> <small>and/or</small>{" "}
                      <code>&amp;.o-table--h-sm</code>
                    </h3>
                    <table className="o-table o-table--sm">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cell cell--12-@xs cell--6-@md">
                    <h3>
                      Large <code>&amp;.o-table--lg</code> <small>or</small>{" "}
                      <code>&amp;.o-table--v-lg</code> <small>and/or</small>{" "}
                      <code>&amp;.o-table--h-lg</code>
                    </h3>
                    <table className="o-table o-table--lg">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>January</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>February</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>$20</td>
                        </tr>
                        <tr>
                          <td>April</td>
                          <td>$50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-card" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-card" className="u-anchor__link">
                    #
                  </a>
                  Card
                </h2>
                <p>
                  <em>Optional:</em> <code>.cell.o-card-group &gt;</code>,{" "}
                  <code>&gt; .o-card__hr</code>
                </p>
                <p>
                  <em>Modifiers:</em> <code>&amp;.o-card--sm</code>,{" "}
                  <code>&amp;.o-card--lg</code>,{" "}
                  <code>&amp;.o-card--hover</code>,{" "}
                  <code>&amp;.o-card--active</code>,{" "}
                  <code>&amp;.o-card--forward</code>,{" "}
                  <code>&amp;.o-card--primary</code>,{" "}
                  <code>&amp;.o-card--secondary</code>,{" "}
                  <code>&amp;.o-card--banner-gradient</code>
                </p>
                <div className="grid">
                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--4-@md">
                    <Card
                      header="<h3>Card <code>.o-card__header</code></h3>"
                      body={`
										<p>
											<code>.o-card__body</code> <br />
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem dicta temporibus perspiciatis nesciunt accusamus cum, itaque at necessitatibus nostrum aut quo assumenda, culpa amet id. Suscipit provident, dolorem recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										</p>
										<p>
											Rem omnis distinctio nihil, neque sequi fugiat facilis, ducimus doloribus, officia iste laudantium quas veniam. Nulla facilis amet, expedita est aut aliquid.
										</p>`}
                      footer='<a href="#">Read more</a> <code>.o-card__footer</code>'
                    />
                  </div>

                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--4-@md">
                    <Card
                      header="<h3>Primary card</h3>"
                      body={`
										<span><sup className="u-heading--3">$</sup> <span className="u-heading--xl">3.99</span> <sub className="u-heading--sm">/month</sub></span>
										<hr className="o-card__hr wow" />
										<ul className="o-list--unstyled o-list--lg">
											<li>Unlimited storage</li>
											<li>Advanced Statistics</li>
											<li>24/7 Support</li>
										</ul>`}
                      footer='<a href="#" className="o-button">Upgrade</a>'
                      metadata={{
                        additionalClasses: ["u-align--center"],
                        modifierClasses: ["primary "]
                      }}
                    />
                  </div>

                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--4-@md">
                    <Card
                      header="<h3>Secondary card</h3>"
                      body={`
										<span><sup className="u-heading--3">$</sup> <span className="u-heading--xl">1.99</span> <sub className="u-heading--sm">/month</sub></span>
										<hr className="o-card__hr wow" />
										<ul className="o-list--unstyled o-list--lg">
											<li>25Go storage</li>
											<li>Basic statistics</li>
											<li>No support</li>
										</ul>`}
                      footer='<a href="#" className="o-button">Upgrade</a>'
                      metadata={{
                        additionalClasses: ["u-align--center"],
                        modifierClasses: ["secondary "]
                      }}
                    />
                  </div>

                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--4-@md">
                    <Card
                      bannerUrl="https://images.unsplash.com/photo-1464519046765-f6d70b82a0df?dpr=1&auto=format&crop=entropy&fit=crop&w=540&h=360&q=80"
                      header="<h3>Card with banner</h3>"
                      body="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem dicta temporibus perspiciatis nesciunt accusamus cum, itaque at necessitatibus nostrum aut quo assumenda, culpa amet id. Suscipit provident, dolorem recusandae.</p>"
                      footer='<a href="#">Read more</a>'
                      metadata={{
                        modifierClasses: ["banner-gradient "]
                      }}
                    />
                  </div>

                  <div className="o-card-group cell cell--12-@xs cell--6-@sm cell--4-@md">
                    <Card
                      banner="<h3>Card with title inside banner</h3>"
                      bannerUrl="https://images.unsplash.com/photo-1464518983192-0de439b5d517?dpr=1&auto=format&crop=entropy&fit=crop&w=540&h=360&q=80"
                      body="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem dicta temporibus perspiciatis nesciunt accusamus cum, itaque at necessitatibus nostrum aut quo assumenda, culpa amet id. Suscipit provident, dolorem recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis distinctio nihil, neque sequi fugiat facilis, ducimus doloribus, officia iste laudantium quas veniam. Nulla facilis amet, expedita est aut aliquid.</p>"
                      footer='<a href="#">Read more</a>'
                      metadata={{
                        modifierClasses: ["banner-gradient "]
                      }}
                    />
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-figure" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-figure" className="u-anchor__link">
                    #
                  </a>
                  Figure
                </h2>

                <Figure
                  src="https://images.unsplash.com/photo-1464519046765-f6d70b82a0df?dpr=1&auto=format&crop=entropy&fit=crop&w=540&h=360&q=80"
                  alt="Figure alt"
                  title="Figure title"
                  caption='Fig1. See on <a href="https://unsplash.com/photos/sTBdWFQKDHE">Unsplash</a>'
                />

                <p>
                  <em>Modifier:</em> <code>&amp;.o-figure--centered</code>
                </p>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-breadcrumb" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-breadcrumb"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Breadcrumb
                </h2>
                <Breadcrumb
                  levels={[
                    {
                      title: "Level 1",
                      url: "#"
                    },
                    {
                      title: "Level 2",
                      url: "#"
                    },
                    {
                      title: "Level 3",
                      url: "#"
                    }
                  ]}
                />
              </article>

              <hr className="l-article-separator" />

              <article id="sg-tabs" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-tabs" className="u-anchor__link">
                    #
                  </a>
                  Tabs (JS)
                </h2>
                <Tabs
                  tabs={[
                    {
                      thumb: "Tab 1",
                      panel:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    },
                    {
                      thumb: "Tab 2",
                      panel:
                        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
                    },
                    {
                      thumb: "Tab 3",
                      panel:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  ]}
                />
              </article>

              <hr className="l-article-separator" />

              <article id="sg-accordion" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-accordion" className="u-anchor__link">
                    #
                  </a>
                  Accordion (JS)
                </h2>
                <Accordion
                  items={[
                    {
                      thumb: "Lorem ipsum",
                      panel:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a voluptate sequi, exercitationem, corrupti recusandae reprehenderit, quasi voluptates dolorem omnis adipisci magnam maiores ducimus aut praesentium repellat! Laudantium iure, praesentium?"
                    },
                    {
                      thumb: "Dolor sit amet",
                      panel:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur maxime nulla corrupti tempora eaque neque fuga iure libero, mollitia corporis sunt eligendi, quod facere at. Inventore dolore, vitae aliquam."
                    },
                    {
                      thumb: "Consectetur adipisicing elit",
                      panel:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, temporibus, fugiat. Harum deserunt blanditiis iusto ea odio et id, quos, laudantium veniam mollitia animi obcaecati quas rerum, assumenda pariatur voluptatem?"
                    }
                  ]}
                />
                <p>
                  <em>Modifier:</em> <code>&amp;.is--active</code>
                </p>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-pagination" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-pagination"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Pagination
                </h2>
                <Pagination
                  range={3}
                  current={6}
                  links={[
                    "#1",
                    "#2",
                    "#3",
                    "#4",
                    "#5",
                    "#6",
                    "#7",
                    "#8",
                    "#9",
                    "#10",
                    "#11",
                    "#12"
                  ]}
                />
              </article>

              <hr className="l-article-separator" />

              <article id="sg-alert" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-alert" className="u-anchor__link">
                    #
                  </a>
                  Alert (JS)
                </h2>
                <p>
                  <code>.o-alert</code>. To show with{" "}
                  <code>&amp;.is--visible</code>
                </p>
                <p>
                  <em>Optional:</em> <code>&gt; .material-icons</code>
                </p>

                <h3>
                  Success <code>&amp;.o-alert--success</code>
                </h3>
                <Alert
                  type="success"
                  content="Indicates a successful or positive action."
                  closable
                />

                <h3>
                  Info <code>&amp;.o-alert--info</code>
                </h3>
                <Alert
                  type="info"
                  content="Indicates a neutral informative change or action."
                  closable
                />

                <h3>
                  Warning <code>&amp;.o-alert--warning</code>
                </h3>
                <Alert
                  type="warning"
                  content="Indicates a warning that might need attention."
                  closable
                />

                <h3>
                  Danger <code>&amp;.o-alert--danger</code>
                </h3>
                <Alert
                  type="danger"
                  content="Indicates a dangerous or potentially negative action."
                  closable
                />
              </article>

              <hr className="l-article-separator" />

              <article id="sg-tooltip" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-tooltip" className="u-anchor__link">
                    #
                  </a>
                  Tooltip
                </h2>
                <div className="grid">
                  <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
                    <span data-tooltip="Top tooltip" tabindex="0">
                      Top (default)
                    </span>{" "}
                    <br />
                    <code>
                      [data-tooltip="<i>{`{TOOLTIP}`}</i>"]
                    </code>
                  </div>
                  <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
                    <span
                      data-tooltip="Right tooltip"
                      data-tooltip-right
                      tabindex="0"
                    >
                      Right
                    </span>{" "}
                    <br />
                    <code>&amp;[data-tooltip-right]</code>
                  </div>
                  <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
                    <span
                      data-tooltip="Bottom tooltip"
                      data-tooltip-bottom
                      tabindex="0"
                    >
                      Bottom
                    </span>{" "}
                    <br />
                    <code>&amp;[data-tooltip-bottom]</code>
                  </div>
                  <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
                    <span
                      data-tooltip="Left tooltip"
                      data-tooltip-left
                      tabindex="0"
                    >
                      Left
                    </span>{" "}
                    <br />
                    <code>&amp;[data-tooltip-left]</code>
                  </div>
                  <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
                    <span
                      data-tooltip="Indicator tooltip"
                      data-tooltip-indicator
                      tabindex="0"
                    >
                      Indicator
                    </span>{" "}
                    <br />
                    <code>&amp;[data-tooltip-indicator]</code>
                  </div>
                  <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
                    <span
                      data-tooltip="Multiline tooltip, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
                      data-tooltip-multiline
                      tabindex="0"
                    >
                      Multiline
                    </span>
                    <br />
                    <code>&amp;[data-tooltip-multiline]</code>
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-progress-bar" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-progress-bar"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Progress bar
                </h2>
                <p>
                  <em>Optional:</em> <code>&gt; .o-progress-bar__label</code>,{" "}
                  <code>&gt; .o-progress-bar__total</code>
                </p>
                <p>
                  <em>Modifier:</em>{" "}
                  <code>&amp;.o-progress-bar--tooltip-hover</code>
                </p>
                <div className="grid">
                  <div className="cell cell--12-@xs cell--6-@sm">
                    <code>.o-progress-bar</code>

                    <ProgressBar label="Label" total="50 Go" filling={60} />
                  </div>
                  <div className="cell cell--12-@xs cell--6-@sm">
                    <code>
                      &amp;[data-progress-bar-tooltip="<i>{`{TOOLTIP}`}</i>"]
                    </code>

                    <ProgressBar
                      label="Label"
                      total="50 Go"
                      filling={40}
                      tooltip="20 Go"
                    />
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-badge" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-badge" className="u-anchor__link">
                    #
                  </a>
                  Badge
                </h2>
                <a href="#">
                  Activity
                  <Badge>30</Badge>
                </a>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-loader" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-loader" className="u-anchor__link">
                    #
                  </a>
                  Loader
                </h2>
                <div className="grid">
                  <div className="cell cell--6-@xs">
                    <Loader />

                    <code>.o-loader</code>
                  </div>
                  <div className="cell cell--6-@xs">
                    <Loader metadata={{ modifierClasses: ["sm"] }} />

                    <code>&amp;.o-loader--sm</code>
                  </div>
                </div>
              </article>

              <hr className="l-article-separator" />

              <article id="sg-footnotes" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a href="style-guide#sg-footnotes" className="u-anchor__link">
                    #
                  </a>
                  Footnotes
                </h2>
                <p>
                  Lorem ipsum
                  <FootnotesReference id="1" text="[1]" url="" /> dolor sit
                  amet, consectetur adipisicing elit. Dignissimos
                  <FootnotesReference id="2" text="[2]" url="" />, qui?
                  Perferendis earum explicabo possimus odit porro odio velit
                  illum nihil deleniti aliquam hic accusantium numquam sunt et,
                  rem, ut ratione. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Laborum ex voluptates, eos doloribus ipsam
                  numquam ad inventore consequuntur dolorum ipsum eveniet maxime
                  fuga, quaerat animi sit iste. Dignissimos, sit eligendi.
                </p>

                <FootnotesNotes
                  notes={[
                    {
                      id: "1",
                      text: "Lorem ipsum dolor sit amet.",
                      url: ""
                    },
                    {
                      id: "2",
                      text: "Lorem ipsum dolor sit amet.",
                      url: ""
                    }
                  ]}
                />
              </article>

              <hr className="l-article-separator" />

              <article id="sg-guidelines" className="l-article">
                <h2
                  className="u-counter__index-1 u-counter__index--space u-anchor"
                  data-counter-separator="."
                >
                  <a
                    href="style-guide#sg-guidelines"
                    className="u-anchor__link"
                  >
                    #
                  </a>
                  Coding guidelines
                </h2>
                <p>
                  When working on large and long running projects with other
                  developers, it is important to work in a unified way in order
                  to keep the code maintainable and scalable.
                </p>

                <h3
                  className="u-counter__index-2 u-counter__index--space"
                  data-counter-separator="."
                >
                  Architecture
                </h3>
                <p>
                  Folders and files use <code>lisp-case</code> naming scheme:
                  lowercased and hyphen separated. <br />
                  Folders are plural and files should be singular, expect if the
                  component it represent is plural.
                </p>

                <div className="grid grid--lgGutter-@xs">
                  <div className="cell cell--12-@xs cell--4-@md">
                    <h4>CSS</h4>
                    <p>
                      <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528">
                        ITCSS
                      </a>{" "}
                      by Harry Roberts (slightly customized): far-reaching to
                      localised layers, namespaced.
                    </p>
                    <ul>
                      <li>
                        <code>Settings</code>: global configuration variables
                      </li>
                      <li>
                        <code>Tools</code>: global single-utility mixins and
                        functions
                      </li>
                      <li>
                        <code>Vendors</code>: raw third party libraries
                      </li>
                      <li>
                        <code>Base</code>: far-reaching styles, HTML tags
                      </li>
                      <li>
                        <code>Objects</code>: simple, highly reusable item
                      </li>
                      <li>
                        <code>Components</code>: reusable item grouping objects
                      </li>
                      <li>
                        <code>Partials</code>: page unique item grouping
                        components
                      </li>
                      <li>
                        <code>Utilities</code>: override single-purpose classes
                      </li>
                    </ul>
                    <p>
                      Learn more about it{" "}
                      <a href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className="cell cell--12-@xs cell--4-@md">
                    <h4>Templates</h4>
                    <p>
                      <a href="https://twig.symfony.com/">Twig</a>, using the
                      MVC methodology.
                    </p>
                    <ul>
                      <li>
                        <code>Model</code>
                      </li>
                      <li>
                        <code>View</code>
                      </li>
                      <li>
                        <code>Controller</code>
                      </li>
                    </ul>
                  </div>

                  <div className="cell cell--12-@xs cell--4-@md">
                    <h4>JS</h4>
                    <ul>
                      <li>
                        <code>Modules</code>: reusable components bundled in a
                        single file included on each pages
                      </li>
                      <li>
                        <code>Standalones</code>: page specific scripts
                      </li>
                      <li>
                        <code>Vendors</code>: third party libraries
                      </li>
                    </ul>
                  </div>
                </div>

                <h3
                  className="u-counter__index-2 u-counter__index--space"
                  data-counter-separator="."
                >
                  Development
                </h3>
                <p>
                  An <em>editorconfig</em> is used to enforce basic code
                  constancy. It is recommended to add the{" "}
                  <a href="http://editorconfig.org/">plugin</a> corresponding to
                  your IDE.
                </p>

                <p>
                  <em>Linters</em> are used for advanced configuration. It is
                  highly recommended to use in-IDE linters for instant feedback.
                  Here are few notable rules:
                </p>
                <div className="grid grid--lgGutter-@xs">
                  <div className="cell cell--12-@xs cell--4-@md">
                    <h4>
                      CSS:{" "}
                      <a href="https://github.com/stylelint/stylelint">
                        Stylelint
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <a href="http://getbem.com/">BEM</a> naming scheme (
                        <code>bloc__element--modifier</code>): not enforced
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/block-no-single-line">
                          block-no-single-line
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/selector-no-id">
                          selector-no-id
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/declaration-no-important">
                          declaration-no-important
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/indentation">
                          indentation
                        </a>
                        : tab
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/max-nesting-depth">
                          max-nesting-depth
                        </a>
                        : 2 (warning)
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/selector-max-compound-selectors">
                          selector-max-compound-selectors
                        </a>
                        : 3 (warning)
                      </li>
                      <li>
                        <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules/string-quotes">
                          string-quotes
                        </a>
                        : single
                      </li>
                    </ul>
                    <small>
                      Read the{" "}
                      <a href="https://github.com/stylelint/stylelint/tree/master/lib/rules">
                        doc
                      </a>{" "}
                      for explanations on each rule.
                    </small>
                  </div>

                  <div className="cell cell--12-@xs cell--4-@md">
                    <h4>
                      HTML: <a href="http://htmlhint.com/">HTMLHint</a>
                    </h4>
                    <ul>
                      <li>
                        <a href="https://github.com/yaniswang/HTMLHint/wiki/Attr-lowercase">
                          attr-lowercase
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/yaniswang/HTMLHint/wiki/Spec-char-escape">
                          spec-char-escape
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/yaniswang/HTMLHint/wiki/alt-require">
                          alt-require
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/yaniswang/HTMLHint/wiki/inline-style-disabled">
                          inline-style-disabled
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/yaniswang/HTMLHint/wiki/inline-script-disabled">
                          inline-script-disabled
                        </a>
                        : true
                      </li>
                      <li>
                        <a href="https://github.com/yaniswang/HTMLHint/wiki/space-tab-mixed-disabled">
                          space-tab-mixed-disabled:
                        </a>{" "}
                        tab
                      </li>
                    </ul>
                    <small>
                      Read the{" "}
                      <a href="https://github.com/yaniswang/HTMLHint/wiki/Rules">
                        doc
                      </a>{" "}
                      for explanations on each rule.
                    </small>
                  </div>

                  <div className="cell cell--12-@xs cell--4-@md">
                    <h4>
                      Javascript:{" "}
                      <a href="https://github.com/eslint/eslint">ESlint</a>
                    </h4>
                    <ul>
                      <li>
                        Extends{" "}
                        <a href="https://github.com/google/eslint-config-google">
                          ESlint:recommended
                        </a>
                      </li>
                      <li>
                        Extends{" "}
                        <a href="https://github.com/google/eslint-config-google">
                          Google ESlint Config
                        </a>
                      </li>
                      <li>
                        <a href="http://eslint.org/docs/rules/max-len">
                          max-len
                        </a>
                        : 0
                      </li>
                      <li>
                        <a href="http://eslint.org/docs/rules/no-var">no-var</a>
                        : 0
                      </li>
                    </ul>
                    <small>
                      Read the <a href="http://eslint.org/docs/rules/">doc</a>{" "}
                      for explanations on each rule.
                    </small>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>

        {`<!-- Notice (JS) (remove ".u-is--hidden" to display) -->`}
        <Notice
          primary='<p className="u-vr--bottom-0-@xs">This website uses cookies to ensure you the best experience. <a href="#">More info</a></p>'
          secondary='<button className="o-button js-notice-close">Got it!</button>'
          closeButton
          metadata={{
            additionalClasses: ["u-is--hidden"]
          }}
        />
      </>
    </Default>
  );
};

export default StyleGuide;
