import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* MAIN FOOTER */}
      <div className="w-full px-4 py-10">

        {/* GRID SETTINGS:
            - Mobile: grid-cols-2 (Creates the 2-column layout)
            - Desktop: lg:grid-cols-5 (Keeps original 5-column layout)
            - Gap: gap-8 (Spacing between items)
        */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 text-left">

          {/* LOGO + INFO SECTION 
              - Mobile: col-span-2 (Takes full width on top for better readability)
              - Desktop: lg:col-span-1 (Goes back to being a single column)
          */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src="https://www.woodensure.com/assets/images/1755344183Copy_of_wood__1_-removebg-preview.png"
              className="mb-4 w-[230px] bg-white p-1 rounded-lg"
              draggable={false}
              alt="Woodensure Logo"
            />

            <p className="text-sm mb-3 text-gray-300">
              Woodensure being the best epoxy resin table manufacturers in India
              dealing in custom solid wood table & epoxy resin river table.
            </p>

            <p className="text-sm text-gray-400">
              Madri Industrial Area, Udaipur (Raj.), 313002.
            </p>

            <p className="text-sm mt-2 text-gray-400">
              Contact: +91 93586 76060
            </p>

            <p className="text-sm text-gray-400">
              Email: customer@woodensure.com
            </p>
          </div>

          {/* INFORMATION (Mobile: Top Left of the 2x2 grid) */}
          <div>
            <h4 className="mb-4 font-bold text-lg text-white">Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Return Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            </ul>
          </div>

          {/* USEFUL LINKS (Mobile: Top Right of the 2x2 grid) */}
          <div>
            <h4 className="mb-4 font-bold text-lg text-white">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Sitemap</li>
              <li className="hover:text-white cursor-pointer">Faq</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Custom Furniture</li>
            </ul>
          </div>

          {/* CATEGORIES (Mobile: Bottom Left of the 2x2 grid) */}
          <div>
            <h4 className="mb-4 font-bold text-lg text-white">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Coffee & Center Tables</li>
              <li className="hover:text-white cursor-pointer">Side Table</li>
              <li className="hover:text-white cursor-pointer">Dining Table</li>
              <li className="hover:text-white cursor-pointer">Office Table</li>
              <li className="hover:text-white cursor-pointer">Nesting Table</li>
            </ul>
          </div>

          {/* EXTRA CATEGORIES (Mobile: Bottom Right of the 2x2 grid) */}
          <div>
            <h4 className="mb-4 font-bold text-lg text-white">More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Door</li>
              <li className="hover:text-white cursor-pointer">Console Table</li>
              <li className="hover:text-white cursor-pointer">Seating</li>
              <li className="hover:text-white cursor-pointer">Kitchen and Dining</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#fff0dc] text-black py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left font-medium">
            COPYRIGHT © 2025. All Rights Reserved By woodensure.com
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://www.woodensure.com/assets/front/images/Icons/header_images/transaction.png"
              className="h-6 md:h-8 w-auto object-contain"
              alt="Transaction Icons"
            />
            <img
              src="https://www.woodensure.com/assets/front/images/footer-cards.png"
              className="h-6 md:h-8 w-auto object-contain"
              alt="Payment Cards"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};