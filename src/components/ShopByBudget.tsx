import React from "react";
import { Link } from "@tanstack/react-router";

export const ShopByBudget: React.FC = () => {
    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* --- Heading --- */}
                <h2 className="text-center font-bold text-2xl md:text-3xl mb-2 text-gray-900">
                    Shop Within Your Budget!
                </h2>
                <p className="text-center text-gray-500 mx-auto mb-8 max-w-[600px] text-sm leading-relaxed">
                    Browse affordable options that fit your style and your budget—shop smart today.
                </p>

                <div className="flex flex-col gap-4">

                    {/* ROW 1 — 75 / 25 */}
                    <div className="grid grid-cols-[75%_25%] gap-4 h-[320px]">

                        <Link to="/" className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/1k.avif"
                                className="w-full h-full object-cover"
                            />
                        </Link>

                        <Link to="/" className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/5k.avif"
                                className="w-full h-full object-cover"
                            />
                        </Link>

                    </div>

                    {/* ROW 2 — 50 / 25 / 25 */}
                    <div className="grid grid-cols-[50%_25%_25%] gap-4 h-[320px]">

                        <Link to="/" className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/3k.avif"
                                className="w-full h-full object-cover"
                            />
                        </Link>

                        <Link to="/" className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/10k.avif"
                                className="w-full h-full object-cover"
                            />
                        </Link>

                        <Link to="/" className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://woodensure.com/assets/front/images/home_page_strip/home/25k.avif"
                                className="w-full h-full object-cover"
                            />
                        </Link>

                    </div>

                </div>


            </div>
        </section>
    );
};