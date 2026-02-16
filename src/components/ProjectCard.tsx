"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Github, Cpu, Layers, Target, Rocket, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectProps {
    project: {
        id: string;
        title: string;
        subtitle: string;
        problem: string;
        approach: string;
        architecture: string;
        deployment: string;
        impact: string;
        tech: string[];
        github: string;
        status?: string;
    };
}

export function ProjectCard({ project }: ProjectProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={cn(
                "group border border-border/50 rounded-xl bg-surface/30 backdrop-blur-sm transition-all duration-300",
                isOpen ? "ring-1 ring-accent/30 shadow-[0_0_30px_-10px_rgba(0,245,212,0.1)]" : "hover:border-accent/40 hover:bg-surface/50"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-accent/60 uppercase tracking-widest">{project.subtitle}</span>
                        {project.status && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 animate-pulse">
                                {project.status}
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-foreground/40 border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5 text-foreground/40 group-hover:text-accent" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-8 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/30">
                            <div className="space-y-6">
                                <section>
                                    <div className="flex items-center gap-2 text-accent mb-2">
                                        <Target className="w-4 h-4" />
                                        <h4 className="text-xs font-mono uppercase tracking-tighter">Problem</h4>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{project.problem}</p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 text-accent mb-2">
                                        <Cpu className="w-4 h-4" />
                                        <h4 className="text-xs font-mono uppercase tracking-tighter">Approach</h4>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{project.approach}</p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 text-accent mb-2">
                                        <Layers className="w-4 h-4" />
                                        <h4 className="text-xs font-mono uppercase tracking-tighter">Architecture</h4>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{project.architecture}</p>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <section>
                                    <div className="flex items-center gap-2 text-accent mb-2">
                                        <Rocket className="w-4 h-4" />
                                        <h4 className="text-xs font-mono uppercase tracking-tighter">Deployment</h4>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{project.deployment}</p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 text-accent mb-2">
                                        <BarChart3 className="w-4 h-4" />
                                        <h4 className="text-xs font-mono uppercase tracking-tighter">Impact</h4>
                                    </div>
                                    <p className="text-sm bg-accent/5 p-3 rounded border border-accent/10 text-accent/90 font-medium">
                                        {project.impact}
                                    </p>
                                </section>

                                <div className="pt-4 flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-2 rounded font-medium hover:bg-accent transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
