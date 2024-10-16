"use client";
import React, { useEffect, useRef, useState } from "react";
import { RevealProps } from "./Reveal.types";
import { motion, useAnimation, useInView } from "framer-motion";

export const fadeIn = (position: string, delay?: number) => {
    return {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay ? delay : 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.5,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.25],
            },
        },
    };
};
export function Reveal({ children, position, className, delay }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <motion.div
                className={className}
                variants={fadeIn(position, delay)}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {children}
            </motion.div>
        </div>
    );
}
