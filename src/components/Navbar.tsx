"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button, cn } from "@/components/ui/Button";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { name: "안심 보장", id: "privacy" },
        { name: "앱 둘러보기", id: "showcase" },
        { name: "이벤트", id: "events" },
        { name: "주요 기능", id: "features" },
        { name: "커뮤니티", id: "community" },
        { name: "신뢰도", id: "trust" },
        { name: "AI 매칭", id: "ai-matching" },
        { name: "멤버십", id: "pricing" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "bg-background/40 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-black tracking-tight text-foreground flex items-center gap-2 font-logo">
                    <Image src="/app_icon_info.webp" alt="Luna Alba Icon" width={28} height={28} className="object-contain" />
                    루나알바
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-muted-foreground hover:text-primary-pink transition-colors font-medium"
                        >
                            {link.name}
                        </button>
                    ))}


                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-muted/20 transition-colors text-foreground"
                        aria-label="Toggle theme"
                    >
                        {mounted ? (resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <div className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu Button + Theme Toggle (Mobile) */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-muted/20 transition-colors text-foreground"
                    >
                        {mounted ? (resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <div className="w-5 h-5" />}
                    </button>
                    <button
                        className="text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background/20 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6 items-center justify-center h-full pb-24">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-2xl font-bold text-foreground hover:text-primary-pink"
                                >
                                    {link.name}
                                </button>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
