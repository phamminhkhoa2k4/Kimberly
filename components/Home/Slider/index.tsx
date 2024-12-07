"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = useMemo(
      () => [
        "/Slider/slider-3.png",
        "/Slider/slider-1.jpg",
        "/Slider/slider-4.png",
        "/Slider/slider-2.jpg",
      ],
      [] 
    );

     const totalSlidesMobile = useMemo(
       () => [
         "/Slider/slider-4.png",
         "/Slider/slider-2.jpg",
       ],
       []
     );


  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (totalSlides.length / 2)
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (totalSlides.length/2) - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides.length/2))
  };


  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const minSwipeDistance = 50; // Minimum distance to trigger swipe

  const handleTouchStart = (e : any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < totalSlidesMobile.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
      <section>
        <div>
          <Carousel className="lg:block hidden   w-full max-w-full">
            <CarouselContent
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {totalSlides.slice(0, 2).map((img, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={img}
                    height={573}
                    width={1550}
                    alt="object-cover w-full h-[720px] object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious onClick={goToPrevious} />
            <CarouselNext onClick={goToNext} />
          </Carousel>
          <div
            className="relative w-full overflow-hidden sm:hidden touch-none select-none"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {totalSlidesMobile.map((img, index) => (
                <div key={index} className="min-w-full flex-shrink-0">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={390}
                    className="w-full h-[390px] object-cover object-center pointer-events-none"
                    draggable="false"
                  />
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {totalSlidesMobile.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
