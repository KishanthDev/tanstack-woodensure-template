import React from "react";

export const IconStrip: React.FC = () => {
  return (
    <div className="my-3 mt-6">
      <div className="mx-auto max-w-6xl px-4">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/str_desk.jpg"
          />
          <img
            src="/strr_mobile.jpg"
            alt=""
            className="w-full rounded-lg"
            loading="lazy"
            draggable={false}
          />
        </picture>
      </div>
    </div>
  );
};
