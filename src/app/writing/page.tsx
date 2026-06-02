import Link from "next/link";
import { articles } from "@/lib/content";

export default function Writing() {
  return (
    <main className="portfolio-document inner-page">
      <section className="page-intro">
        <div>
          <div className="eyebrow">Writing</div>
          <h1 className="page-title">Field notes for builders.</h1>
          <p className="page-copy">
            Practical essays on AI systems, infrastructure, DevOps, and the
            engineering choices that turn experiments into working software.
          </p>
        </div>
      </section>

      <section className="section-block" aria-label="Articles">
        <div className="publication-list page-publication-list">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="publication-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt="" />
              <div>
                <div className="card-meta">
                  {article.kicker} / {article.date} / {article.readTime}
                </div>
                <h2>{article.title}</h2>
                <p className="card-copy">{article.summary}</p>
                <div className="tag-row" aria-label="Article tags">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
