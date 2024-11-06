import { FC } from 'react';
// Importing icons from Heroicons
import { ArrowLeftStartOnRectangleIcon, SwatchIcon, PhotoIcon, PencilIcon } from '@heroicons/react/16/solid';

const HowToHero: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
      {/* Centered Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fadeIn">
        How to do it?
      </h2>
      <p className="text-lg text-gray-600 mb-12 animate-fadeIn">
        Create your customized carpet by selecting and editing the options below. Choose your desired size, color, logo, and text to make it uniquely yours.
      </p>

      {/* Four Columns Section */}
      <div className=" mb-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-slideIn">
        {/* Size */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
            <ArrowLeftStartOnRectangleIcon className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Size</h3>
          <p className="text-gray-600">
            Select the carpet size that best fits your space.
          </p>
        </div>

        {/* Color */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full mb-4 flex items-center justify-center">
            <SwatchIcon className="w-10 h-10 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Color</h3>
          <p className="text-gray-600">
            Choose from a variety of colors to match your decor.
          </p>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center">
            <PhotoIcon className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Logo</h3>
          <p className="text-gray-600">
            Add your own logo for a personalized touch.
          </p>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 rounded-full mb-4 flex items-center justify-center">
            <PencilIcon className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Text</h3>
          <p className="text-gray-600">
            Customize the text to make your carpet one-of-a-kind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToHero;