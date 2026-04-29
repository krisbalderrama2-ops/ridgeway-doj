"use client";

import { Search } from "lucide-react";

export default function DirectivesPage() {
  const utilityLinks = ["Our Offices", "Find Help", "Contact Us"];
  const mainNav = [
    "Home",
    "Our Work",
    "News",
    "Resources",
    "Employment",
    "Contact",
  ];

  const directives = [
    {
      title: "Directive No. 2026-001: Interagency Communications Policy",
      date: "March 2, 2026",
      desc: "Establishes communication standards between Ridgeway law enforcement agencies and DOJ divisions.",
      link: "https://drive.google.com/file/d/FILE_ID/view", // TODO: Replace FILE_ID with real Google Drive file ID
    },
    {
      title: "Directive No. 2026-002: Public Integrity Reporting Procedures",
      date: "February 26, 2026",
      desc: "Outlines procedures for reporting misconduct, submitting complaints, and coordinating investigations.",
      link: "https://drive.google.com/file/d/FILE_ID/view", // TODO: Replace FILE_ID with real Google Drive file ID
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1b1b1b]">
      {/* Top utility bar */}
      <div className="border-b border-[#dfe1e2] bg-[#f0f0f0] text-[13px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              An official Department of Justice website for the State of Ridgeway
            </span>
          </div>
          <div className="hidden items-center gap-6 text-[#005ea2] md:flex">
            {utilityLinks.map((link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#dfe1e2] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-[1px] border-[#9e937a] bg-[#102e51] shadow-sm">
                <img
                  src="/RDOJ.jpg"
                  alt="Ridgeway DOJ Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#565c65]">
                  State of Ridgeway
                </p>
                <h1 className="font-serif text-[38px] leading-none text-[#9e937a]">
                  Department of Justice
                </h1>
              </div>
            </div>

            <div className="flex w-full items-center gap-2 lg:w-auto">
              <div className="relative w-full lg:w-[360px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#565c65]" />
                <input
                  className="w-full border border-[#565c65] py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#005ea2]"
                  placeholder="Search ridgewaydoj.gov"
                />
              </div>
              <button className="bg-[#9e937a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6f654f]">
                Search
              </button>
            </div>
          </div>
        </div>

        <nav className="bg-[#9e937a] text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-2 px-4 py-3 text-[15px] font-medium">
            {mainNav.map((item) => (
              <a key={item} href={item === "Home" ? "/" : "#"} className="underline-offset-4 hover:underline">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <section className="border-b border-[#dfe1e2] bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="text-sm text-[#565c65]">
            <a href="/" className="hover:underline">Ridgeway DOJ</a>
            <span className="mx-2">&gt;</span>
            <span>Office of the Attorney General</span>
            <span className="mx-2">&gt;</span>
            <span className="font-semibold text-[#9e937a]">Directives</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

          {/* Sidebar */}
          <aside>
            <div className="border border-[#dfe1e2] bg-[#f8f8f8]">
              <div className="border-b border-[#dfe1e2] bg-[#9e937a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Office of the Attorney General
              </div>
              <div className="px-5 py-5">
                <ul className="space-y-3 text-[15px]">
                  <li>
                    <a href="#" className="text-[#3d4551] hover:underline">
                      Meet the Attorney General
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#3d4551] hover:underline">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="/directives" className="font-semibold text-[#9e937a] hover:underline">
                      Select Directives
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#3d4551] hover:underline">
                      Archives
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Directives content */}
          <div>
            <h2 className="font-serif text-5xl leading-tight text-[#9e937a]">
              Select Directives
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#3d4551]">
              Review current Ridgeway Department of Justice directives, memoranda, public notices, and administrative orders issued by the Office of the Attorney General.
            </p>

            <div className="mt-8 border-t border-[#dfe1e2] pt-6">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="font-semibold text-[#565c65]">Share</span>
                <a href="#" className="text-[#005ea2] hover:underline">Facebook</a>
                <a href="#" className="text-[#005ea2] hover:underline">X</a>
                <a href="#" className="text-[#005ea2] hover:underline">LinkedIn</a>
                <a href="#" className="text-[#005ea2] hover:underline">Email</a>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {directives.map((item) => (
                <div key={item.title} className="border border-[#dfe1e2] bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-2xl leading-tight">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#162e51] hover:text-[#9e937a] hover:underline"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#9e937a]">
                    {item.date}
                  </p>
                  <p className="mt-4 leading-7 text-[#3d4551]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[#dfe1e2] pt-6">
              <p className="text-[16px] leading-7 text-[#3d4551]">
                For older directives and archived publications, please contact the Office of the Attorney General.
              </p>
              <p className="mt-4 text-sm text-[#565c65]">
                Updated March 29, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#9e937a] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
          <div>
            <h4 className="font-serif text-2xl">Ridgeway Department of Justice</h4>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Serving the people of Ridgeway with integrity, accountability, and justice.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Offices</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href="#" className="hover:underline">Office of the Attorney General</a></li>
              <li><a href="#" className="hover:underline">Government and Corruption Bureau</a></li>
              <li><a href="#" className="hover:underline">Ammunition, Tasers and Firearms</a></li>
              <li><a href="#" className="hover:underline">Special Investigations Bureau</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li><a href="/directives" className="hover:underline">Directives</a></li>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">Public Records</a></li>
              <li><a href="#" className="hover:underline">Employment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="mt-4 text-sm leading-7 text-white/85">
              100 Justice Plaza
              <br />
              Capitol City, Ridgeway 00001
              <br />
              contact@ridgewaydoj.gov
              <br />
              (555) 010-2026
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
