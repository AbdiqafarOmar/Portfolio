import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Braces, Mail, MapPin, Sparkles } from "lucide-react";
import { ProjectPreview } from "./components/ProjectPreview";
import { experiences, projects, skills } from "./data";

export default function Home() {
  return <main className="home-page">
    <section className="home-hero page-shell home-section" id="top">
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> Graduating May 2027 · Open to full-time roles</div>
        <p className="hero-kicker">Computer Science at Duke University</p>
        <h1>I build software for <em>data, automation, and applied AI.</em></h1>
        <p className="hero-lede">I&apos;m Abdikafar Omar, a computer science student with experience in backend development, AI evaluation, document automation, and semantic search.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowRight size={17} /></a><a className="button secondary" href="/InternshipResume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a></div>
        <div className="hero-index"><a href="#work"><strong>02</strong><span>Built products</span></a><a href="#experience"><strong>02</strong><span>Technical internships</span></a><a href="#about"><strong>2027</strong><span>Duke graduate</span></a></div>
      </div>
      <aside className="hero-visual"><div className="portrait-frame"><Image src="/20240210_duke_life_headshots_020.jpg" alt="Abdikafar Omar" fill priority sizes="(max-width: 800px) 90vw, 420px" /></div><div className="floating-note note-one"><Braces size={18} /><span><strong>Engineering</strong>Backend · data · testing</span></div><div className="floating-note note-two"><Sparkles size={17} /> Applied AI</div></aside>
    </section>

    <section className="home-section home-work" id="work">
      <div className="page-shell section-frame">
        <header className="home-heading"><div><p className="eyebrow">Selected work</p><h2>Software projects<br />and case studies.</h2></div><p>Each case study explains the problem, implementation, technical decisions, testing, and final result.</p></header>
        <div className="project-grid">{projects.map(project => <ProjectPreview key={project.slug} project={project} />)}</div>
      </div>
    </section>

    <section className="home-section home-experience" id="experience">
      <div className="page-shell section-frame experience-frame">
        <header className="home-heading light-heading"><div><p className="eyebrow">Experience</p><h2>Software engineering and<br />AI automation.</h2></div><p>My internship experience includes insurance document automation, semantic search, backend development, and workflow testing.</p></header>
        <div className="home-experience-grid">{experiences.map((item, index) => <article key={item.role}><span>0{index + 1} · {item.period}</span><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.intro}</p><Link href="/experience">See experience details <ArrowUpRight size={16} /></Link></article>)}</div>
      </div>
    </section>

    <section className="home-section home-about" id="about">
      <div className="page-shell section-frame about-frame">
        <div className="about-home-copy"><p className="eyebrow">About</p><h2>Computer science student focused on software engineering and applied AI.</h2><p>I&apos;m pursuing a B.S. in Computer Science at Duke University with a concentration in Artificial Intelligence and Machine Learning. I&apos;m interested in backend systems, evaluation, automation, and practical applications of machine learning.</p><div className="about-facts"><span><MapPin size={16} />Durham, NC</span><span>Duke University · B.S. Computer Science · AI &amp; Machine Learning</span></div><Link className="text-link" href="/about">More about my background <ArrowUpRight size={17} /></Link></div>
        <div className="skills-home"><p>Technical toolkit</p><div className="skill-grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
      </div>
    </section>

    <section className="home-section home-contact" id="contact">
      <div className="contact-panel"><div><p className="eyebrow">Available May 2027</p><h2>Open to full-time opportunities.</h2><p>I&apos;m seeking software engineering and applied AI roles beginning after graduation in May 2027.</p></div><a href="mailto:abdikafaromar3@gmail.com"><Mail size={22} /><span><strong>Contact me</strong><small>abdikafaromar3@gmail.com</small></span><ArrowUpRight size={21} /></a></div>
    </section>
  </main>;
}
