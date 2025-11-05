import { Logo } from "@/components/nav/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-96 h-80 bg-secondary text-sm">
      <section className="pt-8 p-4 mx-auto max-w-5xl text-right">
        <Logo />
        <p className="text-sm opacity-80">카페 음료에 들어있는 영양성분을 보여드립니다.</p>

        <hgroup className="mt-8">
          <p className="opacity-80">문의: hyunsuk1997@naver.com</p>
          <p className="opacity-80">
            개발자:{" "}
            <Link
              href="https://mrbonk97.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2"
            >
              https://mrbonk97.github.io
            </Link>
          </p>
        </hgroup>
      </section>
    </footer>
  );
}
