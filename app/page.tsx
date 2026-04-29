"use client";

import {
  BadgeAlert,
  Briefcase,
  Building2,
  FileSearch,
  Newspaper,
  Phone,
  Scale,
  Search,
  Shield,
  Siren,
  Users,
} from "lucide-react";

export default function Page() {
  const utilityLinks = ["Our Offices", "Find Help", "Contact Us"];
  const mainNav = [
    "Home",
    "Our Work",
    "News",
    "Resources",
    "Employment",
    "Contact",
  ];

  const actionCards = [
    {
      title: "Report a Crime",
      icon: BadgeAlert,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeIG4YUiqwtUhCYNWsQJiGydZwQLGF0-D9OughjrueUR3psIg/closedform",
      external: true,
    },
    {
      title: "Find Help and Information for Victims",
      icon: Users,
      href: "/victims",
    },
    {
      title: "Request Records or Permits",
      icon: FileSearch,
      href: "https://discord.com/channels/721944693168144455/968234706728521778/1479702944562810900",
      external: true,
    },
    {
      title: "Careers at Ridgeway DOJ",
      icon: Briefcase,
      href: "/careers",
    },
    {
      title: "Wanted Notices",
      icon: Siren,
      href: "#most-wanted",
    },
    {
      title: "Contact Ridgeway DOJ",
      icon: Phone,
      href: "https://discord.gg/bCFxKFgpMu",
      external: true,
    },
  ];

  const workCards = [
    {
      title: "DOJ Components and Agencies",
      text: "Explore divisions, bureaus, offices, and public integrity units across Ridgeway DOJ.",
    },
    {
      title: "Subject Matter Areas",
      text: "Learn more about law enforcement standards, public corruption, civil rights, organized crime, and statewide legal initiatives.",
    },
    {
      title: "Public Safety and Integrity",
      text: "Review department priorities involving prosecutions, accountability, statewide coordination, and public-facing enforcement policy.",
    },
  ];

  const news = [
    {
      type: "Press Release",
      title: "Ridgeway DOJ Announces Public Integrity Review Initiative",
      date: "March 29, 2026",
      desc: "The Ridgeway Department of Justice announced a mock public integrity initiative focused on transparency, accountability, and administrative review.",
    },
    {
      type: "Directive",
      title: "Attorney General Issues Directive on Agency Coordination",
      date: "March 28, 2026",
      desc: "A new department-wide directive outlines communication standards between Ridgeway law enforcement and justice components.",
    },
    {
      type: "Advisory",
      title: "Ridgeway DOJ Launches New Public Resources Portal",
      date: "March 27, 2026",
      desc: "The mock portal centralizes guidance documents, forms, public notices, and contact information for residents.",
    },
  ];

  const stats = [
    { value: "6", label: "Divisions" },
    { value: "16", label: "Prosecutors" },
    { value: "TBD", label: "Guilty Verdicts" },
    { value: "TBD", label: "Active Matters" },
  ];

  const wanted = [
    {
      name: "notsfeelings",
      detail: "CHARGE: FIRST-DEGREE MURDER",
      description: "Wanted in connection with a homicide investigation involving the unlawful killing of another person. Considered armed and dangerous.",
    },
    {
      name: "-",
      detail: "--",
    },
    {
      name: "--",
      detail: "--",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1b1b1b]">
      <div className="border-b border-[#dfe1e2] bg-[#f0f0f0] text-[13px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">An official Department of Justice website for the State of Ridgeway</span>
            <span className="text-[#5c5c5c]"></span>
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
                <h1 className="font-serif text-[38px] leading-none text-[#9e937aff]">
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

        <nav className="bg-[#9e937aff] text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-2 px-4 py-3 text-[15px] font-medium">
            {mainNav.map((item) => (
              <a key={item} href="#" className="underline-offset-4 hover:underline">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="border-b border-[#dfe1e2] bg-[#f8f8f8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-[#9e937aff] md:text-6xl">
              Welcome to the Ridgeway Department of Justice
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3d4551]">
              The Ridgeway Department of Justice is the primary prosecutorial department for the State of Ridgeway, our goal is to to uphold the rule of law, protecting public safety, and ensuring equal justice for all. Through fair enforcement, ethical leadership, and unwavering integrity, the department works to preserve public trust, defend the constitution, and serve the people of Ridgeway with professionalism and accountability. 
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
            <a
           href="/directives"
           className="bg-9e937aff border border-[#ebe4d8] px-5 py-3 font-semibold text-[#9e937aff] hover:bg-[#ebe4d8]"
          >
           View Directives
          </a>
              <button className="bg-9e937aff border border-[#ebe4d8] px-5 py-3 font-semibold text-[#9e937aff] hover:bg-[#ebe4d8]">
                Explore Agencies
              </button>
            </div>
          </div>

          <div className="border border-[#dfe1e2] bg-white p-7 shadow-sm">
          <img
            src="/xolagnew.png"
            alt="Attorney General Portrait"
            className="float-right ml-2 mb-4 h-[300px] w-[425] object-cover border border-[#dfe1e2]"
            />

            <h3 className="font-serif text-3xl text-[#9e937aff]">Meet the Attorney General</h3>
            <p className="mt-3 text-[19px] leading- text-[#3d4551]">
              
              </p>
              <p className="mt-3 text-[19px] leading- text-[#3d4551]">
              Attorney General Xolaaz was sworn in as the 6th elected Attorney General of the State of Ridgeway on March 30th, 2026. He is a experienced prosecutor who has spent more than four years trying cases from fraud to first-degree murder across various ro-states. In efforts to combat growing gang violence and law enforcement misconduct, Xolaaz is proactively working to strengthen our laws, provide better resources for both residents and law enforcement officers and lower the rates of those victimized by crime.

            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-[#dfe1e2] pt-5 text-[#9e937aff]">
              <span className="ml-3.5 text-l font-semibold uppercase tracking-[0.12em]">
                Integrity • Accountability • Justice
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h3 className="font-serif text-4xl text-[#9e937aff]">Action Center</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actionCards.map(({ title, icon: Icon, href, external }) => (
          <a
  key={title}
  href={href}
  target={external ? "_blank" : undefined}
  rel={external ? "noopener noreferrer" : undefined}
  className="group block border border-[#ebe4d8] bg-white p-5 shadow-sm transition hover:border-[#9e937aff] hover:bg-[#f3efe8]"
>
  <div className="flex items-start gap-4">
    <div className="mt-1 rounded-full bg-[#ebe4d8] p-2 text-[#9e937aff] group-hover:bg-[#ebe4d8]">
      <Icon className="h-5 w-5" />
    </div>
    <div className="text-[17px] font-semibold leading-7 text-[#9e937a]">
      {title}
    </div>
  </div>
</a>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dfe1e2] bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="mb-8 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-[#9e937aff]" />
            <h3 className="font-serif text-4xl text-[#9e937aff]">Our Work</h3>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {workCards.map((card) => (
              <div key={card.title} className="border border-[#dfe1e2] bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-[#9e937aff]">{card.title}</h4>
                <p className="mt-3 leading-7 text-[#3d4551]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex items-center gap-3">
          <Newspaper className="h-6 w-6 text-[#9e937aff]" />
          <h3 className="font-serif text-4xl text-[#9e937aff]">News</h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="border border-[#dfe1e2] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9e937aff]">
                {item.type}
              </p>
              <h4 className="mt-3 font-serif text-2xl leading-tight text-[#9e937aff]">
                {item.title}
              </h4>
              <p className="mt-3 leading-7 text-[#3d4551]">{item.desc}</p>
              <p className="mt-5 text-sm text-[#9e937aff]">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dfe1e2] bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className="font-serif text-4xl text-[#9e937aff]">Statistics</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-[#dfe1e2] bg-white p-6 text-center shadow-sm">
                <div className="font-serif text-5xl text-[#9e937aff]">{stat.value}</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#9e937aff]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex items-center gap-3">
          <Siren className="h-6 w-6 text-[#B22222]" />
          <h3 id="most-wanted" className="font-serif text-4xl text-[#B22222]">
          Most Wanted
        </h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {wanted.map((person) => (
            <div key={person.name} className="overflow-hidden border border-[#dfe1e2] bg-white shadow-sm">
              <img
             src="/walter.webp"
             alt={person.name}
             className="h-90 w-full object-cover"
/>
              <div className="p-6">
                <h4 className="font-serif text-2xl text-black">{person.name}</h4>
                <p className="mt-3 leading-6 font-bold text-xl text-[#B22222]">{person.detail}</p>
                <p className="mt-3 leading-6 font-serif text-xl text-black">{person.description}</p>
                <button className="mt-5 border border-[#B22222] px-4 py-2 font-semibold text- hover:bg-[#F8ECEC]">
                  Submit a Tip
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#9e937a] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
          <div>
            <h4 className="font-serif text-2xl">Department of Justice</h4>
            <p className="mt-4 text-sm leading-7 text-white/85">
             text
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
              <li><a href="/report-crime" className="hover:underline">Directives</a></li>
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