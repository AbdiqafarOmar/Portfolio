import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
type Project = (typeof projects)[number];
export function ProjectPreview({ project }: { project: Project }) { return <article className={`project-preview project-${project.number}`}><div className="preview-topline"><span>{project.number}</span><span>{project.eyebrow}</span></div><h2>{project.title}</h2><p>{project.summary}</p><div className="preview-metrics">{project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link className="text-link" href={`/work/${project.slug}`}>Read the case study <ArrowUpRight size={17} /></Link></article>; }
