import { AcademicQualification } from "@/views/components/academic-qualification/AcademicQualification";
import { ExperienceDuration } from "@/views/components/experience-duration/ExperienceDuration";
import { Experiences } from "@/views/components/experiences/Experiences";
import { OpenSource } from "@/views/components/open-source/OpenSource";
import { PersonalWorks } from "@/views/components/personal-works/PersonalWorks";
import { Skills } from "@/views/components/skills/Skills";
import { SocialMedia } from "@/views/components/social-media/SocialMedia";
import { Default } from "@/views/layouts/default/Default";
import { Anchor } from "@/views/objects/anchor/Anchor";
import { Button } from "@/views/objects/button/Button";
import {
  IconDownload,
  IconEnvelope,
  IconLinkedIn,
} from "@/views/objects/icons";
import styles from "@/views/pages/index/index.module.scss";
import { Article } from "@/views/partials/article/Article";
import { Main } from "@/views/partials/main/Main";
import { gql } from "@apollo/client";
import { PrismicRichText } from "@prismicio/react";
import { NextPage } from "next";
import { client } from "./api/prismicio";

const Home: NextPage = ({ data, errors }: any) => {
  if (errors) {
    return (
      <Default>
        <Main>
          <div className="container u-align--center u-full--height">
            <div className="grid grid-x-center grid-y-center u-full--height">
              <div className="cell">Error, please reload the page.</div>
            </div>
          </div>
        </Main>
      </Default>
    );
  }

  if (data) {
    return (
      <Default>
        <section className={styles["home__about"]}>
          <div className={styles["home__about-paragraph"]}>
            <PrismicRichText field={data.home.paragraph} />
            <Skills skills={data.skills.skills} />
          </div>
        </section>
        <Main>
          <section>
            <Article>
              <h2 className={styles["home__experiences-title"]}>
                <Anchor id="career-experiences">
                  {data.home.careerExperiencesSectionTitle}
                </Anchor>{" "}
                <ExperienceDuration
                  experiences={data.careerExperiences.experiences}
                />
              </h2>

              <Experiences experiences={data.careerExperiences.experiences} />
            </Article>

            <hr />

            <Article>
              <h2>
                <Anchor id="open-source">
                  {data.home.openSourceSectionTitle}
                </Anchor>
              </h2>

              <OpenSource projects={data.openSource.projects} />
            </Article>

            <hr />

            <div className="grid md:grid-lg-gutter">
              <Article margin="no-margin" className="cell cell-12 md:cell-4">
                <h2>
                  <Anchor id="tools">{data.home.toolsSectionTitle}</Anchor>
                </h2>

                <div className={styles["home__tools"]}>
                  {data.tools.tools[0].text.split(", ").map((item: string) => (
                    <code key={item}>{item}</code>
                  ))}
                </div>
              </Article>

              <div className="cell cell-12 md:cell-hidden">
                <hr />
              </div>

              <Article margin="no-margin" className="cell cell-12 md:cell-5">
                <h2>
                  <Anchor id="academic-qualifications">
                    {data.home.academicQualificationsSectionTitle}
                  </Anchor>
                </h2>

                <AcademicQualification
                  degrees={data.academicQualifications.degrees}
                />
              </Article>

              <div className="cell cell-12 md:cell-hidden">
                <hr />
              </div>

              <Article margin="no-margin" className="cell cell-12 md:cell-3">
                <h2>
                  <Anchor id="languages">
                    {data.home.languagesSectionTitle}
                  </Anchor>
                </h2>

                <PrismicRichText field={data.languages.languages} />
              </Article>
            </div>

            <hr />

            <Article>
              <h2>
                <Anchor id="get-in-touch">
                  {data.home.getInTouchSectionTitle}
                </Anchor>
              </h2>

              <div className={styles["home__get-in-touch"]}>
                <Button
                  href={`mailto:${data.profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<IconEnvelope />}
                  block="sm"
                  variant="primary"
                >
                  Email me
                </Button>
                <Button
                  href={
                    data.profile.socialNetworks.find(
                      (socialNetwork: { name: string }) =>
                        socialNetwork.name === "LinkedIn"
                    )?.link?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<IconLinkedIn />}
                  block="sm"
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  href={data.profile.resumeLink?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<IconDownload />}
                  block="sm"
                >
                  Download résumé
                </Button>
              </div>

              <h3>{data.home.socialMediaSectionTitle}</h3>

              <SocialMedia media={data.profile.socialNetworks} />
            </Article>

            <hr />

            <Article>
              <h2>
                <Anchor id="personal-works">
                  {data.home.personalWorksSectionTitle}
                </Anchor>
              </h2>

              <PrismicRichText field={data.personalWorks.paragraph} />

              <PersonalWorks works={data.personalWorks.works} />
            </Article>
          </section>
        </Main>
      </Default>
    );
  }

  return null;
};

const homeQuery = gql`
  {
    profile(uid: "profile", lang: "en-au") {
      firstName: first_name
      lastName: last_name
      # image
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
      resumeLink: resume_link {
        ... on _ExternalLink {
          url
        }
      }
    }
    home(uid: "home", lang: "en-au") {
      title
      paragraph
      skillsSectionTitle: skills_section_title
      toolsSectionTitle: tools_section_title
      academicQualificationsSectionTitle: academic_qualifications_section_title
      languagesSectionTitle: languages_section_title
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
    careerExperiences: career_experiences(
      uid: "career-experiences"
      lang: "en-au"
    ) {
      experiences {
        id
        companyLink: company_link {
          ... on _ExternalLink {
            url
          }
        }
        companyName: company_name
        location
        roles {
          ... on Roles {
            roles {
              title
              startDate: start_date
              present
              endDate: end_date
              contractType: contract_type
            }
          }
        }
        lede
        projects {
          ... on Projects {
            highlighted
            projects {
              id
              name
              tagline
              link {
                ... on _ExternalLink {
                  url
                }
              }
              lede
              links {
                ... on Project_links {
                  links {
                    link {
                      ... on _ExternalLink {
                        url
                      }
                    }
                    name
                    icon
                  }
                }
              }
              thumbnailSrc: thumbnail_src
              achievements
              architecture
            }
          }
        }
      }
    }
    openSource: open_source(uid: "open-source-projects", lang: "en-au") {
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

export async function getStaticProps() {
  const { data, errors = null } = await client.query({
    query: homeQuery,
  });

  return {
    props: {
      data,
      errors,
    },
  };
}

export default Home;
