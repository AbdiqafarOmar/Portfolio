"use client";

import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


function ExperienceCard({ exp }: { exp: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-[#0d1117] border border-[#1c1f26] rounded-2xl p-6 shadow-md hover:shadow-blue-400/30 transition-all duration-300 cursor-pointer animate-fadeIn"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
          <p className="text-blue-400">{exp.company}</p>
          <p className="text-gray-400 italic">{exp.location}</p>
        </div>
        <div className="text-gray-400 text-sm flex items-center gap-2">
          <span>{exp.duration}</span>
          {open ? (
            <ChevronUp size={18} className="text-blue-400" />
          ) : (
            <ChevronDown size={18} className="text-blue-400" />
          )}
        </div>
      </div>

      {open && (
        <ul className="list-disc list-inside text-gray-300 text-sm mt-4 space-y-1 animate-fadeIn">
          {exp.description.map((line: string, i: number) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Home() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Duke Office of Information Technology (Code+ Program)",
      location: "Durham, NC",
      duration: "May 2024 – Aug 2024",
      description: [
        "Developed a full-stack research discovery web application connecting 8,000+ faculty to funding and collaboration opportunities",
        "Optimized data retrieval using LangChain and ChromaDB, improving match precision by 32% and reducing query latency by 40%.",
        "Built responsive React UI and accessibility features that increased daily active users by 18%.",
        "Collaborated in Agile sprints with engineers and researchers, contributing 4,000+ lines of production-ready code.",
      ],
    },
    {
      role: "Superintendent Intern",
      company: "KIPP Columbus",
      location: "Columbus, OH",
      duration: "Jan 2023 – May 2023",
      description: [
        "Streamlined district operations and academic enrichment programs impacting 1,200+ students across 4 campuses.",
        "Designed data-driven surveys that improved student engagement and attendance metrics by 15%.",
        "Facilitated communication between administrators, reducing turnaround time for inter-departmental requests by 25%.",
      ],
    },
    {
      role: "Game Master",
      company: "Escape Artists",
      location: "Columbus, OH",
      duration: "Jun 2022 – Nov 2022",
      description: [
        "Managed interactive escape-room challenges, ensuring safety and high guest satisfaction.",
        "Designed engaging game flow experiences under tight operational schedules.",
        "Collected and analyzed guest feedback to improve engagement and storytelling.",
      ],
    },
  ];

  const projects = [
    {
      name: "EcoMind",
      description:
        "AI-powered sustainability dashboard that predicts environmental trends and recommends eco-friendly actions using real-world data.",
      tech: "Python · Streamlit · OpenAI API · Plotly",
      link: "https://github.com/AbdiqafarOmar/EcoMind",
    },
    {
      name: "Black Box Auditor",
      description:
        "Transparency-focused AI auditing tool that visualizes bias and fairness in machine learning models, offering interpretability insights.",
      tech: "FastAPI · Python · Plotly · Hugging Face",
      link: "https://github.com/AbdiqafarOmar/BlackBox-Auditor",
    },
  ];

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="min-h-screen text-white bg-black relative overflow-hidden">
      {/* 🌌 PARTICLES */}
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: { color: "#000" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 180, density: { enable: true, area: 900 } },
      color: { value: "#3b82f6" },
      shape: { type: "circle" },
      opacity: {
        value: 0.9,
        random: true,
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.5,
          sync: false,
        },
      },
      links: {
        enable: true,
        color: "#3b82f6",
        distance: 130,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  }}
  className="absolute inset-0 -z-10"
/>


      {/* 🧭 NAVBAR */}
     {/* 🧭 NAVBAR */}
<nav className="fixed top-0 left-0 w-full flex justify-center gap-12 py-5 bg-black/30 backdrop-blur-md text-gray-300 z-50 text-lg font-medium tracking-wide animate-fadeIn">
  <a href="#home" className="hover:text-blue-400 transition">
    Home
  </a>
  <a href="#about" className="hover:text-blue-400 transition">
    About
  </a>
  <a href="#experience" className="hover:text-blue-400 transition">
    Experience
  </a>
  <a href="#projects" className="hover:text-blue-400 transition">
    Projects
  </a>
  <a
    href="/InternshipResume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
  >
    View Resume
  </a>
</nav>



      {/* 👋 HERO SECTION */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen animate-fadeIn"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">
          Hi, I’m Abdikafar Omar
        </h1>
        <TypeAnimation
          sequence={[
            "A passionate problem solver",
            1500,
            "An aspiring software engineer",
            1500,
            "A creative thinker",
            1500,
          ]}
          wrapper="p"
          repeat={Infinity}
          className="text-lg md:text-xl text-gray-300"
        />
        <div className="flex gap-6 mt-6">
  <a
    href="https://www.linkedin.com/in/abdikafar-omar-84a1a829a/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
  >
    <FaLinkedin size={30} />
  </a>
  <a
    href="https://github.com/AbdiqafarOmar"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
  >
    <FaGithub size={30} />
  </a>
</div>

      </section>

      {/* 🧠 ABOUT SECTION */}
      <section
        id="about"
        className="px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-16 animate-fadeIn"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-8">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m <span className="font-semibold text-white">Abdikafar Omar</span>,
            a Duke University student from Columbus, Ohio, pursuing a{" "}
            <span className="font-semibold text-white">
              B.S. in Computer Science
            </span>{" "}
            with a concentration in{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence and Machine Learning
            </span>{" "}
            (Class of 2027). My experience spans software development, AI
            research, and educational technology shaped through my work as a{" "}
            <span className="font-semibold text-white">
              Code+ Scholar, Superintendent Intern,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">Game Master.</span>
          </p>
          <p className="text-gray-400 mb-4">
            I’m passionate about building human-centered, data-driven projects
            that connect creativity, innovation, and real-world impact.
          </p>
          <a
  href="/InternshipResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 text-lg font-semibold text-white bg-blue-600/80 hover:bg-blue-500 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition duration-500"
>
  View Resume
</a>

        </div>

        <div className="flex justify-center w-full md:w-[45%] animate-slideIn">
          <img
            src="/20240210_duke_life_headshots_020.jpg"
            alt="Abdikafar Omar"
            className="w-[280px] h-[350px] object-cover rounded-2xl shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 transition-all duration-700 ease-in-out"
          />
        </div>
      </section>

      {/* 💼 EXPERIENCE SECTION */}
      <section
        id="experience"
        className="relative px-6 md:px-20 py-24 animate-fadeIn"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-400">Experiences</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>
      </section>

      {/* 🧩 PROJECTS SECTION */}
      <section
        id="projects"
        className="relative px-6 md:px-20 py-24 animate-fadeIn"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-[#0d1117] border border-[#1c1f26] rounded-2xl p-6 shadow-md hover:shadow-blue-400/30 transition-all duration-300 animate-fadeIn"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {proj.name}
              </h3>
              <p className="text-gray-300 mb-3">{proj.description}</p>
              <p className="text-blue-400 text-sm mb-3">{proj.tech}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 🦋 FOOTER */}
      <footer className="text-center text-gray-400 text-sm py-8 border-t border-gray-800 animate-fadeIn">
        © {new Date().getFullYear()} Abdikafar Omar — Designed & Built with
        Next.js + Tailwind
      </footer>
    </main>
  );
}
