"use client";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-b from-gray-900/70 to-black/90 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-400/40 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm glow">
      <h3 className="text-2xl font-semibold mb-3 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-800/80 text-sm rounded-full border border-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition"
      >
        View Project →
      </a>
    </div>
  );
}
