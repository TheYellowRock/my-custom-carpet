import CallToActionBanner from "@/components/Sections/cta";
import HowToHero from "@/components/Sections/how";
import WhatHero from "@/components/Sections/what";
//import { fetchProducts, Product } from "../utils/shopify";

export default async function Home() {
  // const products: Product[] = await fetchProducts();

  return (
    <div>
      <WhatHero />
      <HowToHero />
      <CallToActionBanner />
    </div>
  );
}
