import { AcademicQualification } from "@/views/components/academic-qualification/AcademicQualification";
import { ExperienceDuration } from "@/views/components/experience-duration/ExperienceDuration";
import { Experiences } from "@/views/components/experiences/Experiences";
import { OpenSource } from "@/views/components/open-source/OpenSource";
import { PersonalWorks } from "@/views/components/personal-works/PersonalWorks";
import { Skills } from "@/views/components/skills/Skills";
import { SocialMedia } from "@/views/components/social-media/SocialMedia";
import { Default } from "@/views/layouts/default/Default";
import { Anchor } from "@/views/objects/anchor/Anchor";
import { Badge } from "@/views/objects/badge/Badge";
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
import clsx from "clsx";
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
        <Main margin="no-margin">
          <section className={styles["home-about"]}>
            <div
              className={clsx(
                "grid",
                "grid-no-gutter",
                styles["home-lg-gutter"]
              )}
            >
              <div
                className={clsx(
                  styles["home-cell--gray"],
                  "cell",
                  "cell-12",
                  "cell-last",
                  "md:cell-3",
                  "md:cell-first"
                )}
              >
                <div
                  className={clsx(
                    "u-full--height",
                    "grid",
                    "grid-x-center",
                    "grid-y-center"
                  )}
                >
                  <div className="cell">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles["home-about__portrait"]}
                      width={data.profile.image.dimensions.width}
                      height={data.profile.image.dimensions.height}
                      src={`${data.profile.image.url}&q=100`}
                      srcSet={`${data.profile.image.url}&q=100, ${data.profile.image.x2.url}&q=100 1.25x`}
                      alt={data.profile.image.alt}
                    />
                  </div>
                </div>
              </div>

              <div
                className={clsx(
                  styles["home-cell--gray-lighter"],
                  "cell",
                  "cell-12",
                  "md:cell-9",
                  "md:cell-y-center"
                )}
              >
                <h1 className={styles["home-about__heading"]}>
                  {data.home.title}
                </h1>

                <div className={styles["home-about__paragraph"]}>
                  <PrismicRichText field={data.home.paragraph} />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div
              className={clsx(
                "grid",
                "grid-no-gutter",
                styles["home-lg-gutter"]
              )}
            >
              <div
                className={clsx(
                  styles["home-cell--gray-lighter"],
                  "cell",
                  "cell-12",
                  "md:cell-3"
                )}
              >
                <Article>
                  <h2>
                    <Anchor id="skills">{data.home.skillsSectionTitle}</Anchor>
                  </h2>

                  <Skills skills={data.skills.skills} />
                </Article>

                <hr />

                <Article>
                  <h2>
                    <Anchor id="tools">{data.home.toolsSectionTitle}</Anchor>
                  </h2>

                  <div className={styles["home__tools"]}>
                    {data.tools.tools[0].text
                      .split(", ")
                      .map((item: string) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                  </div>
                </Article>

                <hr />

                <Article>
                  <h2>
                    <Anchor id="profile">
                      {data.home.profileSectionTitle}
                    </Anchor>
                  </h2>

                  <p>{data.profile.traits}</p>
                </Article>

                <hr />

                <Article>
                  <h2>
                    <Anchor id="academic-qualifications">
                      {data.home.academicQualificationsSectionTitle}
                    </Anchor>
                  </h2>

                  <AcademicQualification
                    degrees={data.academicQualifications.degrees}
                  />
                </Article>

                <hr />

                <Article>
                  <h2>
                    <Anchor id="languages">
                      {data.home.languagesSectionTitle}
                    </Anchor>
                  </h2>

                  <PrismicRichText field={data.languages.languages} />
                </Article>

                <hr />

                <Article>
                  <h2>
                    <Anchor id="interests">
                      {data.home.interestsSectionTitle}
                    </Anchor>
                  </h2>

                  <PrismicRichText field={data.interests.interests} />
                </Article>

                <hr />

                <Article>
                  <h2>
                    <Anchor id="social-media">
                      {data.home.socialMediaSectionTitle}
                    </Anchor>
                  </h2>

                  <SocialMedia media={data.profile.socialNetworks} />
                </Article>
                <div className="u-vr--top-2" />
              </div>

              <div className="cell cell-12 md:cell-9">
                <Article>
                  <h2 className={styles["home__experiences-title"]}>
                    <Anchor id="career-experiences">
                      {data.home.careerExperiencesSectionTitle}
                    </Anchor>{" "}
                    <ExperienceDuration
                      experiences={data.careerExperiences.experiences}
                    />
                  </h2>

                  <Experiences
                    experiences={data.careerExperiences.experiences}
                  />
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

                <Article>
                  <h2>
                    <Anchor id="personal-works">
                      {data.home.personalWorksSectionTitle}
                    </Anchor>
                  </h2>

                  <PrismicRichText field={data.personalWorks.paragraph} />

                  <PersonalWorks works={data.personalWorks.works} />
                </Article>

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
                      icon={<IconLinkedIn />}
                      block="sm"
                    >
                      Connect on LinkedIn
                    </Button>
                    <Button
                      href={data.profile.resumeLink?.url}
                      icon={<IconDownload />}
                      block="sm"
                    >
                      Download résumé
                    </Button>
                  </div>
                </Article>
              </div>
            </div>
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
              highlight
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
