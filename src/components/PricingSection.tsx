"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const MEMBERSHIP_PLANS = [
    {
        id: "basic",
        name: "베이직",
        price: 0,
        priceLabel: "Free",
        desc: "기본 노출",
        rate: 0,
        features: ["기본 노출", "마일리지 적립 없음", "기본 기능 이용"],
        color: "text-muted-foreground",
        borderColor: "border-black/5 dark:border-white/10",
        activeBorder: "border-muted-foreground"
    },
    {
        id: "standard",
        name: "스탠다드",
        price: 30000,
        priceLabel: "₩30,000",
        desc: "상위 노출",
        rate: 5,
        features: ["상위 노출", "마일리지 5% 적립", "신뢰도 점수 스택"],
        color: "text-primary-violet",
        borderColor: "border-primary-violet/30",
        activeBorder: "border-primary-violet"
    },
    {
        id: "plus",
        name: "플러스",
        price: 70000,
        priceLabel: "₩70,000",
        desc: "최상위 노출",
        rate: 10,
        features: ["최상위 노출", "마일리지 10% 적립", "전용 엠블럼 지급"],
        color: "text-primary-pink",
        borderColor: "border-primary-pink/30",
        activeBorder: "border-primary-pink"
    },
    {
        id: "premium",
        name: "프리미엄",
        price: 120000,
        priceLabel: "₩120,000",
        desc: "최우선 노출 (1순위)",
        rate: 15,
        features: ["최우선 노출 (1순위)", "마일리지 15% 적립", "모든 프리미엄 기능"],
        color: "text-foreground",
        borderColor: "border-2 border-primary-pink/50",
        activeBorder: "border-foreground",
        isBest: true
    }
];

const DURATIONS = [
    { label: "30일", days: 30, bonusRate: 0 },
    { label: "60일", days: 60, bonusRate: 5 },
    { label: "90일", days: 90, bonusRate: 10, highlight: "text-primary-violet" },
    { label: "120일", days: 120, bonusRate: 20, highlight: "text-primary-pink font-black" },
];

export default function PricingSection() {
    const [selectedPlanId, setSelectedPlanId] = useState("premium");
    const [selectedDurationDays, setSelectedDurationDays] = useState(90);

    const selectedPlan = MEMBERSHIP_PLANS.find(p => p.id === selectedPlanId) || MEMBERSHIP_PLANS[3];
    const selectedDuration = DURATIONS.find(d => d.days === selectedDurationDays) || DURATIONS[2];

    const months = selectedDuration.days / 30;
    const basePrice = selectedPlan.price * months;

    // Calculate P
    const basePoints = Math.floor(basePrice * (selectedPlan.rate / 100));
    const bonusPoints = Math.floor(basePrice * (selectedDuration.bonusRate / 100));
    const totalPoints = basePoints + bonusPoints;
    const totalRate = selectedPlan.rate + selectedDuration.bonusRate;

    return (
        <section id="pricing" className="py-24 relative overflow-hidden" aria-labelledby="pricing-heading">
            {/* Decorative Background Elements */}
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary-violet/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-primary-pink/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Pricing Plans Subsection */}
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary-violet font-bold tracking-widest text-sm uppercase mb-3 block">Membership Plans</span>
                            <h2 id="pricing-heading" className="text-3xl md:text-5xl font-black text-foreground">루나 밤알바 플랜</h2>
                            <p className="text-muted-foreground mt-6 text-lg"><strong>야간알바</strong>, <strong>여성알바</strong>를 위한 합리적인 가격으로 최상의 효과를 경험하세요.</p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {MEMBERSHIP_PLANS.map((plan, index) => {
                            const isSelected = selectedPlanId === plan.id;

                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => setSelectedPlanId(plan.id)}
                                    className={`relative cursor-pointer p-8 rounded-[2rem] border bg-white/50 dark:bg-black/20 backdrop-blur-xl dark:backdrop-blur-none flex flex-col hover:bg-white/80 dark:hover:bg-black/30 transition-all shadow-xl group ${plan.borderColor} ${isSelected ? `ring-2 ring-offset-2 ring-offset-background ${plan.activeBorder?.replace('border-', 'ring-') || 'ring-primary-violet'}` : ''} ${plan.isBest ? 'scale-105 z-10' : ''}`}
                                >
                                    {plan.isBest && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-violet to-primary-pink text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg tracking-widest uppercase">Best Value</span>
                                    )}
                                    <h4 className={`text-xl font-bold mb-4 ${plan.color.includes('foreground') ? 'text-foreground' : plan.color}`}>{plan.name}</h4>
                                    <div className="text-4xl font-black text-foreground mb-2">{plan.priceLabel}</div>
                                    <div className="text-xs text-muted-foreground mb-8">30일 기준</div>
                                    <ul className="space-y-4 mb-10 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="text-sm text-foreground flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full ${plan.color.replace('text-', 'bg-').split(' ')[0]}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-4 rounded-xl text-sm font-bold transition-all ${isSelected ? 'bg-foreground text-background shadow-lg' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}>
                                        {isSelected ? '선택됨' : '선택하기'}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mileage Benefits Section */}
                    <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg dark:backdrop-blur-none rounded-[3rem] p-10 md:p-16 border border-black/5 dark:border-white/10 relative overflow-hidden shadow-2xl">
                        <div className="text-center mb-16 relative z-10">
                            <span className="text-primary-pink font-bold tracking-widest text-sm uppercase mb-3 block">Premium Privileges</span>
                            <h3 className="text-3xl md:text-4xl font-black text-foreground">🎁 마일리지 시뮬레이션</h3>
                            <p className="text-muted-foreground mt-4 text-lg">플랜과 기간을 선택하여 예상 적립금을 확인해보세요.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                            {/* Rates Table / Selection */}
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-6 border-l-4 border-primary-violet pl-4">1. 플랜 선택 (기본 적립)</h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
                                        {MEMBERSHIP_PLANS.map((plan) => (
                                            <div
                                                key={plan.id}
                                                onClick={() => setSelectedPlanId(plan.id)}
                                                className={`cursor-pointer p-4 rounded-2xl border backdrop-blur-md transition-all ${selectedPlanId === plan.id ? 'bg-primary-violet/10 border-primary-violet ring-1 ring-primary-violet' : 'border-border hover:bg-white/10'}`}
                                            >
                                                <div className="opacity-60 mb-1">{plan.name}</div>
                                                <div className={`font-black text-lg ${plan.color}`}>{plan.rate}%</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-6 border-l-4 border-primary-pink pl-4">2. 기간 선택 (추가 보너스)</h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
                                        {DURATIONS.map((dur) => (
                                            <div
                                                key={dur.days}
                                                onClick={() => setSelectedDurationDays(dur.days)}
                                                className={`cursor-pointer p-4 rounded-2xl border backdrop-blur-md transition-all ${selectedDurationDays === dur.days ? 'bg-primary-pink/10 border-primary-pink ring-1 ring-primary-pink' : 'border-border hover:bg-white/10'}`}
                                            >
                                                <div className="opacity-60 mb-1">{dur.label}</div>
                                                <div className={`text-lg font-bold ${dur.highlight || ''}`}>+{dur.bonusRate}%</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Live Calculation Result */}
                            <div className="bg-foreground/[0.03] rounded-3xl p-8 border border-white/5 flex flex-col justify-center shadow-inner relative overflow-hidden">
                                {selectedPlan.price === 0 ? (
                                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6">
                                        <p className="text-xl font-bold text-muted-foreground">무료 플랜은 적립 대상이 아닙니다.</p>
                                        <button onClick={() => setSelectedPlanId('standard')} className="mt-4 text-primary-violet hover:underline font-bold">스탠다드 이상 선택하기</button>
                                    </div>
                                ) : null}

                                <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary-pink/20 flex items-center justify-center text-primary-pink text-sm">💡</span>
                                    예상 적립금 결과
                                </h4>
                                <p className="text-sm text-muted-foreground mb-8">
                                    <span className="font-bold text-foreground">{selectedPlan.name}</span> 플랜
                                    <span className="font-bold text-foreground mx-1">{selectedDuration.label}</span>
                                    이용 시
                                </p>

                                <div className="space-y-4 text-base">
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">결제 금액 (₩{selectedPlan.price.toLocaleString()} × {months})</span>
                                        <span className="text-foreground font-bold">₩{basePrice.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full h-px bg-border/30 my-2" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">기본 적립 ({selectedPlan.rate}%)</span>
                                        <span className="text-primary-violet font-bold">+₩{basePoints.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">장기 보너스 (+{selectedDuration.bonusRate}%)</span>
                                        <span className="text-primary-pink font-bold">+₩{bonusPoints.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full h-px bg-border/30 my-4" />
                                    <div className="flex justify-between items-center p-4 rounded-2xl bg-gradient-to-r from-primary-violet/10 to-primary-pink/10 border border-primary-pink/20">
                                        <span className="text-foreground font-bold">최종 혜택 ({totalRate}%)</span>
                                        <div className="text-right">
                                            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-violet to-primary-pink">
                                                ₩{totalPoints.toLocaleString()} P
                                            </div>
                                            <div className="text-[10px] text-foreground/50 uppercase tracking-wider font-bold">Instant Credit</div>
                                        </div>
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
