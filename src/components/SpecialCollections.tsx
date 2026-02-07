import React from "react";
import { Link } from "@tanstack/react-router";

const collections = [
  "https://www.woodensure.com/assets/images/specialcollection/1765522720_special.avif",
  "https://www.woodensure.com/assets/images/specialcollection/1765522468_special.avif",
  "https://www.woodensure.com/assets/images/specialcollection/1765522557_special.avif",
  "https://www.woodensure.com/assets/images/specialcollection/1765522585_special.avif",
  "https://www.woodensure.com/assets/images/specialcollection/1765522628_special.avif",
  "https://www.woodensure.com/assets/images/specialcollection/1765522675_special.avif",
];

export const SpecialCollections: React.FC = () => {
  return (
    <section className="pt-4">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase tracking-wide">
          Special Collections
        </h2>

        {/* horizontal slider */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {collections.map((img, i) => (
            <Link
              key={i}
              to="/coffee-and-center-tables"
              className="min-w-[220px] overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt="Special collection"
                className="h-[220px] w-full object-cover transition-transform duration-300 hover:scale-105"
                draggable={false}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
