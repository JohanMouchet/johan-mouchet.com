import * as React from "react";
import { Default } from "views/layouts";
import { Anchor } from "views/objects";
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
      id: /*html*/ `home`,
      title: /*html*/ `Johan Mouchet`,
      description: /*html*/ `Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications.`
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
                where I graduated from a master degree in IT and started my
                career as a <b>front-end developer</b>. In 2017, I relocated to{" "}
                <b>Melbourne</b> looking for new opportunities.
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

            <div className="cell cell--12-@xs cell--6-@sm cell--yCenter-@sm">
              <h2 className="c-about__heading">Today,</h2>

              <p className="c-about__paragraph">
                I'm driven by my appreciation for design, enthusiasm for new
                technologies and desire to collaborate. I'm committed and ready
                to work within a fast paced environment on innovative and
                impactful projects.
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
                    label: /*html*/ `React & Redux`,
                    filling: 80,
                    tooltip: /*html*/ `8/10`
                  },
                  {
                    label: /*html*/ `HTML5`,
                    filling: 100,
                    tooltip: /*html*/ `10/10`
                  },
                  {
                    label: /*html*/ `CSS3 & Sass`,
                    filling: 100,
                    tooltip: /*html*/ `10/10`
                  },
                  {
                    label: /*html*/ `JavaScript ⁠— ES2019`,
                    filling: 80,
                    tooltip: /*html*/ `8/10`
                  },
                  {
                    label: /*html*/ `UI & UX`,
                    filling: 90,
                    tooltip: /*html*/ `9/10`
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
                JAMstack, Headless CMS, Storybook, Jest, APIs, npm, Webpack /
                Gulp, Git, CI / CD, ESlint, Stylelint, Prettier, Zeplin,
                Responsive design, Performance, Accessibility, Web Standards,
                SEO, Analytics, Atlassian suite, Agile, Open source
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
                      name: /*html*/ `SUPINFO International University`,
                      url: /*html*/ `https://www.supinfo.com/`
                    },
                    location: /*html*/ `London`,
                    graduationYear: 2015,
                    title: /*html*/ `Master degree in IT and computer science`
                  },
                  {
                    establishment: {
                      name: /*html*/ `SUPINFO International University`,
                      url: /*html*/ `https://www.supinfo.com/`
                    },
                    location: /*html*/ `Marseille`,
                    graduationYear: 2013,
                    title: /*html*/ `Bachelor degree in IT and computer science`
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
                <a href="https://youngcodersau.com/">@YoungCodersAU</a>
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
                    name: /*html*/ `LinkedIn`,
                    url: /*html*/ `https://www.linkedin.com/in/johanmouchet`,
                    icon: <IconLinkedIn />
                  },
                  {
                    name: /*html*/ `Twitter`,
                    url: /*html*/ `https://twitter.com/JohanMouchet`,
                    icon: <IconTwitter />
                  },
                  {
                    name: /*html*/ `CodePen`,
                    url: /*html*/ `http://codepen.io/johanmouchet/`,
                    icon: <IconCodepen />
                  },
                  {
                    name: /*html*/ `GitHub`,
                    url: /*html*/ `https://github.com/JohanMouchet`,
                    icon: <IconGithub />
                  },
                  {
                    name: /*html*/ `Dribbble`,
                    url: /*html*/ `https://dribbble.com/JohanMouchet/likes`,
                    icon: <IconDribbble />
                  },
                  {
                    name: /*html*/ `Unsplash`,
                    url: /*html*/ `https://unsplash.com/@johanmouchet/`,
                    icon: <IconUnsplash />
                  },
                  {
                    name: /*html*/ `500px`,
                    url: /*html*/ `https://500px.com/johanmouchet/`,
                    icon: <Icon500px />
                  },
                  {
                    name: /*html*/ `Instagram`,
                    url: /*html*/ `https://instagram.com/johanmouchet/`,
                    icon: <IconInstagram />
                  },
                  {
                    name: /*html*/ `YouTube`,
                    url: /*html*/ `https://www.youtube.com/c/JohanMouchet`,
                    icon: <IconYoutube />
                  },
                  {
                    name: /*html*/ `Spotify`,
                    url: /*html*/ `https://open.spotify.com/user/1126411547`,
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
                      url: /*html*/ `https://isobar.com/au/en/`,
                      name: /*html*/ `Isobar`
                    },
                    location: /*html*/ `Melbourne`,
                    jobTitle: /*html*/ `Front-end developer`,
                    startDate: new Date("2017/11/11"),
                    endDate: new Date("2020/04/27"),
                    lede: /*html*/ `Global agency that delivers digital transformation powered by creativity, who believe in <em>Ideas Without Limits</em>, pushing the boundaries of technology and creativity.`,
                    projects: [
                      {
                        highlight: true,
                        name: /*html*/ `Jetstar`,
                        url: /*html*/ `https://www.jetstar.com/au/en/home`,
                        lede: /*html*/ `Upkeep and development of new features for Jetstar's international website in an Agile environment.`,
                        thumbnailPath: require("assets/images/views/career-experiences/jetstar.jpg"),
                        achievements: [
                          /*html*/ `Migrated the <a href="https://www.jetstar.com/au/en/flights"><em>Flight Search</em></a> experience to React & Redux for faster and extensive results: increased conversion by 1.29% on the <em>Cheap Flights</em> pages.`,
                          /*html*/ `Created a landing page to promote Jetstar <a href="https://www.jetstar.com/au/en/creditcards"><em>Credit Cards</em></a>: surpassed the conversion target by 230% in the first month of launch.`,
                          /*html*/ `Integrated a responsive utility-based Sass grid I built and open sourced: <a href="https://github.com/JohanMouchet/fluxgrid">Fluxgrid</a>.`,
                          /*html*/ `Advocated for performance tracking and optimisations: slowed down the <span data-tooltip="First Meaningful Paint" data-tooltip-indicator>FMP</span> trend, decreased the <span data-tooltip="Time To Interactive" data-tooltip-indicator>TTI</span> by ~9.5%, and the bundle size by ~15%.`
                        ],
                        architecture: [
                          /*html*/ `Sitecore CMS`,
                          /*html*/ `Webpack`,
                          /*html*/ `React & Redux`,
                          /*html*/ `Flow`,
                          /*html*/ `Jest, Enzyme`,
                          /*html*/ `Storybook`,
                          /*html*/ `Sass + CSS Modules`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/immutable-js/immutable-js">Immutable.js</a>`,
                          /*html*/ `<a href="https://github.com/localForage/localForage">Local Forage</a>`,
                          /*html*/ `<a href="https://github.com/date-fns/date-fns">Date-fns</a>`,
                          /*html*/ `<a href="https://github.com/nolimits4web/swiper">Swiperjs</a> carousel`,
                          /*html*/ `<a href="https://github.com/smebberson/fuse">Fuse</a>`,
                          /*html*/ `<a href="https://speedcurve.com/">SpeedCurve</a> performance tracking`,
                          /*html*/ `<a href="https://raygun.com/">Raygun</a> monitoring`
                        ]
                      },
                      {
                        name: /*html*/ `Zoos Victoria`,
                        tagline: /*html*/ `CatVR: Safe Cat, Safe Wildlife`,
                        url: /*html*/ `http://www.safecat.org.au`,
                        lede: /*html*/ `Joint <em>RSPCA</em> campaign website to help cat owners give their pet the safest and happiest life while ensuring they have no link to loss of wildlife.`,
                        thumbnailPath: require("assets/images/views/career-experiences/zoos-victoria.jpg"),
                        achievements: [
                          /*html*/ `Developped a community submissible forms with client side validation.`,
                          /*html*/ `Integrated social media sharing.`,
                          /*html*/ `Awarded<ul><li><span data-tooltip="Melbourne Advertising and Design Club" data-tooltip-indicator>MADC</span> 2018: <a href="https://twitter.com/isobarAU/status/1058125158752313344?s=20">Best PR experience</a></li><li>One Show Awards shortlist: <a href="https://www.oneshow.org/viewentries/?id=51888">Media Relations</a></li></ul>`,
                          /*html*/ [
                            `<span data-tooltip="Melbourne Advertising and Design Club" data-tooltip-indicator>MADC</span> 2018: <a href="https://twitter.com/isobarAU/status/1058125158752313344?s=20">Best PR experience</a>`,
                            `One Show Awards shortlist: <a href="https://www.oneshow.org/viewentries/?id=51888">Media Relations</a>`
                          ]
                        ],
                        architecture: [
                          /*html*/ `<a href="https://www.contentful.com/">Contentful</a>`,
                          /*html*/ `Handlebars templating - component oriented`,
                          /*html*/ `Bootstrap 4`,
                          /*html*/ `Sass`,
                          /*html*/ `BEM naming scheme`,
                          /*html*/ `Webpack`,
                          /*html*/ `Gulp`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/desandro/masonry">Masonry</a> grid layout`,
                          /*html*/ `<a href="https://github.com/ghosh/micromodal">Micromodal</a> accessible modal dialogs`
                        ]
                      },
                      {
                        name: /*html*/ `Klip Studio`,
                        url: /*html*/ `https://www.klipdesk.co`,
                        lede: /*html*/ `Web application dedicated to the sport rights holders industry. Allows to edit live or recorded streams to produce highlights shareable on social media.`,
                        thumbnailPath: require("assets/images/views/career-experiences/klip-studio.jpg"),
                        achievements: [
                          /*html*/ `Developed content tagging, filtering and sorting features`,
                          /*html*/ `Integrated audience engagement tracking through social media APIs`,
                          /*html*/ `Integrated social media publishing`
                        ],
                        architecture: [
                          /*html*/ `React`,
                          /*html*/ `<a href="https://react.semantic-ui.com/">Semantic UI React</a> component library`,
                          /*html*/ `Create React App`,
                          /*html*/ `Less`,
                          /*html*/ `BEM naming scheme`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://semantic-ui.com/">Semantic UI</a>`,
                          /*html*/ `<a href="https://github.com/google/shaka-player">Shaka</a> web player - advanced video editing`
                        ]
                      },
                      {
                        name: /*html*/ `Pearson`,
                        tagline: /*html*/ `Asia`,
                        url: /*html*/ `https://www.pearson.com/asia/`,
                        lede: /*html*/ `Websites creation related to education for Pearson’s launch in three new markets through Asia.`,
                        thumbnailPath: require("assets/images/views/career-experiences/pearson.jpg"),
                        achievements: [
                          /*html*/ `Participated to content authoring`,
                          /*html*/ `Modified components to suit market`,
                          /*html*/ `Developed registration forms`
                        ],
                        architecture: [
                          /*html*/ `<a href="https://www.adobe.com/au/marketing/experience-manager.html">Adobe Experience Manager</a> enterprise CMS`
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      url: /*html*/ `https://www.amaze.com/`,
                      name: /*html*/ `Amaze`
                    },
                    location: /*html*/ `London`,
                    jobTitle: /*html*/ `Front-end developer`,
                    startDate: new Date("2016/11/14"),
                    endDate: new Date("2017/10/19"),
                    lede: /*html*/ `Leading digital marketing, technology and commerce consultancy which delivers at a UK, pan-European and global level.`,
                    projects: [
                      {
                        highlight: true,
                        name: /*html*/ `Lexus`,
                        tagline: /*html*/ `v11`,
                        url: /*html*/ `https://www.lexus.eu/en/`,
                        lede: /*html*/ `Website redesign to embody the new brand direction focused on a premium and lifestyle experience. Deployed into 35 countries of the European market and translated into 27 languages.`,
                        thumbnailPath: require("assets/images/views/career-experiences/lexus.jpg"),
                        achievements: [
                          /*html*/ `Developed multiple responsive components following AAA accessibility standard.`,
                          /*html*/ `Developed a <a href="https://www.lexus.co.uk/forms/find-a-centre">module</a> that uses the browser Geolocation and Google Maps' APIs to locate the nearest Lexus dealer.`,
                          /*html*/ `Built a hero carousel with background video using <a href="https://github.com/kenwheeler/slick/">Slick</a>.`,
                          /*html*/ `Contributed to the <a href="https://www.lexus.co.uk/car-models/rc-f/#experience">"Experience"</a> component.`
                        ],
                        architecture: [
                          /*html*/ `<a href="http://www.sdl.com/software-and-services/tridion-dx/tridion-sites.html">SDL Tridion Sites</a> - headless data driven CMS`,
                          /*html*/ `Nunjucks templating - component oriented`,
                          /*html*/ `MongoDB database`,
                          /*html*/ `Sass + <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528">ITCSS</a> architecture`,
                          /*html*/ `BEM naming scheme`,
                          /*html*/ `Backbone.js`,
                          /*html*/ `jQuery progressive enhancement`,
                          /*html*/ `Grunt`,
                          /*html*/ `RequireJS`,
                          /*html*/ `Vagrant environment`,
                          /*html*/ `Heroku CI/CD`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/kenwheeler/slick/">Slick</a> carousel`,
                          /*html*/ `<a href="http://imakewebthings.com/waypoints/">Waypoints js</a> advanced CSS animations`
                        ]
                      },
                      {
                        name: /*html*/ `Lexus`,
                        tagline: /*html*/ `Safety System Plus`,
                        url: /*html*/ `https://www.lexus.eu/discover-lexus/technology/lexus-safety-system/`,
                        lede: /*html*/ `Microsite creation to showcase <em>Lexus' Safety System Plus</em> technology.`,
                        thumbnailPath: require("assets/images/views/career-experiences/lexus-safety-system-plus.jpg"),
                        achievements: [
                          /*html*/ `Used fullPage.js for a single-page design`,
                          /*html*/ `Created advanced multi layers CSS animations`,
                          /*html*/ `Developed with a responsive design / device orientation aware approach`,
                          /*html*/ `Optimised performance`
                        ],
                        architecture: [
                          /*html*/ `Technical stack identical to the one of <em>Lexus 'v11'</em>`,
                          /*html*/ `Three.js 3D graphics designed by the talented <a href="http://danielbrowns.com/">Daniel Brown</a>`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/alvarotrigo/fullPage.js">fullPage.js</a>`
                        ]
                      },
                      {
                        name: /*html*/ `Navico`,
                        tagline: /*html*/ `Lowrance`,
                        url: /*html*/ `https://www.lowrance.com/`,
                        lede: /*html*/ `Delivery within a short turnaround of a global eCommerce website for a manufacturer of consumer marine electronics.`,
                        thumbnailPath: require("assets/images/views/career-experiences/lowrance.jpg"),
                        achievements: [
                          /*html*/ `Developed multiple responsive components following AAA accessibility standard.`
                        ],
                        architecture: [
                          /*html*/ `<a href="http://www.episerver.com/">EPIServer</a> CMS`,
                          /*html*/ `Handlebars / Razor templating - component oriented`,
                          /*html*/ `Sass + <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528">ITCSS</a> architecture`,
                          /*html*/ `BEM naming scheme`,
                          /*html*/ `jQuery progressive enhancement`,
                          /*html*/ `Gulp`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/jquery-validation/jquery-validation">jquery-validation</a> client side form verification`
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      url: /*html*/ `https://www.surviemerformation.com/`,
                      name: /*html*/ `Survie Mer Formation`
                    },
                    location: /*html*/ `London`,
                    jobTitle: /*html*/ `Designer & Front-end developer & Marketing strategist`,
                    startDate: new Date("2016/05/04"),
                    endDate: new Date("2016/11/13"),
                    contractType: /*html*/ `Contractor`,
                    lede: /*html*/ `French leader in the training of marine and offshore personnel on safety at sea.`,
                    projects: [
                      {
                        highlight: true,
                        name: /*html*/ `Survie Mer Formation`,
                        url: /*html*/ `https://www.surviemerformation.com/`,
                        lede: /*html*/ `Redesign, development and marketing strategy aimed at increasing acquisition and conversion rate.`,
                        thumbnailPath: require("assets/images/views/career-experiences/survie-mer-formation.jpg"),
                        achievements: [
                          /*html*/ `Designed a Growth Hacking strategy following the AARRR model.`,
                          /*html*/ `Refreshed the UI with a new brand identity, responsive design and cross-browser compatibility.`,
                          /*html*/ `Revamped the UX with a focus on user conversion, web performance and accessibility.`,
                          /*html*/ `Optimised SEO with the use of Open Graph protocol and JSON-LD microdata.`,
                          /*html*/ `Created a tailored AdWords campaign: increased Clics by 10.10%, decreased <span data-tooltip="Cost Per Click" data-tooltip-indicator>CPC</span> by 6.65% YoY.`,
                          /*html*/ `Implemented Google Analytics custom events and goals tracking.`,
                          /*html*/ `Setup the architecture and built the front-end.`
                        ],
                        architecture: [
                          /*html*/ `Twig templating - component oriented`,
                          /*html*/ `MySQL database`,
                          /*html*/ `Sass + <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528">ITCSS</a> architecture`,
                          /*html*/ `BEM naming scheme`,
                          /*html*/ `jQuery progressive enhancement`,
                          /*html*/ `Grunt`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/kenwheeler/slick/">Slick</a> carousel`,
                          /*html*/ `<a href="https://github.com/graingert/WOW/">WOW.js</a> animation`
                        ]
                      }
                    ]
                  },
                  {
                    company: {
                      url: /*html*/ `http://www.tmwunlimited.com/`,
                      name: /*html*/ `TMW Unlimited`
                    },
                    location: /*html*/ `London`,
                    jobTitle: /*html*/ `Front-end developer`,
                    startDate: new Date("2015/12/07"),
                    endDate: new Date("2016/05/03"),
                    lede: /*html*/ `Award winning marketing agency which helps some of the world's most respected brands to strategically develop and implement marketing communications.`,
                    projects: [
                      {
                        name: /*html*/ `Business Banking Insight`,
                        url: /*html*/ `http://www.businessbankinginsight.co.uk`,
                        lede: /*html*/ `Analysis website of business banking providers, supported by the <em>HR Treasury</em>.`,
                        thumbnailPath: require("assets/images/views/career-experiences/business-banking-insight.jpg"),
                        achievements: [`Dynamic filtering`, `CMS integration`],
                        architecture: [
                          /*html*/ `AngularJS 2`,
                          /*html*/ `<a href="http://trykickoff.com/">Kickoff</a> framework (Grunt, Sass, jQuery)`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://www.amcharts.com/">amCharts</a>`
                        ]
                      },
                      {
                        name: /*html*/ `Prince's trust`,
                        tagline: /*html*/ `#partofPT campaign`,
                        url: /*html*/ `https://partofpt.princes-trust.org.uk/part-of-pt/`,
                        lede: /*html*/ `Crowdsourced event listing microsite for the <em>Prince's Trust</em> 40th anniversary celebration.`,
                        thumbnailPath: require("assets/images/views/career-experiences/princes-trust.jpg"),
                        achievements: ["Lazy loaded events from database"],
                        architecture: [
                          /*html*/ `<a href="http://trykickoff.com/">Kickoff</a> framework`
                        ],
                        libraries: [
                          /*html*/ `<a href="https://hashtagd.net/">Hashtagd</a>`,
                          /*html*/ `OAuth`
                        ]
                      },
                      {
                        name: /*html*/ `Sport Relief`,
                        tagline: /*html*/ `#Skipathon campaign (Over)`,
                        url: /*html*/ `https://www.youtube.com/watch?v=3PyZVDrO_aI`,
                        lede: /*html*/ `Mobile web browser game based on rope skipping.`,
                        thumbnailPath: require("assets/images/views/career-experiences/sport-relief-skipathon.jpg"),
                        achievements: [
                          /*html*/ `HTML5 canvas and CSS3 animations: <a href="https://codepen.io/johanmouchet/pen/OMgwMg">PoC</a>`,
                          /*html*/ `iOS and Android default browser support`,
                          /*html*/ `Device 3D movement detection`
                        ],
                        architecture: [
                          /*html*/ `React`,
                          /*html*/ `<a href="http://trykickoff.com/">Kickoff</a> framework`
                        ],
                        libraries: [/*html*/ `OAuth`]
                      }
                    ]
                  },
                  {
                    company: {
                      name: /*html*/ `MOVE digital`,
                      url: /*html*/ `http://www.movedigital.co.uk/`
                    },
                    location: /*html*/ `London`,
                    jobTitle: /*html*/ `Web designer & developer`,
                    startDate: new Date("2014/07/09"),
                    endDate: new Date("2015/10/01"),
                    lede: /*html*/ `Independent web marketing agency focused on Growth Hacking.<br /><br />Here are few of the websites I've designed and built using WordPress:`,
                    projects: [
                      {
                        name: /*html*/ `Weholite`,
                        url: /*html*/ `http://www.weholite.co.uk/`,
                        thumbnailPath: require("assets/images/views/career-experiences/weholite.jpg")
                      },
                      {
                        name: /*html*/ `Hiremech`,
                        url: /*html*/ `http://www.hiremech.co.uk/`,
                        thumbnailPath: require("assets/images/views/career-experiences/hiremech.jpg")
                      },
                      {
                        name: /*html*/ `Global Materials Handling`,
                        url: /*html*/ `http://globalforktrucks.com/`,
                        thumbnailPath: require("assets/images/views/career-experiences/global-materials-handling.jpg")
                      },
                      {
                        name: /*html*/ `Proton Motor`,
                        url: /*html*/ `http://www.proton-motor.com/`,
                        thumbnailPath: require("assets/images/views/career-experiences/proton-motor.jpg")
                      }
                    ]
                  }
                ]}
              />
            </article>

            <hr className="wow" />

            <article className="p-personal-works">
              <Anchor tag="h2" id="personal-works">
                Personal Works
              </Anchor>

              <p>
                When I'm not developing websites I like to take pictures, create
                infographics, doodle and make short films.
              </p>

              <PersonalWorks
                works={[
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/6Y23pU8xyHU/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/6Y23pU8xyHU`,
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/m9VIwiyzGSc/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/m9VIwiyzGSc`,
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/hLXsjf0dGgo/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/hLXsjf0dGgo`,
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/JjEZKXTGPio/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/JjEZKXTGPio`,
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/sTBdWFQKDHE/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/sTBdWFQKDHE`,
                    sourceIcon: <IconUnsplash />
                  },
                  {
                    thumbnailPath: require("assets/images/views/personal-works/south-cost-of-england.jpg"),
                    url: /*html*/ `https://youtu.be/NAsS1T_V8-k`,
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

              <a href="mailto:mouchet.johan@gmail.com">
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
