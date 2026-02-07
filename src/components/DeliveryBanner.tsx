import React from "react";

export const DeliveryBanner: React.FC = (
) => {
  const BannerContent = (
    <picture className="block w-full">
      <source media="(max-width:650px)" srcSet={"https://www.woodensure.com/assets/front/images/home_page_strip/home/delivery_strip_mobile_2.jpg"} />
      <img
        src={"https://www.woodensure.com/assets/front/images/home_page_strip/home/delivery_strip_mobile_2.jpg"}
        alt={"image"}
        className="w-full rounded-lg"
        loading="lazy"
        draggable={false}
      />
    </picture>
  );

  const href = "/"

  return (
    <section className="bg-gray-50 py-3">
      <div className="mx-auto max-w-6xl px-3">
        {href ? (
          <a href={href} className="block">
            {BannerContent}
          </a>
        ) : (
          BannerContent
        )}
      </div>
    </section>
  );
};
