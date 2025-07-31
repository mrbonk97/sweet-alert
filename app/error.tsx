"use client";

function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <main className="mt-12 p-2 mx-auto max-w-7xl">
      <hgroup className="mt-12 p-4 text-custom-g-1">
        <h1 className="text-6xl font-bold text-center">ERROR</h1>
        <h2 className="mt-4 text-xl font-semibold text-center break-keep">오류가 발생했습니다.</h2>
      </hgroup>
      <p className="text-center mt-8 text-xs font-semibold opacity-70">Message: {error.message}</p>
    </main>
  );
}

export default Error;
