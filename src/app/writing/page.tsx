export default function Writing() {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
      <div className="flex flex-col w-[650px]">
        <div className="font-extrabold text-lg">
          Writing
        </div>
        <div className="text-[#9f9f9f]">by Atticus Wong</div>

        <div className="font-medium mt-4">
          Here is a list of my writing:
        </div>

        <ul className="list-disc pl-5 font-medium mt-4">
          <li>
            <a href="/proxmox" className="underline">
              Proxmox, DevOps, and Personal Cloud Environments
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
