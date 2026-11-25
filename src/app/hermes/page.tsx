import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hermes",
  description: "Hermes is a personal assistant for homelab automation.",
};

export default function HermesPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold">Hermes</h1>
      <p>
        Hermes is a personal assistant that helps Atticus Wong manage homelab
        workflows, including application deployments and job status checks.
      </p>
      <Link href="/hermes/privacy" className="underline underline-offset-4">
        Privacy Policy
      </Link>
    </>
  );
}
