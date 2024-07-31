import {
  IconArrowLineLeft,
  IconArrowRight,
  IconX,
} from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./Carousel.module.scss";

export const Carousel = ({
  startIndex = 0,
  close,
  slides,
  size = "lg",
  className,
  ...props
}: {
  startIndex?: number;
  close?: Dispatch<SetStateAction<boolean | undefined>>;
  slides: { id: string; content: React.ReactNode }[];
  size?: "lg" | "md";
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLDivElement>, "size">) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    startIndex,
  });
  const [selectedSnap, setSelectedSnap] = useState(0);
  const updateScrollSnapState = useCallback(
    (emblaApi: UseEmblaCarouselType[1]) => {
      if (!emblaApi) return;

      setSelectedSnap(emblaApi.selectedScrollSnap());
    },
    []
  );
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return (
    <div className={clsx(styles["o-carousel"], className)} {...props}>
      <div className={styles["o-carousel__header"]}>
        {slides?.length > 1 && (
          <div className={styles["o-carousel__navigation"]}>
            {selectedSnap + 1} / {slides?.length}
            {emblaApi?.canScrollNext() ? (
              <button
                className={styles["o-carousel__navigation-button"]}
                aria-label="Next"
                onClick={scrollNext}
              >
                <IconArrowRight />
              </button>
            ) : (
              <button
                className={styles["o-carousel__navigation-button"]}
                aria-label="Back to start"
                onClick={() => emblaApi?.scrollTo(0)}
              >
                <IconArrowLineLeft />
              </button>
            )}
          </div>
        )}
        {close && (
          <button
            className={styles["o-carousel__close"]}
            aria-label="Close"
            onClick={() => close(false)}
          >
            <IconX />
          </button>
        )}
      </div>
      <div className={styles["o-carousel__slides-container"]} ref={emblaRef}>
        <div className={styles["o-carousel__slides"]}>
          {slides.map((slide) => (
            <div
              className={clsx(
                styles["o-carousel__slide"],
                size === "lg" && styles["o-carousel__slide--lg"],
                size === "md" && styles["o-carousel__slide--md"]
              )}
              id={slide.id}
              key={slide.id}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
