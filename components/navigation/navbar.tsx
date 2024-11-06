import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <header className="bg-white w-screen shadow">
      <div className="container  mx-auto px-4 py-10">
        {/* Top logo section */}
        <div className="flex justify-center">
          <Link href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-10-15_at_13.06.00_16aa87e9.jpg?v=1729053237"
              alt="Logo"
              className="h-32 w-auto"
            />
          </Link>
        </div>

        {/* Navigation menu */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-8 text-gray-700 text-lg">
            <li>
              <Link href="/home">What?</Link>
            </li>
            <li>
              <Link href="/about">How?</Link>
            </li>
            <li>
              <Link href="/services">Order It</Link>
            </li>
            <li>
              <Link href="/cart">
                <div className="relative flex items-center text-gray-700 hover:text-gray-900">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    3
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
