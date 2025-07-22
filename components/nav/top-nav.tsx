import Link from "next/link";
import { orbitFont } from "@/lib/fonts";
import { ModeToggle } from "@/components/nav/dark-mode-button";

export function Topnav() {
  return (
    <header className="z-50 fixed top-0 left-0 w-full bg-background dark:bg-secondary border-b">
      <div className="p-4 mx-auto max-w-7xl h-12 flex items-center justify-between ">
        <nav>
          <Link href="/" className={`${orbitFont.className} text-lg font-bold text-custom-g-1`}>
            단거주의보
          </Link>
          <Link
            href="/cafes"
            className="ml-10 text-sm font-semibold opacity-70 underline-offset-2 hover:underline"
          >
            카페
          </Link>
          <Link
            href="/menus"
            className="ml-5 text-sm font-semibold opacity-70 underline-offset-2 hover:underline"
          >
            메뉴
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
