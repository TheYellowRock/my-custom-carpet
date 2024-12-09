// components/BackgroundWithTextbox.tsx

import React from "react";

const TheOffer: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-11-15_at_08.24.45_daf1c48f.jpg?v=1731909239')",
      }} // Replace with your image path
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-customRed-base bg-opacity-75 p-6 sm:p-10 shadow-lg max-w-lg md:max-w-2xl mx-4 sm:mx-auto">
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-sans mb-4 text-center">
            Que proposons-nous?
          </h1>
          <p className="text-gray-100 text-lg sm:text-xl md:text-2xl font-sans py-4 sm:py-6 text-center">
            Chez Made by French, nous sommes spécialisés dans la création de
            tapis sur mesure, adaptés à vos besoins exacts. Que vous cherchiez
            une taille, une couleur spécifique ou un design personnalisé, nous
            avons ce qu&apos;il vous faut. Grâce à une variété d&apos;options de
            personnalisation, incluant du texte et des logos modifiables, vous
            pouvez concevoir le tapis parfait pour votre espace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheOffer;
