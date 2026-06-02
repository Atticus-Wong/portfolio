import React from "react";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="article-page">
      <div className="article-frame article-content">
        {children}
      </div>
    </main>
  );
}
