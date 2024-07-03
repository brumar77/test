"use client";

import { ABOUT_IMAGES } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";

type ImagesProps = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: ImagesProps[];
  showButtons?: boolean;
};

const Carousel = ({ images, showButtons = false }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.length, currentImageIndex]); // Dependencia para que se ejecute cuando cambie el tamaño del array de imágenes

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={820}
            height={1200}
            // layout="responsive"
            // layout="fill"
            // objectFit="cover"
            className="rounded-md object-cover w-full h-full"
          />
        </div>
      ))}

      {showButtons && (
        <>
          <button
            onClick={goToPreviousImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#9664;
          </button>
          <button
            onClick={goToNextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#9654;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
