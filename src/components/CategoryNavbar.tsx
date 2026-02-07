import React from "react";
import { Link } from "@tanstack/react-router";

const url = "/coffee-and-center-tables";

export const CategoryNavbar: React.FC = () => {
    return (
        <div className="relative w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-visible px-4 py-3 text-sm">

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Coffee & Center Tables
                </Link>

                {/* Side Table */}
                <div className="group relative">
                    <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                        Side Table
                    </Link>

                    <div className="absolute left-0 top-full hidden w-56 rounded-md border bg-white p-3 shadow-md group-hover:block">
                        <ul className="space-y-2">
                            <li><Link to={url}>Epoxy Resin Side Table</Link></li>
                            <li><Link to={url}>Solid Wood Side Table</Link></li>
                            <li><Link to={url}>Live Edge Side Table</Link></li>
                            <li><Link to={url}>Marble Side Table</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Dining Table */}
                <div className="group relative">
                    <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                        Dining Table
                    </Link>

                    <div className="absolute left-0 top-full hidden w-56 rounded-md border bg-white p-3 shadow-md group-hover:block">
                        <ul className="space-y-2">
                            <li><Link to={url}>Solid Wood Dining Table</Link></li>
                            <li><Link to={url}>Epoxy Resin Dining Table</Link></li>
                            <li><Link to={url}>Live Edge Dining Table</Link></li>
                            <li><Link to={url}>Marble Dining Table</Link></li>
                        </ul>
                    </div>
                </div>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Office Table
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Nesting Table
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Home Decor
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Seating
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Kitchen & Dining
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Accessories
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Metal Legs
                </Link>

                <Link to={url} className="whitespace-nowrap font-medium hover:text-emerald-600">
                    Customization
                </Link>

            </div>
        </div>
    );
};
