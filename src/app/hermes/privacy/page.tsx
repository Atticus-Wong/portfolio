import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hermes Privacy Policy",
  description: "Privacy information for the Hermes public website.",
};

export default function HermesPrivacyPage() {
  return (
    <>
      <Link href="/hermes" className="underline underline-offset-4">
        Hermes home
      </Link>
      <h1 className="text-2xl font-extrabold">Hermes Privacy Policy</h1>
      <p>
        This notice covers the public Hermes website. These pages require no
        sign-in and do not request access to your Google Account.
      </p>
      <p>
        For questions about privacy or Google Account access in Hermes, contact{" "}
        <a
          href="mailto:wongatticus.inc@gmail.com"
          className="underline underline-offset-4"
        >
          Atticus Wong
        </a>
        .
      </p>
    </>
  );
}
