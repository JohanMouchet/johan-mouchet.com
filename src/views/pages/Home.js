import * as React from "react";
import { Default } from "views/layouts";
import { Anchor, Details } from "views/objects";
import {
  Skills,
  AcademicQualification,
  SocialMedia,
  Experience,
  PersonalWorks,
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
      description: /*html*/ `Front-end developer based in Melbourne, I’m excited about developing creative and intuitive web applications.`,
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
                    label: /*html*/ `React & Redux`,
                    filling: 80,
                    tooltip: /*html*/ `8/10`,
                  },
                  {
                    label: /*html*/ `HTML5`,
                    filling: 100,
                    tooltip: /*html*/ `10/10`,
                  },
                  {
                    label: /*html*/ `CSS3 & Sass`,
                    filling: 100,
                    tooltip: /*html*/ `10/10`,
                  },
                  {
                    label: /*html*/ `JavaScript ⁠— ES2019`,
                    filling: 80,
                    tooltip: /*html*/ `8/10`,
                  },
                  {
                    label: /*html*/ `UI & UX`,
                    filling: 90,
                    tooltip: /*html*/ `9/10`,
                  },
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
                / Gulp, PostCSS, Git (Gitflow), CI/CD, Babel, ESlint, Stylelint,
                Prettier, Zeplin, Responsive design, Performance, Accessibility,
                Web Standards, SEO, Analytics, Atlassian suite, Agile, Open
                source
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
                      url: /*html*/ `https://www.supinfo.com/`,
                    },
                    location: /*html*/ `London`,
                    graduationYear: 2015,
                    title: /*html*/ `Master degree in IT and computer science`,
                  },
                  {
                    establishment: {
                      name: /*html*/ `SUPINFO International University`,
                      url: /*html*/ `https://www.supinfo.com/`,
                    },
                    location: /*html*/ `Marseille`,
                    graduationYear: 2013,
                    title: /*html*/ `Bachelor degree in IT and computer science`,
                  },
                  {
                    establishment: {
                      name: /*html*/ `Chevreul Blancarde high school`,
                      url: /*html*/ `http://www.chevreulblancarde.com/`,
                    },
                    location: /*html*/ `Marseille`,
                    graduationYear: 2010,
                    title: /*html*/ `Baccalauréat scientifique (High School Certificate)`,
                  },
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
                Volunteer
                <a
                  href="https://youngcodersau.com/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    name: /*html*/ `LinkedIn`,
                    url: /*html*/ `https://www.linkedin.com/in/johanmouchet`,
                    icon: <IconLinkedIn />,
                  },
                  {
                    name: /*html*/ `Twitter`,
                    url: /*html*/ `https://twitter.com/JohanMouchet`,
                    icon: <IconTwitter />,
                  },
                  {
                    name: /*html*/ `CodePen`,
                    url: /*html*/ `http://codepen.io/johanmouchet/`,
                    icon: <IconCodepen />,
                  },
                  {
                    name: /*html*/ `GitHub`,
                    url: /*html*/ `https://github.com/JohanMouchet`,
                    icon: <IconGithub />,
                  },
                  {
                    name: /*html*/ `Dribbble`,
                    url: /*html*/ `https://dribbble.com/JohanMouchet/likes`,
                    icon: <IconDribbble />,
                  },
                  {
                    name: /*html*/ `Unsplash`,
                    url: /*html*/ `https://unsplash.com/@johanmouchet/`,
                    icon: <IconUnsplash />,
                  },
                  {
                    name: /*html*/ `500px`,
                    url: /*html*/ `https://500px.com/johanmouchet/`,
                    icon: <Icon500px />,
                  },
                  {
                    name: /*html*/ `Instagram`,
                    url: /*html*/ `https://instagram.com/johanmouchet/`,
                    icon: <IconInstagram />,
                  },
                  {
                    name: /*html*/ `YouTube`,
                    url: /*html*/ `https://www.youtube.com/c/JohanMouchet`,
                    icon: <IconYoutube />,
                  },
                  {
                    name: /*html*/ `Spotify`,
                    url: /*html*/ `https://open.spotify.com/user/1126411547`,
                    icon: <IconSpotify />,
                  },
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
                      name: /*html*/ `Isobar`,
                    },
                    location: /*html*/ `Melbourne`,
                    jobTitle: /*html*/ `Front-end developer`,
                    startDate: new Date("2017/11/11"),
                    endDate: new Date(),
                    lede: /*html*/ `Global agency that delivers digital transformation powered by creativity, who believe in <em>Ideas Without Limits</em>, pushing the boundaries of technology and creativity.`,
                    projects: [
                      {
                        name: /*html*/ `Zoos Victoria`,
                        tagline: /*html*/ `CatVR: Safe Cat, Safe Wildlife`,
                        url: /*html*/ `http://www.safecat.org.au`,
                        lede: /*html*/ `Joint <em>RSPCA</em> campaign website to help cat owners give their pet the safest and happiest life while ensuring they have no link to loss of wildlife.`,
                        thumbnailPath: require("assets/images/views/career-experiences/zoos-victoria.jpg"),
                        awards: [
                          {
                            name: /*html*/ `MADC 2018 (Melbourne Advertising and Design Club)`,
                            url: /*html*/ `https://twitter.com/isobarAU/status/1058125158752313344?s=20`,
                            category: /*html*/ `Best PR experience`,
                          },
                          {
                            name: /*html*/ `One Show Awards shortlist`,
                            url: /*html*/ `https://www.oneshow.org/viewentries/?id=51888`,
                            category: /*html*/ `Media Relations`,
                          },
                        ],
                        features: [
                          /*html*/ `<a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer"><em>Contentful</em></a> integration, headless CMS`,
                          /*html*/ `Community submission forms with client side validation`,
                          /*html*/ `Social media sharing`,
                        ],
                        architecture: [
                          /*html*/ `<em>Handlebars</em> templating, component oriented`,
                          /*html*/ `<em>Bootstrap 4</em>, <em>Sass</em>, <a href="http://getbem.com/" target="_blank" rel="noopener noreferrer"><em>BEM</em></a> naming scheme`,
                          /*html*/ `<em>Webpack</em>, <em>Gulp</em>`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/desandro/masonry" target="_blank" rel="noopener noreferrer"><em>Masonry</em></a> grid layout`,
                          /*html*/ `<a href="https://github.com/ghosh/micromodal" target="_blank" rel="noopener noreferrer"><em>Micromodal</em></a> accessible modal dialogs`,
                        ],
                      },
                      {
                        name: /*html*/ `Klip Studio`,
                        url: /*html*/ `https://www.klipdesk.co`,
                        lede: /*html*/ `Web application dedicated to the sport rights holders industry. Allows to edit live or recorded streams to produce highlights shareable on social media.`,
                        thumbnailPath: require("assets/images/views/career-experiences/klip-studio.jpg"),
                        features: [
                          /*html*/ `Content tagging, filtering, sorting`,
                          /*html*/ `Audience engagement tracking through social media APIs`,
                          /*html*/ `Social media publishing`,
                        ],
                        architecture: [
                          /*html*/ `<em>React</em>, <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer"><em>Semantic UI React</em></a> component library`,
                          /*html*/ `<a href="https://semantic-ui.com/" target="_blank" rel="noopener noreferrer"><em>Semantic UI</em></a>, <em>Less</em>, <a href="http://getbem.com/" target="_blank" rel="noopener noreferrer"><em>BEM</em></a> naming scheme`,
                          /*html*/ `<em>Create React App</em>`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/google/shaka-player" target="_blank" rel="noopener noreferrer"><em>Shaka</em></a> web player, advanced video editing`,
                        ],
                      },
                      {
                        name: /*html*/ `Pearson`,
                        tagline: /*html*/ `Asia`,
                        url: /*html*/ `https://www.pearson.com/asia/`,
                        lede: /*html*/ `Websites creation related to education for Pearson’s launch in three new markets through Asia.`,
                        thumbnailPath: require("assets/images/views/career-experiences/pearson.jpg"),
                        features: [
                          /*html*/ `Content authoring, page and component building`,
                          /*html*/ `Market customisation, internationalisation`,
                          /*html*/ `Registration forms`,
                        ],
                        architecture: [
                          /*html*/ `<a href="https://www.adobe.com/au/marketing/experience-manager.html" target="_blank" rel="noopener noreferrer"><em>Adobe Experience Manager</em></a>, enterprise content management`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      url: /*html*/ `https://www.amaze.com/`,
                      name: /*html*/ `Amaze`,
                    },
                    location: /*html*/ `London`,
                    jobTitle: /*html*/ `Front-end developer`,
                    startDate: new Date("2016/11/14"),
                    endDate: new Date("2017/10/19"),
                    lede: /*html*/ `Leading digital marketing, technology and commerce consultancy which delivers at a UK, pan-European and global level.`,
                    projects: [
                      {
                        name: /*html*/ `Lexus`,
                        tagline: /*html*/ `v11`,
                        url: /*html*/ `https://www.lexus.eu/en/`,
                        lede: /*html*/ `Website redesign to embody the new brand direction focused on a premium and lifestyle experience. Deployed into 35 countries of the European market and translated into 27 languages.`,
                        thumbnailPath: require("assets/images/views/career-experiences/lexus.jpg"),
                        features: [
                          /*html*/ `<a href="http://www.sdl.com/software-and-services/tridion-dx/tridion-sites.html"><em>SDL Web</em></a> (formerly Tridion), headless data driven CMS`,
                          /*html*/ `HTML5 Geolocation API, Google Maps API`,
                          /*html*/ `AAA accessibility standard`,
                        ],
                        architecture: [
                          /*html*/ `<em>Nunjucks</em> templating, component oriented,fed with datas stored in a <em>MongoDB</em> database`,

                          /*html*/ `Sass + <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528" target="_blank" rel="noopener noreferrer"><em>ITCSS</em></a> architecture, <a href="http://getbem.com/" target="_blank" rel="noopener noreferrer"><em>BEM</em></a> naming scheme`,
                          /*html*/ `<em>Backbone.js</em>`,
                          /*html*/ `<em>jQuery</em>, progressive enhancement`,
                          /*html*/ `<em>Grunt</em>, <em>RequireJS</em>`,
                          /*html*/ `<em>Vagrant</em> environment, <em>Heroku</em> CI/CD`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/kenwheeler/slick/" target="_blank" rel="noopener noreferrer"><em>Slick</em></a> carousel`,
                          /*html*/ `<a href="http://imakewebthings.com/waypoints/" target="_blank" rel="noopener noreferrer"><em>Waypoints js</em></a> advanced CSS animations`,
                        ],
                      },
                      {
                        name: /*html*/ `Lexus`,
                        tagline: /*html*/ `Safety System Plus`,
                        url: /*html*/ `https://www.lexus.eu/discover-lexus/technology/lexus-safety-system/`,
                        lede: /*html*/ `Microsite creation to showcase <em>Lexus' Safety System Plus</em> technology.`,
                        thumbnailPath: require("assets/images/views/career-experiences/lexus-safety-system-plus.jpg"),
                        features: [
                          /*html*/ `Advanced multi layers CSS animations`,
                          /*html*/ `Responsive design, device orientation aware`,
                          /*html*/ `Performance optimised`,
                        ],
                        architecture: [
                          /*html*/ `Stack identical to the one of <em>Lexus 'v11'</em>`,
                          /*html*/ `<em>Three.js</em> integration (designed by the talented <a href="http://danielbrowns.com/" target="_blank" rel="noopener noreferrer">Daniel Brown</a>)`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/alvarotrigo/fullPage.js" target="_blank" rel="noopener noreferrer"><em>fullPage.js</em></a>, single-page design`,
                        ],
                      },
                      {
                        name: /*html*/ `Navico`,
                        tagline: /*html*/ `Lowrance`,
                        url: /*html*/ `https://www.lowrance.com/`,
                        lede: /*html*/ `Delivery within a short turnaround of a global eCommerce website for a manufacturer of consumer marine electronics.`,
                        thumbnailPath: require("assets/images/views/career-experiences/lowrance.jpg"),
                        features: [
                          /*html*/ `<a href="http://www.episerver.com/" target="_blank" rel="noopener noreferrer"><em>EPIServer</em></a> CMS for scalability`,
                          /*html*/ `AAA accessibility standard`,
                        ],
                        architecture: [
                          /*html*/ `<em>Handlebars</em> / <em>Razor templating</em>,component oriented`,
                          /*html*/ `Sass + <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528" target="_blank" rel="noopener noreferrer"><em>ITCSS</em></a> architecture, <a href="http://getbem.com/" target="_blank" rel="noopener noreferrer"><em>BEM</em></a> naming scheme`,
                          /*html*/ `<em>jQuery</em>, progressive enhancement`,
                          /*html*/ `<em>Gulp</em>`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/jquery-validation/jquery-validation" target="_blank" rel="noopener noreferrer"><em>jquery-validation</em></a>, client side form verification`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      url: /*html*/ `https://www.surviemerformation.com/`,
                      name: /*html*/ `Survie Mer Formation`,
                    },
                    location: /*html*/ `London`,
                    jobTitle: /*html*/ `Designer & Front-end developer & Marketing strategist`,
                    startDate: new Date("2016/05/04"),
                    endDate: new Date("2016/11/13"),
                    contractType: /*html*/ `Contractor`,
                    lede: /*html*/ `Design, development and marketing strategy for a company that trains marine and offshore personnel on safety at sea.`,
                    projects: [
                      {
                        name: /*html*/ `Survie Mer Formation`,
                        url: /*html*/ `https://www.surviemerformation.com/`,
                        thumbnailPath: require("assets/images/views/career-experiences/survie-mer-formation.jpg"),
                        features: [
                          /*html*/ `<em>Growth Hacking</em> strategy development (<em>AARRR</em> model) meant to increase acquisition and increase conversion rate`,
                          /*html*/ `<em>UI</em> Refreshment: new brand identity,responsive design, cross-browser compatibility`,
                          /*html*/ `<em>UX</em> Revampment: focused towards user conversion, web performance, accessibility`,
                          /*html*/ `Wireframe, mockup and prototype done with <em>Photoshop</em>`,
                          /*html*/ `<em>SEO</em>: use of <em>Open Graph</em> protocol, <em>JSON-LD</em> microdata`,
                          /*html*/ `<em>SEA</em>: AdWords campaign creation`,
                          /*html*/ `<em>Analytics</em>: <em>Google Analytics</em> events and goals tracking`,
                        ],
                        architecture: [
                          /*html*/ `<em>Twig</em> templating, component oriented, fed with data stored in a <em>MySQL</em> database`,
                          /*html*/ `Sass + <a href="http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528" target="_blank" rel="noopener noreferrer"><em>ITCSS</em></a> architecture, <a href="http://getbem.com/" target="_blank" rel="noopener noreferrer"><em>BEM</em></a> naming scheme`,
                          /*html*/ `<em>jQuery</em>, progressive enhancement`,
                          /*html*/ `<em>Grunt</em>`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://github.com/kenwheeler/slick/" target="_blank" rel="noopener noreferrer"><em>Slick</em></a> carousel`,
                          /*html*/ `<a href="https://github.com/graingert/WOW/" target="_blank" rel="noopener noreferrer"><em>WOW.js</em></a> animation`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      url: /*html*/ `http://www.tmwunlimited.com/`,
                      name: /*html*/ `TMW Unlimited`,
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
                        lede: /*html*/ `Analysis website of business banking providers,supported by the <em>HR Treasury</em>.`,
                        thumbnailPath: require("assets/images/views/career-experiences/business-banking-insight.jpg"),
                        features: [`Dynamic filtering`, `CMS integration`],
                        architecture: [
                          /*html*/ `<em>AngularJS 2</em>`,
                          /*html*/ `<a href="http://trykickoff.com/" target="_blank" rel="noopener noreferrer"><em>Kickoff</em></a> framework (Grunt, Sass, jQuery)`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://www.amcharts.com/" target="_blank" rel="noopener noreferrer">amCharts</a> integration`,
                        ],
                      },
                      {
                        name: /*html*/ `Prince's trust`,
                        tagline: /*html*/ `#partofPT campaign`,
                        url: /*html*/ `https://partofpt.princes-trust.org.uk/part-of-pt/`,
                        lede: /*html*/ `Crowdsourced event listing microsite for the <em>Prince's Trust</em> 40th anniversary celebration.`,
                        thumbnailPath: require("assets/images/views/career-experiences/princes-trust.jpg"),
                        features: ["Lazy loaded events from database"],
                        architecture: [
                          /*html*/ `<a href="http://trykickoff.com/" target="_blank" rel="noopener noreferrer"><em>Kickoff</em></a> framework`,
                        ],
                        libraries: [
                          /*html*/ `<a href="https://hashtagd.net/" target="_blank" rel="noopener noreferrer"><em>Hashtagd</em></a> APIs integration`,
                          /*html*/ `<em>OAuth</em> integration for Twitter sharing`,
                        ],
                      },
                      {
                        name: /*html*/ `Sport Relief`,
                        tagline: /*html*/ `#Skipathon campaign (Over)`,
                        url: /*html*/ `https://www.youtube.com/watch?v=3PyZVDrO_aI`,
                        lede: /*html*/ `Mobile web browser game based on rope skipping.`,
                        thumbnailPath: require("assets/images/views/career-experiences/sport-relief-skipathon.jpg"),
                        features: [
                          /*html*/ `HTML5 canvas and CSS3 animations`,
                          /*html*/ `iOS and Android default browser support`,
                          /*html*/ `Device 3D movement detection`,
                        ],
                        architecture: [
                          /*html*/ `<em>React</em>`,
                          /*html*/ `<a href="http://trykickoff.com/" target="_blank" rel="noopener noreferrer"><em>Kickoff</em></a> framework`,
                        ],
                        libraries: [
                          /*html*/ `<em>OAuth</em> integration for Facebook and Twitter registration and sharing`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      name: /*html*/ `MOVE digital`,
                      url: /*html*/ `http://www.movedigital.co.uk/`,
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
                        thumbnailPath: require("assets/images/views/career-experiences/weholite.jpg"),
                      },
                      {
                        name: /*html*/ `Hiremech`,
                        url: /*html*/ `http://www.hiremech.co.uk/`,
                        thumbnailPath: require("assets/images/views/career-experiences/hiremech.jpg"),
                      },
                      {
                        name: /*html*/ `Global Materials Handling`,
                        url: /*html*/ `http://globalforktrucks.com/`,
                        thumbnailPath: require("assets/images/views/career-experiences/global-materials-handling.jpg"),
                      },
                      {
                        name: /*html*/ `Proton Motor`,
                        url: /*html*/ `http://www.proton-motor.com/`,
                        thumbnailPath: require("assets/images/views/career-experiences/proton-motor.jpg"),
                      },
                    ],
                  },
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
                          company: { name: /*html*/ `Jardin France Design` },
                          location: /*html*/ `Marseille`,
                          jobTitle: /*html*/ `Front-end developer`,
                          startDate: new Date("2013/07/01"),
                          endDate: new Date("2013/10/01"),
                          contractType: /*html*/ `Intern`,
                          lede: /*html*/ `PrestaShop eCommerce website for a garden products supplier. (Discontinued).`,
                        },
                        {
                          company: {
                            name: /*html*/ `Radigraph`,
                            url: /*html*/ `http://www.imprimerie-marseille-radigraph.fr/`,
                          },
                          location: /*html*/ `Marseille`,
                          jobTitle: /*html*/ `Front-end developer`,
                          startDate: new Date("2013/07/01"),
                          endDate: new Date("2013/10/01"),
                          contractType: /*html*/ `Part-time intern`,
                          lede: /*html*/ `Website development for a print company: product database, elaborated quotation,  <abbr title="Search Engine Optimization">  SEO </abbr> .`,
                        },
                        {
                          company: {
                            name: /*html*/ `Winlink santé`,
                            url: /*html*/ `http://www.winlinksante.com/`,
                          },
                          location: /*html*/ `Marseille`,
                          jobTitle: /*html*/ `Front-end developer`,
                          startDate: new Date("2012/07/01"),
                          endDate: new Date("2012/10/01"),
                          contractType: /*html*/ `Intern`,
                          lede: /*html*/ `Web intranet application for personnel management: account management, interactive calendar, multiple databases.`,
                        },
                        {
                          company: {
                            name: /*html*/ `Digitick`,
                            url: /*html*/ `http://next.digitick.com/`,
                          },
                          location: /*html*/ `Marseille`,
                          jobTitle: /*html*/ `Front-end developer`,
                          startDate: new Date("2011/07/01"),
                          endDate: new Date("2011/10/01"),
                          contractType: /*html*/ `Intern`,
                          lede: /*html*/ `Various web designs for online selling ticket: including  <a  href="http://sigstrasbourg.fr/"  target="_blank"  rel="noopener noreferrer" >  SIG Basket </a>  and  <a  href="http://biarritz-culture.com/"  target="_blank"  rel="noopener noreferrer" >  Biarritz culture </a> .`,
                        },
                        {
                          company: {
                            name: /*html*/ `Survie Mer Formation`,
                            url: /*html*/ `http://www.surviemerformation.com/`,
                          },
                          location: /*html*/ `Marseille`,
                          jobTitle: /*html*/ `Front-end developer`,
                          startDate: new Date("2008/07/01"),
                          endDate: new Date("2008/10/01"),
                          contractType: /*html*/ `Contractor`,
                          lede: /*html*/ `Website development for a training centre: advanced online registration, databases, back office,  <abbr title="Search Engine Optimization">  SEO </abbr> ,  <abbr title="Search Engine Advertising">SEA</abbr> .`,
                        },
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
                When I'm not developing websites I like to take pictures, create
                infographics, doodle and make short films.
              </p>

              <PersonalWorks
                works={[
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/6Y23pU8xyHU/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/6Y23pU8xyHU`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/m9VIwiyzGSc/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/m9VIwiyzGSc`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/hLXsjf0dGgo/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/hLXsjf0dGgo`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/JjEZKXTGPio/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/JjEZKXTGPio`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailPath: /*html*/ `https://source.unsplash.com/sTBdWFQKDHE/200x200`,
                    url: /*html*/ `https://unsplash.com/photos/sTBdWFQKDHE`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailPath: require("assets/images/views/personal-works/south-cost-of-england.jpg"),
                    url: /*html*/ `https://youtu.be/NAsS1T_V8-k`,
                    sourceIcon: <IconYoutube />,
                  },
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
