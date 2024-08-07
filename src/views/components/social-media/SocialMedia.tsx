import { Button } from "@/views/objects/button/Button";
import {
  Icon500px,
  IconCodepen,
  IconDribbble,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconSpotify,
  IconUnsplash,
  IconXCom,
  IconYoutube,
} from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import styles from "./SocialMedia.module.scss";

export const SocialMedia = ({
  media,
  className,
  ...props
}: {
  media: {
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
      | "xcom"
      | "unsplash"
      | "youtube";
  }[];
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLDivElement>, "media">) => {
  if (!media?.length) {
    return null;
  }

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
    } else if (icon === "xcom") {
      return <IconXCom />;
    } else if (icon === "unsplash") {
      return <IconUnsplash />;
    } else if (icon === "youtube") {
      return <IconYoutube />;
    }
  };

  return (
    <div className={clsx(styles["c-social-media"], className)} {...props}>
      {media.map((media) => (
        <Button
          href={media.link.url}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          icon={getIcon(media.icon)}
          className={styles["c-social-media__link"]}
          key={media.link.url}
        >
          {media.name}
        </Button>
      ))}
    </div>
  );
};
