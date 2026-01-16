"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const marketImages = [
    { src: "/1.png", alt: "루나알바 전문 야간직 앱 메인 화면 - 야간 구인구직" },
    { src: "/2.png", alt: "루나알바 저녁 파트타임 구직자 프로필 화면" },
    { src: "/3.png", alt: "루나알바 야간 공고 목록 - 전문 서비스직 채용정보" },
    { src: "/4.png", alt: "루나알바 AI 매칭 시스템 - 맞춤형 야간 업무 추천" },
    { src: "/5.png", alt: "루나알바 1:1 채팅 - 안전한 비즈니스 소통" },
    { src: "/6.png", alt: "루나알바 커뮤니티 - 전문 야간직 정보 공유" },
    { src: "/7.png", alt: "루나알바 신뢰도 시스템 - 검증된 야간 인력 플랫폼" },
    { src: "/8.png", alt: "루나알바 요금제 선택 - 전문 서비스직 프리미엄 서비스" },
];

export default function AppShowcase() {
    return (
        <section id="showcase" className="py-24 bg-transparent overflow-hidden" aria-labelledby="showcase-heading">
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="showcase-heading" className="text-3xl md:text-5xl font-black text-foreground mb-4 font-logo break-keep">
                        <strong>야간 업무</strong> 필수 앱, 루나알바 둘러보기
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        심플하고 직관적인 UI로 경험하는 프리미엄 <strong>야간 구인구직</strong>.<br />
                        당신에게 딱 맞는 <strong>전문 서비스직</strong>을 가장 빠르고 안전하게 찾아보세요.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-60 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-10 px-4 md:px-0 py-10"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Double the images for seamless loop */}
                    {[...marketImages, ...marketImages].map((image, index) => (
                        <div
                            key={index}
                            className="relative w-[280px] md:w-[340px] aspect-[9/19.5] rounded-[3.5rem] overflow-hidden border-[10px] border-secondary bg-black shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] group hover:scale-[1.03] transition-all duration-700 hover:shadow-[0_60px_100px_-20px_rgba(139,92,246,0.3)]"
                        >
                            {/* Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                            <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-card">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                    sizes="(max-width: 768px) 280px, 340px"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
