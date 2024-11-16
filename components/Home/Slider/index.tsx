"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Chuyển slide mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
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
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={
                      "https://file.hstatic.net/200000355853/file/section__1_.jpg"
                    }
                    height={573}
                    width={1550}
                    alt=""
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
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={
                      "https://file.hstatic.net/200000355853/file/section__1_.jpg"
                    }
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
