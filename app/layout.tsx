import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "설탕체크",
  description: "음식에 들은 모든 설탕을 보여드립니다.",
};

interface Props {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
