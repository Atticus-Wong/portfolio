import Link from "next/link";
import { projects } from "@/lib/content";

export default function Portfolio() {
  return (
    <main className="portfolio-document inner-page">
      <section className="page-intro">
        <div>
          <div className="eyebrow">Selected work</div>
          <h1 className="page-title">Systems, automation, and software.</h1>
          <p className="page-copy">
            A focused set of projects around infrastructure, agentic workflows,
            deployment pipelines, and the software surfaces that connect them.
          </p>
        </div>
      </section>

      <section className="section-block" aria-label="Projects">
        <div className="project-list work-project-list">
          {projects.map((project, index) => {
            const content = (
              <>
                <div className="project-card-copy">
                  <div className="card-meta">
                    Project {String(index + 1).padStart(2, "0")} / {project.role}
                  </div>
                  <h2>{project.title}</h2>
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
                {content}
              </Link>
            ) : (
              <article key={project.title} className="project-card">
                {content}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
