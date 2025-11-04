"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeaderImageSection() {
  const [id, setId] = useState(1);

  useEffect(() => {
    setInterval(() => setId((cur) => ((cur + 1) % 5) + 1), 1500);
  }, []);

  return (
    <Image
      src={`/images/dessert/dessert-${id}.svg`}
      alt="dessert"
      height={256}
      width={256}
      className="mt-4 mb-8 mx-auto h-40 w-40 md:w-52 md:h-52 no-drag"
    />
  );
}
