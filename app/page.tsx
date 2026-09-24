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
        <p className="hero-kicker">Software engineer · Applied AI builder</p>
        <h1>I make intelligent systems <em>useful, inspectable, and real.</em></h1>
        <p className="hero-lede">I&apos;m Abdikafar Omar, a Duke computer science student building backend systems, automation, and applied AI products that people can understand and trust.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowRight size={17} /></a><a className="button secondary" href="/InternshipResume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a></div>
        <div className="hero-index"><a href="#work"><strong>02</strong><span>Built products</span></a><a href="#experience"><strong>02</strong><span>Technical internships</span></a><a href="#about"><strong>2027</strong><span>Duke graduate</span></a></div>
      </div>
      <aside className="hero-visual"><div className="portrait-frame"><Image src="/20240210_duke_life_headshots_020.jpg" alt="Abdikafar Omar" fill priority sizes="(max-width: 800px) 90vw, 420px" /></div><div className="floating-note note-one"><Braces size={18} /><span><strong>Engineering</strong>Backend · data · testing</span></div><div className="floating-note note-two"><Sparkles size={17} /> Applied AI</div></aside>
    </section>

    <section className="home-section home-work" id="work">
      <div className="page-shell section-frame">
        <header className="home-heading"><div><p className="eyebrow">Selected work</p><h2>Built to be used,<br />tested, and understood.</h2></div><p>Start with the result, then open a case study for the problem, architecture, decisions, and evidence.</p></header>
        <div className="project-grid">{projects.map(project => <ProjectPreview key={project.slug} project={project} />)}</div>
      </div>
    </section>

    <section className="home-section home-experience" id="experience">
      <div className="page-shell section-frame experience-frame">
        <header className="home-heading light-heading"><div><p className="eyebrow">Experience</p><h2>From unclear workflows<br />to reliable systems.</h2></div><p>I&apos;ve worked across insurance automation and higher-education software, building and validating products where accuracy matters.</p></header>
        <div className="home-experience-grid">{experiences.map((item, index) => <article key={item.role}><span>0{index + 1} · {item.period}</span><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.intro}</p><Link href="/experience">See experience details <ArrowUpRight size={16} /></Link></article>)}</div>
      </div>
    </section>

    <section className="home-section home-about" id="about">
      <div className="page-shell section-frame about-frame">
        <div className="about-home-copy"><p className="eyebrow">About</p><h2>I build at the intersection of software engineering and applied AI.</h2><p>I&apos;m pursuing a B.S. in Computer Science at Duke University with a concentration in Artificial Intelligence and Machine Learning. I enjoy turning ambiguous technical problems into products that can be tested, explained, and trusted.</p><div className="about-facts"><span><MapPin size={16} />Durham, NC</span><span>Duke University · B.S. Computer Science · AI &amp; Machine Learning</span></div><Link className="text-link" href="/about">Read more about me <ArrowUpRight size={17} /></Link></div>
        <div className="skills-home"><p>Technical toolkit</p><div className="skill-grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
      </div>
    </section>

    <section className="home-section home-contact" id="contact">
      <div className="contact-panel"><div><p className="eyebrow">Available May 2027</p><h2>Let&apos;s build something useful.</h2><p>I&apos;m pursuing full-time software engineering and applied AI roles where thoughtful systems meet real users.</p></div><a href="mailto:abdikafaromar3@gmail.com"><Mail size={22} /><span><strong>Start a conversation</strong><small>abdikafaromar3@gmail.com</small></span><ArrowUpRight size={21} /></a></div>
    </section>
  </main>;
}
