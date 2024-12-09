// components/CallToActionBanner.tsx
import { FC } from 'react';
import Link from 'next/link';

const CallToActionBanner: FC = () => {
  return (
    <section className="w-full mx-auto bg-gradient-to-r from-customTurcoise-base to-customBlue-base text-white py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto animate-fadeIn space-y-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-sans">
        Prêt à créer le tapis de vos rêves?
        </h2>
        <p className="text-lg sm:text-xl font-sans">
        Sélectionnez votre taille, couleur, logo et texte pour concevoir un tapis personnalisé qui correspond à votre style. C&apos;est rapide, facile et amusant !
        </p>
        {/* CTA Button */}
        <Link
          href="/customizer"
          className="inline-block bg-white text-customRed-base hover:text-customBlue-base py-4 px-8 shadow-lg transition duration-300 ease-in-out animate-bounce font-sans"
        >
          Commencez maintenant
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;
