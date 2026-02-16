"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileCode, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillLayer {
    name: string;
    skills: string[];
}

export function TerminalTree({ layers }: { layers: SkillLayer[] }) {
    const [openLayers, setOpenLayers] = useState<string[]>(layers.map(l => l.name));

    const toggleLayer = (name: string) => {
        setOpenLayers(prev =>
            prev.includes(name)
                ? prev.filter(l => l !== name)
                : [...prev, name]
        );
    };

    return (
        <div className="font-mono text-sm space-y-2">
            <div className="flex items-center gap-2 text-foreground/40 mb-4 select-none">
                <FolderOpen className="w-4 h-4" />
                <span>ai_system_stack/</span>
            </div>

            {layers.map((layer, idx) => {
                const isOpen = openLayers.includes(layer.name);
                const isLast = idx === layers.length - 1;

                return (
                    <div key={layer.name} className="relative">
                        {/* Tree branch line */}
                        {!isLast && (
                            <div className="absolute left-[11px] top-6 bottom-0 w-px bg-white/10" />
                        )}

                        <button
                            onClick={() => toggleLayer(layer.name)}
                            className="flex items-center gap-2 py-1 hover:text-accent group w-full text-left"
                        >
                            <div className="flex items-center">
                                <span className="text-white/20 select-none">
                                    {isLast ? "└──" : "├──"}
                                </span>
                                <ChevronRight className={cn(
                                    "w-3 h-3 transition-transform duration-200",
                                    isOpen ? "rotate-90 text-accent" : "text-foreground/40"
                                )} />
                            </div>
                            <Folder className={cn(
                                "w-4 h-4",
                                isOpen ? "text-accent fill-accent/10" : "text-foreground/60"
                            )} />
                            <span className={cn(
                                "font-mono",
                                isOpen ? "text-accent" : "text-foreground"
                            )}>
                                {layer.name}
                            </span>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden ml-[26px]"
                                >
                                    <div className="pl-6 space-y-1 py-1 border-l border-white/10">
                                        {layer.skills.map((skill, sIdx) => (
                                            <div key={skill} className="flex items-center gap-2 py-0.5 group/skill">
                                                <span className="text-white/20 select-none">
                                                    {sIdx === layer.skills.length - 1 ? "└──" : "├──"}
                                                </span>
                                                <FileCode className="w-3.5 h-3.5 text-foreground/30 group-hover/skill:text-accent/60" />
                                                <span className="text-foreground/60 group-hover/skill:text-foreground transition-colors">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
