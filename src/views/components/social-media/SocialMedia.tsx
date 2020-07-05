import * as React from "react";
import "./SocialMedia.scss";

type Props = {
  medias: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
};

const SocialMedia = ({ medias }: Props) =>
  !medias ? null : (
    <div className="grid">
      {medias.map((media) => (
        <div
          className="c-social-media cell cell--6-@xs cell--4-@sm cell--12-@md"
          key={media.url}
        >
          <a
            className="c-social-media__link"
            href={media.url}
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
