import * as React from "react";
import { Default } from "views/layouts";
import { Anchor, Details } from "views/objects";
import {
  Skills,
  AcademicQualification,
  SocialMedia,
  Experience,
  PersonalWorks
} from "views/components";
import { ReactComponent as Icon500px } from "assets/images/icons/simple-icons/500px.svg";
import { ReactComponent as IconCodepen } from "assets/images/icons/simple-icons/codepen.svg";
import { ReactComponent as IconDribbble } from "assets/images/icons/simple-icons/dribbble.svg";
import { ReactComponent as IconGithub } from "assets/images/icons/simple-icons/github.svg";
import { ReactComponent as IconInstagram } from "assets/images/icons/simple-icons/instagram.svg";
import { ReactComponent as IconLinkedIn } from "assets/images/icons/simple-icons/linkedin.svg";
import { ReactComponent as IconSpotify } from "assets/images/icons/simple-icons/spotify.svg";
import { ReactComponent as IconTwitter } from "assets/images/icons/simple-icons/twitter.svg";
import { ReactComponent as IconUnsplash } from "assets/images/icons/simple-icons/unsplash.svg";
import { ReactComponent as IconYoutube } from "assets/images/icons/simple-icons/youtube.svg";

const Home = () => (
  <Default
    metadata={{
      id: "home",
      title: "Johan Mouchet",
      description:
        "Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications."
    }}
  >
    <main className="l-main l-main--no-margin">
      <section className="c-about">
        <div className="container container--noGutter-lgGrid">
          <div className="grid grid--lgGutter-@xs">
            <div className="cell cell--12-@xs cell--6-@sm">
              <h2 className="c-about__heading">About me</h2>

              <p className="c-about__paragraph">
                Originally from Marseille, France, I moved to London in 2013
                where I graduated from a master degree in IT. I worked as a{" "}
                <b>front-end developer</b> for different agencies where I was
                able to express my appreciation for design, enthusiasm for new
                technologies and desire to collaborate.
              </p>
            </div>

            <div className="l-cell--gray-lighter cell cell--0-@xs cell--6-@sm"></div>

            <div className="l-cell--gray cell cell--12-@xs cell--6-@sm cell--3-@md">
              <div className="l-grid--full-height grid grid--xCenter-@xs grid--yCenter-@xs">
                <div className="cell">
                  <img
                    className="c-about__portrait"
                    src={require("assets/images/views/johan-mouchet.jpg")}
                    srcSet={`${require("assets/images/views/johan-mouchet.jpg")}, ${require("assets/images/views/johan-mouchet@x2.jpg")} 1.25x`}
                    alt="Johan Mouchet"
                    loading="auto"
                  />
                </div>
              </div>
            </div>

            <div className="l-cell--gray-lighter cell cell--hidden-@xs cell--visible-@md cell--3-@md"></div>

            <div className="cell cell--12-@xs cell--6-@sm">
              <h2 className="c-about__heading">Right now,</h2>

              <p className="c-about__paragraph">
                I recently relocated to <b>Melbourne</b> looking for a new
                opportunity to take my career to the next level. I'm committed
                and ready to work within a fast paced environment on innovative
                and impactful projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container container--noGutter-lgGrid">
        <div className="grid grid--lgGutter-@xs">
          <div className="l-cell--gray-lighter cell cell--12-@xs cell--3-@md">
            <article className="p-skills">
              <div className="u-vr--top-2-@xs"></div>
              <Anchor tag="h2" id="skills">
                Skills
              </Anchor>

              <Skills
                skills={[
                  {
                    label: "React & Redux",
                    filling: 80,
                    tooltip: "8/10"
                  },
                  {
                    label: "HTML5",
                    filling: 100,
                    tooltip: "10/10"
                  },
                  {
                    label: "CSS3 & Sass",
                    filling: 100,
                    tooltip: "10/10"
                  },
                  {
                    label: "JavaScript ⁠— ES2019",
                    filling: 80,
                    tooltip: "8/10"
                  },
                  {
                    label: "UI & UX",
                    filling: 90,
                    tooltip: "9/10"
                  }
                ]}
              />
            </article>

            <hr className="wow" />

            <article className="p-tools">
              <Anchor tag="h2" id="tools">
                Tools
              </Anchor>
              <p>
                JAMstack, Storybook, Jest, Headless CMS, REST API, npm, Webpack
                / Gulp, PostCSS, Git (Gitflow), CI/CD, Babel, Zeplin, Responsive
                design, Performance, Accessibility, Web Standards, Linters /
                Formatter, SEO, Analytics, Atlassian suite, Agile, Open source
              </p>
            </article>

            <hr className="wow" />

            <article className="p-profile">
              <Anchor tag="h2" id="profile">
                Profile
              </Anchor>
              <p>Creative, Learning Enthusiast, Motivated, Knowledge Sharer</p>
            </article>

            <hr className="wow" />

            <article className="p-language">
              <Anchor tag="h2" id="languages">
                Languages
              </Anchor>
              <ul className="o-list--unstyled">
                <li>English: C1 Advanced</li>
                <li>French: Native</li>
              </ul>
            </article>

            <hr className="wow" />

            <article className="p-academic-qualifications">
              <Anchor tag="h2" id="academic-qualifications">
                Academic Qualifications
              </Anchor>

              <AcademicQualification
                qualifications={[
                  {
                    establishment: {
                      name: "SUPINFO International University",
                      url: "https://www.supinfo.com/"
                    },
                    location: "London",
                    graduationYear: 2015,
                    title: "Master degree in IT and computer science"
                  },
                  {
                    establishment: {
                      name: "SUPINFO International University",
                      url: "https://www.supinfo.com/"
                    },
                    location: "Marseille",
                    graduationYear: 2013,
                    title: "Bachelor degree in IT and computer science"
                  },
                  {
                    establishment: {
                      name: "Chevreul Blancarde high school",
                      url: "http://www.chevreulblancarde.com/"
                    },
                    location: "Marseille",
                    graduationYear: 2010,
                    title: "Baccalauréat scientifique (High School Certificate)"
                  }
                ]}
              />
            </article>

            <hr className="wow" />

            <article className="p-interests">
              <Anchor tag="h2" id="interests">
                Interests
              </Anchor>
              <p>
                Web &amp; Graphic design, Development, Photography, Video
                Editing, Drawing, Traveling, Cycling, Running, Fitness,
                Volunteer{" "}
                <a
                  href="https://youngcodersau.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  @YoungCodersAU
                </a>
              </p>
            </article>

            <hr className="wow" />

            <article className="p-social-medias">
              <Anchor tag="h2" id="social-media">
                Social Media
              </Anchor>

              <SocialMedia
                medias={[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/johanmouchet",
                    icon: <IconLinkedIn />
                  },
                  {
                    name: "Twitter",
                    url: "https://twitter.com/JohanMouchet",
                    icon: <IconTwitter />
                  },
                  {
                    name: "CodePen",
                    url: "http://codepen.io/johanmouchet/",
                    icon: <IconCodepen />
                  },
                  {
                    name: "GitHub",
                    url: "https://github.com/JohanMouchet",
                    icon: <IconGithub />
                  },
                  {
                    name: "Dribbble",
                    url: "https://dribbble.com/JohanMouchet/likes",
                    icon: <IconDribbble />
                  },
                  {
                    name: "Unsplash",
                    url: "https://unsplash.com/@johanmouchet/",
                    icon: <IconUnsplash />
                  },
                  {
                    name: "500px",
                    url: "https://500px.com/johanmouchet/",
                    icon: <Icon500px />
                  },
                  {
                    name: "Instagram",
                    url: "https://instagram.com/johanmouchet/",
                    icon: <IconInstagram />
                  },
                  {
                    name: "YouTube",
                    url: "https://www.youtube.com/c/JohanMouchet",
                    icon: <IconYoutube />
                  },
                  {
                    name: "Spotify",
                    url: "https://open.spotify.com/user/1126411547",
                    icon: <IconSpotify />
                  }
                ]}
              />
            </article>
            <div className="u-vr--top-2-@xs"></div>
          </div>

          <div className="cell cell--12-@xs cell--9-@md">
            <article className="p-career-experiences">
              <div className="u-vr--top-2-@xs"></div>
              <Anchor tag="h2" id="career-experiences">
                Career Experiences
              </Anchor>

              <Experience
                experiences={[
                  {
                    company: {
                      url: "https://isobar.com/au/en/",
                      name: "Isobar"
                    },
                    location: "Melbourne",
                    jobTitle: "Front-end developer",
                    startDate: new Date("2017/11/11"),
                    endDate: new Date(),
                    lede: (
                      <>
                        Global agency that delivers digital transformation
                        powered by creativity, who believe in{" "}
                        <em>Ideas Without Limits</em>, pushing the boundaries of
                        technology and creativity.
                      </>
                    ),
                    projects: [
                      {
                        name: "Zoos Victoria",
                        tagline: "CatVR: Safe Cat, Safe Wildlife",
                        url: "http://www.safecat.org.au",
                        lede: (
                          <>
                            Joint <em>RSPCA</em> campaign website to help cat
                            owners give their pet the safest and happiest life
                            while ensuring they have no link to loss of
                            wildlife.
                          </>
                        ),
                        thumbnailPath: require("assets/images/views/career-experiences/zoos-victoria.jpg"),
                        awards: [
                          {
                            name:
                              "MADC 2018 (Melbourne Advertising and Design Club)",
                            url:
                              "https://twitter.com/isobarAU/status/1058125158752313344?s=20",
                            category: "Best PR experience"
                          },
                          {
                            name: "One Show Awards shortlist",
                            url:
                              "https://www.oneshow.org/viewentries/?id=51888",
                            category: "Media Relations"
                          }
                        ],
                        details: [
                          <>
                            <a
                              href="https://www.contentful.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Contentful</em>
                            </a>
                            , headless CMS
                          </>,
                          <>
                            <em>Handlebars</em> templating, component oriented
                          </>,
                          <>
                            <a
                              href="https://github.com/desandro/masonry"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Masonry</em>
                            </a>{" "}
                            grid layout
                          </>,
                          "Community submission forms with client side validation",
                          "Social media sharing",
                          <>
                            <a
                              href="https://github.com/ghosh/micromodal"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Micromodal</em>
                            </a>{" "}
                            accessible modal dialogs
                          </>,
                          <>
                            <em>Bootstrap 4</em>, <em>Sass</em>,{" "}
                            <a
                              href="http://getbem.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>BEM</em>
                            </a>{" "}
                            naming scheme
                          </>,
                          <>
                            Front-end tooling: <em>Yarn</em>, <em>Gulp</em>,{" "}
                            <em>Webpack</em>, linting
                          </>
                        ]
                      },
                      {
                        name: "Klip Studio",
                        url: "https://www.klipdesk.co",
                        lede:
                          "Web application dedicated to the sport rights holders industry. Allows to edit live or recorded streams to produce highlights shareable on social media.",
                        thumbnailPath: require("assets/images/views/career-experiences/klip-studio.jpg"),
                        details: [
                          <>
                            React framework,{" "}
                            <a
                              href="https://react.semantic-ui.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Semantic UI React</em>
                            </a>{" "}
                            component library
                          </>,
                          <>
                            <a
                              href="https://github.com/google/shaka-player"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Shaka</em>
                            </a>{" "}
                            web player, advanced video editing, cropping etc.
                          </>,
                          "Content tagging, filtering, sorting",
                          "Audience engagement tracking through social media APIs",
                          "Social media publishing",
                          <>
                            <a
                              href="https://semantic-ui.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Semantic UI</em>
                            </a>
                            , <em>Less</em>,{" "}
                            <a
                              href="http://getbem.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>BEM</em>
                            </a>{" "}
                            naming scheme
                          </>,
                          <>
                            Front-end tooling: <em>Create React App</em>,{" "}
                            <em>npm</em>, linting
                          </>
                        ]
                      },
                      {
                        name: "Pearson",
                        tagline: "Asia",
                        url: "https://www.pearson.com/asia/",
                        lede:
                          "Websites creation related to education for Pearson’s launch in three new markets through Asia.",
                        thumbnailPath: require("assets/images/views/career-experiences/pearson.jpg"),
                        details: [
                          <>
                            <a
                              href="https://www.adobe.com/au/marketing/experience-manager.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Adobe Experience Manager</em>
                            </a>
                            , enterprise content management
                          </>,
                          "Content authoring, page and component building",
                          "Market customisation, translation",
                          "Registration forms"
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      url: "https://www.amaze.com/",
                      name: "Amaze"
                    },
                    location: "London",
                    jobTitle: "Front-end developer",
                    startDate: new Date("2016/11/14"),
                    endDate: new Date("2017/10/19"),
                    lede:
                      "Leading digital marketing, technology and commerce consultancy which delivers at a UK, pan-European and global level.",
                    projects: [
                      {
                        name: "Lexus",
                        tagline: "v11",
                        url: "https://www.lexus.eu/en/",
                        lede:
                          "Website redesign to embody the new brand direction focused on a premium and lifestyle experience. Deployed into 35 countries of the European market and translated into 27 languages.",
                        thumbnailPath: require("assets/images/views/career-experiences/lexus.jpg"),
                        details: [
                          <>
                            <a href="http://www.sdl.com/software-and-services/tridion-dx/tridion-sites.html">
                              <em>SDL Web</em>
                            </a>{" "}
                            (formerly Tridion), headless data driven CMS{" "}
                          </>,
                          <>
                            <em>Nunjucks</em> templating, component oriented,
                            fed with datas stored in a <em>MongoDB</em> database
                          </>,
                          <>
                            <a
                              href="https://github.com/kenwheeler/slick/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Slick</em>
                            </a>{" "}
                            carousel integration, lazy loading
                          </>,
                          "HTML5 Geolocation API, Google maps API",
                          "AAA accessibility standard",
                          <>
                            Sass +{" "}
                            <a
                              href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>ITCSS</em>
                            </a>{" "}
                            architecture,{" "}
                            <a
                              href="http://getbem.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>BEM</em>
                            </a>{" "}
                            naming scheme
                          </>,
                          <>
                            Advanced CSS animations with{" "}
                            <a
                              href="http://imakewebthings.com/waypoints/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>Waypoints js</em>
                            </a>
                          </>,
                          <>
                            Progressive enhancement with JavaScript:{" "}
                            <em>Backbone.js</em>, <em>jQuery</em>
                          </>,
                          <>
                            Front-end tooling: <em>npm</em>, <em>Grunt</em>,{" "}
                            <em>RequireJS</em>, linting
                          </>,
                          <>
                            Environment: <em>Vagrant</em>, Continuous
                            integration: <em>Heroku</em>
                          </>
                        ]
                      },
                      {
                        name: "Lexus",
                        tagline: "Safety System Plus",
                        url:
                          "https://www.lexus.eu/discover-lexus/technology/lexus-safety-system/",
                        lede: (
                          <>
                            Microsite creation to showcase{" "}
                            <em>Lexus' Safety System Plus</em> technology.
                          </>
                        ),
                        thumbnailPath: require("assets/images/views/career-experiences/lexus-safety-system-plus.jpg"),
                        details: [
                          <>
                            Stack identical to the one of <em>Lexus 'v11'</em>
                          </>,
                          <>
                            Full Screen, single-page design, done with{" "}
                            <a
                              href="https://github.com/alvarotrigo/fullPage.js"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>fullPage.js</em>
                            </a>
                          </>,
                          <>
                            Integration of a <em>Three.js</em> API (realised by
                            the talented{" "}
                            <a
                              href="http://danielbrowns.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              Daniel Brown
                            </a>
                            )
                          </>,
                          "Advanced multi layers CSS animations",
                          "Responsive design, device orientation aware",
                          <>Performance optimised</>
                        ]
                      },
                      {
                        name: "Navico",
                        tagline: "Lowrance",
                        url: "https://www.lowrance.com/",
                        lede:
                          "Delivery within a short turnaround of a global eCommerce website for a manufacturer of consumer marine electronics.",
                        thumbnailPath: require("assets/images/views/career-experiences/lowrance.jpg"),
                        details: [
                          <>
                            <a
                              href="http://www.episerver.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>EPIServer</em>
                            </a>{" "}
                            CMS for scalability
                          </>,
                          <>
                            <em>Handlebars</em> / <em>Razor templating</em>,
                            component oriented
                          </>,
                          <>
                            Client side form verification done with{" "}
                            <a
                              href="https://github.com/jquery-validation/jquery-validation"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>jquery-validation</em>
                            </a>
                          </>,
                          "AAA accessibility standard",
                          <>
                            Sass +{" "}
                            <a
                              href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>ITCSS</em>
                            </a>{" "}
                            architecture,{" "}
                            <a
                              href="http://getbem.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>BEM</em>
                            </a>{" "}
                            naming scheme
                          </>,
                          <>
                            Progressive enhancement with JavaScript (
                            <em>jQuery</em>)
                          </>,
                          <>
                            Front-end tooling: <em>npm</em>, <em>Gulp</em>,
                            linting
                          </>
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      url: "https://www.surviemerformation.com/",
                      name: "Survie Mer Formation"
                    },
                    location: "London",
                    jobTitle:
                      "Designer & Front-end developer & Marketing strategist",
                    startDate: new Date("2016/05/04"),
                    endDate: new Date("2016/11/13"),
                    contractType: "Contractor",
                    lede:
                      "Design, development and marketing strategy for a company that trains marine and offshore personnel on safety at sea.",
                    projects: [
                      {
                        name: "Survie Mer Formation",
                        url: "https://www.surviemerformation.com/",
                        thumbnailPath: require("assets/images/views/career-experiences/survie-mer-formation.jpg"),
                        details: [
                          <>
                            <em>Growth Hacking</em> strategy development (
                            <em>AARRR</em> model) meant to increase acquisition
                            and increase conversion rate
                          </>,
                          <>
                            <em>UI</em> Refreshment: new brand identity,
                            responsive design, cross-browser compatibility
                          </>,
                          <>
                            <em>UX</em> Revampment: focused towards user
                            conversion, web performance, accessibility
                          </>,
                          <>
                            Wireframe, mockup and prototype done with{" "}
                            <em>Photoshop</em>
                          </>,
                          <>
                            <em>Twig</em> templating, component oriented, fed
                            with datas stored in a <em>MySQL</em> database
                          </>,
                          <>
                            Sass +{" "}
                            <a
                              href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>ITCSS</em>
                            </a>{" "}
                            architecture,{" "}
                            <a
                              href="http://getbem.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              <em>BEM</em>
                            </a>{" "}
                            naming scheme
                          </>,
                          <>
                            Progressive enhancement with JavaScript (
                            <em>jQuery</em>)
                          </>,
                          <>
                            Front-end tooling: <em>Yarn</em>, <em>Grunt</em>,
                            linting{" "}
                          </>,
                          <>
                            <em>SEO</em>: use of <em>Open Graph</em> protocol,{" "}
                            <em>JSON-LD</em> microdata
                          </>,
                          <>
                            <em>SEA</em>: AdWords campaign creation
                          </>,
                          <>
                            <em>Analytics</em>: setup <em>Google Analytics</em>{" "}
                            events and goals
                          </>
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      url: "http://www.tmwunlimited.com/",
                      name: "TMW Unlimited"
                    },
                    location: "London",
                    jobTitle: "Front-end developer",
                    startDate: new Date("2015/12/07"),
                    endDate: new Date("2016/05/03"),
                    lede:
                      "Award winning marketing agency which helps some of the world's most respected brands to strategically develop and implement marketing communications.",
                    projects: [
                      {
                        name: "Business Banking Insight",
                        url: "http://www.businessbankinginsight.co.uk",
                        lede: (
                          <>
                            Analysis website of business banking providers,
                            supported by the <em>HR Treasury</em>.
                          </>
                        ),
                        thumbnailPath: require("assets/images/views/career-experiences/business-banking-insight.jpg"),
                        details: [
                          <>
                            <i>AngularJS 2</i> templating
                          </>,
                          <>
                            Front-end framework:{" "}
                            <a
                              href="http://trykickoff.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              Kickoff
                            </a>{" "}
                            (npm, Grunt, Sass, jQuery)
                          </>,
                          <>
                            <a
                              href="https://www.amcharts.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              amCharts
                            </a>{" "}
                            library integration
                          </>,
                          "Front-end dynamic filtering feature",
                          "Back-end collaboration for CMS integration"
                        ]
                      },
                      {
                        name: "Prince's trust",
                        tagline: "#partofPT campaign",
                        url:
                          "https://partofpt.princes-trust.org.uk/part-of-pt/",
                        lede: (
                          <>
                            Crowdsourced event listing microsite for the{" "}
                            <em>Prince's Trust</em> 40th anniversary
                            celebration.
                          </>
                        ),
                        thumbnailPath: require("assets/images/views/career-experiences/princes-trust.jpg"),
                        details: [
                          <>
                            Front-end framework:{" "}
                            <a
                              href="http://trykickoff.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              Kickoff
                            </a>
                          </>,
                          <>
                            <a
                              href="https://hashtagd.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              Hashtagd
                            </a>{" "}
                            APIs integration
                          </>,
                          <>
                            <i>OAuth</i> integration for Twitter sharing
                          </>,
                          "Lazy loaded events from database"
                        ]
                      },
                      {
                        name: "Sport Relief",
                        tagline: "#Skipathon campaign (Over)",
                        url: "https://www.youtube.com/watch?v=3PyZVDrO_aI",
                        lede: "Mobile web browser game based on rope skipping.",
                        thumbnailPath: require("assets/images/views/career-experiences/sport-relief-skipathon.jpg"),
                        details: [
                          "iOS and Android default browser support",
                          "Device 3D movement detection",
                          <>
                            <i>React</i> templating
                          </>,
                          <>
                            Front-end framework:{" "}
                            <a
                              href="http://trykickoff.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-link"
                            >
                              Kickoff
                            </a>
                          </>,
                          <>
                            <i>OAuth</i> integration for Facebook and Twitter
                            registration and sharing
                          </>,
                          "HTML5 canvas and CSS3 animations"
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      name: "MOVE digital",
                      url: "http://www.movedigital.co.uk/"
                    },
                    location: "London",
                    jobTitle: "Web designer & developer",
                    startDate: new Date("2014/07/09"),
                    endDate: new Date("2015/10/01"),
                    lede: (
                      <>
                        Independent web marketing agency focused on Growth
                        Hacking.
                        <br />
                        <br />
                        Here are few of the websites I've designed and built
                        using WordPress:
                      </>
                    ),
                    projects: [
                      {
                        name: "Weholite",
                        url: "http://www.weholite.co.uk/",
                        thumbnailPath: require("assets/images/views/career-experiences/weholite.jpg")
                      },
                      {
                        name: "Hiremech",
                        url: "http://www.hiremech.co.uk/",
                        thumbnailPath: require("assets/images/views/career-experiences/hiremech.jpg")
                      },
                      {
                        name: "Global Materials Handling",
                        url: "http://globalforktrucks.com/",
                        thumbnailPath: require("assets/images/views/career-experiences/global-materials-handling.jpg")
                      },
                      {
                        name: "Proton Motor",
                        url: "http://www.proton-motor.com/",
                        thumbnailPath: require("assets/images/views/career-experiences/proton-motor.jpg")
                      }
                    ]
                  }
                ]}
              />
            </article>

            <hr className="wow" />

            <article className="p-internships u-is--hidden-@print">
              <Anchor tag="h2" id="internships" className="u-vr--bottom-0-@xs">
                Internships
              </Anchor>

              <div className="grid">
                <div className="cell cell--12-@xs cell--4-@sm">
                  <Details summary="Details">
                    <Experience
                      experiences={[
                        {
                          company: {
                            name: "Jardin France Design"
                          },
                          location: "Marseille",
                          jobTitle: "Front-end developer",
                          startDate: new Date("2013/07/01"),
                          endDate: new Date("2013/10/01"),
                          contractType: "Intern",
                          lede:
                            "PrestaShop eCommerce website for a garden products supplier. (Discontinued)."
                        },
                        {
                          company: {
                            name: "Radigraph",
                            url: "http://www.imprimerie-marseille-radigraph.fr/"
                          },
                          location: "Marseille",
                          jobTitle: "Front-end developer",
                          startDate: new Date("2013/07/01"),
                          endDate: new Date("2013/10/01"),
                          contractType: "Part-time intern",
                          lede: (
                            <>
                              Website development for a print company: product
                              database, elaborated quotation,{" "}
                              <abbr title="Search Engine Optimization">
                                SEO
                              </abbr>
                              .
                            </>
                          )
                        },
                        {
                          company: {
                            name: "Winlink santé",
                            url: "http://www.winlinksante.com/"
                          },
                          location: "Marseille",
                          jobTitle: "Front-end developer",
                          startDate: new Date("2012/07/01"),
                          endDate: new Date("2012/10/01"),
                          contractType: "Full-time intern",
                          lede:
                            "Web intranet application for personnel management: account management, interactive calendar, multiple databases."
                        },
                        {
                          company: {
                            name: "Digitick",
                            url: "http://next.digitick.com/"
                          },
                          location: "Marseille",
                          jobTitle: "Front-end developer",
                          startDate: new Date("2011/07/01"),
                          endDate: new Date("2011/10/01"),
                          contractType: "Full-time intern",
                          lede: (
                            <>
                              Various web designs for online selling ticket:
                              including{" "}
                              <a
                                href="http://sigstrasbourg.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="external-link"
                              >
                                SIG Basket
                              </a>{" "}
                              and{" "}
                              <a
                                href="http://biarritz-culture.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="external-link"
                              >
                                Biarritz culture
                              </a>
                              .
                            </>
                          )
                        },
                        {
                          company: {
                            name: "Survie Mer Formation",
                            url: "http://www.surviemerformation.com/"
                          },
                          location: "Marseille",
                          jobTitle: "Front-end developer",
                          startDate: new Date("2008/07/01"),
                          endDate: new Date("2008/10/01"),
                          contractType: "Contractor",
                          lede: (
                            <>
                              Website development for a training centre:
                              advanced online registration, databases, back
                              office,{" "}
                              <abbr title="Search Engine Optimization">
                                SEO
                              </abbr>
                              ,{" "}
                              <abbr title="Search Engine Advertising">SEA</abbr>
                              .
                            </>
                          )
                        }
                      ]}
                    />
                  </Details>
                </div>
              </div>
            </article>

            <hr className="wow" />

            <article className="p-personal-works">
              <Anchor tag="h2" id="personal-works">
                Personal Works
              </Anchor>

              <p>
                When I'm not designing websites I like to take pictures, create
                infographic, doodle and make short films.
                <br />
                Here are some of my personal works:
              </p>

              <PersonalWorks
                works={[
                  {
                    thumbnailPath:
                      "https://source.unsplash.com/6Y23pU8xyHU/200x200",
                    url: "https://unsplash.com/photos/6Y23pU8xyHU",
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath:
                      "https://source.unsplash.com/m9VIwiyzGSc/200x200",
                    url: "https://unsplash.com/photos/m9VIwiyzGSc",
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath:
                      "https://source.unsplash.com/hLXsjf0dGgo/200x200",
                    url: "https://unsplash.com/photos/hLXsjf0dGgo",
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath:
                      "https://source.unsplash.com/JjEZKXTGPio/200x200",
                    url: "https://unsplash.com/photos/JjEZKXTGPio",
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath:
                      "https://source.unsplash.com/sTBdWFQKDHE/200x200",
                    url: "https://unsplash.com/photos/sTBdWFQKDHE",
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath: require("assets/images/views/personal-works/south-cost-of-england.jpg"),
                    url: "https://youtu.be/NAsS1T_V8-k",
                    sourceIcon: <IconYoutube />
                  }
                ]}
              />
            </article>

            <hr className="wow" />

            <article className="p-contact" id="p-contact">
              <Anchor tag="h2" id="get-in-touch">
                Get In Touch
              </Anchor>

              <a
                href="mailto:mouchet.johan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mouchet.johan[at]gmail.com
              </a>
            </article>
            <div className="u-vr--top-2-@xs"></div>
          </div>
        </div>
      </div>
    </main>
  </Default>
);

export default Home;
