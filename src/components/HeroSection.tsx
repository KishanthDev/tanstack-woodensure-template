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

        {/* GRID: 
            - Mobile: 1 Column (Stacks vertically)
            - Desktop (lg): 2 Columns (600px | Auto) 
        */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[600px_1fr]">

          {/* LEFT SLIDER */}
          {/* Mobile: Width Full, Height Auto. Desktop: Fixed 600px x 540px */}
          <div className="w-full h-auto lg:w-[600px] lg:h-[540px] overflow-hidden rounded-lg">
            {slides.map((slide, i) => (
              <Link key={i} to={slide.href}>
                <picture>
                  <source media="(max-width:768px)" srcSet={slide.mobile} />
                  <img
                    src={slide.desktop}
                    alt={slide.alt}
                    // Mobile: w-full h-auto (Let aspect ratio decide)
                    // Desktop: Force 600x540 with object-fill
                    className="w-full h-auto lg:h-[540px] lg:w-[600px] rounded-lg object-fill"
                    draggable={false}
                  />
                </picture>
              </Link>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          {/* Mobile: Width Full, Height Auto. Desktop: Fixed Height 540px to match left */}
          <div className="flex flex-col gap-4 w-full lg:h-[540px]">

            {/* TOP IMAGE */}
            {/* Mobile: Fixed height 200px. Desktop: Fixed height 260px */}
            <Link to="/" className="block h-[120px] lg:h-[260px]">
              <img
                src="https://www.woodensure.com/assets/front/images/home_page_strip/home/rocking_recliner_chair_dp.jpg"
                className="h-full w-full rounded-lg object-fill"
                draggable={false}
              />
            </Link>

            {/* BOTTOM TWO SIDE BY SIDE */}
            {/* Mobile: Fixed height 160px. Desktop: Flex-1 (Fills remaining space) */}
            <div className="grid grid-cols-2 gap-4 h-[160px] lg:h-auto lg:flex-1">
              <Link to="/">
                <img
                  src="https://www.woodensure.com/assets/front/images/home_page_strip/home/dining_table_set_29k.avif"
                  className="h-full w-full rounded-lg object-fill"
                  draggable={false}
                />
              </Link>

              <Link to="/">
                <img
                  src="https://www.woodensure.com/assets/front/images/home_page_strip/home/home_page_seating.avif"
                  className="h-full w-full rounded-lg object-fill"
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