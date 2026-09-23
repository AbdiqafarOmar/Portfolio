"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    role: "AI Automation Intern",
    company: "Great American Insurance Group",
    period: "May 2026 — Aug 2026",
    location: "Cincinnati, OH",
    summary:
      "Evaluated AI-assisted document pipelines for aviation and crop insurance, turning ambiguous business language into testable extraction behavior.",
    highlights: [
      "Built and validated field-level ground-truth datasets used to evaluate document extraction.",
      "Refined prompts for edge cases such as distinguishing passenger counts from crew-related values.",
      "Tested a UiPath email-ingestion workflow from shared-inbox routing through Orchestrator processing.",
    ],
    tags: ["AI evaluation", "Prompt engineering", "UiPath"],
  },
  {
    role: "Software Engineering Intern",
    company: "Duke Office of Information Technology · Code+",
    period: "May 2024 — Aug 2024",
    location: "Durham, NC",
    summary:
      "Built the core backend for a research-discovery product that matches Duke faculty with funding and collaboration opportunities.",
    highlights: [
      "Created ingestion and semantic-retrieval workflows with Python, LangChain, and ChromaDB.",
      "Represented faculty profiles and opportunity records as embeddings for contextual similarity search.",
      "Continued improving and maintaining the platform after its initial summer development cycle.",
    ],
    tags: ["Python", "LangChain", "ChromaDB"],
  },
];

const projects = [
  {
    index: "01",
    title: "Black Box Auditor",
    eyebrow: "AI evaluation platform",
    description:
      "A reproducible system for testing how model behavior changes when the same underlying request is phrased in different ways.",
    details: [
      ["7", "controlled prompt mutations"],
      ["12", "automated tests"],
      ["3", "export formats"],
    ],
    contribution:
      "Designed the evaluation engine, transparent safety metrics, TF-IDF/K-means response clustering, evidence views, report exports, and CI workflow.",
    stack: ["Python", "Streamlit", "scikit-learn", "Plotly", "GitHub Actions"],
    github: "https://github.com/AbdiqafarOmar/BlackBox-Auditor",
  },
  {
    index: "02",
    title: "EcoMind",
    eyebrow: "AI infrastructure scenario analysis",
    description:
      "A deployed decision-support tool for exploring how model size, compute efficiency, data-center overhead, and grid intensity shape estimated AI-training energy and carbon.",
    details: [
      ["500", "models per batch"],
      ["3", "scenario comparisons"],
      ["14", "automated tests"],
    ],
    contribution:
      "Built the estimation pipeline, batch analysis, sensitivity comparisons, interactive visualizations, report exports, input validation, and CI workflow.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "GitHub Actions"],
    live: "https://ecomind-carbon.streamlit.app",
    github: "https://github.com/AbdiqafarOmar/EcoMind",
  },
];

const skills = [
  "Python", "Java", "JavaScript", "React", "Next.js", "SQL",
  "LangChain", "ChromaDB", "Streamlit", "Git", "Docker", "Linux",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abdikafar Omar, home">
          AO<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:abdikafaromar3@gmail.com">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Graduating May 2027 · Open to new-grad roles
          </div>
          <h1>
            I build software that makes <em>intelligent systems</em> useful.
          </h1>
          <p className="hero-lede">
            I&apos;m Abdikafar Omar, a Duke computer science student working across
            backend engineering, automation, and applied AI. I turn complex data
            and model behavior into products people can inspect, trust, and use.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore selected work <ArrowDownRight size={17} />
            </a>
            <a className="button secondary" href="/InternshipResume.pdf" target="_blank" rel="noreferrer">
              View résumé <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Profile summary">
          <div className="portrait-frame">
            <Image
              src="/20240210_duke_life_headshots_020.jpg"
              alt="Portrait of Abdikafar Omar"
              fill
              priority
              sizes="(max-width: 800px) 80vw, 360px"
            />
          </div>
          <div className="proof-card proof-card-main">
            <Braces size={20} />
            <div>
              <strong>Software engineering</strong>
              <span>Backend systems · data pipelines · testing</span>
            </div>
          </div>
          <div className="proof-card proof-card-small">
            <Sparkles size={18} /> Applied AI
          </div>
        </aside>
      </section>

      <section className="signal-bar" aria-label="Core capabilities">
        <span>Backend engineering</span>
        <span>Semantic retrieval</span>
        <span>AI evaluation</span>
        <span>Workflow automation</span>
      </section>

      <section className="section-shell portfolio-section" id="work">
        <div className="section-intro">
          <p className="section-kicker">Selected work</p>
          <h2>Built to be used, tested, and understood.</h2>
          <p>Two end-to-end products that pair technical depth with clear, inspectable outcomes.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-heading">
                <span className="project-number">{project.index}</span>
                <div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                {project.details.map(([number, label]) => (
                  <div key={label}>
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="project-contribution">
                <span>What I built</span>
                {project.contribution}
              </p>
              <div className="tag-list">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Open live product <ArrowUpRight size={16} />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> View source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell experience-inner">
          <div className="section-intro sticky-intro">
            <p className="section-kicker">Experience</p>
            <h2>Engineering across products, data, and automation.</h2>
            <p>
              I&apos;ve contributed to software in higher education and insurance,
              from semantic retrieval to document-processing workflows.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.role}>
                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span><MapPin size={14} /> {experience.location}</span>
                </div>
                <h3>{experience.role}</h3>
                <p className="company">{experience.company}</p>
                <p className="experience-summary">{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="tag-list compact">
                  {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="about-copy">
          <p className="section-kicker">About</p>
          <h2>Curious about the system behind the screen.</h2>
          <p>
            I&apos;m pursuing a B.A. in Computer Science at Duke University. My work
            is grounded in a simple question: how do we make sophisticated
            technology understandable and dependable for the people using it?
          </p>
          <p>
            That question has taken me from building retrieval systems for Duke
            researchers to evaluating insurance-document extraction and creating
            independent tools for AI auditing and infrastructure analysis.
          </p>
        </div>
        <div className="skills-panel">
          <p>Tools I work with</p>
          <div className="skills-grid">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-copy">
          <p className="section-kicker">Currently</p>
          <h2>Looking for a team solving hard, useful problems.</h2>
          <p>
            I&apos;m recruiting for May 2027 software engineering and applied AI
            roles. If the work involves thoughtful systems, reliable products,
            and real users, I&apos;d like to hear about it.
          </p>
        </div>
        <a className="contact-email" href="mailto:abdikafaromar3@gmail.com">
          <Mail size={22} />
          <span>
            Start a conversation
            <small>abdikafaromar3@gmail.com</small>
          </span>
          <ArrowUpRight size={22} />
        </a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Abdikafar Omar</span>
        <div>
          <a href="https://github.com/AbdiqafarOmar" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/abdikafar-omar-84a1a829a/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
