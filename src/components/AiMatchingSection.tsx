"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, HandMetal, Clock, MapPin, Coins, Calendar, CheckCircle2 } from "lucide-react";

export default function AiMatchingSection() {
    return (
        <section id="ai-matching" className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/40">
            {/* Background Neural Network Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-violet/20 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-primary-violet/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4"
                    >
                        <Sparkles size={12} /> Powered by Google Gemini 3.0
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-foreground mb-6"
                    >
                        나한테 딱 맞는 밤알바,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-violet">AI가 찾아줄게요.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl leading-relaxed"
                    >
                        매일 아침, 나만을 위한 추천이 도착해요.<br />
                        초개인화 AI 매칭 시스템을 경험해보세요.
                    </motion.p>
                </div>

                {/* Main Feature Highlight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">

                    {/* Visual: Abstract Swipe Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] flex items-center justify-center"
                    >
                        {/* Back Cards */}
                        <div className="absolute w-64 h-80 bg-white/5 border border-white/10 rounded-3xl transform -rotate-6 scale-90 translate-y-4" />
                        <div className="absolute w-64 h-80 bg-white/10 border border-white/10 rounded-3xl transform -rotate-3 scale-95 translate-y-2" />

                        {/* Front Card */}
                        <div className="relative w-64 h-80 bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-between transform rotate-0 hover:rotate-2 transition-transform duration-300">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-white/10 mb-4 animate-pulse" />
                                <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
                                <div className="h-3 w-1/2 bg-white/10 rounded" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-white/60">
                                    <span className="bg-white/5 px-2 py-1 rounded">강남구</span>
                                    <span className="bg-white/5 px-2 py-1 rounded">시급 2.5만</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="w-10 h-10 rounded-full border border-red-500/50 flex items-center justify-center text-red-500">✕</div>
                                    <div className="w-10 h-10 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-500">♥</div>
                                </div>
                            </div>
                        </div>

                        {/* Finger Hint */}
                        <div className="absolute bottom-10 right-20 text-white/80 animate-bounce">
                            <HandMetal size={32} className="rotate-[-30deg]" />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                            밤알바 찾지 마세요.<br />
                            <span className="text-primary-violet">AI가 찾아드릴게요.</span>
                        </h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            수백 개 공고를 일일이 볼 필요 없어요.<br />
                            Gemini 3.0이 당신의 조건을 분석해서<br />
                            딱 맞는 일자리만 골라 <strong>매일 아침 5장</strong>씩 보내드려요.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <Brain size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">Gemini 3.0 정밀 분석</h4>
                                    <p className="text-xs text-muted-foreground">단순 키워드가 아닌 성향과 스킬까지 분석</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-primary-pink/20 flex items-center justify-center text-primary-pink shrink-0">
                                    <HandMetal size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">스와이프로 1초 지원</h4>
                                    <p className="text-xs text-muted-foreground">마음에 들면 오른쪽, 아니면 왼쪽. 끝.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Analysis Factors & Benefits Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {[
                        { icon: MapPin, label: "선호 지역 & 거리", color: "text-red-400" },
                        { icon: Coins, label: "희망 급여 & 조건", color: "text-yellow-400" },
                        { icon: Clock, label: "가능 시간 & 요일", color: "text-green-400" },
                        { icon: CheckCircle2, label: "업종 경험 & 스킬", color: "text-blue-400" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                        >
                            <item.icon className={`mx-auto mb-3 ${item.color}`} size={24} />
                            <p className="text-sm font-bold text-foreground/80">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* User Type Benefits */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-3xl">
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                            👩‍💼 밤알바 구직자 (알바님)
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            "내 조건에 맞는 알바 어딨지?" 고민 끝!
                        </p>
                        <ul className="text-xs text-foreground/70 space-y-2">
                            <li>✓ 희망 업종/지역/시급 설정</li>
                            <li>✓ 매일 아침 맞춤 공고 배달</li>
                            <li>✓ 놓칠 수 없는 기회 알림</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-3xl">
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                            👨‍💼 밤알바 구인자 (사장님)
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            "우리 가게랑 딱 맞는 사람 없나?" 고민 끝!
                        </p>
                        <ul className="text-xs text-foreground/70 space-y-2">
                            <li>✓ 채용 공고만 올려두면 OK</li>
                            <li>✓ AI가 딱 맞는 인재 자동 추천</li>
                            <li>✓ 스와이프로 찜하고 바로 연락</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
