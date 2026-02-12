import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";

type Props = {
    words: string[];
    duration?: number;
    className?: string;
};

export default function FlipWords({ words, duration = 3000, className }: Props) {
    if (!words || words.length === 0) {
        return null;
    }

    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timerRef = useRef<number | undefined>(undefined);

    const startAnimation = useCallback(() => {
        setIndex((i) => (i + 1) % words.length);
        setIsAnimating(true);
    }, [words.length]);

    useEffect(() => {
        // schedule next animation only when not currently animating
        if (!isAnimating) {
            timerRef.current = window.setTimeout(() => {
                startAnimation();
            }, duration);
        }

        return () => {
            if (timerRef.current !== undefined) {
                clearTimeout(timerRef.current);
                timerRef.current = undefined;
            }
        };
    }, [isAnimating, duration, startAnimation]);

    const currentWord = words[index] ?? "";

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}

                // include index in key to handle duplicate word values correctly
                key={`${currentWord}-${index}`}
            >
                {currentWord.split(" ").map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
                        className="inline-block whitespace-nowrap "
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={word + letterIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                                    duration: 0.2,
                                }}
                                className="inline-block mb-3"

                                // style={{ fontSize: "64px" }}

                                style={{
                                    color: "var(--subheading)",
                                    fontWeight: 500,
                                    fontSize: "1.2rem",
                                    marginTop: "-0.2rem",
                                    marginBottom: "1rem"
                                }}

                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
