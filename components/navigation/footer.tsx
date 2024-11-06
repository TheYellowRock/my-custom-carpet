import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We specialize in creating custom carpets designed to meet your style and preferences. Our mission is to bring quality and personalization to your doorstep.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="/customization" className="text-gray-400 hover:text-white">Customization</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/return-policy" className="text-gray-400 hover:text-white">Return Policy</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Email: support@customcarpets.com<br />
              Phone: +1 234 567 890
            </p>
            <div className="mt-4">
              {/* Social Media Links */}
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82V14.705h-3.422v-3.63h3.422V8.707c0-3.404 2.07-5.262 5.09-5.262 1.447 0 2.693.108 3.056.156v3.541h-2.096c-1.644 0-1.963.781-1.963 1.927v2.526h3.926l-.511 3.63h-3.415V24h6.697C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.933 4.933 0 002.165-2.724 9.846 9.846 0 01-3.127 1.195 4.92 4.92 0 00-8.388 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.573 4.903 4.903 0 01-2.228-.616v.061a4.919 4.919 0 003.946 4.827 4.936 4.936 0 01-2.224.084 4.922 4.922 0 004.6 3.419A9.868 9.868 0 010 21.543a13.952 13.952 0 007.548 2.212c9.056 0 14.01-7.508 14.01-14.01 0-.213-.004-.426-.014-.637A10.014 10.014 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.976 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.012 7.053.07 5.773.129 4.549.351 3.533 1.366c-1.016 1.016-1.238 2.24-1.297 3.52C2.012 8.332 2 8.741 2 12s.012 3.668.07 4.947c.058 1.28.28 2.504 1.296 3.52 1.016 1.016 2.24 1.238 3.52 1.297 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.28-.058 2.504-.28 3.52-1.297 1.016-1.016 1.238-2.24 1.297-3.52.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.28-2.504-1.297-3.52-1.016-1.016-2.24-1.238-3.52-1.297C15.668.012 15.259 0 12 0z" />
                    <path d="M12 5.838A6.162 6.162 0 105.838 12 6.161 6.161 0 0012 5.838m0-1.838A8 8 0 110 12a8 8 0 0112-8zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © 2024 Custom Carpets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
