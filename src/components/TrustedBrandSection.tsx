import React, { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "From Classic to Contemporary: Door Design Ideas for Every Home",
    link: "/blog/main-door-and-gate-design-ideas",
    img: "https://www.woodensure.com/assets/images/blogs/DZhOj5.avif",
    excerpt: "main door design, main gate design, wooden door design...",
    date: "06 Feb 2026",
    views: 2705,
  },
  {
    id: 2,
    title: "India’s No.1 Custom Epoxy Resin Furniture Manufacturer & Exporter",
    link: "/blog/best-custom-epoxy-resin-furniture-manufacturer-exporter-india",
    img: "https://www.woodensure.com/assets/images/blogs/cA2VTm.avif",
    excerpt: "resin furniture manufacturers in india, wood furniture...",
    date: "03 Feb 2026",
    views: 228,
  },
  {
    id: 3,
    title: "Valentine’s Day Gifts and Décor Ideas for Your Loved One (2026)",
    link: "/blog/valentines-day-gifts-and-decor-ideas-2026",
    img: "https://www.woodensure.com/assets/images/blogs/UhCUDU.avif",
    excerpt: "valentine day gift, valentine day idea, valentine day date...",
    date: "31 Jan 2026",
    views: 2026,
  },
  {
    id: 4,
    title: "Top Trending Bedside Table Designs for Lounge Rooms in 2026",
    link: "/blog/top-trending-bedside-table-designs-for-living-rooms",
    img: "https://www.woodensure.com/assets/images/blogs/Glykq2.avif",
    excerpt: "side tables lounge room, side table design, bedside table...",
    date: "29 Jan 2026",
    views: 639,
  },
  {
    id: 5,
    title: "Top Benefits of Choosing a Sofa Cum Bed for Your Living Room",
    link: "/blog/top-benefits-of-choosing-a-sofa-cum-bed-for-your-living-room",
    img: "https://www.woodensure.com/assets/images/blogs/N9Yp9V.avif",
    excerpt: "sofacum bed, online sofa cum bed, sleepyhead sofabed...",
    date: "24 Jan 2026",
    views: 927,
  },
  {
    id: 6,
    title: "Your New House is Ready, Have You Planned Your New Home Furniture?",
    link: "/blog/new-house-new-home-furniture-planning",
    img: "https://www.woodensure.com/assets/images/blogs/Ym2qla.avif",
    excerpt: "new home furniture, home furniture, study table furniture...",
    date: "19 Jan 2026",
    views: 464,
  },
  {
    id: 7,
    title: "Republic Day 2026 Decoration & Celebration Ideas for Home & Office",
    link: "/blog/republic-day-decoration-ideas-for-home-and-office",
    img: "https://www.woodensure.com/assets/images/blogs/bOeVn0.avif",
    excerpt: "Republic Day 2026 Decoratio, republic day 2026, 26 jan...",
    date: "17 Jan 2026",
    views: 4076,
  },
];

export const BlogSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // To prevent clicks while dragging

  // Mouse Down Event
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    sliderRef.current.classList.add("active");
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Mouse Leave Event
  const handleMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
  };

  // Mouse Up Event
  const handleMouseUp = () => {
    setIsDown(false);
    // We keep isDragging true for a split second to block the click if needed, 
    // but usually the interaction handles it.
    setTimeout(() => setIsDragging(false), 50);
  };

  // Mouse Move Event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    setIsDragging(true); // User is moving mouse, so it's a drag
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="my-3 py-3 md:my-4 md:py-4">
      <div className="container mx-auto px-4">
        {/* --- Heading --- */}
        <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-wide text-gray-900 md:mb-8 md:text-3xl">
          Latest Insights & Guides
        </h2>

        {/* --- Draggable Scroll Container --- */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide cursor-grab ${isDown ? "cursor-grabbing select-none" : ""
            }`}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group flex h-full basis-[45%] md:basis-[22%] flex-shrink-0 flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >

              {/* Link Wrapper: Conditional pointer-events to prevent clicking while dragging */}
              <Link
                to={post.link}
                className={`flex h-full flex-col ${isDragging ? "pointer-events-none" : ""}`}
                draggable="false" // Prevent native browser drag
              >
                {/* Image Wrapper */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    src={post.img}
                    alt={post.title}
                    draggable="false" // Crucial for custom drag
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Wrapper */}
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="mb-2 line-clamp-2 text-lg font-bold text-gray-800 transition-colors group-hover:text-yellow-600">
                    {post.title}
                  </h4>

                  <p className="mb-4 line-clamp-2 text-xs text-gray-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3 text-xs font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-600" />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};