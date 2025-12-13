"use client";

import { motion } from "framer-motion";
import { Gift, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function EventSection() {
    return (
        <section id="events" className="py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden transition-colors">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary-pink font-bold tracking-widest text-sm uppercase mb-2 block">그랜드 오프닝 이벤트</span>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                        총 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">20만원</span> 혜택의 기회
                    </h2>
                    <p className="text-muted-foreground">사전 예약자 전원에게 쏟아지는 압도적 혜택을 놓치지 마세요.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Event 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-3xl p-8 text-center relative overflow-hidden group shadow-lg"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-20 h-20 mx-auto bg-primary-violet/20 rounded-full flex items-center justify-center mb-6 text-primary-violet">
                            <Gift size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">100,000 P 즉시 지급</h3>
                        <p className="text-muted-foreground mb-6">
                            사전 예약 완료 즉시,<br />
                            사용 가능한 10만 마일리지를 적립해 드립니다.
                        </p>
                        <div className="inline-block px-4 py-1 bg-primary-violet/20 text-primary-violet text-xs font-bold rounded-full border border-primary-violet/30">
                            참여자 전원 100% 지급
                        </div>
                    </motion.div>

                    {/* Event 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-3xl p-8 text-center relative overflow-hidden group shadow-lg"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-20 h-20 mx-auto bg-primary-pink/20 rounded-full flex items-center justify-center mb-6 text-primary-pink">
                            <Users size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">친구 초대 최대 10만원</h3>
                        <p className="text-muted-foreground mb-6">
                            친구 1명당 20,000원 현금 지급.<br />
                            최대 5명까지, 총 10만원 추가 혜택.
                        </p>
                        <div className="inline-block px-4 py-1 bg-primary-pink/20 text-primary-pink text-xs font-bold rounded-full border border-primary-pink/30">
                            미션 달성 시 지급
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" className="w-full md:w-auto px-12 text-lg shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]">
                        지금 바로 혜택 받기
                    </Button>
                </div>
            </div>
        </section>
    );
}
