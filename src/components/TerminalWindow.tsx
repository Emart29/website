"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

export function TerminalWindow({ children, className, title = "bash" }: TerminalWindowProps) {
    return (
        <div className={cn("terminal-window glow-border", className)}>
            <div className="terminal-header border-b border-border/50">
                <div className="flex gap-1.5">
                    <div className="terminal-dot bg-[#FF5F56]" />
                    <div className="terminal-dot bg-[#FFBD2E]" />
                    <div className="terminal-dot bg-[#27C93F]" />
                </div>
                <div className="flex-1 text-center text-[10px] md:text-xs font-mono text-foreground/40 select-none uppercase tracking-widest">
                    {title} — portfolio
                </div>
                <div className="w-12" /> {/* alignment spacer */}
            </div>
            <div className="p-4 md:p-6 font-mono text-sm md:text-base">
                {children}
            </div>
        </div>
    );
}
