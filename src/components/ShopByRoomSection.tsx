import React from "react";
import { Link } from "@tanstack/react-router";

export const ShopByRoomSection: React.FC = () => {
  return (
    <section className="pb-4 pt-4">
      <div className="mx-auto max-w-6xl px-4">

        <h2 className="mb-1 text-center text-3xl font-bold">
          Shop by Room
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-center text-gray-500">
          Shop furniture by room and make decorating simple. Find everything you
          need to complete your living room, bedroom, dining area, study, and more.
        </p>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-3">

          {/* LEFT BIG */}
          <Link
            to="/"
            className="relative md:col-span-2 md:row-span-2"
          >
            <img
              src="/assets/images/locations/location-living-room.avif"
              alt="Living Room"
              className="h-full w-full rounded-xl object-cover"
              draggable={false}
            />
            <span className="absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1 text-white">
              Living Room
            </span>
          </Link>

          {/* RIGHT ITEMS */}
          {[
            { name: "Bedroom", img: "/assets/images/locations/location-bed-room.avif" },
            { name: "Kitchen", img: "/assets/images/locations/location_kitchen.avif" },
            { name: "Dining", img: "/assets/images/locations/location_diningroom.avif" },
            { name: "Office", img: "/assets/images/locations/location_officetable.avif" },
          ].map((item, i) => (
            <Link
              key={i}
              to="/"
              className="relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-[180px] w-full rounded-xl object-cover"
                draggable={false}
              />
              <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-sm text-white">
                {item.name}
              </span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};
