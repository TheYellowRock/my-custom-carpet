// components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const heroImages = [
    {
      id: 1,
      src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/YOUR_LOGO_6.png?v=1731840573",
      alt: "My Carpet Customizer",
    },
    {
      id: 2,
      src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/YOUR_LOGO_7.png?v=1731840675",
      alt: "My Carpet Customizer",
    },
  ];
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-white text-center 
                 bg-[url('https://cdn.shopify.com/s/files/1/0768/3463/6043/files/black-grained-rough-pattern.jpg?v=1731598031')] bg-repeat bg-custom p-4"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden shadow-lg animate-zoomIn delay-400">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              layout="fill"
              objectFit="contain"
              className="justify-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden shadow-lg animate-zoomIn delay-1400">
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col h-full items-center justify-center gap-6 md:gap-8 p-4 md:p-10">
          <h1 className="text-3xl md:text-5xl font-sans font-bold">
            Créez le tapis parfait pour votre espace, entièrement personnalisable selon vos envies!
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-serif">
            Votre tapis, à votre façon ! Personnalisez les dimensions, les couleurs, le texte et le logo!
          </p>
          <Link
            href="/customize"
            className="inline-block mt-8 px-6 py-3 md:px-8 md:py-4 bg-white text-customTurcoise-hover font-bold shadow-md hover:bg-customYellow-base focus:outline-none focus:ring-2 focus:customTurcoise-hover focus:ring-opacity-50 transition duration-300 animate-bounce font-sans"
          >
            Personnalisez votre tapis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
