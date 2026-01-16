"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function TrustSection() {
    return (
        <section id="trust" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20" aria-labelledby="trust-heading">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-violet/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-violet font-bold tracking-widest text-sm uppercase mb-3 block"
                    >
                        Trust System
                    </motion.span>
                    <motion.h2
                        id="trust-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-foreground mb-6 break-keep"
                    >
                        <strong>야간 업무</strong>, 프로필 사진만<br />보고 믿을 수 있나요?
                    </motion.h2>
                    <p className="sr-only">안전한 전문 서비스직, 저녁 파트타임을 위한 신뢰도 검증 시스템</p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl leading-relaxed break-keep"
                    >
                        루나알바는 활동 내역을 기반으로 <strong>신뢰도를 점수화</strong>해요.<br />
                        점수가 쌓일수록, 서로에 대한 믿음이 높아집니다.
                    </motion.p>
                </div>

                {/* Level System Badge Visual */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-20"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary-violet/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative w-40 h-40 md:w-56 md:h-56 bg-background/50 backdrop-blur-xl border border-primary-violet/30 rounded-full flex flex-col items-center justify-center p-6 shadow-2xl text-center">
                            <ShieldCheck size={48} className="text-primary-violet mb-2" />
                            <div className="text-3xl md:text-4xl font-black text-foreground">Lv.15</div>
                            <div className="text-xs md:text-sm text-muted-foreground mt-1">신뢰도 매우 높음</div>
                        </div>

                        {/* Floating Labels */}
                        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 px-4 py-2 rounded-full shadow-lg border border-black/5 dark:border-white/10 text-xs font-bold flex items-center gap-2 whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 인증 완료
                        </div>
                        <div className="absolute bottom-4 left-0 -translate-x-1/2 bg-white dark:bg-zinc-800 px-4 py-2 rounded-full shadow-lg border border-black/5 dark:border-white/10 text-xs font-bold flex items-center gap-2 whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> 성실한 소통
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">

                    {/* For Seekers */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/5 relative overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary-pink/10 flex items-center justify-center text-primary-pink">
                                <UserCheck size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">야간 업무 지원자 (파트너님)</h3>
                                <p className="text-xs text-muted-foreground">꾸준히 활동할수록 신뢰도 UP!</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "본인인증 및 프로필 100% 채우기",
                                "희망 조건 설정 및 정기적 접속",
                                "공고 지원 후 성실하게 소통",
                                "비매너 신고 없이 건전한 활동"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                    <CheckCircle2 size={16} className="text-primary-pink mt-0.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* For Employers */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/5 relative overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary-violet/10 flex items-center justify-center text-primary-violet">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">야간 업무 매니저 (지점장님)</h3>
                                <p className="text-xs text-muted-foreground">신뢰도 높은 운영진은 지원율 UP!</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "사업자 정보 인증 완료하기",
                                "지점 정보 상세하게 작성하기",
                                "지원자에게 친절하고 빠른 응답",
                                "프리미엄 서비스 이용 및 검증"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                    <CheckCircle2 size={16} className="text-primary-violet mt-0.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Value Proposition */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 bg-background/50 px-6 py-3 rounded-full border border-border shadow-sm"
                    >
                        <Award className="text-yellow-500" size={24} />
                        <p className="text-sm md:text-base font-semibold">
                            공고에서 <span className="text-primary-violet">신뢰도 배지</span>를 확인하세요.
                            높은 레벨은 곧 <span className="text-foreground border-b border-primary-pink/50">검증된 업체</span>를 의미합니다.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
