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
      | "twitter"
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
    } else if (icon === "twitter") {
      return <IconTwitter />;
    } else if (icon === "unsplash") {
      return <IconUnsplash />;
    } else if (icon === "youtube") {
      return <IconYoutube />;
    }
  };

  return (
    <div className={clsx("grid", className)} {...props}>
      {media.map((media) => (
        <div
          className={clsx(
            styles["c-social-media"],
            "cell",
            "cell-6",
            "sm:cell-4",
            "md:cell-12"
          )}
          key={media.link.url}
        >
          <a className={styles["c-social-media__link"]} href={media.link.url}>
            <span aria-hidden>{getIcon(media.icon)}</span>
            {media.name}
          </a>
        </div>
      ))}
    </div>
  );
};
