import React, { useRef, useState, MouseEvent } from 'react';
import { Star } from 'lucide-react';

// --- Types & Data ---
interface Review {
    id: number;
    name: string;
    image?: string;
    rating: number;
    text: string;
    isVerified: boolean;
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: "Yash Nath",
        rating: 4,
        text: "I purchased dining table from Woodensure last week, and honestly, I’m really happy with it. The quality is superb, it feels strong and well-built.",
        isVerified: true,
    },
    {
        id: 2,
        name: "Sandeep Moghe",
        rating: 4,
        text: "Good chair. Thank you for good service. Enjoy myself on Chair",
        isVerified: true,
    },
    {
        id: 3,
        name: "cooking Nandal",
        image: "https://www.woodensure.com/assets/images/reviews/f2uww1.avif",
        rating: 5,
        text: "Beautiful and sturdy.. it’s a classy product with a lovely glossy finish of real wood",
        isVerified: true,
    },
    {
        id: 4,
        name: "Sheena Desai",
        image: "https://www.woodensure.com/assets/images/reviews/zSxbiP.avif",
        rating: 4,
        text: "The Wooden Shelves Look great 👍🏾",
        isVerified: true,
    },
    {
        id: 5,
        name: "Umesh Kumar",
        image: "https://www.woodensure.com/assets/images/reviews/MAuNxt.avif",
        rating: 5,
        text: "Really happy with the purchase from woodensure, they were always reachable on one phone call even when they didn't have any update.",
        isVerified: true,
    },
];

// --- Components ---

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={14}
                className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
            />
        ))}
    </div>
);

export const ReviewsSection: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // --- Drag Logic ---
    const handleMouseDown = (e: MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="py-8 bg-gray-50 select-none">
            <div className="container mx-auto px-4">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Customers Say!
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Swipe to see what our customers have to say
                    </p>
                </div>

                <div
                    ref={sliderRef}
                    className={`
                        flex overflow-x-auto gap-4 pb-4 px-2
                        scrollbar-hide 
                        ${isDown ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'} 
                    `}
                    // Explained above: 
                    // When isDown (dragging) -> snap-none (allows smooth JS movement)
                    // When !isDown (idle) -> snap-x (snaps to card when you let go)

                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        // Ensure smooth behavior is OFF during drag to prevent lag
                        scrollBehavior: isDown ? 'auto' : 'smooth'
                    }}
                >
                    {reviewsData.map((review) => (
                        <div
                            key={review.id}
                            className="min-w-[320px] md:min-w-[450px] max-w-[450px] snap-center"
                        >
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow duration-300 pointer-events-none md:pointer-events-auto">

                                {/* Header */}
                                <div className="flex items-center gap-3 mb-3">
                                    {review.image ? (
                                        <img
                                            src={review.image}
                                            alt="User"
                                            className="w-12 h-12 rounded-full object-cover border border-gray-100 shrink-0 pointer-events-none"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-lg shrink-0">
                                            {review.name.charAt(0)}
                                        </div>
                                    )}

                                    <div>
                                        <h5 className="font-bold text-gray-900 text-base leading-tight">
                                            {review.name}
                                        </h5>
                                        <div className="flex items-center gap-2">
                                            <StarRating rating={review.rating} />
                                            {review.isVerified && (
                                                <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <p className="text-gray-600 text-sm leading-snug line-clamp-3">
                                        {review.text}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
