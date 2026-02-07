import React from "react";
import { Link } from "@tanstack/react-router";

export const StripBannerDecor: React.FC = () => {
  return (
    <div className="py-3">
      <div className="mx-auto max-w-6xl px-4">
        <Link to="/" className="block">
          <picture className="block w-full">
            <source
              media="(max-width:768px)"
              srcSet="https://www.woodensure.com/assets/front/images/home_page_strip/home/home_page_welcome_strp_m.jpg"
            />
            <img
              src="https://www.woodensure.com/assets/front/images/home_page_strip/home/home_page_welcome_strp_d.jpg"
              alt=""
              className="w-full"
              draggable={false}
              loading="lazy"
            />
          </picture>
        </Link>
      </div>
    </div>
  );
};
