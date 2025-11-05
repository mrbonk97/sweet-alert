import { orbit } from "@/lib/fonts";
import { CakeSlice } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | 단거주의보",
};

function NotFoundPage() {
  return (
    <main className="pt-16 p-4 mx-auto max-w-6xl">
      <header className="mt-8 p-4">
        <h1 className={`${orbit.className} text-center text-2xl opacity-80`}>요청하신 페이지를 찾을 수 없습니다.</h1>
        <CakeSlice className="mt-8 mx-auto text-custom-g-1" size={64} />
        <Link href={"/"} className="mt-8 block mx-auto w-fit text-sm hover:underline underline-offset-2">
          돌아가기
        </Link>
      </header>
    </main>
  );
}

export default NotFoundPage;
