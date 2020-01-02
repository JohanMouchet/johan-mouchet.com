// @flow

import * as React from "react";
import "./SocialMedia.scss";

type Props = {
  medias: [
    {
      name: string,
      url: string,
      icon: string
    }
  ]
};

const SocialMedia = (props: Props) => {
  const { medias } = props;

  return !medias ? null : (
    <div className="grid">
      {medias.map(media => (
        <div
          className="c-social-media cell cell--6-@xs cell--4-@sm cell--12-@md"
          key={media.url}
        >
          <a
            className="c-social-media__link"
            href={media.url}
            title={`Follow me on ${media.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {media.icon} {media.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;