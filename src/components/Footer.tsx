import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white/80 dark:bg-black/20 backdrop-blur-xl py-20 border-t border-black/5 dark:border-white/10">
            <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start font-logo">
                            <Image src="/app_icon_info.webp" alt="Luna Alba Icon" width={24} height={24} className="object-contain" />
                            <h3 className="text-xl font-black text-foreground">루나알바</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Anywhere, Anytime. 완벽한 프리미엄 전문 야간 구인구직 플랫폼.
                        </p>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground opacity-60">
                    <div>
                        <p className="font-bold mb-2">루나 컴퍼니(Luna Company) | 대표: 윤미나</p>
                        <p>사업자 등록번호: 611-48-01140 | 직업정보제공사업 신고번호: J1511020250008</p>
                        <p>주소: 경기도 수원시 권선구 경수대로 384번길 60</p>
                    </div>
                    <div className="md:text-right">
                        <p>
                            이메일: <a href="mailto:help@luna-job.com" className="hover:text-foreground transition-colors">help@luna-job.com</a>
                        </p>
                        <p>
                            고객센터: <a href="tel:070-8998-1228" className="hover:text-foreground transition-colors">070-8998-1228</a>
                        </p>
                        <p className="mt-2">&copy; {new Date().getFullYear()} Luna Company. All rights reserved.</p>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-dashed border-white/5 opacity-30 text-[10px] text-muted-foreground hidden md:block select-none">
                    <p>
                        루나알바는 전문 야간 구인구직 서비스를 제공합니다. 기존 플랫폼의 불편함을 해소하고
                        가장 안전하고 프라이빗한 프리미엄 일자리 정보를 제공하는 대한민국 대표 플랫폼입니다.
                    </p>
                </div>
            </div>
        </footer>
    );
}
