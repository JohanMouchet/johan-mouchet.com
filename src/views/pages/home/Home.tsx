import React from "react";
import { gql, useQuery } from "@apollo/client";
import { STATIC } from "constants/static";
import { RichText } from "prismic-reactjs";
import {
  AcademicQualification,
  Experiences,
  PersonalWorks,
  Skills,
  SocialMedia,
} from "views/components";
import { Default } from "views/layouts";
import { Anchor, Button, Loader } from "views/objects";
import { Article, Main } from "views/partials";
import "./Home.scss";

const Home: React.FC = () => {
  const query = gql`
    {
      profile(uid: "profile", lang: "en-au") {
        firstName: first_name
        lastName: last_name
        image
        email
        socialNetworks: social_networks {
          name
          link {
            ... on _ExternalLink {
              url
            }
          }
          icon
        }
        traits
      }
      home(uid: "home", lang: "en-au") {
        title1: title_1
        paragraph1: paragraph_1
        title2: title_2
        paragraph2: paragraph_2
        skillsSectionTitle: skills_section_title
        toolsSectionTitle: tools_section_title
        profileSectionTitle: profile_section_title
        academicQualificationsSectionTitle: academic_qualifications_section_title
        languagesSectionTitle: languages_section_title
        interestsSectionTitle: interests_section_title
        socialMediaSectionTitle: social_media_section_title
        careerExperiencesSectionTitle: career_experiences_section_title
        openSourceSectionTitle: open_source_section_title
        personalWorksSectionTitle: personal_works_section_title
        getInTouchSectionTitle: get_in_touch_section_title
      }
      skills(uid: "skills", lang: "en-au") {
        skills {
          label
          filling
          progress
        }
      }
      tools(uid: "tools", lang: "en-au") {
        tools
      }
      academicQualifications: academic_qualifications(
        uid: "academic-qualifications"
        lang: "en-au"
      ) {
        degrees {
          establishmentName: establishment_name
          establishmentLink: establishment_link {
            ... on _ExternalLink {
              url
            }
          }
          location
          graduationYear: graduation_year
          title
        }
      }
      languages(uid: "languages", lang: "en-au") {
        languages
      }
      interests(uid: "interests", lang: "en-au") {
        interests
      }
      careerExperiences: career_experiences(
        uid: "career-experiences"
        lang: "en-au"
      ) {
        experiences {
          companyLink: company_link {
            ... on _ExternalLink {
              url
            }
          }
          companyName: company_name
          location
          jobTitle: job_title
          startDate: start_date
          present
          endDate: end_date
          contractType: contract_type
          lede
          projects {
            _linkType
          }
        }
      }
      openSource: open_source(uid: "open-source", lang: "en-au") {
        projects {
          name
          link {
            ... on _ExternalLink {
              url
            }
          }
          lede
          description
        }
      }
      personalWorks: personal_works(uid: "personal-works", lang: "en-au") {
        paragraph
        works {
          link {
            ... on _ExternalLink {
              url
            }
          }
          thumbnailSrc: thumbnail_src
          thumbnailExternalSrc: thumbnail_external_src {
            ... on _ExternalLink {
              url
            }
          }
          icon
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(query);

  return (
    <Default>
      {loading ? (
        <Main>
          <div className="container u-align--center u-full--height">
            <div className="grid grid--xCenter-@xs grid--yCenter-@xs u-full--height">
              <div className="cell">
                <Loader />
              </div>
            </div>
          </div>
        </Main>
      ) : error ? (
        <Main>
          <div className="container u-align--center u-full--height">
            <div className="grid grid--xCenter-@xs grid--yCenter-@xs u-full--height">
              <div className="cell">Error, please reload the page.</div>
            </div>
          </div>
        </Main>
      ) : (
        <Main margin="no-margin">
          <section className="home-about">
            <div className="container container--noGutter-lgGrid">
              <div className="grid grid--lgGutter-@xs">
                <div className="cell cell--12-@xs cell--6-@sm">
                  <h2 className="home-about__heading">{data.home.title1}</h2>

                  <div className="home-about__paragraph">
                    <RichText render={data.home.paragraph1} />
                  </div>
                </div>

                <div className="home-cell--gray-lighter cell cell--0-@xs cell--6-@sm"></div>

                <div className="home-cell--gray cell cell--12-@xs cell--6-@sm cell--3-@md">
                  <div className="home-grid--full-height grid grid--xCenter-@xs grid--yCenter-@xs">
                    <div className="cell">
                      <img
                        className="home-about__portrait"
                        src={`${data.profile.image.url}&q=100`}
                        srcSet={`${data.profile.image.url}&q=100, ${data.profile.image.x2.url}&q=100 1.25x`}
                        alt={data.profile.image.alt}
                      />
                    </div>
                  </div>
                </div>

                <div className="home-cell--gray-lighter cell cell--hidden-@xs cell--visible-@md cell--3-@md"></div>

                <div className="cell cell--12-@xs cell--6-@sm cell--yCenter-@sm">
                  <h2 className="home-about__heading">{data.home.title2}</h2>

                  <div className="home-about__paragraph">
                    <RichText render={data.home.paragraph2} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container container--noGutter-lgGrid">
            <div className="grid grid--lgGutter-@xs">
              <div className="home-cell--gray-lighter cell cell--12-@xs cell--3-@md">
                <Article>
                  <Anchor as="h2" id="skills">
                    {data.home.skillsSectionTitle}
                  </Anchor>

                  <Skills skills={data.skills.skills} />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="tools">
                    {data.home.toolsSectionTitle}
                  </Anchor>

                  <RichText render={data.tools.tools} />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="profile">
                    {data.home.profileSectionTitle}
                  </Anchor>

                  <p>{data.profile.traits}</p>
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="academic-qualifications">
                    {data.home.academicQualificationsSectionTitle}
                  </Anchor>

                  <AcademicQualification
                    degrees={data.academicQualifications.degrees}
                  />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="languages">
                    {data.home.languagesSectionTitle}
                  </Anchor>

                  <RichText render={data.languages.languages} />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="interests">
                    {data.home.interestsSectionTitle}
                  </Anchor>

                  <RichText render={data.interests.interests} />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="social-media">
                    {data.home.socialMediaSectionTitle}
                  </Anchor>

                  <SocialMedia media={data.profile.socialNetworks} />
                </Article>
                <div className="u-vr--top-2-@xs"></div>
              </div>

              <div className="cell cell--12-@xs cell--9-@md">
                <Article>
                  <Anchor as="h2" id="career-experiences">
                    {data.home.careerExperiencesSectionTitle}
                  </Anchor>

                  <Experiences
                    experiences={[
                      {
                        company: {
                          link: {
                            url:
                              /*html*/
                              `https://theworkingparty.com.au/`,
                          },
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
                          link: {
                            url:
                              /*html*/
                              `https://isobar.com/au/en/`,
                          },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.jetstar.com/au/en/home`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `http://www.safecat.org.au`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.isobar.com/en-au/case-studies/australia/2019/september/klip-sports`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.pearson.com/asia/`,
                            },
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
                          link: {
                            url:
                              /*html*/
                              `https://www.amazerealise.com/`,
                          },
                          name:
                            /*html*/
                            `AmazeRealise`,
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
                            link: {
                              url:
                                /*html*/
                                `https://www.lexus.eu/en/`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.lexus.eu/discover-lexus/technology/lexus-safety-system/`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.lowrance.com/`,
                            },
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
                          link: {
                            url:
                              /*html*/
                              `https://www.surviemerformation.com/`,
                          },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.surviemerformation.com/`,
                            },
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
                          link: {
                            url:
                              /*html*/
                              `http://www.tmwunlimited.com/`,
                          },
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
                            link: {
                              url:
                                /*html*/
                                `http://www.businessbankinginsight.co.uk`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `https://partofpt.princes-trust.org.uk/part-of-pt/`,
                            },
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
                            link: {
                              url:
                                /*html*/
                                `https://www.youtube.com/watch?v=3PyZVDrO_aI`,
                            },
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
                          link: {
                            url:
                              /*html*/
                              `http://www.movedigital.co.uk/`,
                          },
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
                            link: {
                              url:
                                /*html*/
                                `http://www.weholite.co.uk/`,
                            },
                            thumbnailSrc: require("assets/images/views/career-experiences/weholite.jpg"),
                          },
                          {
                            name:
                              /*html*/
                              `Hiremech`,
                            link: {
                              url:
                                /*html*/
                                `http://www.hiremech.co.uk/`,
                            },
                            thumbnailSrc: require("assets/images/views/career-experiences/hiremech.jpg"),
                          },
                          {
                            name:
                              /*html*/
                              `Global Materials Handling`,
                            link: {
                              url:
                                /*html*/
                                `http://globalforktrucks.com/`,
                            },
                            thumbnailSrc: require("assets/images/views/career-experiences/global-materials-handling.jpg"),
                          },
                          {
                            name:
                              /*html*/
                              `Proton Motor`,
                            link: {
                              url:
                                /*html*/
                                `http://www.proton-motor.com/`,
                            },
                            thumbnailSrc: require("assets/images/views/career-experiences/proton-motor.jpg"),
                          },
                        ],
                      },
                    ]}
                  />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="open-source">
                    {data.home.openSourceSectionTitle}
                  </Anchor>

                  <div className="grid">
                    <div className="cell cell--12-@xs cell--6-@sm cell--4-@lg">
                      <h3>
                        <a
                          href={data.openSource.projects[0].link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.openSource.projects[0].name}
                        </a>
                      </h3>

                      <RichText render={data.openSource.projects[0].lede} />

                      <RichText
                        render={data.openSource.projects[0].description}
                      />
                    </div>
                    <div className="cell cell--12-@xs cell--6-@sm cell--4-@lg">
                      <h3>
                        <a
                          href={data.openSource.projects[1].link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.openSource.projects[1].name}
                        </a>
                      </h3>

                      <RichText render={data.openSource.projects[1].lede} />

                      <RichText
                        render={data.openSource.projects[1].description}
                      />
                    </div>
                  </div>
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="personal-works">
                    {data.home.personalWorksSectionTitle}
                  </Anchor>

                  <RichText render={data.personalWorks.paragraph} />

                  <PersonalWorks works={data.personalWorks.works} />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="get-in-touch">
                    {data.home.getInTouchSectionTitle}
                  </Anchor>

                  <div className="grid">
                    <div className="cell cell--12-@xs cell cell--4-@md">
                      <Button
                        type="anchor"
                        url={`mailto:${data.profile.email}`}
                        block="@sm"
                      >
                        {data.profile.email}
                      </Button>

                      <br />
                      <br />

                      <Button
                        type="anchor"
                        url={STATIC.profile.socialNetworks.linkedIn}
                        variant="linkedIn"
                        block="@sm"
                      >
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </Article>
              </div>
            </div>
          </section>
        </Main>
      )}
    </Default>
  );
};

export default Home;
