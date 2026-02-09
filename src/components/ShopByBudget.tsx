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

                <div className="flex flex-col gap-4">

                    {/* ROW 1 — Mobile: Stacked | Desktop: 75% / 25% */}
                    <div className="grid grid-cols-1 gap-4 md:h-[320px] md:grid-cols-[3fr_1fr]">

                        {/* Image 1 */}
                        <Link to="/" className="relative h-64 overflow-hidden rounded-xl md:h-full">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/1k.avif"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                alt="Shop under 1k"
                            />
                        </Link>

                        {/* Image 2 */}
                        <Link to="/" className="relative h-64 overflow-hidden rounded-xl md:h-full">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/5k.avif"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                alt="Shop under 5k"
                            />
                        </Link>
                    </div>

                    {/* ROW 2 — Mobile: Stacked | Desktop: 50% / 25% / 25% */}
                    <div className="grid grid-cols-1 gap-4 md:h-[320px] md:grid-cols-[2fr_1fr_1fr]">

                        {/* Image 3 */}
                        <Link to="/" className="relative h-64 overflow-hidden rounded-xl md:h-full">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/3k.avif"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                alt="Shop under 3k"
                            />
                        </Link>

                        {/* Image 4 */}
                        <Link to="/" className="relative h-64 overflow-hidden rounded-xl md:h-full">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/10k.avif"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                alt="Shop under 10k"
                            />
                        </Link>

                        {/* Image 5 */}
                        <Link to="/" className="relative h-64 overflow-hidden rounded-xl md:h-full">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/25k.avif"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                alt="Shop under 25k"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};