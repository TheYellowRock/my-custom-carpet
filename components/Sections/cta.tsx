import { FC } from 'react';

const CallToActionBanner: FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">Ready to Create Your Dream Carpet?</h2>
        <p className="text-lg mb-12">
          Select your size, color, logo, and text to design a custom carpet that fits your style. It`&apos;`s quick, easy, and fun!
        </p>
        {/* CTA Button */}
        <a
          href="/customizer"
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out animate-bounce"
        >
          Start Customizing Now
        </a>
      </div>
    </div>
  );
};

export default CallToActionBanner;