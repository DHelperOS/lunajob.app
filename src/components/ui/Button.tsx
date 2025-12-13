"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", children, ...props }, ref) => {
        const variants = {
            default: "bg-hero-gradient text-white shadow-lg shadow-primary-violet/20 hover:shadow-primary-violet/40 border-0",
            outline: "border-2 border-primary-violet text-primary-violet hover:bg-primary-violet/10",
            ghost: "text-text-dark hover:bg-white/5",
            link: "text-primary-violet underline-offset-4 hover:underline",
        };

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-full px-10 text-lg",
            icon: "h-10 w-10",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-violet disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, cn };
