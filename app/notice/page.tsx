import { orbitFont } from "@/lib/fonts";

function NoticePage() {
  return (
    <main className="mt-12 mx-auto max-w-7xl">
      <section className="p-4">
        <h1
          className={`p-4 rounded-lg bg-custom-g-2 text-center text-2xl md:text-4xl font-black opacity-70 ${orbitFont.className}`}
        >
          공지사항
        </h1>
      </section>
      <section className="mt-20 text-center">
        <p className="font-semibold opacity-80">공지사항이 없습니다.</p>
      </section>
    </main>
  );
}

export default NoticePage;
