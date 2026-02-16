"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypingText } from "./TypingText";
import { HERO_TITLES } from "@/constants/data";

export function Hero() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-start justify-center pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] md:text-xs font-mono mb-8 uppercase tracking-[0.2em] glow-border"
            >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Data Scientist
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                    Nwanguma Emmanuel
                </h1>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xl md:text-3xl font-light text-foreground/60">
                    <TypingText phrases={HERO_TITLES} />
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 max-w-2xl text-lg text-foreground/50 leading-relaxed"
            >
                I design and deploy end-to-end machine learning systems — from structured data analysis and feature engineering to validated models and production-ready APIs.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-4"
            >
                <a
                    href="#projects"
                    className="group relative px-6 py-3 bg-accent text-background font-bold rounded flex items-center gap-2 transition-all hover:pr-8"
                >
                    View Projects
                    <motion.span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                    </motion.span>
                </a>
                <div className="flex items-center gap-1">
                    <a
                        href="https://github.com/Emart29"
                        target="_blank"
                        className="p-3 text-foreground/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nwangumaemmanuel"
                        className="p-3 text-foreground/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 flex items-center gap-4 text-[10px] font-mono text-foreground/20 uppercase tracking-widest vertical-rl"
            >
                <span>Scroll to explore</span>
                <div className="w-px h-12 bg-white/10" />
            </motion.div>
        </div>
    );
}
