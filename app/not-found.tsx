function NotFoundPage() {
  return (
    <main className="mt-12 p-2 mx-auto max-w-7xl">
      <hgroup className="mt-12 p-4 text-custom-g-1">
        <h1 className="text-6xl font-bold text-center">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-center break-keep">
          요청하신 페이지를 찾을 수 없습니다.
        </h2>
      </hgroup>
    </main>
  );
}

export default NotFoundPage;
