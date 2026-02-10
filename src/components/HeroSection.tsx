import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    href: "/",
    desktop:
      "https://www.woodensure.com/assets/images/sliders/1768814406herowebbannerdesk.jpg",
    alt: "Hero banner",
  },
  {
    href: "/",
    desktop:
      "https://www.woodensure.com/assets/images/sliders/1768814522herowebbannerdesk.jpg",
    alt: "Hero banner 2",
  },
  {
    href: "/",
    desktop:
      "https://www.woodensure.com/assets/images/sliders/1769498228desk.jpg",
    alt: "Hero banner 3",
  },
  {
    href: "/",
    desktop:
      "https://www.woodensure.com/assets/images/sliders/1770381055_photo.avif",
    alt: "Hero banner 4",
  },
];

export const HeroSection: React.FC = () => {
  const [api, setApi] = React.useState<import("@/components/ui/carousel").CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="my-3 mb-4 mt-3">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[600px_1fr]">
          {/* LEFT SLIDER */}
          <div className="relative flex flex-col items-center">
            <Carousel
              className="w-full lg:w-[600px]"
              setApi={setApi}
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {slides.map((slide, i) => (
                  <CarouselItem key={i} className="basis-full">
                    <Link to={slide.href}>
                      <picture>
                        <source
                          media="(max-width: 767px)"
                          srcSet={slide.desktop}
                        />
                        <img
                          src={slide.desktop}
                          alt={slide.alt}
                          className="w-full h-auto rounded-lg object-fill"
                          draggable={false}
                        />
                      </picture>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* DOT INDICATORS */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {Array.from({ length: count }).map((_, index) => {
                const isActive = index === current;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    className={[
                      "relative h-2 rounded-full transition-all duration-300",
                      isActive ? "w-6 bg-white" : "w-2 bg-white/50",
                    ].join(" ")}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 w-full lg:h-[540px]">
            <Link to="/" className="block h-[140px] lg:h-[260px]">
              <img
                src="https://www.woodensure.com/assets/front/images/home_page_strip/home/rocking_recliner_chair_dp.jpg"
                alt="Rocking recliner chair"
                className="h-full w-full rounded-lg object-fill"
                draggable={false}
                loading="lazy"
              />
            </Link>

            <div className="grid grid-cols-2 gap-4 h-[160px] lg:h-auto lg:flex-1">
              <Link to="/">
                <img
                  src="https://www.woodensure.com/assets/front/images/home_page_strip/home/dining_table_set_29k.avif"
                  alt="Dining table set"
                  className="h-full w-full rounded-lg object-fill"
                  draggable={false}
                  loading="lazy"
                />
              </Link>

              <Link to="/">
                <img
                  src="https://www.woodensure.com/assets/front/images/home_page_strip/home/home_page_seating.avif"
                  alt="Home seating"
                  className="h-full w-full rounded-lg object-fill"
                  draggable={false}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
