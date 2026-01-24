import React from 'react';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-34 justify-center pb-20">
      <div className="flex flex-col gap-4 w-full max-w-5xl px-6">
        {children}
      </div>
    </div>
  );
}
