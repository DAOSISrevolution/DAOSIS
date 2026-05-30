import { links } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌍</span>
          <span className="font-semibold">DAOSIS</span>
          <span className="text-sm text-mist">— a public utility for transformation.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-mist">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={links.videos.fullCycle} target="_blank" rel="noreferrer" className="hover:text-white">
            Walkthrough
          </a>
          <a href="#top" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-mist">
        Open source under AGPL-3.0 · Docs under CC-BY 4.0 · © {new Date().getFullYear()} DAOSIS
      </div>
    </footer>
  );
}
