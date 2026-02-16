"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingTextProps {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetween?: number;
}

export function TypingText({
    phrases,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetween = 2000
}: TypingTextProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    const handleTyping = useCallback(() => {
        if (phrases.length === 0) return;

        // Safety check for index
        const currentPhrase = phrases[index % phrases.length];

        if (subIndex === currentPhrase.length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, [index, subIndex, reverse, phrases]);

    useEffect(() => {
        if (phrases.length === 0) return;

        // Determine the next interval
        const currentPhrase = phrases[index % phrases.length];
        let timeout: NodeJS.Timeout;

        if (subIndex === currentPhrase.length + 1 && !reverse) {
            timeout = setTimeout(handleTyping, delayBetween);
        } else if (subIndex === 0 && reverse) {
            timeout = setTimeout(handleTyping, 500); // short pause before next word
        } else {
            timeout = setTimeout(handleTyping, reverse ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [handleTyping, index, subIndex, reverse, phrases, typingSpeed, deletingSpeed, delayBetween]);

    // Blink effect
    useEffect(() => {
        const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    return (
        <span className="font-mono text-accent glow-text">
            {(phrases[index % phrases.length] || "").substring(0, subIndex)}
            <span className={`${blink ? "opacity-100" : "opacity-0"} ml-1`}>_</span>
        </span>
    );
}
