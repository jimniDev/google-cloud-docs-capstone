import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { MaterialIcon } from "./MaterialIcon";

const technologyAreas = [
  "AI and ML",
  "Application development",
  "Application hosting",
  "Compute",
  "Data analytics and pipelines",
  "Databases",
  "Distributed, hybrid, and multicloud",
  "Industry solutions",
  "Migration",
  "Networking",
  "Observability and monitoring",
  "Security",
  "Storage",
];

const crossProductTools = [
  "Access and resources management",
  "Costs and usage management",
  "Infrastructure as code",
  "SDK, languages, frameworks, and tools",
];

export function Header() {
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (techRef.current && !techRef.current.contains(event.target as Node)) {
        setIsTechOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="gcloud-header sticky top-0 z-50 border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 lg:px-6">
        <div className="flex min-w-0 items-center gap-7">
          <Link to="/" className="inline-flex items-center gap-2 text-[19px] leading-none">
            <span className="font-semibold tracking-tight">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </span>
            <span className="text-[#5f6368]">Cloud</span>
          </Link>

          <nav className="hidden items-center gap-2 text-[13px] text-[#3c4043] lg:flex">
            <div className="relative" ref={techRef}>
              <button
                className="flex items-center gap-1 rounded px-2 py-1.5 hover:bg-[#f1f3f4]"
                onClick={() => setIsTechOpen((v) => !v)}
              >
                Technology areas
                <MaterialIcon name="keyboard_arrow_down" size={18} className={`transition-transform ${isTechOpen ? "rotate-180" : ""}`} />
              </button>

              {isTechOpen && (
                <div className="absolute left-0 top-full mt-1 w-[320px] rounded-md border border-[#dadce0] bg-white py-2 shadow-lg">
                  {technologyAreas.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-[#3c4043] hover:bg-[#f8f9fa] hover:text-[#1a73e8]">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={toolsRef}>
              <button
                className="flex items-center gap-1 rounded px-2 py-1.5 hover:bg-[#f1f3f4]"
                onClick={() => setIsToolsOpen((v) => !v)}
              >
                Cross-product tools
                <MaterialIcon name="keyboard_arrow_down" size={18} className={`transition-transform ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>

              {isToolsOpen && (
                <div className="absolute left-0 top-full mt-1 w-[330px] rounded-md border border-[#dadce0] bg-white py-2 shadow-lg">
                  {crossProductTools.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-[#3c4043] hover:bg-[#f8f9fa] hover:text-[#1a73e8]">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-1 text-[#5f6368]">
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded border border-[#dadce0] px-2.5 py-1.5 text-[12px] font-medium text-[#3c4043] hover:bg-[#f8f9fa] md:inline-flex"
          >
            <MaterialIcon name="terminal" size={18} />
            Shell
          </button>
          <button type="button" className="rounded p-2 hover:bg-[#f1f3f4]" aria-label="Theme">
            <MaterialIcon name="light_mode" size={18} />
          </button>
          <button
            type="button"
            className="hidden items-center gap-1 rounded border border-[#dadce0] px-2.5 py-1.5 text-[12px] font-medium text-[#3c4043] hover:bg-[#f8f9fa] sm:inline-flex"
          >
            <MaterialIcon name="language" size={16} />
            English
            <MaterialIcon name="keyboard_arrow_down" size={16} />
          </button>
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded border border-[#dadce0] px-2.5 py-1.5 text-[12px] font-medium hover:bg-[#f8f9fa] md:inline-flex"
          >
            <MaterialIcon name="computer" size={18} color="#5f6368" />
            <span className="text-[#1a73e8]">Console</span>
          </button>
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className="rounded-full border border-[#dadce0] p-1.5 hover:bg-[#f1f3f4]"
              aria-label="More options"
              aria-expanded={isMoreOpen}
              onClick={() => setIsMoreOpen((v) => !v)}
            >
              <MaterialIcon name="more_vert" size={18} />
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 top-full mt-1 w-56 rounded-md border border-[#dadce0] bg-white py-2 shadow-lg">
                <a href="#" className="block px-4 py-2 text-sm text-[#3c4043] hover:bg-[#f8f9fa]">Products and pricing</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#3c4043] hover:bg-[#f8f9fa]">Support</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#3c4043] hover:bg-[#f8f9fa]">Release notes</a>
              </div>
            )}
          </div>
          <button
            type="button"
            aria-label="Account"
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#0b57d0] text-white"
          >
            <MaterialIcon name="person" size={18} color="white" />
          </button>
        </div>
      </div>
    </header>
  );
}
