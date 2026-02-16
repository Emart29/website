import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { TerminalWindow } from "@/components/TerminalWindow";
import { ProjectCard } from "@/components/ProjectCard";
import { TerminalTree } from "@/components/TerminalTree";
import { getMediumPosts } from "@/lib/rss";
import { PROJECTS, PHILOSOPHY, SKILL_LAYERS, THOUGHTS, OS_CONTRIBUTIONS } from "@/constants/data";
import { BookOpen, ExternalLink, GitBranch, Linkedin, Mail } from "lucide-react";

export default async function Home() {
  const posts = await getMediumPosts("Emar7");

  return (
    <main className="relative z-10 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* Philosophy Section */}
        <Section title="$ cat engineering_philosophy.txt" id="philosophy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item, idx) => (
              <div key={idx} className="space-y-4 p-6 border border-white/5 rounded-xl bg-surface/20 hover:bg-surface/40 transition-colors group">
                <div className="text-accent/60 font-mono text-xs uppercase tracking-widest">{`0${idx + 1}_`}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed italic">"{item.content}"</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="$ ls projects/" id="projects">
          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="$ tree ai_system_stack/" subtitle="Skills organized by system architecture layer." id="skills">
          <TerminalWindow title="tree">
            <TerminalTree layers={SKILL_LAYERS} />
          </TerminalWindow>
        </Section>

        {/* OS & Collaboration */}
        <Section title="$ git log --contributions" id="open-source">
          <div className="space-y-6">
            {OS_CONTRIBUTIONS.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 border border-white/5 rounded-xl bg-surface/10 hover:border-accent/30 transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-accent">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-mono font-bold text-white uppercase tracking-tighter">{item.project}</h3>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                  <p className="text-xs text-accent/80 mt-2 font-mono">Position: {item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Medium Posts */}
        <Section title="$ curl medium_feed" id="blog">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.length > 0 ? (
              posts.map((post, idx) => (
                <a
                  key={idx}
                  href={post.link}
                  target="_blank"
                  className="group block p-5 border border-white/5 rounded-lg bg-surface/10 hover:bg-surface/30 hover:border-accent/20 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-foreground/30">{post.pubDate}</span>
                    <ExternalLink className="w-3 h-3 text-foreground/20 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.categories?.slice(0, 2).map((cat) => (
                      <span key={cat} className="text-[9px] font-mono text-accent/40 lowercase">#{cat.replace(/\s+/g, '')}</span>
                    ))}
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-full py-10 text-center border border-dashed border-white/10 rounded font-mono text-foreground/20 italic">
                No recent signals detected... Check back later or visit Medium.
              </div>
            )}
          </div>
        </Section>

        {/* Thoughts Section */}
        <Section title="$ ls thoughts/" id="thoughts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {THOUGHTS.map((thought, idx) => (
              <div key={idx} className="p-6 border-l-2 border-accent/20 bg-surface/5 hover:bg-surface/10 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-accent/60">
                  <BookOpen className="w-4 h-4" />
                  <h3 className="text-base font-bold text-white">{thought.title}</h3>
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed">{thought.content}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="$ contact --info" id="contact" className="pb-32">
          <div className="text-center md:text-left space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Open to Machine Learning Engineering <br className="hidden md:block" /> and Applied Data Science roles.
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Emart29" className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all font-mono text-sm">
                <GitBranch className="w-4 h-4" /> github.sh
              </a>
              <a href="https://www.linkedin.com/in/nwangumaemmanuel" className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all font-mono text-sm">
                <Linkedin className="w-4 h-4 text-blue-400" /> linkedin.log
              </a>
              <a href="mailto:nwangumaemmanuel29@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg hover:brightness-110 transition-all font-bold text-sm">
                <Mail className="w-4 h-4" /> send_mail.exe
              </a>
            </div>

            <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-foreground/20">
              <p>© {new Date().getFullYear()} Nwanguma Emmanuel. Built with precision.</p>
              <div className="flex gap-4">
                <span>LATENCY: 14ms</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </footer>
          </div>
        </Section>
      </div>
    </main>
  );
}
