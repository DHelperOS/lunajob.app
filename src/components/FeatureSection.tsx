"use client";

import { motion } from "framer-motion";
import { Shield, Zap, RefreshCw, BarChart } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary-violet" />,
        title: "크로스 플랫폼",
        description: "앱 설치 없이 웹에서도, 앱으로도. 맥, 안드로이드, iOS 완벽 지원.",
        gradient: "from-primary-violet/20 to-transparent",
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-blue-400" />,
        title: "투명한 가격 정책",
        description: "복잡한 과금 유도는 그만. 투명한 정액제 플랜으로 합리적인 알바 구인구직.",
        gradient: "from-blue-500/20 to-transparent",
    },
    {
        icon: <BarChart className="w-8 h-8 text-green-400" />,
        title: "공정한 시스템",
        description: "고액 결제 독점 방지. 시스템 랭킹 알고리즘으로 모두에게 공정한 노출 기회.",
        gradient: "from-green-500/20 to-transparent",
    },
];

export default function FeatureSection() {
    return (
        <section id="features" className="py-24 relative" aria-labelledby="features-heading">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2 id="features-heading" className="text-3xl md:text-5xl font-black text-foreground mb-4 font-logo break-keep">Why 밤알바는 루나알바?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        기존 <strong>야간알바</strong> 앱의 불편함은 이제 그만. <br />
                        <span className="font-logo">루나알바</span>가 제안하는 새로운 <strong>여성알바</strong> 구인구직의 기준.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 shadow-2xl hover:border-primary-violet/30 transition-all overflow-hidden backdrop-blur-2xl dark:backdrop-blur-none"
                        >
                            <div
                                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-700 rounded-full -mr-16 -mt-16 pointer-events-none`}
                            />

                            <div className="mb-8 p-4 bg-primary-violet/5 w-fit rounded-2xl group-hover:bg-primary-violet/10 group-hover:rotate-6 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
