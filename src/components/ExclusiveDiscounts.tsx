import React from "react";
import { Link } from "@tanstack/react-router";

// Discount Data
const discounts = [
  {
    id: 1,
    href: "/collection-up-to-30-off",
    image: "https://woodensure.com/assets/front/images/home_page_strip/home/30_.jpg",
    alt: "Up to 30% Off",
  },
  {
    id: 2,
    href: "/collection-30-to-40-off",
    image: "https://woodensure.com/assets/front/images/home_page_strip/home/30-40_.jpg",
    alt: "30% to 40% Off",
  },
  {
    id: 3,
    href: "/collection-40-to-50-off",
    image: "https://woodensure.com/assets/front/images/home_page_strip/home/40-50_.jpg",
    alt: "40% to 50% Off",
  },
  {
    id: 4,
    href: "/collection-above-50-off",
    image: "https://woodensure.com/assets/front/images/home_page_strip/home/50_.jpg",
    alt: "Above 50% Off",
  },
];

export const ExclusiveDiscounts: React.FC = () => {
  return (
    <section className="py-4 md:py-8 bg-white">
      <div className="container mx-auto px-4">
        
        {/* --- Heading Section --- */}
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-2 text-gray-900">
          Exclusive Discounts!
        </h2>
        
        <p className="text-center text-gray-500 mx-auto mb-8 max-w-[600px] text-sm leading-relaxed">
          Unlock special savings available only to you with our exclusive discount collection. 
          Shop now and enjoy remarkable price drops on top-rated items!
        </p>

        {/* --- Banners Grid --- 
            Mobile: grid-cols-2 (2 items per row)
            Desktop: md:grid-cols-4 (4 items per row)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {discounts.map((item) => (
            <Link 
              key={item.id} 
              to={item.href} 
              className="group block overflow-hidden rounded-lg"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.alt}
                draggable={false}
                // Hover effect: Scale up slightly and transition smooth
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};