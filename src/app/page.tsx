import Link from "next/link";
import { articles, projects } from "@/lib/content";

export default function Home() {
  return (
    <main className="portfolio-document">
      <section className="intro-block home-intro">
        <div className="intro-profile">
          <div className="portrait-card home-title" aria-hidden="true">
            <span>AW</span>
          </div>

          <h1 className="intro-title home-copy">Hey, I&apos;m Atticus.</h1>
          <div className="pill-row home-copy" aria-label="Current roles and focus areas">
            <span className="mini-pill">UC Davis</span>
            <span className="mini-pill">Software Engineer</span>
            <span className="mini-pill">AI Agents</span>
            <span className="mini-pill">DevOps</span>
          </div>
        </div>

        <div className="about-section home-copy">
          <h2>About me</h2>
          <p>
            I&apos;m a software engineer in the Bay Area studying Computer
            Science at UC Davis. I like building systems that sit between
            product, infrastructure, and automation, especially when the work
            benefits from both engineering taste and visual clarity.
          </p>
          <p>
            Recently, I&apos;ve been exploring agentic workflows, self-hosted
            infrastructure, CI/CD pipelines, and the design details that make
            technical projects easier to understand.
          </p>
          <Link href="/writing" className="read-more-link">
            Read more
          </Link>
        </div>
      </section>

      <section className="section-block" aria-labelledby="selected-work">
        <h2 id="selected-work" className="section-title">Selected Work</h2>
        <div className="project-list home-project-list">
          {projects.map((project, index) => {
            const body = (
              <>
                <div className="project-card-copy">
                  <div className="card-meta">
                    Project {String(index + 1).padStart(2, "0")} / {project.role}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row" aria-label="Project tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt="" />
                </div>
              </>
            );

            return project.href ? (
              <Link key={project.title} href={project.href} className="project-card">
                {body}
              </Link>
            ) : (
              <article key={project.title} className="project-card">
                {body}
              </article>
            );
          })}
        </div>
        <Link href="/portfolio" className="section-cta">
          See more projects
        </Link>
      </section>

      <section className="section-block" aria-labelledby="publications">
        <h2 id="publications" className="section-title">Publications</h2>
        <div className="publication-list home-publication-list">
          {articles.map((article) => (
            <Link key={article.slug} href={`/writing/${article.slug}`} className="publication-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt="" />
              <div>
                <div className="card-meta">{article.kicker} / {article.date}</div>
                <h3>{article.title}</h3>
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

      <section className="contact-strip" aria-label="Contact links">
        <a href="mailto:wongatticus.inc@gmail.com">Email</a>
        <a href="https://github.com/Atticus-Wong" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/atticus-wong/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
    </main>
  );
}
