import { HomeCafeSection } from "@/components/sections/home-cafe-section";
import { HomeEventSection } from "@/components/sections/home-event-section";
import { HomeSearchSection } from "@/components/sections/home-search-section";
import { orbitFont } from "@/lib/fonts";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="mt-12 p-2 mx-auto max-w-7xl">
      <section className="pb-5 border-b-2 border-b-custom-2/50">
        <div className="flex items-center justify-evenly">
          <Image
            src={`/images/dessert-1.svg`}
            alt="dessert-1"
            height={384}
            width={384}
            className="w-24 sm:w-44 md:w-56 lg:w-80 aspect-square no-drag"
          />
          <h1
            className={`text-custom-g-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest text-center ${orbitFont.className}`}
          >
            단거주의보
          </h1>
          <Image
            src={`/images/dessert-2.svg`}
            alt="dessert-2"
            height={384}
            width={384}
            className="w-24 sm:w-44 md:w-56 lg:w-80 aspect-square no-drag"
          />
        </div>
      </section>
      <HomeSearchSection />
      <HomeCafeSection />
      <HomeEventSection />
    </main>
  );
}
