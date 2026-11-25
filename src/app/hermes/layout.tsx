import type { ReactNode } from "react";

export default function HermesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-[650px] space-y-4 px-6 pb-12 pt-24 sm:pt-40">
      {children}
    </main>
  );
}
