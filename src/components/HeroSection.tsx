import React from "react";
import { Link } from "@tanstack/react-router";

const slides = [
  {
    href: "/coffee-and-center-tables",
    desktop:
      "https://www.woodensure.com/assets/images/sliders/1768814406herowebbannerdesk.jpg",
    mobile:
      "https://www.woodensure.com/assets/images/sliders/1768814406herobannerphone.jpg",
    alt: "Hero banner",
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="my-3 mb-4 mt-3">
      <div className="mx-auto max-w-6xl px-4">

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[600px_1fr]">

          {/* LEFT (600 x 540) */}
          <div className="h-[540px] w-[600px] overflow-hidden rounded-lg">
            {slides.map((slide, i) => (
              <Link key={i} to={slide.href}>
                <picture>
                  <source media="(max-width:768px)" srcSet={slide.mobile} />
                  <img
                    src={slide.desktop}
                    alt={slide.alt}
                    className="h-[540px] w-[600px] rounded-lg object-cover"
                    draggable={false}
                  />
                </picture>
              </Link>
            ))}
          </div>

         {/* RIGHT AUTO WIDTH */}
<div className="flex h-[540px] flex-col gap-4">

  {/* TOP IMAGE */}
  <Link to="/coffee-and-center-tables" className="h-[260px]">
    <img
      src="https://www.woodensure.com/assets/front/images/home_page_strip/home/rocking_recliner_chair_dp.jpg"
      className="h-full w-full rounded-lg object-cover"
      draggable={false}
    />
  </Link>

  {/* BOTTOM TWO SIDE BY SIDE */}
  <div className="grid flex-1 grid-cols-2 gap-4">
    <Link to="/coffee-and-center-tables">
      <img
        src="https://www.woodensure.com/assets/front/images/home_page_strip/home/dining_table_set_29k.avif"
        className="h-full w-full rounded-lg object-cover"
        draggable={false}
      />
    </Link>

    <Link to="/coffee-and-center-tables">
      <img
        src="https://www.woodensure.com/assets/front/images/home_page_strip/home/home_page_seating.avif"
        className="h-full w-full rounded-lg object-cover"
        draggable={false}
      />
    </Link>
  </div>

</div>

        </div>
      </div>
    </section>
  );
};
