// components/HeroBanner.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const WhatHero: FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column (Text) */}
        <div className="space-y-8  py-32">
          <h1 className="text-5xl sm:text-8xl  text-gray-900 font-sans animate-fadeIn">
            What do we offer?
          </h1>
          <p className="my-4 text-xl text-gray-600 font-serif animate-slideIn">
            At Custom Carpets, we specialize in creating carpets tailored to your exact needs.
            Whether you&apos;re looking for a custom size, color, or a personalized design, we have you
            covered. With a variety of customization options, including editable text and logos, you
            can design the perfect carpet for your space.
          </p>
          <Link
            href="/customize"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 animate-bounce font-sans"
          >
            Customize Your Carpet
          </Link>
        </div>

        {/* Right Column (Image) */}
        <div className="relative w-full h-96 lg:h-full shadow-lg overflow-hidden animate-zoomIn">
          <Image
            src="https://cdn.shopify.com/s/files/1/0768/3463/6043/files/81LBNU9gaQL._AC_SL1500.jpg?v=1731581928" // Replace with your actual image path
            alt="Custom Carpet"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WhatHero;
