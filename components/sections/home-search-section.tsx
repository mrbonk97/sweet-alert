"use client";

import Form from "next/form";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

export function HomeSearchSection() {
  const [isFocused, setIsFocused] = useState(false);
  const [q, setQ] = useState("");
  console.log(isFocused);

  return (
    <Form
      className="mt-5 p-5 pb-20 rounded-lg bg-custom-g-2"
      action={"/menu"}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        const nextFocused = e.relatedTarget as HTMLElement | null;

        // Form 외부 클릭인 경우만 닫기
        if (!nextFocused || !e.currentTarget.contains(nextFocused)) {
          setIsFocused(false);
        }
      }}
    >
      <div className="relative">
        <button
          type="submit"
          className="p-2 absolute top-1/2 -translate-y-1/2 left-2 rounded-lg hover:bg-secondary"
        >
          <span className="sr-only">검색</span>
          <SearchIcon />
        </button>
        <input
          name="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="상품을 검색해보세요"
          className="p-5 pl-12 w-full border rounded-lg bg-background"
        />
      </div>
    </Form>
  );
}
