'use client';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  SunMedium,
  Twitter
} from "lucide-react";




const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
  
export default function HomePage() {
  return (
    <div 
    className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('images/Baymax.jpeg')` }}
  >
  
      <header className="sticky top-0 z-20 border-b border-neutral-800/60 bg-black/80 backdrop-blur">
        <div className="section-container flex items-center justify-between py-4">
          {/* <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-sky-400/20 border border-sky-400/70 shadow-[0_0_40px_rgba(56,189,248,0.55)]" />
            <span className="font-semibold tracking-tight text-neutral-50">
              Kshitij.dev
            </span>
          </div> */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-neutral-300 hover:text-amber-400 transition-colors"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="section-container py-10 space-y-8">
        <section
          id="hero"
          className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            <div className="relative flex-shrink-0 h-28 w-28 md:h-32 md:w-32 rounded-full border border-neutral-700 bg-neutral-800 overflow-hidden">
              {/* Replace this with a real profile image */}
              <div className="h-full w-full flex items-center justify-center">
  {/* <img 
    src="/images/memoji.png" 
    alt="Memoji"
    className="w-40 h-40 rounded-full"
  /> */} 
  K
</div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-semibold text-neutral-50">
                      Kshitij Chavan
                    </h1>
                   
                  </div>
                  <p className="mt-1 text-sm text-neutral-400">
                  Software Developer | Claude Code Certified 
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="mailto:Chavankshitij124@gmail.com"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  {/* <button
                    type="button"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-400 transition-colors"
                    aria-label="Toggle theme"
                  >
                    <SunMedium className="h-4 w-4" />
                  </button> */}
                  <a
                    href="/Users/kshitijmaheshchavan/Desktop/PortfolioV2/portfolio-app/KshitijChavan_Resume_WTTJ(1).pdf"
                    download="/KshitijChavan_Resume_WTTJ(1).pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-50 text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors"
                  >
                    <span>Resume</span>
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-neutral-300">
                I&apos;m a full stack developer with experience in building
                production-ready back-end services and secure integrations. I
                specialize in designing reliable authentication flows,
                real-time logging systems, and scalable web applications.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-neutral-800 mt-2">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Connect
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.linkedin.com/in/kshitij-chavan-480494364/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-700 transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>/in/kshitijchavan</span>
                  </a>
                  <a
                    href="https://x.com/KshitijMah60876"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-700 transition-colors"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    <span>@KshitijMah60876</span>
                  </a>
                  <a
                    href="https://github.com/KshitijChavan-Stack"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-700 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>/kshitij-chavan-stack</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-50">
            Skills
          </h2>
          <p className="text-sm text-neutral-400 mb-4">
            A quick overview of the technologies I work with across the stack.
          </p>

          <div className="space-y-4">
            
            <SkillRow
              label="Frontend"
              skills={["HTML", "CSS", "JavaScript", "React"]}
            />
            <SkillRow
              label="Backend"
              skills={["Python (FastAPI)", "Next.js", "Node.js", "Express.js"]}
            />
            <SkillRow
              label="Databases"
              skills={["MongoDB", "Redis", "PostgreSQL"]}
            />
            <SkillRow
              label="Tools & DevOps"
              skills={["Git", "Webflow", "JIRA", "Postman", "Docker"]}
            />
          </div>
        </section>

        <section
          id="about"
          className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-50">
            About
          </h2>
          <p className="text-sm text-neutral-300 mb-3">
            I&apos;m currently pursuing a Master&apos;s in Computer Application
            while actively building production-grade back-end services and
            integration platforms.
          </p>
          <p className="text-sm text-neutral-300 mb-3">
            My recent work includes designing an OAuth 2.0 based HubSpot
            integration platform, a hardened authentication &amp; authorization
            microservice, and a real-time webhook logging dashboard. I focus on
            robust architecture, security, and performance.
          </p>
          <p className="text-sm text-neutral-300">
            I enjoy working across the stack with tools like Node.js, Express,
            Next.js, FastAPI, MongoDB, Redis, and PostgreSQL, and I&apos;m
            always iterating on clean, maintainable code.
          </p>
        </section>

        <section
          id="projects"
          className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-50">
            Projects
          </h2>
          <div className="space-y-4">
            <ProjectCard
              title="HubSpot Integration Platform"
              subtitle="OAuth 2.0 based SaaS integration system · Dec 2025"
              bullets={[
                "Architected and deployed a secure OAuth 2.0 integration platform handling 100+ daily authentication flows with zero security vulnerabilities.",
                "Optimized data synchronization using API batching, fetching 12+ HubSpot object types in under 2 seconds.",
                "Designed reusable React components aligned with existing patterns, achieving 95% code consistency.",
                "Implemented Redis-backed state management, popup lifecycle handling, and secure one-time credential exchange."
              ]}
              tech={[
                "OAuth 2.0",
                "React",
                "Node.js",
                "Redis",
                "REST APIs"
              ]}
            />

            <ProjectCard
              title="AuthFlow"
              subtitle="Production-ready Authentication & Authorization microservice · Nov 2025 – Current"
              bullets={[
                "Developed authentication microservice with JWT-based auth, email verification, and password reset workflows.",
                "Implemented token blacklisting with Redis and refresh token rotation for instant logout and session security.",
                "Built layered architecture with services, repositories, and controllers for maintainability and testing.",
                "Integrated security features including bcrypt hashing, rate limiting, account lockout, and Joi validation."
              ]}
              tech={[
                "Node.js",
                "Express",
                "MongoDB",
                "Redis",
                "JWT",
                "Joi"
              ]}
            />

            <ProjectCard
              title="Webhook Logger"
              subtitle="Real-time webhook monitoring & logging system · Oct 2025"
              bullets={[
                "Built real-time webhook monitoring for GitHub, Stripe, and Shopify with HMAC signature verification.",
                "Developed live dashboard for payload/header inspection with JSON-based persistence for audits.",
                "Deployed production-ready RESTful API with secure authentication and logging."
              ]}
              tech={[
                "Node.js",
                "Express",
                "Webhooks",
                "HMAC",
                "Render"
              ]}
            />
          </div>
        </section>

        <section
          id="education"
          className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-50">
            Education
          </h2>
          <div className="space-y-3">
            <EducationItem
              institution="INSTITUTE OF MANAGEMENT STUDIES (IMS)"
              degree="Masters in Computer Application"
              location="Maharashtra, India"
              duration="Expected May 2026"
              extra="CGPA: N/A"
            />
            <EducationItem
              institution="C. D. JAIN COLLEGE OF COMMERCE"
              degree="Bachelor of Computer Application"
              location="Maharashtra, India"
              duration="June 2024"
              extra="CGPA: 7.9/10 · 6th Sem SGPA: 8.87/10"
            />
          </div>
        </section>

        <section
          id="contact"
          className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center text-neutral-50">
            Get in Touch
          </h2>
          <p className="text-neutral-300 text-center mb-6 text-sm md:text-base">
            Want to talk about back-end systems, integrations, or potential
            opportunities? Feel free to reach out and I&apos;ll get back to you
            as soon as possible.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:Chavankshitij124@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-50 text-neutral-900 px-6 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Chavankshitij124@gmail.com</span>
            </a>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/kshitij-chavan-480494364/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/KshitijChavan-Stack"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

type SkillRowProps = {
  label: string;
  skills: string[];
};

function SkillRow({ label, skills }: SkillRowProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <div className="w-full md:w-40">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          {label}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-200 border border-neutral-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
};

function ProjectCard({ title, subtitle, bullets, tech }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold text-neutral-50">
        {title}
      </h3>
      <p className="mt-1 text-xs md:text-sm text-neutral-400">{subtitle}</p>
      <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-neutral-300 list-disc list-inside">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-200 border border-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

type EducationItemProps = {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  extra?: string;
};

function EducationItem({
  institution,
  degree,
  location,
  duration,
  extra
}: EducationItemProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
      <h3 className="text-sm md:text-base font-semibold text-neutral-50">
        {institution}
      </h3>
      <p className="text-xs md:text-sm text-neutral-300">{degree}</p>
      <p className="text-xs text-neutral-500 mt-1">
        {location} • {duration}
      </p>
      {extra ? (
        <p className="text-xs text-neutral-400 mt-1">{extra}</p>
      ) : null}
    </div>
  );
}

