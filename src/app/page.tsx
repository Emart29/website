import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { TerminalWindow } from "@/components/TerminalWindow";
import { ProjectCard } from "@/components/ProjectCard";
import { TerminalTree } from "@/components/TerminalTree";
import { getMediumPosts } from "@/lib/rss";
import { PROJECTS, PHILOSOPHY, SKILL_LAYERS, THOUGHTS, OS_CONTRIBUTIONS, RECENT_WRITINGS } from "@/constants/data";
import { BookOpen, ExternalLink, FileText, GitBranch, Linkedin, Mail } from "lucide-react";

const TIER_LABELS: Record<string, string> = {
  "infrastructure": "ML Infrastructure",
  "applied-ai": "Applied AI",
  "data-science": "Data Science",
};

const TIERS = ["infrastructure", "applied-ai", "data-science"] as const;

export default async function Home() {
  const posts = await getMediumPosts("Emar7");

  return (
    <main className="relative z-10 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* Philosophy Section */}
        <Section title="$ cat engineering_philosophy.txt" id="philosophy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="space-y-10">
            {TIERS.map((tier) => {
              const tierProjects = PROJECTS.filter(p => p.tier === tier);
              return (
                <div key={tier} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">
                      // {TIER_LABELS[tier]}
                    </span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <div className="space-y-4">
                    {tierProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
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
          <div className="flex gap-6 p-6 border border-white/5 rounded-xl bg-surface/10 hover:border-accent/30 transition-all">
            <div className="flex-shrink-0 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-accent">
              <GitBranch className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <a
                  href={OS_CONTRIBUTIONS.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono font-bold text-white uppercase tracking-tighter hover:text-accent transition-colors"
                >
                  aden-hive/hive
                </a>
                <span className="text-xs font-mono text-foreground/40">{OS_CONTRIBUTIONS.stats}</span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">{OS_CONTRIBUTIONS.summary}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {OS_CONTRIBUTIONS.contributions.map((c, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-foreground/40 border border-white/10">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Writing Section */}
        <Section title="$ curl medium_feed" id="blog">
          {/* Pinned featured articles */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">// Recent Writing</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RECENT_WRITINGS.map((article, idx) => (
                <a
                  key={idx}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 border border-accent/20 rounded-lg bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">{article.publication}</span>
                    <FileText className="w-3 h-3 text-accent/40 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>

          {/* Live feed — deduplicated against pinned articles */}
          {(() => {
            const pinnedSlugs = new Set(
              RECENT_WRITINGS.map(w => { try { return new URL(w.link).pathname.split("/").pop() ?? ""; } catch { return ""; } }).filter(Boolean)
            );
            const filtered = posts.filter(p => { try { return !pinnedSlugs.has(new URL(p.link).pathname.split("/").pop() ?? ""); } catch { return true; } });
            return filtered.length > 0 ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">// More from Medium</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filtered.map((post, idx) => (
                    <a
                      key={idx}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-5 border border-accent/20 rounded-lg bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">{post.publication}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-foreground/30">{post.pubDate}</span>
                          <ExternalLink className="w-3 h-3 text-accent/40 group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.categories?.slice(0, 2).map((cat) => (
                          <span key={cat} className="text-[9px] font-mono text-accent/40 lowercase">#{cat.replace(/\s+/g, "")}</span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </>
            ) : null;
          })()}
        </Section>

        {/* Thoughts Section */}
        <Section title="$ ls thoughts/" id="thoughts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {THOUGHTS.map((thought, idx) => (
              <a
                key={idx}
                href={thought.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border-l-2 border-accent/20 bg-surface/5 hover:bg-surface/10 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3 text-accent/60">
                  <BookOpen className="w-4 h-4" />
                  <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors">{thought.title}</h3>
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed">{thought.content}</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="$ contact --info" id="contact" className="pb-32">
          <div className="text-center md:text-left space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Open to ML Engineer, AI Engineer, Data Scientist,{" "}
              <br className="hidden md:block" />
              and MLOps Engineer roles — remote worldwide.
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Emart29" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all font-mono text-sm">
                <GitBranch className="w-4 h-4" /> github.sh
              </a>
              <a href="https://www.linkedin.com/in/nwangumaemmanuel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all font-mono text-sm">
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
