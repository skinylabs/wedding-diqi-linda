"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  { src: "/images/1.jpg", alt: "Image 1" },
  { src: "/images/2.jpg", alt: "Image 2" },
  { src: "/images/3.jpg", alt: "Image 3" },
  { src: "/images/4.jpg", alt: "Image 4" },
  { src: "/images/5.jpg", alt: "Image 5" },
  { src: "/images/6.jpg", alt: "Image 6" },
  { src: "/images/7.jpg", alt: "Image 7" },
  { src: "/images/8.jpg", alt: "Image 8" },
  { src: "/images/9.jpg", alt: "Image 9" },
  { src: "/images/10.jpg", alt: "Image 10" },
  { src: "/images/11.jpg", alt: "Image 11" },
];

const GalleryPage = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center z-30 p-5">
        <h1
          className="w-full text-center playfair-display text-2xl divider divider-neutral"
          data-aos="fade-up"
        >
          Gallery Foto
        </h1>
        <div className="w-full py-5 md:max-w-64" data-aos="flip-left">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
            emulateTouch={true}
            autoPlay={true}
            stopOnHover={false}
            interval={3000}
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
