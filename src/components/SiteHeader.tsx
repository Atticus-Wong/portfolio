import Link from "next/link";

type IconName =
  | "home"
  | "layers"
  | "briefcase"
  | "file"
  | "mail"
  | "github"
  | "linkedin";

const internalItems: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/writing", label: "Writing", icon: "layers" },
  { href: "/portfolio", label: "Work", icon: "briefcase" },
  { href: "/resume", label: "Resume", icon: "file" },
];

const externalItems: { href: string; label: string; icon: IconName }[] = [
  {
    href: "mailto:wongatticus.inc@gmail.com",
    label: "Email",
    icon: "mail",
  },
  {
    href: "https://github.com/Atticus-Wong",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/atticus-wong/",
    label: "LinkedIn",
    icon: "linkedin",
  },
];

function Icon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M3 11.5 12 4l9 7.5" />
          <path {...common} d="M6.5 10.5V20h11v-9.5" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="m12 4 8 4.5-8 4.5-8-4.5Z" />
          <path {...common} d="m4 12 8 4.5 8-4.5" />
          <path {...common} d="m4 16 8 4.5 8-4.5" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M8 7V5.8C8 4.8 8.8 4 9.8 4h4.4c1 0 1.8.8 1.8 1.8V7" />
          <path {...common} d="M4 8.5h16v11H4z" />
          <path {...common} d="M4 13h16" />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M7 4h6l5 5v11H7z" />
          <path {...common} d="M13 4v5h5" />
          <path {...common} d="M10 13h5M10 16h5" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4 6.5h16v13H4z" />
          <path {...common} d="m4 8 8 6 8-6" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3.5a8.5 8.5 0 0 0-2.7 16.56c.43.08.58-.18.58-.4v-1.5c-2.36.52-2.86-1-2.86-1-.39-.98-.95-1.24-.95-1.24-.78-.53.06-.52.06-.52.86.06 1.32.89 1.32.89.76 1.31 2  .93 2.49.71.08-.56.3-.93.54-1.15-1.88-.21-3.86-.94-3.86-4.2 0-.93.33-1.69.88-2.28-.09-.22-.38-1.08.08-2.25 0 0 .72-.23 2.35.87a8.08 8.08 0 0 1 4.28 0c1.63-1.1 2.35-.87 2.35-.87.46 1.17.17 2.03.08 2.25.55.59.88 1.35.88 2.28 0 3.27-1.99 3.98-3.88 4.19.31.27.58.79.58 1.59v2.36c0 .22.16.48.59.4A8.5 8.5 0 0 0 12 3.5Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.8 8.9H4.4v7.7h2.4Zm.2-2.4A1.37 1.37 0 1 0 5.6 7.9 1.36 1.36 0 0 0 7 6.5Zm9.8 6.8c0-2.2-1.2-3.2-2.8-3.2a2.4 2.4 0 0 0-2.2 1.2v-1H9.4v7.7h2.4v-3.8c0-1 .2-2 1.5-2s1.3 1.1 1.3 2.1v3.7h2.4Z"
          />
        </svg>
      );
  }
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        {internalItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="site-nav-link"
            aria-label={item.label}
            title={item.label}
          >
            <Icon name={item.icon} />
          </Link>
        ))}
        <span className="site-nav-divider" aria-hidden="true" />
        {externalItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="site-nav-link"
            aria-label={item.label}
            title={item.label}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          >
            <Icon name={item.icon} />
          </a>
        ))}
      </nav>
    </header>
  );
}
