// @flow

import * as React from "react";
import "./social-media.scss";

type Props = {
  medias: [
    {
      name: string,
      URL: string,
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
          key={media.URL}
        >
          <a
            className="c-social-media__link"
            href={media.URL}
            title={`Follow me on ${media.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {media.icon}
            {media.name}
          </a>
        </div>
      ))}
    </div>
  );
};

SocialMedia.defaultProps = {
  prop1: 2
};

export default SocialMedia;
