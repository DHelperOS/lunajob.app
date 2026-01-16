"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Smartphone, Monitor, Apple, Terminal } from "lucide-react";

export default function Hero() {
    const [dDay, setDDay] = useState("");

    useEffect(() => {
        const targetDate = new Date("2026-01-12T00:00:00");
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
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-labelledby="hero-heading">
            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-violet/20 bg-primary-violet/10 text-primary-violet font-bold text-sm mb-10 animate-pulse backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-pink opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-pink"></span>
                        </span>
                        그랜드 오프닝: {dDay || "Coming Soon"}
                    </span>
                    <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-foreground mb-8 leading-[1.1] break-keep">
                        당신이 <span className="text-transparent bg-clip-text bg-hero-gradient font-logo inline-block">빛나는</span><br />
                        <span className="font-bold">야간 알바</span>, <span className="text-transparent bg-clip-text bg-hero-gradient font-logo inline-block">루나알바</span>
                    </h1>
                    <p className="sr-only">루나알바 - 야간 알바, 저녁 파트타임, 전문 서비스직 구인구직 플랫폼. 안심 매칭 서비스로 안전한 선택.</p>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        PC와 모바일, 웹과 앱 어디서든 완벽하게.<br className="hidden md:block" />
                        당신의 프라이버시를 지키는 프리미엄 <span className="font-bold">전문 야간 구인구직</span> 플랫폼, <span className="text-foreground border-b-2 border-primary-violet/30 font-logo">루나알바</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="p-8 rounded-[2.5rem] bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/10 shadow-2xl backdrop-blur-xl dark:backdrop-blur-none flex flex-wrap gap-6 justify-center items-center"
                >
                    {/* Store Badges - Simplified and removed clipping elements */}
                    <a href="https://apps.apple.com/app/id6756914273" target="_blank" rel="noopener noreferrer" className="hover:scale-105 active:scale-95 transition-all dark:invert-0 light:brightness-95 hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]" aria-label="App Store에서 루나알바 전문 야간직 앱 다운로드">
                        <img src="/앱스토어-02.png" alt="App Store에서 루나알바 iOS 앱 다운로드 - 전문 야간 파트타임 플랫폼" className="h-[52px] w-auto" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=app.lunajob" target="_blank" rel="noopener noreferrer" className="hover:scale-105 active:scale-95 transition-all dark:invert-0 light:brightness-95 hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]" aria-label="Google Play에서 루나알바 야간 업무 앱 다운로드">
                        <img src="/구글플레이.png" alt="Google Play에서 루나알바 Android 앱 다운로드 - 안전한 저녁 파트타임 서비스직" className="h-[52px] w-auto" />
                    </a>

                    <div className="hidden sm:block w-px h-10 bg-border/50 mx-2" />

                    {/* PC Web stylized as Badge - Positioned to the right */}
                    <a href="https://luna-job.com" target="_blank" rel="noopener noreferrer" className="h-[52px] px-8 rounded-xl bg-foreground text-background border border-border flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl group">
                        <Monitor size={22} className="group-hover:rotate-12 transition-transform" />
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[9px] opacity-70 mb-0.5 font-bold uppercase tracking-[0.2em]">Platform</span>
                            <span className="text-lg font-bold tracking-tight">PC 웹사이트</span>
                        </div>
                    </a>
                </motion.div>


            </div>
        </section>
    );
}
