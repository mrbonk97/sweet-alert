import { Logo } from "@/components/nav/logo";

export function Topnav() {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 h-12 bg-background border-b">
      <section className="py-2 px-4 mx-auto max-w-6xl h-full flex items-center">
        <Logo />
      </section>
    </header>
  );
}
