import React from "react";
import "./SocialMedia.scss";

type Props = {
  media: Array<{
    name: string;
    link: {
      url: string;
    };
    icon: React.ReactNode;
  }>;
};

const SocialMedia: React.FC<Props> = ({ media }) =>
  !media?.length ? null : (
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
            {media.icon}
            {media.name}
          </a>
        </div>
      ))}
    </div>
  );

export default SocialMedia;
