"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

type FormData = {
    phoneNumber: string;
    agreeTerms: boolean;
};

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Optionally invoke Supabase function if needed, or just mock success as requested
            // await supabase.functions.invoke('pre-register-user', { body: { phone_number: data.phoneNumber } });

            alert("사전예약이 완료되었습니다! (성공)");
        } catch (e: any) {
            console.error(e);
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="register" className="py-24 relative">
            <div className="container mx-auto px-4 max-w-lg">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-foreground mb-2">Pre-Register Now</h2>
                    <p className="text-muted-foreground">지금 예약하고 100,000P 혜택을 확보하세요.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card p-8 rounded-3xl border border-border shadow-2xl"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">휴대폰 번호</label>
                            <input
                                type="tel"
                                placeholder="010-1234-5678"
                                className="w-full h-12 px-4 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-violet transition-colors"
                                {...register("phoneNumber", { required: true })}
                            />
                            {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">휴대폰 번호를 입력해주세요.</span>}
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-border bg-input checked:bg-primary-violet checked:border-primary-violet transition-all"
                                    {...register("agreeTerms", { required: true })}
                                />
                                <Check className="pointer-events-none absolute left-0 h-5 w-5 p-0.5 text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                            <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer select-none">
                                <span className="text-foreground font-bold">개인정보 수집 및 이용</span>에 동의합니다.
                            </label>
                        </div>
                        {errors.agreeTerms && <span className="text-red-500 text-xs block">약관 동의가 필요합니다.</span>}

                        <Button type="submit" size="lg" className="w-full text-lg font-bold" disabled={isLoading}>
                            {isLoading ? "처리 중..." : "사전예약 완료하기"}
                        </Button>
                    </form>
                </motion.div>

                <p className="text-center text-xs text-muted-foreground mt-6 opacity-60">
                    수집된 번호는 출시 알림 목적으로만 사용되며, 출시 후 파기됩니다.
                </p>
            </div>
        </section>
    );
}
