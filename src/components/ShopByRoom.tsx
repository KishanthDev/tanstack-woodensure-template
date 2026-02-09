import React from "react";
import { Link } from "@tanstack/react-router";

// Define the data for the smaller items to make the code cleaner
const smallRooms = [
  {
    name: "Bedroom",
    link: "/",
    img: "/assets/images/locations/location-bed-room.avif",
  },
  {
    name: "Kitchen",
    link: "/",
    img: "/assets/images/locations/location_kitchen.avif",
  },
  {
    name: "Dining",
    link: "/",
    img: "/assets/images/locations/location_diningroom.avif",
  },
  {
    name: "Office",
    link: "/",
    img: "/assets/images/locations/location_officetable.avif",
  },
];

export const ShopByRoom: React.FC = () => {
  return (
    <section className="mb-0 py-8 lg:pb-2">
      <div className="container mx-auto px-4">
        {/* --- Heading Section --- */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Shop by Room
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500">
            Shop furniture by room and make decorating simple. Find everything
            you need to complete your living room, bedroom, dining area, study,
            and more — all designed to complement your lifestyle and space.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        {/* Mobile: Flex Column (stacked).
            Desktop (md+): Grid with 2 equal columns (Left Big / Right Grid).
            Height: Fixed on desktop to ensure alignment, auto on mobile.
        */}
        <div className="flex flex-col gap-4 md:grid md:h-[600px] md:grid-cols-2">
          
          {/* 1. LEFT SIDE - LARGE ITEM (Living Room) */}
          <Link
            to="/"
            className="group relative h-64 w-full overflow-hidden rounded-xl md:h-full"
          >
            <img
              loading="lazy"
              src="/assets/images/locations/location-living-room.avif"
              alt="Living Room"
              draggable="false"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Label */}
            <div className="absolute bottom-4 left-4 text-xl font-bold text-white md:bottom-6 md:left-6 md:text-2xl">
              Living Room
            </div>
          </Link>

          {/* 2. RIGHT SIDE - 2x2 GRID (Bedroom, Kitchen, Dining, Office) */}
          <div className="grid h-auto grid-cols-2 gap-4 md:h-full">
            {smallRooms.map((room) => (
              <Link
                key={room.name}
                to={room.link}
                className="group relative h-40 w-full overflow-hidden rounded-xl md:h-full"
              >
                <img
                  loading="lazy"
                  src={room.img}
                  alt={room.name}
                  draggable="false"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Label */}
                <div className="absolute bottom-3 left-3 text-lg font-bold text-white md:bottom-4 md:left-4 md:text-xl">
                  {room.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};