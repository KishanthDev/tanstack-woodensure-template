import React from "react";
import { Link } from "@tanstack/react-router";

export const ShopByBudget: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* --- Heading --- */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Shop Within Your Budget!
          </h2>
          <p className="mx-auto max-w-[600px] text-sm leading-relaxed text-gray-500">
            Browse affordable options that fit your style and your budget—shop
            smart today.
          </p>
        </div>

        {/* Mobile: grid-cols-2 (2 columns) 
           Desktop: md:grid-cols-12 (12 columns)
        */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-12">
          
          {/* IMAGE 1 (1k)
             Mobile: Full width (col-span-2), REDUCED Height (h-48)
             Image: object-fill (Stretches to fill box, no cropping)
          */}
          <Link
            to="/"
            className="relative col-span-2 h-48 overflow-hidden rounded-xl md:col-span-9 md:h-[320px]"
          >
            <img
              src="https://woodensure.com/assets/front/images/home_page_strip/home/1k.avif"
              className="h-full w-full object-fill transition-transform duration-300 hover:scale-105 md:object-cover"
              alt="Shop under 1k"
            />
          </Link>

          {/* IMAGE 2 (5k)
             Mobile: Half width (col-span-1), Small Height (h-32)
             Desktop: 25% width (col-span-3), Fixed height (h-[320px])
          */}
          <Link
            to="/"
            className="relative col-span-1 h-32 overflow-hidden rounded-xl md:col-span-3 md:h-[320px]"
          >
            <img
              src="https://woodensure.com/assets/front/images/home_page_strip/home/5k.avif"
              className="h-full w-full object-fill transition-transform duration-300 hover:scale-105 md:object-cover"
              alt="Shop under 5k"
            />
          </Link>

          {/* IMAGE 3 (3k)
             Mobile: Half width (col-span-1), Small Height (h-32)
             Desktop: 50% width (col-span-6), Fixed height (h-[320px])
          */}
          <Link
            to="/"
            className="relative col-span-1 h-32 overflow-hidden rounded-xl md:col-span-6 md:h-[320px]"
          >
            <img
              src="https://woodensure.com/assets/front/images/home_page_strip/home/3k.avif"
              className="h-full w-full object-fill transition-transform duration-300 hover:scale-105 md:object-cover"
              alt="Shop under 3k"
            />
          </Link>

          {/* IMAGE 4 (10k)
             Mobile: Half width (col-span-1), Small Height (h-32)
          */}
          <Link
            to="/"
            className="relative col-span-1 h-32 overflow-hidden rounded-xl md:col-span-3 md:h-[320px]"
          >
            <img
              src="https://woodensure.com/assets/front/images/home_page_strip/home/10k.avif"
              className="h-full w-full object-fill transition-transform duration-300 hover:scale-105 md:object-cover"
              alt="Shop under 10k"
            />
          </Link>

          {/* IMAGE 5 (25k)
             Mobile: Half width (col-span-1), Small Height (h-32)
          */}
          <Link
            to="/"
            className="relative col-span-1 h-32 overflow-hidden rounded-xl md:col-span-3 md:h-[320px]"
          >
            <img
              src="https://woodensure.com/assets/front/images/home_page_strip/home/25k.avif"
              className="h-full w-full object-fill transition-transform duration-300 hover:scale-105 md:object-cover"
              alt="Shop under 25k"
            />
          </Link>

        </div>
      </div>
    </section>
  );
};