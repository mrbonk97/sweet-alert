import { orbit } from "@/lib/fonts";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className={`${orbit.className} text-custom-g-1`}>
      단거주의보
    </Link>
  );
}
