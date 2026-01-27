import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
			<div className="flex flex-col gap-4 w-full max-w-[650px] px-6">
				<div className="font-extrabold text-lg">
					Atticus Wong
				</div>

				<div className="font-medium">
					Hi, I am a SWE in the Bay Area! I&apos;m currently a student @ UC Davis. I love learning about all things SWE-related 
		 and recently have been exploring AI Agents and DevOps.
				</div>

				<div className="font-medium">
					You can view my portfolio,  <Link href="/writing" className="underline">read my writing</Link> or {" "}
					<a href="https://github.com/Atticus-Wong" className="underline" target="_blank" rel="noopener noreferrer">code</a>, 
					or {" "}
					<a href="https://www.linkedin.com/in/atticus-wong/" className="underline" target="_blank" rel="noopener noreferrer">follow me online</a>. 
					Reach out if interested.
				</div>
			</div>
    </div>
  );
}
