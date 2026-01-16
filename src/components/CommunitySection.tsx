"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, ShoppingBag, Star, MapPin, Ghost, Heart } from "lucide-react";

export default function CommunitySection() {
    return (
        <section id="community" className="py-24 relative overflow-hidden" aria-labelledby="community-heading">
            {/* Background Accents */}
            <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary-pink/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-primary-violet/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Hero / Intro */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-pink font-bold tracking-widest text-sm uppercase mb-3 block"
                    >
                        루나알바 커뮤니티
                    </motion.span>
                    <motion.h2
                        id="community-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-foreground mb-6 break-keep"
                    >
                        <strong>야간 업무</strong>를 함께하는 우리들의 이야기
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl leading-relaxed"
                    >
                        혼자가 아니에요.<br />
                        <span className="text-foreground font-semibold">함께 성장하는 전문 커뮤니티</span>에서 동료들과 함께해요.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

                    {/* 1. BamTalk (Large Card - Spans 8 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 p-8 md:p-10 rounded-[2.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/60 dark:hover:bg-black/50 transition-all group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <MessageCircle size={120} />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary-violet/10 flex items-center justify-center text-primary-violet">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">야간 근무자 소통 커뮤니티</h3>
                        </div>

                        {/* Chat Bubbles Visual */}
                        <div className="space-y-3 mb-8">
                            <div className="bg-white/60 dark:bg-white/5 rounded-2xl rounded-tl-none p-4 max-w-sm border border-black/5 dark:border-white/5">
                                <p className="text-sm text-foreground/80">"오늘 업무 노하우 공유해주실 분? ㅠㅠ"</p>
                            </div>
                            <div className="bg-primary-violet/10 rounded-2xl rounded-tr-none p-4 max-w-sm ml-auto border border-primary-violet/10">
                                <p className="text-sm text-foreground/80">"멤버분들 이거 어떻게 생각하세요? 조언 좀..."</p>
                            </div>
                        </div>

                        <p className="text-foreground/70 mb-6 leading-relaxed">
                            전문 야간직 종사자분들만의 프라이빗 공간.<br />
                            업무 중 겪는 고민, 노하우, 소소한 일상까지 여기서 다 나눠요.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {["정회원 전용", "철저한 프라이버시", "실시간 소통"].map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/5 text-xs font-bold text-foreground/70">
                                    ✓ {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2. One Liner (Tall Card - Spans 4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/60 dark:hover:bg-black/50 transition-all group relative overflow-hidden flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                <Sparkles size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">오늘의 한줄</h3>
                        </div>

                        <div className="flex-1 space-y-4 mb-6">
                            <div className="relative pl-4 border-l-2 border-foreground/10 py-1">
                                <p className="text-sm italic text-foreground/80">"퇴근길 밤공기가 시원하네요 🌃"</p>
                            </div>
                            <div className="relative pl-4 border-l-2 border-primary-pink/30 py-1">
                                <p className="text-sm italic text-foreground/80">"성과급 덕분에 보람찬 하루였어요 ㅎㅎ"</p>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-auto">
                            하루에 딱 한 줄.<br />
                            별거 아닌 일상도 괜찮아요.<br />
                            야간의 작은 이야기들.
                        </p>
                    </motion.div>

                    {/* 3. Used Trading (Spans 4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/60 dark:hover:bg-black/50 transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                                <ShoppingBag size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">야간 근무자 장터</h3>
                        </div>
                        <p className="text-foreground/70 text-sm mb-4">
                            안 쓰는 업무 용품이나 아이템들<br />
                            여기서 새 주인을 찾아주세요.
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                            비슷한 환경에서 계신 분들끼리라<br />
                            거래도 더 편하고 안심돼요.
                        </p>
                    </motion.div>

                    {/* 4. Reviews (Spans 4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/60 dark:hover:bg-black/50 transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                                <Star size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">업체 리뷰</h3>
                        </div>
                        <div className="flex gap-1 mb-4">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        </div>
                        <p className="text-foreground/70 text-sm mb-2">"여기 매니저님 배려가 정말 좋네요"</p>
                        <p className="text-xs text-muted-foreground">
                            실제 근무 경험을 솔직하게 공유해요.<br />
                            동료들의 생생한 후기.
                        </p>
                    </motion.div>

                    {/* 5. Local Promo (Spans 4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/60 dark:hover:bg-black/50 transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <MapPin size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">동네업체홍보</h3>
                        </div>
                        <p className="text-foreground/70 text-sm mb-4">
                            단골 맛집, 숨은 네일샵,<br />괜찮은 카페
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            멤버분들이 직접 추천하는 <span className="text-orange-500 font-bold">HOT PLACE 🔥</span>
                        </p>
                    </motion.div>

                </div>



            </div>
        </section>
    );
}
