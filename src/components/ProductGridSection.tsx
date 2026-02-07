import React from "react";
import { Eye, Heart } from "lucide-react";

export type ProductItem = {
  id: string;
  href: string;
  title: string;
  img: string;
  imgDesktop: string;
  price: string;
  priceOriginal?: string;
  discountText?: string;
};

type Props = {
  title: string;
  viewMoreLink?: string;
  items: ProductItem[];
};

export const ProductGridSection: React.FC<Props> = ({
  title,
  viewMoreLink,
  items,
}) => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="relative mb-4 inline-block border-b-4 border-yellow-600 pb-2 text-2xl font-bold tracking-wide">
            {title}
          </h2>

          {viewMoreLink && (
            <a
              href={viewMoreLink}
              className="text-sm font-medium text-emerald-700 hover:underline"
            >
              View More
            </a>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-flow-row auto-rows-max grid-cols-[repeat(auto-fit,216px)] justify-between gap-0.5">
          {items.map((item) => (
            <div key={item.id} className="h-auto w-[216px]">
              <a
                href={item.href}
                className="group block overflow-hidden rounded-md border border-gray-200 bg-white"
              >
                <div className="relative h-[216px] w-[216px] overflow-hidden">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={item.imgDesktop} />
                    <img
                      loading="lazy"
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                    />
                  </picture>

                  <div className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />

                  {item.discountText && (
                    <span className="absolute left-0 top-2 rounded-sm bg-green-700 px-2 py-1 text-[13px] font-semibold text-white shadow-sm">
                      {item.discountText}
                    </span>
                  )}

                  {/* hover icons */}
                  <ul className="pointer-events-none absolute right-1 top-1 flex flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <li>
                      <button className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
                        <Eye size={16} />
                      </button>
                    </li>
                    <li>
                      <button className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
                        <Heart size={16} />
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="px-2 pb-2 pt-1">
                  <h3 className="line-clamp-2 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="font-semibold text-gray-900">
                    {item.price}{" "}
                    {item.priceOriginal && (
                      <del className="text-[11px] font-normal text-red-500">
                        {item.priceOriginal}
                      </del>
                    )}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
