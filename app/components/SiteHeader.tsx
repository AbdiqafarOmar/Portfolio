import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Abdikafar Omar, home">AO<span>.</span></Link>
    <nav aria-label="Main navigation">
      <Link href="/#work">Work</Link>
      <Link href="/#experience">Experience</Link>
      <Link href="/#about">About</Link>
    </nav>
    <a className="header-contact" href="mailto:abdikafar.omar@duke.edu">Let&apos;s talk <ArrowUpRight size={16} /></a>
  </header>;
}
