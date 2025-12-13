"use client";

import { motion } from "framer-motion";
import { Shield, Zap, RefreshCw, BarChart } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary-violet" />,
        title: "Cross-Platform",
        description: "앱 설치 없이 웹에서도, 앱으로도. 맥, 안드로이드, iOS 완벽 지원.",
        gradient: "from-primary-violet/20 to-transparent",
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-blue-400" />,
        title: "Transparent Pricing",
        description: "복잡한 과금 유도는 그만. 투명한 정액제 플랜으로 합리적인 알바 구인구직.",
        gradient: "from-blue-500/20 to-transparent",
    },
    {
        icon: <BarChart className="w-8 h-8 text-green-400" />,
        title: "Fair System",
        description: "고액 결제 독점 방지. 시스템 랭킹 알고리즘으로 모두에게 공정한 노출 기회.",
        gradient: "from-green-500/20 to-transparent",
    },
];

export default function FeatureSection() {
    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Why 루나 알바?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        기존 알바 앱의 불편함은 이제 그만. <br />
                        루나 알바가 제안하는 새로운 구인구직의 기준.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary-violet/50 transition-colors overflow-hidden"
                        >
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-full -mr-10 -mt-10 pointer-events-none`}
                            />

                            <div className="mb-4 p-3 bg-muted w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Plans Subsection */}
                <div className="mt-24 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary-violet font-bold tracking-widest text-sm uppercase mb-2 block">Membership Plans</span>
                        <h3 className="text-2xl md:text-4xl font-black text-foreground">플랜별 상세 비교</h3>
                        <p className="text-muted-foreground mt-4">합리적인 가격으로 최상의 효과를 경험하세요.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                        {/* Basic */}
                        <div className="p-6 rounded-2xl border border-border bg-card flex flex-col">
                            <h4 className="text-xl font-bold text-foreground mb-2">베이직 플랜</h4>
                            <div className="text-3xl font-black text-foreground mb-4">무료</div>
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="text-sm text-muted-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />기본 노출</li>
                                <li className="text-sm text-muted-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />마일리지 적립 없음</li>
                                <li className="text-sm text-muted-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />기본 기능 모두 이용 가능</li>
                            </ul>
                            <button className="w-full py-2 rounded-lg text-sm font-bold bg-muted text-foreground hover:bg-muted/80 transition-colors">
                                선택하기
                            </button>
                        </div>

                        {/* Standard */}
                        <div className="p-6 rounded-2xl border border-border bg-card flex flex-col">
                            <h4 className="text-xl font-bold text-foreground mb-2">스탠다드 플랜</h4>
                            <div className="text-3xl font-black text-foreground mb-1">₩30,000</div>
                            <div className="text-sm text-muted-foreground mb-4">30일 기준</div>
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="text-sm text-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-violet" />상위 노출</li>
                                <li className="text-sm text-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-violet" />마일리지 5% 적립</li>
                                <li className="text-sm text-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-violet" />신뢰도 점수 +100점</li>
                            </ul>
                            <button className="w-full py-2 rounded-lg text-sm font-bold bg-muted text-foreground hover:bg-muted/80 transition-colors">
                                선택하기
                            </button>
                        </div>

                        {/* Plus */}
                        <div className="p-6 rounded-2xl border border-border bg-card flex flex-col">
                            <h4 className="text-xl font-bold text-foreground mb-2">플러스 플랜</h4>
                            <div className="text-3xl font-black text-foreground mb-1">₩70,000</div>
                            <div className="text-sm text-muted-foreground mb-4">30일 기준</div>
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="text-sm text-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />최상위 노출</li>
                                <li className="text-sm text-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />마일리지 10% 적립</li>
                                <li className="text-sm text-foreground flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />신뢰도 점수 +200점</li>
                            </ul>
                            <button className="w-full py-2 rounded-lg text-sm font-bold bg-muted text-foreground hover:bg-muted/80 transition-colors">
                                선택하기
                            </button>
                        </div>

                        {/* Premium */}
                        <div className="relative p-6 rounded-2xl border border-primary-pink bg-primary-pink/10 flex flex-col shadow-[0_0_30px_rgba(236,72,153,0.15)]">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">BEST / 인기</span>
                            <h4 className="text-xl font-bold text-foreground mb-2">프리미엄 플랜</h4>
                            <div className="text-3xl font-black text-foreground mb-1">₩120,000</div>
                            <div className="text-sm text-muted-foreground mb-4">30일 기준</div>
                            <ul className="space-y-3 mb-8 flex-1 text-foreground">
                                <li className="text-sm font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" />최우선 노출 (1순위)</li>
                                <li className="text-sm font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" />마일리지 15% 적립</li>
                                <li className="text-sm font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" />신뢰도 점수 +600점</li>
                            </ul>
                            <button className="w-full py-2 rounded-lg text-sm font-bold bg-primary-pink text-white hover:bg-primary-pink/80 transition-colors shadow-lg">
                                선택하기
                            </button>
                        </div>
                    </div>

                    {/* Mileage Benefits Section */}
                    <div className="bg-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-primary-violet/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="text-center mb-10 relative z-10">
                            <span className="text-primary-pink font-bold tracking-widest text-sm uppercase mb-2 block">Premium Benefits</span>
                            <h3 className="text-2xl md:text-3xl font-black text-foreground">🎁 마일리지 적립 혜택</h3>
                            <p className="text-muted-foreground mt-2">기간이 길어질수록 더 커지는 보너스 적립 혜택을 확인하세요.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            {/* Rates Table */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-4 border-l-4 border-primary-violet pl-3">플랜별 기본 적립률</h4>
                                    <div className="grid grid-cols-4 gap-2 text-center text-sm">
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-muted-foreground mb-1">베이직</div>
                                            <div className="font-bold text-foreground">0%</div>
                                        </div>
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-primary-violet mb-1">스탠다드</div>
                                            <div className="font-bold text-foreground">5%</div>
                                        </div>
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-primary-pink mb-1">플러스</div>
                                            <div className="font-bold text-foreground">10%</div>
                                        </div>
                                        <div className="bg-primary-pink/20 p-3 rounded-lg border border-primary-pink/30">
                                            <div className="text-primary-pink mb-1 font-bold">프리미엄</div>
                                            <div className="font-bold text-foreground">15%</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-4 border-l-4 border-primary-pink pl-3">기간별 보너스 적립률</h4>
                                    <div className="grid grid-cols-4 gap-2 text-center text-sm">
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-muted-foreground mb-1">30일</div>
                                            <div className="font-bold text-foreground">+0%</div>
                                        </div>
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-muted-foreground mb-1">60일</div>
                                            <div className="font-bold text-foreground">+5%</div>
                                        </div>
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-muted-foreground mb-1">90일</div>
                                            <div className="font-bold text-primary-violet">+10%</div>
                                        </div>
                                        <div className="bg-muted p-3 rounded-lg border border-border">
                                            <div className="text-muted-foreground mb-1">120일</div>
                                            <div className="font-bold text-primary-pink">+20%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Example Calculation */}
                            <div className="bg-muted rounded-2xl p-6 border border-border flex flex-col justify-center">
                                <h4 className="text-lg font-bold text-foreground mb-4">💡 적립 예시</h4>
                                <p className="text-sm text-muted-foreground mb-4">프리미엄 플랜 90일 결제 시</p>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">기본 금액 (120,000 x 3)</span>
                                        <span className="text-foreground font-bold">360,000원</span>
                                    </div>
                                    <div className="w-full h-px bg-border my-2" />
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">기본 적립 (15%)</span>
                                        <span className="text-primary-violet font-bold">54,000원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">기간 보너스 (+10%)</span>
                                        <span className="text-primary-pink font-bold">36,000원</span>
                                    </div>
                                    <div className="w-full h-px bg-border my-2" />
                                    <div className="flex justify-between text-lg">
                                        <span className="text-foreground font-bold">총 적립금 (25%)</span>
                                        <span className="text-primary-pink font-black">90,000원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
