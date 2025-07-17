import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Topnav } from "@/components/nav/top-nav";
import { Footer } from "@/components/nav/footer";
import { ThemeProvider } from "@/components/theme-provider";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "단거주의보",
  description: "카페 메뉴 속 당류 함량을 한눈에! 디저트와 음료의 당 정보를 쉽게 확인하세요.",
};

interface Props {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Topnav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
