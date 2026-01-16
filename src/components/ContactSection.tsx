"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background" aria-labelledby="contact-heading">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-violet font-bold tracking-widest text-sm uppercase mb-3 block"
                    >
                        Contact Us
                    </motion.span>
                    <motion.h2
                        id="contact-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-foreground mb-4 break-keep"
                    >
                        무엇을 도와드릴까요?
                    </motion.h2>
                    <p className="sr-only">루나알바 야간 알바, 전문 서비스직 문의 및 고객센터</p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        루나알바 고객센터는 언제나 여러분의 목소리에 귀 기울입니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 backdrop-blur-md rounded-[2.5rem] p-8 border border-border/50 text-center hover:bg-secondary/50 transition-colors"
                    >
                        <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">이메일 문의</h3>
                        <p className="text-foreground/80 font-medium mb-4">help@luna-job.com</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>평일 09:00 - 18:00</p>
                            <p>영업일 기준 24시간 내 회신</p>
                        </div>
                    </motion.div>

                    {/* KakaoTalk Card (Featured) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#FAE100] rounded-[2.5rem] p-8 border border-[#F7D000] text-center shadow-lg transform md:-translate-y-4 relative overflow-hidden group"
                    >
                        {/* Shine Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform" />

                        <div className="w-16 h-16 mx-auto bg-black/5 rounded-full flex items-center justify-center text-[#371D1E] mb-6">
                            <MessageCircle size={32} fill="currentColor" />
                        </div>
                        <h3 className="text-xl font-black text-[#371D1E] mb-2">카카오톡 채널</h3>
                        <p className="text-[#371D1E]/80 font-bold mb-6">@루나알바</p>

                        <Link
                            href="http://pf.kakao.com/_czzYn"
                            target="_blank"
                            className="inline-block w-full py-4 rounded-xl bg-[#371D1E] text-[#FAE100] font-bold text-lg hover:bg-[#371D1E]/90 transition-colors shadow-md"
                        >
                            실시간 상담 하기
                        </Link>


                    </motion.div>

                    {/* Phone Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-secondary/30 backdrop-blur-md rounded-[2.5rem] p-8 border border-border/50 text-center hover:bg-secondary/50 transition-colors"
                    >
                        <div className="w-16 h-16 mx-auto bg-primary-violet/10 rounded-full flex items-center justify-center text-primary-violet mb-6">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">고객센터</h3>
                        <p className="text-foreground/80 font-medium mb-4">070 - 8998 - 1228</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>평일 09:00 - 18:00</p>
                            <p>주말/공휴일 휴무</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
