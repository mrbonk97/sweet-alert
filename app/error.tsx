"use client"; // Error boundaries must be Client Components

import { orbit } from "@/lib/fonts";
import { Bug } from "lucide-react";
import Link from "next/link";

interface Props {
  error: Error & { digest?: string };
}

function ErrorPage({ error }: Props) {
  return (
    <main className="pt-16 p-4 mx-auto max-w-6xl">
      <header className="mt-8">
        <h1 className={`${orbit.className} text-2xl opacity-80`}>오류가 발생했습니다.</h1>
      </header>
      <Bug size={48} className="mt-8 text-custom-g-1" />
      <pre className="mt-8 p-4 bg-secondary rounded-lg">오류: {error.message}</pre>
      <Link href={"/"} className="block w-fit mt-4 text-sm hover:underline underline-offset-2">
        돌아가기
      </Link>
    </main>
  );
}

export default ErrorPage;
