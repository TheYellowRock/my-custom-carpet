// components/HowToHero.tsx
import { FC } from "react";
import Image from "next/image";
import {
  ArrowTrendingUpIcon,
  SwatchIcon,
  PhotoIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

const HowToHero: FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto py-16 sm:py-32 px-6 text-center">
        {/* Centered Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-8 animate-fadeIn font-sans font-bold">
          Comment faire?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 animate-fadeIn delay-100 font-serif">
          Créez votre tapis personnalisé en sélectionnant et en modifiant les options ci-dessous. Choisissez la taille, la couleur, le logo et le texte souhaités pour le rendre unique.
        </p>

        <div className="max-w-screen-xl mx-auto py-10 px-6 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full h-72 sm:h-96 lg:h-full shadow-lg overflow-hidden animate-zoomIn">
              <Image
                src="https://cdn.shopify.com/s/files/1/0768/3463/6043/files/81LBNU9gaQL._AC_SL1500.jpg?v=1731581928"
                alt="Custom Carpet"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-5 p-6 lg:p-10">
              <div className="flex gap-5 p-5 border border-customTurcoise-base">
                <div className="flex flex-col justify-center">
                  <ArrowTrendingUpIcon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-sans">
                    Taille
                  </h3>
                </div>
                <div className="flex w-full h-full items-center justify-center">
                  <p className="text-gray-600 font-serif">
                    Sélectionnez la taille de tapis qui convient le mieux à votre espace.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-5 border border-customTurcoise-base">
                <div className="flex flex-col justify-center">
                  <SwatchIcon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-sans">
                    Couleur
                  </h3>
                </div>
                <div className="flex w-full h-full items-center justify-center">
                  <p className="text-gray-600 font-serif">
                    Choisissez parmi une variété de couleurs pour assortir à votre décor.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-5 border border-customTurcoise-base">
                <div className="flex flex-col justify-center">
                  <PhotoIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-sans">
                    Logo
                  </h3>
                </div>
                <div className="flex w-full h-full items-center justify-center">
                  <p className="text-gray-600 font-serif">
                    Ajoutez votre propre logo pour une touche personnalisée.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-5 border border-customTurcoise-base">
                <div className="flex flex-col justify-center">
                  <PencilIcon className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-sans">
                    Texte
                  </h3>
                </div>
                <div className="flex w-full h-full items-center justify-center">
                  <p className="text-gray-600 font-serif">
                    Personnalisez le texte pour rendre votre tapis unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHero;
