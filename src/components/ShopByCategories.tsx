import React from "react";
import { Link } from "@tanstack/react-router";

const categories = [
  { name: "Best Seller", img: "https://www.woodensure.com/assets/front/images/home_page_strip/home/best_seller_1.jpg" },
  { name: "Coffee & Center Tables", img: "https://www.woodensure.com/assets/images/categories/1768546014CenterTable.avif" },
  { name: "Side Table", img: "https://www.woodensure.com/assets/images/categories/1768546035SideTable.avif" },
  { name: "Dining Table", img: "https://www.woodensure.com/assets/images/categories/1768546051Dining.avif" },
  { name: "Office Table", img: "https://www.woodensure.com/assets/images/categories/1768546077Office.avif" },
  { name: "Nesting Table", img: "https://www.woodensure.com/assets/images/categories/1768546091Nestig.avif" },
  { name: "Home Decor", img: "https://www.woodensure.com/assets/images/categories/1768546130HomeDecor.avif" },
  { name: "Console Table", img: "https://www.woodensure.com/assets/images/categories/1768546114Console.avif" },
  { name: "Seating", img: "https://www.woodensure.com/assets/images/categories/1768546143Seating.avif" },
  { name: "Kitchen and Dining", img: "https://www.woodensure.com/assets/images/categories/1768546155Kitchen.avif" },
  { name: "Accessories", img: "https://www.woodensure.com/assets/images/categories/1768546166Accessories.avif" },
  { name: "Metal Legs", img: "https://www.woodensure.com/assets/images/categories/1768546189Legs.avif" },
];

export const ShopByCategories: React.FC = () => {
  return (
    <section className="pb-6">
      <h2 className="mb-1 text-center text-3xl font-bold">Shop By Categories</h2>
      <p className="mx-auto mb-6 max-w-xl text-center text-gray-500">
        Explore our wide range of products—shop by categories for easy browsing
      </p>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
            >
              <Link to="/" className="w-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                    draggable={false}
                  />
                </div>
              </Link>

              {/* Updated Text size for Mobile (text-[10px]) vs Desktop (sm:text-sm) */}
              <span className="mt-2 text-center text-[10px] font-medium leading-tight sm:text-sm">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};