import React from "react";
import { gql, useQuery } from "@apollo/client";
import { RichText } from "prismic-reactjs";
import {
  AcademicQualification,
  Experiences,
  OpenSource,
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
            ... on Projects {
              projects {
                name
                tagline
                link {
                  ... on _ExternalLink {
                    url
                  }
                }
                lede
                thumbnailSrc: thumbnail_src
                highlight
                achievements
                architecture
                libraries
              }
            }
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
                    experiences={data.careerExperiences.experiences}
                  />
                </Article>

                <hr />

                <Article>
                  <Anchor as="h2" id="open-source">
                    {data.home.openSourceSectionTitle}
                  </Anchor>

                  <OpenSource projects={data.openSource.projects} />
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
                    <div className="cell cell--12-@xs">
                      <Button
                        type="anchor"
                        url={`mailto:${data.profile.email}`}
                        block="@sm"
                      >
                        {data.profile.email}
                      </Button>
                    </div>

                    <div className="cell cell--12-@xs">&nbsp;</div>

                    <div className="cell cell--12-@xs">
                      <Button
                        type="anchor"
                        url={
                          data.profile.socialNetworks.find(
                            (socialNetwork: { name: string }) =>
                              socialNetwork.name === "LinkedIn"
                          )?.link?.url
                        }
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
