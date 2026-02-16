"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
    isTerminal?: boolean;
}

export function Section({ children, className, id, title, subtitle, isTerminal = true }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 px-6 max-w-6xl mx-auto", className)}>
            {(title || subtitle) && (
                <div className="mb-12">
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={cn(
                                "text-2xl font-mono text-accent mb-2",
                                isTerminal && "glow-text"
                            )}
                        >
                            {title}
                        </motion.h2>
                    )}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/60 max-w-2xl"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            )}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
