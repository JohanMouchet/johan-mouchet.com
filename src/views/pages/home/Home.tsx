import * as React from "react";
import { PROFILE } from "constants/profile";
import { Default } from "views/layouts";
import {
  Anchor,
  Button,
  Icon500px,
  IconCodepen,
  IconDribbble,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconSpotify,
  IconTwitter,
  IconUnsplash,
  IconYoutube,
  List,
} from "views/objects";
import {
  Skills,
  AcademicQualification,
  SocialMedia,
  Experiences,
  PersonalWorks,
} from "views/components";
import { Main, Article } from "views/partials";
import "./Home.scss";

const Home: React.FC = () => (
  <Default>
    <Main margin="no-margin">
      <section className="home-about">
        <div className="container container--noGutter-lgGrid">
          <div className="grid grid--lgGutter-@xs">
            <div className="cell cell--12-@xs cell--6-@sm">
              <h2 className="home-about__heading">About me</h2>

              <p className="home-about__paragraph">
                Originally from Marseille, France, I moved to London in 2013
                where I graduated from a master degree in IT and started my
                career as a <b>front-end developer</b>. In 2017, I relocated to{" "}
                <b>Melbourne</b> looking for new opportunities.
              </p>
            </div>

            <div className="home-cell--gray-lighter cell cell--0-@xs cell--6-@sm"></div>

            <div className="home-cell--gray cell cell--12-@xs cell--6-@sm cell--3-@md">
              <div className="home-grid--full-height grid grid--xCenter-@xs grid--yCenter-@xs">
                <div className="cell">
                  <img
                    className="home-about__portrait"
                    src={PROFILE.image.x1}
                    srcSet={
                      /*html*/
                      `${PROFILE.image.x1}, ${PROFILE.image.x2} 1.25x`
                    }
                    alt={
                      /*html*/
                      `${PROFILE.firstName} ${PROFILE.lastName}`
                    }
                  />
                </div>
              </div>
            </div>

            <div className="home-cell--gray-lighter cell cell--hidden-@xs cell--visible-@md cell--3-@md"></div>

            <div className="cell cell--12-@xs cell--6-@sm cell--yCenter-@sm">
              <h2 className="home-about__heading">Today,</h2>

              <p className="home-about__paragraph">
                I'm driven by my appreciation for design, enthusiasm for new
                technologies and desire to collaborate. I'm committed and ready
                to work within a fast-paced environment on innovative and
                impactful ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container container--noGutter-lgGrid">
        <div className="grid grid--lgGutter-@xs">
          <div className="home-cell--gray-lighter cell cell--12-@xs cell--3-@md">
            <Article>
              <Anchor as="h2" id="skills">
                Skills
              </Anchor>

              <Skills
                skills={[
                  {
                    label:
                      /*html*/
                      `React`,
                    filling: 80,
                    progress:
                      /*html*/
                      `8`,
                  },
                  {
                    label:
                      /*html*/
                      `JavaScript ⁠— TypeScript`,
                    filling: 80,
                    progress:
                      /*html*/
                      `8`,
                  },
                  {
                    label:
                      /*html*/
                      `HTML`,
                    filling: 100,
                    progress:
                      /*html*/
                      `10`,
                  },
                  {
                    label:
                      /*html*/
                      `CSS ⁠— Sass`,
                    filling: 100,
                    progress:
                      /*html*/
                      `10`,
                  },
                  {
                    label:
                      /*html*/
                      `UI & UX`,
                    filling: 90,
                    progress:
                      /*html*/
                      `9`,
                  },
                ]}
              />
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="tools">
                Tools
              </Anchor>
              <p>
                JAMstack, Jest, Redux, CSS-in-JS, Webpack, Storybook, Gulp, npm,
                Headless CMS, APIs, Git, Linters &amp; Prettier, Responsive
                design, Accessibility, Performance, Design handoff Apps, DevOps,
                SEO, Analytics, Agile, Open-source
              </p>
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="profile">
                Profile
              </Anchor>
              <p>Creative, Learning Enthusiast, Motivated, Knowledge Sharer</p>
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="academic-qualifications">
                Academic Qualifications
              </Anchor>

              <AcademicQualification
                qualifications={[
                  {
                    establishment: {
                      name:
                        /*html*/
                        `SUPINFO`,
                      url:
                        /*html*/
                        `https://www.supinfo.com/`,
                    },
                    location:
                      /*html*/
                      `London`,
                    graduationYear: 2015,
                    title:
                      /*html*/
                      `Master degree in Computer Science`,
                  },
                  {
                    establishment: {
                      name:
                        /*html*/
                        `SUPINFO`,
                      url:
                        /*html*/
                        `https://www.supinfo.com/`,
                    },
                    location:
                      /*html*/
                      `Marseille`,
                    graduationYear: 2013,
                    title:
                      /*html*/
                      `Bachelor degree in Computer Science`,
                  },
                ]}
              />
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="languages">
                Languages
              </Anchor>
              <List unstyled>
                <li>English: C1 Advanced</li>
                <li>French: Native</li>
              </List>
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="interests">
                Interests
              </Anchor>
              <p>
                Developing, Designing, Photography, Travelling, Cycling,
                Running, Fitness, Cooking, Volunteering{" "}
                <a href="https://youngcodersau.com/">@YoungCodersAU</a>
              </p>
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="social-media">
                Social Media
              </Anchor>

              <SocialMedia
                medias={[
                  {
                    name:
                      /*html*/
                      `LinkedIn`,
                    url: PROFILE.socialNetworks.linkedIn,
                    icon: <IconLinkedIn />,
                  },
                  {
                    name:
                      /*html*/
                      `Twitter`,
                    url: PROFILE.socialNetworks.twitter,
                    icon: <IconTwitter />,
                  },
                  {
                    name:
                      /*html*/
                      `CodePen`,
                    url: PROFILE.socialNetworks.codePen,
                    icon: <IconCodepen />,
                  },
                  {
                    name:
                      /*html*/
                      `GitHub`,
                    url: PROFILE.socialNetworks.gitHub,
                    icon: <IconGithub />,
                  },
                  {
                    name:
                      /*html*/
                      `Dribbble`,
                    url: PROFILE.socialNetworks.dribbble,
                    icon: <IconDribbble />,
                  },
                  {
                    name:
                      /*html*/
                      `Unsplash`,
                    url: PROFILE.socialNetworks.unsplash,
                    icon: <IconUnsplash />,
                  },
                  {
                    name:
                      /*html*/
                      `500px`,
                    url: PROFILE.socialNetworks.fiveHundredPx,
                    icon: <Icon500px />,
                  },
                  {
                    name:
                      /*html*/
                      `Instagram`,
                    url: PROFILE.socialNetworks.instagram,
                    icon: <IconInstagram />,
                  },
                  {
                    name:
                      /*html*/
                      `YouTube`,
                    url: PROFILE.socialNetworks.youTube,
                    icon: <IconYoutube />,
                  },
                  {
                    name:
                      /*html*/
                      `Spotify`,
                    url: PROFILE.socialNetworks.spotify,
                    icon: <IconSpotify />,
                  },
                ]}
              />
            </Article>
            <div className="u-vr--top-2-@xs"></div>
          </div>

          <div className="cell cell--12-@xs cell--9-@md">
            <Article>
              <Anchor as="h2" id="career-experiences">
                Career Experiences
              </Anchor>

              <Experiences
                experiences={[
                  {
                    company: {
                      url:
                        /*html*/
                        `https://theworkingparty.com.au/`,
                      name:
                        /*html*/
                        `The Working Party`,
                    },
                    location:
                      /*html*/
                      `Melbourne`,
                    jobTitle:
                      /*html*/
                      `Senior Front-end developer`,
                    startDate: new Date("2020-07-27"),
                    endDate: new Date(),
                    lede:
                      /*html*/
                      `Independent agency that design and build best-in-class eCommerce websites on Shopify Plus for retailers with complex technical requirements, who value brand and seek rapid growth through innovation.`,
                  },
                  {
                    company: {
                      url:
                        /*html*/
                        `https://isobar.com/au/en/`,
                      name:
                        /*html*/
                        `Isobar`,
                    },
                    location:
                      /*html*/
                      `Melbourne`,
                    jobTitle:
                      /*html*/
                      `Front-end developer`,
                    startDate: new Date("2017-11-11"),
                    endDate: new Date("2020-08-24"),
                    lede:
                      /*html*/
                      `Global agency that delivers digital transformation powered by creativity, who believe in <em>Ideas Without Limits</em>, pushing the boundaries of technology and creativity.`,
                    projects: [
                      {
                        highlight: true,
                        name:
                          /*html*/
                          `Jetstar`,
                        url:
                          /*html*/
                          `https://www.jetstar.com/au/en/home`,
                        lede:
                          /*html*/
                          `Modernisation, development of new features and upkeep of Jetstar's international website in an Agile environment.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/jetstar.jpg"),
                        achievements: [
                          /*html*/
                          `Took part in the migration of the <a href="https://www.jetstar.com/au/en/flights"><em>Flight Search</em></a> experience to React & Redux for faster and extensive results: <span class="c-project__success">&#9206;1.3%</span> conversion on the <em>Cheap Flights</em> pages.`,
                          /*html*/
                          `Contributed to creating a landing page to promote Jetstar <a href="https://www.jetstar.com/au/en/creditcards"><em>Credit Cards</em></a>: surpassed the conversion target by <span class="c-project__success">230%</span> in the first month of launch.`,
                          /*html*/
                          `Integrated a responsive utility-based Sass grid I built and open-sourced: <a href="https://github.com/JohanMouchet/fluxgrid">Fluxgrid</a>.`,
                          /*html*/
                          `Advocated for performance tracking and optimisations: slowed down the <span class="o-tooltip o-tooltip--top" tabindex="0">FMP<span class="o-tooltip__content">First Meaningful Paint</span></span> trend, <span class="c-project__success">&#9207;~9.5%</span> <span class="o-tooltip o-tooltip--top" tabindex="0">TTI<span class="o-tooltip__content">Time To Interactive</span></span> and <span class="c-project__success">&#9207;~15%</span> bundle size.`,
                        ],
                        architecture: [
                          /*html*/
                          `Sitecore CMS`,
                          /*html*/
                          `Webpack`,
                          /*html*/
                          `React & Redux`,
                          /*html*/
                          `Flow`,
                          /*html*/
                          `Jest, Enzyme`,
                          /*html*/
                          `Storybook`,
                          /*html*/
                          `Sass + CSS Modules`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://github.com/immutable-js/immutable-js">Immutable.js</a>`,
                          /*html*/
                          `<a href="https://github.com/localForage/localForage">Local Forage</a>`,
                          /*html*/
                          `<a href="https://github.com/date-fns/date-fns">Date-fns</a>`,
                          /*html*/
                          `<a href="https://github.com/nolimits4web/swiper">Swiperjs</a> carousel`,
                          /*html*/
                          `<a href="https://github.com/smebberson/fuse">Fuse</a>`,
                          /*html*/
                          `<a href="https://speedcurve.com/">SpeedCurve</a> performance tracking`,
                          /*html*/
                          `<a href="https://raygun.com/">Raygun</a> monitoring`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Zoos Victoria`,
                        tagline:
                          /*html*/
                          `CatVR: Safe Cat, Safe Wildlife`,
                        url:
                          /*html*/
                          `http://www.safecat.org.au`,
                        lede:
                          /*html*/
                          `Joint <em>RSPCA</em> campaign website to help cat owners give their pet the safest and happiest life while ensuring they have no link to loss of wildlife.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/zoos-victoria.jpg"),
                        achievements: [
                          /*html*/
                          `Developed a community submissible forms with client-side validation.`,
                          /*html*/
                          `Integrated social media sharing.`,
                          /*html*/
                          `Awarded<ul><li><span class="c-project__award">&#9733;</span> <span class="o-tooltip o-tooltip--top" tabindex="0">MADC<span class="o-tooltip__content">Melbourne Advertising and Design Club</span></span> 2018: <a href="https://twitter.com/isobarAU/status/1058125158752313344?s=20">Best PR experience</a></li><li><span class="c-project__award">&#9733;</span> One Show Awards shortlist: <a href="https://www.oneshow.org/viewentries/?id=51888">Media Relations</a></li></ul>`,
                        ],
                        architecture: [
                          /*html*/
                          `<a href="https://www.contentful.com/">Contentful</a>`,
                          /*html*/
                          `Handlebars templating - component-oriented`,
                          /*html*/
                          `Bootstrap 4`,
                          /*html*/
                          `Sass`,
                          /*html*/
                          `BEM naming scheme`,
                          /*html*/
                          `Webpack`,
                          /*html*/
                          `Gulp`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://github.com/desandro/masonry">Masonry</a> grid layout`,
                          /*html*/
                          `<a href="https://github.com/ghosh/micromodal">Micromodal</a> accessible modal dialogs`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Klip Studio`,
                        url:
                          /*html*/
                          `https://www.klipdesk.co`,
                        lede:
                          /*html*/
                          `Web application dedicated to the sport rights holders industry. Allows editing of live or recorded streams to produce highlights shareable on social media.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/klip-studio.jpg"),
                        achievements: [
                          /*html*/
                          `Developed content tagging, filtering and sorting features.`,
                          /*html*/
                          `Integrated audience engagement tracking through social media APIs.`,
                          /*html*/
                          `Integrated social media sharing.`,
                        ],
                        architecture: [
                          /*html*/
                          `React`,
                          /*html*/
                          `<a href="https://react.semantic-ui.com/">Semantic UI React</a> component library`,
                          /*html*/
                          `Create React App`,
                          /*html*/
                          `Less`,
                          /*html*/
                          `BEM naming scheme`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://semantic-ui.com/">Semantic UI</a>`,
                          /*html*/
                          `<a href="https://github.com/google/shaka-player">Shaka</a> web player - advanced video editing`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Pearson`,
                        tagline:
                          /*html*/
                          `Asia`,
                        url:
                          /*html*/
                          `https://www.pearson.com/asia/`,
                        lede:
                          /*html*/
                          `Websites creation related to education for Pearson's launch in three new markets through Asia.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/pearson.jpg"),
                        achievements: [
                          /*html*/
                          `Contributed to content authoring.`,
                          /*html*/
                          `Modified components to suit the market.`,
                          /*html*/
                          `Developed registration forms.`,
                        ],
                        architecture: [
                          /*html*/
                          `<a href="https://www.adobe.com/au/marketing/experience-manager.html">Adobe Experience Manager</a> enterprise CMS`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      url:
                        /*html*/
                        `https://www.amaze.com/`,
                      name:
                        /*html*/
                        `Amaze`,
                    },
                    location:
                      /*html*/
                      `London`,
                    jobTitle:
                      /*html*/
                      `Front-end developer`,
                    startDate: new Date("2016-11-14"),
                    endDate: new Date("2017-10-19"),
                    lede:
                      /*html*/
                      `Leading digital marketing, technology and commerce consultancy which delivers at the UK, pan-European and global level.`,
                    projects: [
                      {
                        highlight: true,
                        name:
                          /*html*/
                          `Lexus`,
                        tagline:
                          /*html*/
                          `v11`,
                        url:
                          /*html*/
                          `https://www.lexus.eu/en/`,
                        lede:
                          /*html*/
                          `Website redesign to embody the new brand direction focused on a premium and lifestyle experience. Deployed into 35 countries of the European market and translated into 27 languages.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/lexus.jpg"),
                        achievements: [
                          /*html*/
                          `Developed multiple responsive components following AAA accessibility standard.`,
                          /*html*/
                          `Contributed to developing a <a href="https://www.lexus.co.uk/forms/find-a-centre">module</a> that uses the browser Geolocation and Google Maps' APIs to locate the nearest Lexus dealer.`,
                          /*html*/
                          `Built a hero carousel with background video using Slick.`,
                          /*html*/
                          `Contributed to the parallax <a href="https://www.lexus.co.uk/car-models/rc-f/#experience"><em>"Experience"</em></a> component.`,
                        ],
                        architecture: [
                          /*html*/
                          `<a href="http://www.sdl.com/software-and-services/tridion-dx/tridion-sites.html">SDL Tridion Sites</a> - headless CMS`,
                          /*html*/
                          `Nunjucks templating - component-oriented`,
                          /*html*/
                          `MongoDB database`,
                          /*html*/
                          `Sass`,
                          /*html*/
                          `<a href="https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/">BEMIT</a> CSS architecture`,
                          /*html*/
                          `Backbone.js`,
                          /*html*/
                          `jQuery`,
                          /*html*/
                          `Grunt`,
                          /*html*/
                          `RequireJS`,
                          /*html*/
                          `Vagrant environment`,
                          /*html*/
                          `Heroku CI/CD`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://github.com/kenwheeler/slick/">Slick</a> carousel`,
                          /*html*/
                          `<a href="http://imakewebthings.com/waypoints/">Waypoints js</a> advanced CSS animations`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Lexus`,
                        tagline:
                          /*html*/
                          `Safety System Plus`,
                        url:
                          /*html*/
                          `https://www.lexus.eu/discover-lexus/technology/lexus-safety-system/`,
                        lede:
                          /*html*/
                          `Microsite creation to showcase <em>Lexus' Safety System Plus</em> technology.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/lexus-safety-system-plus.jpg"),
                        achievements: [
                          /*html*/
                          `Integrated fullPage.js for a single-page design.`,
                          /*html*/
                          `Created advanced multi layers CSS animations.`,
                          /*html*/
                          `Developed with a responsive design / device orientation aware approach.`,
                          /*html*/
                          `Optimised performances.`,
                        ],
                        architecture: [
                          /*html*/
                          `Technical stack identical to the one of <em>Lexus 'v11'</em>`,
                          /*html*/
                          `Three.js 3D graphics designed by the talented <a href="http://danielbrowns.com/">Daniel Brown</a>`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://github.com/alvarotrigo/fullPage">fullPage.js</a>`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Navico`,
                        tagline:
                          /*html*/
                          `Lowrance`,
                        url:
                          /*html*/
                          `https://www.lowrance.com/`,
                        lede:
                          /*html*/
                          `Delivery within a short turnaround of a global eCommerce website for a manufacturer of consumer marine electronics.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/lowrance.jpg"),
                        achievements: [
                          /*html*/
                          `Developed multiple responsive components following AAA accessibility standard.`,
                        ],
                        architecture: [
                          /*html*/
                          `<a href="http://www.episerver.com/">EPIServer</a> CMS`,
                          /*html*/
                          `Handlebars / Razor templating - component-oriented`,
                          /*html*/
                          `Sass`,
                          /*html*/
                          `<a href="https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/">BEMIT</a> CSS architecture`,
                          /*html*/
                          `jQuery`,
                          /*html*/
                          `Gulp`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://github.com/jquery-validation/jquery-validation">jquery-validation</a> client side form verification`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      url:
                        /*html*/
                        `https://www.surviemerformation.com/`,
                      name:
                        /*html*/
                        `Survie Mer Formation`,
                    },
                    location:
                      /*html*/
                      `London`,
                    jobTitle:
                      /*html*/
                      `Designer & Front-end developer & Marketing strategist`,
                    startDate: new Date("2016-05-04"),
                    endDate: new Date("2016-11-13"),
                    contractType:
                      /*html*/
                      `Contractor`,
                    lede:
                      /*html*/
                      `French leader in the training of marine and offshore personnel on safety at sea.`,
                    projects: [
                      {
                        highlight: true,
                        name:
                          /*html*/
                          `Survie Mer Formation`,
                        url:
                          /*html*/
                          `https://www.surviemerformation.com/`,
                        lede:
                          /*html*/
                          `Redesign, development and marketing strategy aimed at increasing acquisition and conversion rate.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/survie-mer-formation.jpg"),
                        achievements: [
                          /*html*/
                          `Designed a Growth Hacking strategy following the AARRR model: <span class="c-project__success">&#9206;12.6%</span> conversion.`,
                          /*html*/
                          `Single-handedly architected and built the front-end.`,
                          /*html*/
                          `Refreshed the UI with a new brand identity, responsive design and cross-browser compatibility.`,
                          /*html*/
                          `Revamped the UX with a focus on user conversion, web performance and accessibility.`,
                          /*html*/
                          `Optimised SEO with the use of Open Graph protocol and JSON-LD microdata.`,
                          /*html*/
                          `Created a tailored AdWords campaign: <span class="c-project__success">&#9206;10.1%</span> Clics, <span class="c-project__success">&#9207;6.6%</span> <span class="o-tooltip o-tooltip--top" tabindex="0">CPC<span class="o-tooltip__content">Cost Per Click</span></span> YoY.`,
                          /*html*/
                          `Implemented Google Analytics custom events and goals tracking.`,
                        ],
                        architecture: [
                          /*html*/
                          `Twig templating - component-oriented`,
                          /*html*/
                          `MySQL database`,
                          /*html*/
                          `Sass`,
                          /*html*/
                          `<a href="https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/">BEMIT</a> CSS architecture`,
                          /*html*/
                          `jQuery progressive enhancement`,
                          /*html*/
                          `Grunt`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://github.com/kenwheeler/slick/">Slick</a> carousel`,
                          /*html*/
                          `<a href="https://github.com/graingert/WOW/">wow.js</a> animation`,
                          /*html*/
                          `<a href="https://heml.io/">HEML</a> transactional email`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      url:
                        /*html*/
                        `http://www.tmwunlimited.com/`,
                      name:
                        /*html*/
                        `TMW Unlimited`,
                    },
                    location:
                      /*html*/
                      `London`,
                    jobTitle:
                      /*html*/
                      `Front-end developer`,
                    startDate: new Date("2015-12-07"),
                    endDate: new Date("2016-05-03"),
                    lede:
                      /*html*/
                      `Award-winning marketing agency which helps some of the world's most respected brands to strategically develop and implement marketing communications.`,
                    projects: [
                      {
                        name:
                          /*html*/
                          `Business Banking Insight`,
                        tagline:
                          /*html*/
                          `Discontinued`,
                        url:
                          /*html*/
                          `http://www.businessbankinginsight.co.uk`,
                        lede:
                          /*html*/
                          `Analysis website of business banking providers, supported by the <em>HR Treasury</em>.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/business-banking-insight.jpg"),
                        achievements: [
                          /*html*/
                          `Developed tables with filtering and sorting capabilities.`,
                          /*html*/
                          `Created dynamic graphics with amCharts.`,
                          /*html*/
                          `Integrated social media sharing.`,
                        ],
                        architecture: [
                          /*html*/
                          `AngularJS 2`,
                          /*html*/
                          `<a href="http://trykickoff.com/">Kickoff</a> framework (Grunt, Sass, jQuery)`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://www.amcharts.com/">amCharts</a>`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Prince's trust`,
                        tagline:
                          /*html*/
                          `#partofPT campaign (Over)`,
                        url:
                          /*html*/
                          `https://partofpt.princes-trust.org.uk/part-of-pt/`,
                        lede:
                          /*html*/
                          `Crowdsourced event listing microsite for the <em>Prince's Trust</em> 40th anniversary celebration.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/princes-trust.jpg"),
                        achievements: [
                          /*html*/
                          `Developed multiple UI components.`,
                          /*html*/
                          `Integrated Hashtagd APIs to create a wall of social media content.`,
                          /*html*/
                          `Integrated OAuth authentication.`,
                          /*html*/
                          `Integrated social media sharing.`,
                        ],
                        architecture: [
                          /*html*/
                          `<a href="http://trykickoff.com/">Kickoff</a> framework`,
                        ],
                        libraries: [
                          /*html*/
                          `<a href="https://hashtagd.net/">Hashtagd</a>`,
                          /*html*/
                          `OAuth`,
                        ],
                      },
                      {
                        name:
                          /*html*/
                          `Sport Relief`,
                        tagline:
                          /*html*/
                          `#Skipathon campaign (Over)`,
                        url:
                          /*html*/
                          `https://www.youtube.com/watch?v=3PyZVDrO_aI`,
                        lede:
                          /*html*/
                          `Mobile web browser game based on rope skipping.`,
                        thumbnailSrc: require("assets/images/views/career-experiences/sport-relief-skipathon.jpg"),
                        achievements: [
                          /*html*/
                          `Created  canvas and CSS animations: <a href="https://codepen.io/johanmouchet/pen/OMgwMg">PoC</a>`,
                          /*html*/
                          `Ensured iOS and Android default browser support.`,
                          /*html*/
                          `Used <a href="https://developers.google.com/web/fundamentals/native-hardware/device-orientation">Device Orientation & Motion</a> APIs`,
                          /*html*/
                          `Integrated OAuth authentication.`,
                          /*html*/
                          `Integrated social media sharing.`,
                          /*html*/
                          `Reached target of <span class="c-project__success">1 million</span> <em>Skips</em>.`,
                        ],
                        architecture: [
                          /*html*/
                          `React`,
                          /*html*/
                          `<a href="http://trykickoff.com/">Kickoff</a> framework`,
                        ],
                        libraries: [
                          /*html*/
                          `OAuth`,
                        ],
                      },
                    ],
                  },
                  {
                    company: {
                      name:
                        /*html*/
                        `MOVE digital`,
                      url:
                        /*html*/
                        `http://www.movedigital.co.uk/`,
                    },
                    location:
                      /*html*/
                      `London`,
                    jobTitle:
                      /*html*/
                      `Web designer & developer`,
                    startDate: new Date("2014-07-09"),
                    endDate: new Date("2015-10-01"),
                    lede:
                      /*html*/
                      `Independent web marketing agency focused on Growth Hacking.<br /><br />Here are a few of the websites I've designed and built using WordPress:`,
                    projects: [
                      {
                        name:
                          /*html*/
                          `Weholite`,
                        url:
                          /*html*/
                          `http://www.weholite.co.uk/`,
                        thumbnailSrc: require("assets/images/views/career-experiences/weholite.jpg"),
                      },
                      {
                        name:
                          /*html*/
                          `Hiremech`,
                        url:
                          /*html*/
                          `http://www.hiremech.co.uk/`,
                        thumbnailSrc: require("assets/images/views/career-experiences/hiremech.jpg"),
                      },
                      {
                        name:
                          /*html*/
                          `Global Materials Handling`,
                        url:
                          /*html*/
                          `http://globalforktrucks.com/`,
                        thumbnailSrc: require("assets/images/views/career-experiences/global-materials-handling.jpg"),
                      },
                      {
                        name:
                          /*html*/
                          `Proton Motor`,
                        url:
                          /*html*/
                          `http://www.proton-motor.com/`,
                        thumbnailSrc: require("assets/images/views/career-experiences/proton-motor.jpg"),
                      },
                    ],
                  },
                ]}
              />
            </Article>

            <hr />

            <Article>
              <Anchor as="h2" id="personal-works">
                Personal Works
              </Anchor>

              <p>
                When I'm not developing websites I like to take pictures, create
                infographics, doodle and make short films.
              </p>

              <PersonalWorks
                works={[
                  {
                    thumbnailSrc:
                      /*html*/
                      `https://source.unsplash.com/6Y23pU8xyHU/200x200`,
                    url:
                      /*html*/
                      `https://unsplash.com/photos/6Y23pU8xyHU`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailSrc:
                      /*html*/
                      `https://source.unsplash.com/m9VIwiyzGSc/200x200`,
                    url:
                      /*html*/
                      `https://unsplash.com/photos/m9VIwiyzGSc`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailSrc:
                      /*html*/
                      `https://source.unsplash.com/hLXsjf0dGgo/200x200`,
                    url:
                      /*html*/
                      `https://unsplash.com/photos/hLXsjf0dGgo`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailSrc:
                      /*html*/
                      `https://source.unsplash.com/JjEZKXTGPio/200x200`,
                    url:
                      /*html*/
                      `https://unsplash.com/photos/JjEZKXTGPio`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailSrc:
                      /*html*/
                      `https://source.unsplash.com/sTBdWFQKDHE/200x200`,
                    url:
                      /*html*/
                      `https://unsplash.com/photos/sTBdWFQKDHE`,
                    sourceIcon: <IconUnsplash />,
                  },
                  {
                    thumbnailSrc: require("assets/images/views/personal-works/south-cost-of-england.jpg"),
                    url:
                      /*html*/
                      `https://youtu.be/NAsS1T_V8-k`,
                    sourceIcon: <IconYoutube />,
                  },
                ]}
              />
            </Article>

            <hr className="u-vr--bottom-0-@xs" />

            <div className="grid">
              <div className="cell cell--12-@xs cell--6-@lg">
                <Article>
                  <Anchor as="h2" id="about-this-website">
                    About This Website
                  </Anchor>

                  <p>
                    This website is open-sourced on{" "}
                    <a href="https://github.com/JohanMouchet/johan-mouchet.com">
                      GitHub
                    </a>
                    , it is
                  </p>
                  <List>
                    <li>
                      bootstrapped with Create React App
                      <ul>
                        <li>including React, webpack, Babel and more</li>
                        <li>
                          published as an offline-first Progressive Web App
                        </li>
                      </ul>
                    </li>
                    <li>
                      maintaining a design system with{" "}
                      <a href="/storybook/?path=/docs/about-getting-started--page">
                        Storybook
                      </a>
                    </li>
                    <li>type-checked with TypeScript</li>
                    <li>unit and snapshot tested with Jest and Enzyme</li>
                    <li>using Sass and CSS post-processing</li>
                    <li>
                      linted and formated with ESlint, stylelint and Prettier,
                      <br />
                      enforced by Husky and lint-staged
                    </li>
                    <li>
                      using client side routing with{" "}
                      <a href="https://github.com/molefrog/wouter">wouter</a>
                    </li>
                    <li>deployed, pre-rendered, with Netlify</li>
                  </List>
                </Article>
              </div>

              <div className="cell cell--12-@xs cell--hidden-@lg">
                <hr className="u-vr--top-0-@xs u-vr--bottom-0-@xs" />
              </div>

              <div className="cell cell--12-@xs cell--6-@lg">
                <Article>
                  <Anchor as="h2" id="get-in-touch">
                    Get In Touch
                  </Anchor>

                  <Button
                    type="anchor"
                    url={`mailto:${PROFILE.email}`}
                    block="@sm"
                  >
                    {PROFILE.email}
                  </Button>

                  <br />
                  <br />

                  <Button
                    type="anchor"
                    url={PROFILE.socialNetworks.linkedIn}
                    variant="linkedIn"
                    block="@sm"
                  >
                    LinkedIn
                  </Button>
                </Article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  </Default>
);

export default Home;
