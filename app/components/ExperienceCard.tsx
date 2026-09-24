"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Experience = {
  logo: React.ReactNode;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
};

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-[#0d1117] border border-[#1c1f26] rounded-2xl p-6 shadow-md hover:shadow-blue-400/30 transition-all duration-300 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{exp.logo}</div>
          <div>
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
            <p className="text-gray-400 text-sm italic">{exp.location}</p>
          </div>
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
