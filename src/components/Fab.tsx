"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Fab() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToHero = () => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToHero}
                    className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-full shadow-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-shadow group"
                >
                    <div className="bg-primary-pink/20 rounded-full p-1">
                        <Download size={20} className="text-primary-pink" />
                    </div>
                    <span className="font-bold text-lg hidden md:block">앱 다운로드</span>
                    <span className="font-bold text-lg md:hidden">다운로드</span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
