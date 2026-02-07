import React from "react";
import { Link } from "@tanstack/react-router";

const url = "/";

export const CategoryNavbar: React.FC = () => {
    return (
        <div className="relative w-full border-b border-gray-200 bg-white">
            {/* RESPONSIVE CHANGES:
                1. overflow-x-auto: Enables horizontal scrolling on mobile.
                2. lg:overflow-visible: Disables scrolling on desktop so dropdowns can pop out (overflow).
                3. scrollbar-hide: Hides the ugly scrollbar (style added below).
            */}
            <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 text-sm overflow-x-auto lg:overflow-visible whitespace-nowrap scrollbar-hide">

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Coffee & Center Tables
                </Link>

                {/* Side Table */}
                <div className="group relative">
                    <Link to={url} className="font-medium hover:text-emerald-600 inline-block h-full">
                        Side Table
                    </Link>

                    {/* Dropdown: 
                        - 'lg:group-hover:block': Only show on Desktop Hover.
                        - 'z-50': Ensures it sits on top of other content.
                    */}
                    <div className="absolute left-0 top-full hidden w-56 rounded-md border bg-white p-3 shadow-md lg:group-hover:block z-50">
                        <ul className="space-y-2">
                            <li><Link to={url} className="block hover:text-emerald-600">Epoxy Resin Side Table</Link></li>
                            <li><Link to={url} className="block hover:text-emerald-600">Solid Wood Side Table</Link></li>
                            <li><Link to={url} className="block hover:text-emerald-600">Live Edge Side Table</Link></li>
                            <li><Link to={url} className="block hover:text-emerald-600">Marble Side Table</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Dining Table */}
                <div className="group relative">
                    <Link to={url} className="font-medium hover:text-emerald-600 inline-block h-full">
                        Dining Table
                    </Link>

                    <div className="absolute left-0 top-full hidden w-56 rounded-md border bg-white p-3 shadow-md lg:group-hover:block z-50">
                        <ul className="space-y-2">
                            <li><Link to={url} className="block hover:text-emerald-600">Solid Wood Dining Table</Link></li>
                            <li><Link to={url} className="block hover:text-emerald-600">Epoxy Resin Dining Table</Link></li>
                            <li><Link to={url} className="block hover:text-emerald-600">Live Edge Dining Table</Link></li>
                            <li><Link to={url} className="block hover:text-emerald-600">Marble Dining Table</Link></li>
                        </ul>
                    </div>
                </div>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Office Table
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Nesting Table
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Home Decor
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Seating
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Kitchen & Dining
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Accessories
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Metal Legs
                </Link>

                <Link to={url} className="font-medium hover:text-emerald-600">
                    Customization
                </Link>

            </div>

            {/* Helper to hide scrollbar on mobile but keep functionality */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};