import { Metadata } from "next";
import Home from "@/app/page";

export const metadata: Metadata = {
  title: "카페 | 단거주의보",
};

function CafesPage() {
  return <Home />;
}

export default CafesPage;
