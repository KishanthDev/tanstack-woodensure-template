import React from "react";
import { Link } from "@tanstack/react-router";

const products = [
  {
    name: "Handmade Epoxy Resin River Dining Table",
    price: "Starts from ₹82500",
    img: "https://www.woodensure.com/assets/images/thumbnails/1710743775QBm4c5vd.jpg",
  },
  {
    name: "Customized Live Edge Dining Table",
    price: "Starts from ₹48400",
    img: "https://www.woodensure.com/assets/images/thumbnails/1680691964ahVSploH.jpg",
  },
  {
    name: "EmeraldGlow Epoxy Resin Dining Table",
    price: "Starts from ₹52800",
    img: "https://www.woodensure.com/assets/images/thumbnails/1711103443XML78gNQ.jpg",
  },
  {
    name: "Oceanic Oasis Epoxy Resin Dining Table",
    price: "Starts from ₹82500",
    img: "https://www.woodensure.com/assets/images/thumbnails/17111025872EUE99Ro.jpg",
  },
  {
    name: "Peacock Blue Epoxy Resin Wall Shelf",
    price: "Starts from ₹5805",
    img: "https://www.woodensure.com/assets/images/thumbnails/1713250029NfPuXLfp.jpg",
  },
];

export const CustomizationProductsSection: React.FC = () => {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-6xl px-4">

        <h2 className="mb-6 text-center text-2xl font-bold">
          India's No. 1 Custom Epoxy Resin Furniture Manufacturer & Exporter
        </h2>

        {/* horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {products.map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] rounded-xl border bg-white p-3 shadow-sm"
            >
              <Link to="/coffee-and-center-tables">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[200px] w-full rounded-lg object-cover"
                  draggable={false}
                />
              </Link>

              <h3 className="mt-2 line-clamp-2 text-sm font-medium">
                {item.name}
              </h3>

              <p className="text-xs text-gray-500">{item.price}</p>

              <a
                href="https://wa.me/919358676060"
                target="_blank"
                className="mt-2 block rounded-lg bg-emerald-600 px-3 py-2 text-center text-xs font-medium text-white hover:bg-emerald-700"
              >
                Connect with Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
