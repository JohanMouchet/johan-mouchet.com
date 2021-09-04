import React from "react";
import {
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
} from "views/objects";
import styles from "./SocialMedia.module.scss";

type Props = {
  media: Array<{
    name: string;
    link: {
      url: string;
    };
    icon:
      | "500px"
      | "codepen"
      | "dribbble"
      | "github"
      | "instagram"
      | "linkedin"
      | "spotify"
      | "twitter"
      | "unsplash"
      | "youtube";
  }>;
};

const SocialMedia: React.FC<Props> = ({ media }) => {
  const getIcon = (icon: string) => {
    if (icon === "500px") {
      return <Icon500px />;
    } else if (icon === "codepen") {
      return <IconCodepen />;
    } else if (icon === "dribbble") {
      return <IconDribbble />;
    } else if (icon === "github") {
      return <IconGithub />;
    } else if (icon === "instagram") {
      return <IconInstagram />;
    } else if (icon === "linkedin") {
      return <IconLinkedIn />;
    } else if (icon === "spotify") {
      return <IconSpotify />;
    } else if (icon === "twitter") {
      return <IconTwitter />;
    } else if (icon === "unsplash") {
      return <IconUnsplash />;
    } else if (icon === "youtube") {
      return <IconYoutube />;
    }
  };

  return !media?.length ? null : (
    <div className="grid">
      {media.map((media) => (
        <div
          className="c-social-media cell cell--6-@xs cell--4-@sm cell--12-@md"
          key={media.link.url}
        >
          <a
            className="c-social-media__link"
            href={media.link.url}
            title={`Follow me on ${media.name}`}
          >
            <span aria-hidden>{getIcon(media.icon)}</span>
            {media.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
