"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

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
          <Carousel className="sm:hidden">
            <CarouselContent
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {totalSlides.slice(2, 4).map((img, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={img}
                    height={570}
                    width={500}
                    alt=""
                    className="object-cover w-full h-[390px] object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious onClick={goToPrevious} />
            <CarouselNext onClick={goToNext} />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Slider;
