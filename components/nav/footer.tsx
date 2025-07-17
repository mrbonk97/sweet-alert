import { orbitFont } from "@/lib/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-96 p-5 py-10 bg-secondary text-sm font-semibold text-foreground/80 underline-offset-2 **:[a]:hover:underline">
      <div className="mx-auto max-w-5xl">
        <h2 className={`${orbitFont.className} text-2xl font-bold text-custom-g-1`}>단거주의보</h2>
        <div className="mt-5 flex flex-col sm:flex-row gap-5 sm:gap-40">
          <section className="shrink-0">
            <h4 className="text-base">사이트맵</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href={"/"}>홈</Link>
              </li>
              <li>
                <Link href={"/cafes"}>카페</Link>
              </li>
              <li>
                <Link href={"/products"}>상품</Link>
              </li>
            </ul>
          </section>
          <section className="shrink-0">
            <h4 className="text-base">고객지원</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href={"/notice"}>공지사항</Link>
              </li>
              <li>
                <Link href={"/policy"}>이용약관</Link>
              </li>
            </ul>
          </section>
          <section className="shrink-0">
            <h4 className="text-base">연락</h4>
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
