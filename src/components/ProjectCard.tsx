"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Github, ExternalLink, FileText, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/constants/data";

interface ProjectProps {
    project: Project;
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
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
                <div className="space-y-2">
                    <span className="text-xs font-mono text-accent/60 uppercase tracking-widest">{project.label}</span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-foreground/40 border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors flex-shrink-0 mt-1">
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
                        <div className="px-6 pb-8 pt-4 border-t border-border/30 space-y-6">
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded font-medium text-sm hover:bg-accent transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Source Code
                                </a>
                                {project.article && (
                                    <a
                                        href={project.article}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-accent/30 text-accent rounded font-medium text-sm hover:bg-accent/10 transition-colors"
                                    >
                                        <FileText className="w-4 h-4" />
                                        Read Article
                                    </a>
                                )}
                                {project.docs && (
                                    <a
                                        href={project.docs}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-white/10 text-foreground/60 rounded font-medium text-sm hover:bg-white/5 hover:text-white transition-colors"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Docs
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-white/10 text-foreground/60 rounded font-medium text-sm hover:bg-white/5 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
