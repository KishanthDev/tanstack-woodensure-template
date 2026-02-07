// src/components/Header.tsx
import React from "react";
import { Link } from "@tanstack/react-router";

export const Header: React.FC = () => {
    return (
        <header className="w-full">
            {/* Top scrolling strip */}
            <div className="w-full overflow-hidden bg-black text-white text-xs">
                <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
                    <div className="flex items-center gap-1 pr-8">
                        <span>Use code WELCOME on your first order and get 5% off!</span>
                        <span>•</span>
                        <span>Free Shipping Pan India</span>
                        <span>•</span>
                        <span>Solid Natural Wood</span>
                        <span>•</span>
                        <span>Use code WELCOME on your first order and get 5% off!</span>
                        <span>•</span>
                    </div>
                    <div className="flex items-center gap-1 pr-8">
                        <span>Use code WELCOME on your first order and get 5% off!</span>
                        <span>•</span>
                        <span>Free Shipping Pan India</span>
                        <span>•</span>
                        <span>Solid Natural Wood</span>
                        <span>•</span>
                        <span>Use code WELCOME on your first order and get 5% off!</span>
                        <span>•</span>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="border-b border-gray-200">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    {/* Left: search on mobile */}
                    <div className="flex flex-1 md:hidden">
                        <form
                            className="flex w-full items-center rounded-full border border-gray-300 px-3 py-1"
                            action="/item-search"
                            method="GET"
                        >
                            <input
                                id="prod_name"
                                name="search"
                                type="text"
                                pattern="[A-Za-z0-9\\s\\-']+"
                                placeholder="Search for product"
                                autoComplete="off"
                                aria-label="Search"
                                className="w-full bg-transparent text-sm outline-none"
                            />
                            <button
                                type="submit"
                                aria-label="Search"
                                className="ml-2 text-gray-500"
                            >
                                🔍
                            </button>
                        </form>
                    </div>

                    {/* Center: logo */}
                    <div className="flex flex-none justify-center md:flex-1">
                        <Link
                            to="/"
                            search={{ ref: "header_logo" }}
                            className="inline-flex items-center"
                        >
                            <img
                                src="https://www.woodensure.com/assets/images/17379697301711794684logo--ma.png"
                                width={160}
                                height={40}
                                alt="Woodensure"
                                className="h-10 w-auto"
                                draggable={false}
                            />
                        </Link>
                    </div>

                    {/* Right: icons */}
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        {/* Cart */}
                        <Link
                            to="/carts"
                            search={{ ref: "header_icon" }}
                            className="relative inline-flex items-center text-gray-700"
                        >
                            <span>🛒</span>
                            <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-semibold text-white">
                                0
                            </span>
                        </Link>

                        {/* Wishlist */}
                        <button
                            type="button"
                            className="relative inline-flex items-center text-gray-700"
                        >
                            <span>♥</span>
                            <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                                0
                            </span>
                        </button>

                        {/* User */}
                        <Link to="/user/login" className="hidden md:inline-flex text-gray-700">
                            <span>👤</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};
