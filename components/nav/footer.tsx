import { orbitFont } from "@/lib/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-96 p-4 py-8 bg-secondary text-sm font-semibold text-foreground/80 underline-offset-2 **:[a]:hover:underline">
      <div className="mx-auto max-w-5xl">
        <h4
          className={`${orbitFont.className} text-2xl font-bold text-custom-g-1`}
        >
          단거주의보
        </h4>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-40">
          <section className="shrink-0">
            <h5 className="text-base">사이트맵</h5>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href={"/"}>홈</Link>
              </li>
              <li>
                <Link href={"/cafes"}>카페</Link>
              </li>
              <li>
                <Link href={"/notice"}>공지사항</Link>
              </li>
            </ul>
          </section>
          <section className="shrink-0">
            <h5 className="text-base">연락</h5>
            <ul className="mt-2 space-y-1">
              <li>hyunsuk1997@naver.com</li>
              <li>
                <Link href={"https://mrbonk97.github.io"} target="_blank">
                  제작자 소개
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
