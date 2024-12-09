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
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-8 animate-fadeIn font-sans">
          Comment faire?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 animate-fadeIn delay-100 font-sans">
          Créez votre tapis personnalisé en sélectionnant et en modifiant les
          options ci-dessous. Choisissez la taille, la couleur, le logo et le
          texte souhaités pour le rendre unique.
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
              {/* Card */}
              {[
                {
                  icon: 
                    <ArrowTrendingUpIcon className="w-10 h-10 sm:w-12 sm:h-12 text-customRed-base" />
                  ,
                  title: "Taille",
                  description:
                    "Sélectionnez la taille de tapis qui convient le mieux à votre espace.",
                },
                {
                  icon: (
                    <SwatchIcon className="w-10 h-10 sm:w-12 sm:h-12 text-customRed-base" />
                  ),
                  title: "Couleur",
                  description:
                    "Choisissez parmi une variété de couleurs pour assortir à votre décor.",
                },
                {
                  icon: (
                    <PhotoIcon className="w-10 h-10 sm:w-12 sm:h-12 text-customRed-base" />
                  ),
                  title: "Logo",
                  description:
                    "Ajoutez votre propre logo pour une touche personnalisée.",
                },
                {
                  icon: (
                    <PencilIcon className="w-10 h-10 sm:w-12 sm:h-12 text-customRed-base" />
                  ),
                  title: "Texte",
                  description:
                    "Personnalisez le texte pour rendre votre tapis unique.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="relative group flex items-center justify-center p-14 border border-customRed-base rounded-md overflow-hidden cursor-pointer"
                >
                  {/* Front: Logo and Title */}
                  <div className="absolute inset-0 flex flex-row items-center justify-center gap-5 transition-transform duration-300 group-hover:translate-y-full">
                    {card.icon}
                    <h3 className="text-xl sm:text-2xl text-customBlue-base font-sans">
                      {card.title}
                    </h3>
                  </div>

                  {/* Back: Description */}
                  <div className="absolute inset-0 flex items-center justify-center p-5 text-gray-600 font-sans bg-white transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHero;
