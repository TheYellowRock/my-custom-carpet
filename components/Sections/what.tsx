// components/HeroBanner.tsx
import Image from 'next/image';
import { FC } from 'react';

const WhatHero: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        {/* Left Column (Text) */}
        <div className="lg:pr-8">
          <h1 className="text-4xl font-bold text-gray-900 py-10 sm:text-5xl animate-fadeIn">
            What do we do?
          </h1>
          <p className="mt-4 text-lg text-gray-600 animate-slideIn">
            At Custom Carpets, we specialize in creating carpets tailored to your exact needs. Whether you`&apos;`re looking for a custom size, color, or a personalized design, we have you covered. With a variety of customization options, including editable text and logos, you can design the perfect carpet for your space.
          </p>
          <a
            href="#"
            className="inline-block mt-16 px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 animate-bounce"
          >
            Customize Your Carpet
          </a>
        </div>

        {/* Right Column (Image) */}
        <div className="mt-8 lg:mt-0">
          <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden animate-zoomIn">
            <Image
              src="https://cdn.shopify.com/s/files/1/0768/3463/6043/files/Williams_Black_3x6_1200x_c6c04b02-75c8-4bb4-a956-38173c378dff.webp?v=1729059770" // Replace with your actual image path
              alt="Custom Carpet"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHero;
