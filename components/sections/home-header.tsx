"use client";

import { orbitFont } from "@/lib/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HomeHeader() {
  const [id, setId] = useState(1);

  useEffect(() => {
    setInterval(() => setId((cur) => ((cur + 1) % 5) + 1), 1500);
  }, []);

  return (
    <header className="p-4 rounded-lg bg-custom-g-2">
      <h1
        className={`text-2xl md:text-4xl font-black opacity-70 ${orbitFont.className}`}
      >
        Sweet Alert(단거주의보)
      </h1>
      <Image
        src={`/images/dessert-${id}.svg`}
        alt="dessert"
        height={256}
        width={256}
        className="mt-4 mb-8 mx-auto h-40 w-40 md:w-52 md:h-52 no-drag"
      />
    </header>
  );
}
