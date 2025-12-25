"use client";

import { motion } from "framer-motion";

export default function PrivacySection() {
    return (
        <section id="privacy" className="py-24 relative overflow-hidden flex items-center justify-center" aria-labelledby="privacy-heading">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
                    {/* Left Text Content */}
                    <div className="flex-1 text-left">
                        <motion.h2
                            id="privacy-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-6 break-keep"
                        >
                            번호 없이 안전한 <span className="text-primary-violet">밤알바</span>.<br />
                            <span className="text-[#EC4899]">Safe Night Job.</span>
                        </motion.h2>
                        <p className="sr-only">여성알바, 야간알바, 여자알바를 위한 안전한 프라이버시 보호 시스템</p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-muted-foreground text-lg mb-12 leading-relaxed"
                        >
                            <p>개인정보 노출 걱정 없이 채용 문의를 해보세요.</p>
                            <p>'찔러보기'와 '1:1 채팅'으로 안전한 소통이 가능합니다.</p>
                        </motion.div>

                        <div className="space-y-4">
                            {/* Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 dark:bg-black/40 border border-black/5 dark:border-white/15 backdrop-blur-md dark:backdrop-blur-none shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-2xl">
                                    🤫
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold text-lg break-keep">전화번호 미공개 밤알바</h4>
                                    <p className="text-sm text-muted-foreground">안심번호조차 필요 없는 완벽한 익명성</p>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 dark:bg-black/40 border border-black/5 dark:border-white/15 backdrop-blur-md dark:backdrop-blur-none shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-2xl">
                                    👋
                                </div>
                                <div>
                                    <h4 className="text-foreground font-bold text-lg break-keep">밤알바 찔러보기 기능</h4>
                                    <p className="text-sm text-muted-foreground">부담 없이 '찔러보기'로 의사 표현</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Phone Mockup */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[320px] h-[640px] bg-[#1a1f2e] rounded-[3rem] border-8 border-muted-foreground/20 shadow-2xl overflow-hidden"
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

                            {/* Screen Content - Always Dark Mode Style for Mockup Consistency or adjust if needed */}
                            <div className="relative w-full h-full bg-[#1A1F2C] p-6 pt-16 flex flex-col gap-4">
                                {/* Header Mock */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-600" />
                                    <div className="flex flex-col gap-1">
                                        <div className="w-24 h-3 bg-gray-600 rounded" />
                                        <div className="w-16 h-2 bg-gray-700 rounded" />
                                    </div>
                                </div>

                                {/* Chat 1 - Received */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className="bg-[#2D3748] p-4 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed shadow-lg origin-bottom-left"
                                >
                                    안녕하세요! 공고 보고 연락드립니다. 전화번호 미공개라 안심되네요.
                                </motion.div>

                                {/* Chat 2 - Sent */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.8 }}
                                    className="self-end bg-[#A855F7] p-4 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed shadow-lg mt-2 origin-bottom-right"
                                >
                                    네 안녕하세요! 앱 내 채팅으로 편하게 면접 일정 조율 가능합니다.
                                </motion.div>

                                {/* System Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 2.5 }}
                                    className="bg-[#2D3748] p-3 rounded-lg self-start flex items-center gap-2 mt-4"
                                >
                                    <span className="text-xl">👋</span>
                                    <span className="text-[#F472B6] font-bold text-sm">찔러보기 도착!</span>
                                </motion.div>

                                {/* Input Area Mock */}
                                <div className="mt-auto mb-4">
                                    <div className="h-12 w-full bg-[#2D3748] rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
