"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BinderCard } from "./BinderCard";

export function ScrollSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Show left button if we can scroll left
      setShowLeftButton(scrollLeft > 0);
      
      // Show right button if we can scroll right
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full group">
      {/* Left Scroll Button */}
      {showLeftButton && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer active:scale-90"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex flex-row gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4"
      >
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
        <BinderCard />
      </div>

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer active:scale-90"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  );
}