import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* MAIN FOOTER */}
      <div className="w-full px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-5">

          {/* LOGO + INFO */}
          <div className="lg:col-span-1">
            <img
              src="https://www.woodensure.com/assets/images/1755344183Copy_of_wood__1_-removebg-preview.png"
              className="mb-4 w-[230px] bg-white p-1 rounded-lg"
              draggable={false}
            />

            <p className="text-sm">
              Woodensure being the best epoxy resin table manufacturers in India
              dealing in custom solid wood table & epoxy resin river table.
            </p>

            <p className="mt-3 text-sm">
              Madri Industrial Area, Udaipur (Raj.), 313002.
            </p>

            <p className="text-sm mt-2">
              Contact: +91 93586 76060
            </p>

            <p className="text-sm">
              Email: customer@woodensure.com
            </p>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="mb-3 font-semibold">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Our Story</li>
              <li>Return Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="mb-3 font-semibold">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Sitemap</li>
              <li>Faq</li>
              <li>Contact Us</li>
              <li>Custom Furniture</li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="mb-3 font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Coffee & Center Tables</li>
              <li>Side Table</li>
              <li>Dining Table</li>
              <li>Office Table</li>
              <li>Nesting Table</li>
            </ul>
          </div>

          {/* EXTRA CATEGORIES */}
          <div>
            <h4 className="mb-3 font-semibold">More</h4>
            <ul className="space-y-2 text-sm">
              <li>Door</li>
              <li>Console Table</li>
              <li>Seating</li>
              <li>Kitchen and Dining</li>
              <li>Accessories</li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#fff0dc] text-black py-4">
        <div className="flex flex-col items-center justify-between gap-4 px-4 lg:flex-row">
          <p className="text-sm">
            COPYRIGHT © 2025. All Rights Reserved By woodensure.com
          </p>

          <img
            src="https://www.woodensure.com/assets/front/images/Icons/header_images/transaction.png"
            className="h-8"
          />

          <img
            src="https://www.woodensure.com/assets/front/images/footer-cards.png"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
};
