"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Smartphone, Monitor, Apple, Terminal, ShoppingBag } from "lucide-react"; // ShoppingBag for ONE Store

export default function Hero() {
    const [dDay, setDDay] = useState("");

    useEffect(() => {
        const targetDate = new Date("2025-01-01T00:00:00");
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (days > 0) {
            setDDay(`D-${days}`);
        } else if (days === 0) {
            setDDay("D-Day");
        } else {
            setDDay(`Open +${Math.abs(days)}`);
        }
    }, []);
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary-violet/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-pink/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary-violet/30 bg-primary-violet/10 text-primary-pink font-bold text-sm mb-6 animate-pulse">
                        🚀 그랜드 오프닝: {dDay || "Coming Soon"}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 leading-[1.1]">
                        Anywhere, <br />
                        <span className="text-transparent bg-clip-text bg-hero-gradient">Anytime.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        PC와 모바일, 웹과 앱 어디서든 완벽하게.<br className="hidden md:block" />
                        당신의 프라이버시를 지키는 프리미엄 구인구직 플랫폼, <span className="text-foreground font-bold">루나 알바</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-3 w-full justify-center flex-wrap px-4"
                >
                    <Button size="lg" className="w-full sm:w-auto gap-2 min-w-[180px]" variant="outline">
                        <Monitor size={20} /> PC Web
                    </Button>
                    <Button size="lg" className="w-full sm:w-auto gap-2 min-w-[180px]">
                        <Smartphone size={20} /> 사전예약 참여
                    </Button>
                </motion.div>

                {/* Store Badges Link Placeholders */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 flex gap-4 justify-center"
                >
                    {/* Store Badges - Using User Provided PNGs */}
                    <button className="hover:opacity-80 transition-opacity">
                        <img src="/앱스토어-02.png" alt="App Store" className="h-14 w-auto" />
                    </button>
                    <button className="hover:opacity-80 transition-opacity">
                        <img src="/구글플레이.png" alt="Google Play" className="h-14 w-auto" />
                    </button>
                    <button className="hover:opacity-80 transition-opacity">
                        <img src="/onestore-badge.svg" alt="ONE Store" className="h-14 w-auto" />
                    </button>
                </motion.div>


            </div>
        </section>
    );
}
