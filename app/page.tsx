import CallToActionBanner from "@/components/Sections/cta";
import HappyClientsGallery from "@/components/Sections/gallery";
import Hero from "@/components/Sections/hero";
import HowToHero from "@/components/Sections/how";
import TheOffer from "@/components/Sections/offer";
import WhatHero from "@/components/Sections/what";
//import { fetchProducts, Product } from "../utils/shopify";

export default async function Home() {
  // const products: Product[] = await fetchProducts();

  return (
    <div>
      <Hero />
      <TheOffer />
      <HowToHero />
      <CallToActionBanner />
      <HappyClientsGallery />
    </div>
  );
}
