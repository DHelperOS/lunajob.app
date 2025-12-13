import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-border">
            <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                            <Image src="/app_icon_info.webp" alt="Luna Alba Icon" width={24} height={24} className="rounded-full" />
                            <h3 className="text-xl font-black text-foreground">루나 알바</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Anywhere, Anytime. The perfect cross-platform job finder.
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary-violet transition-colors">이용약관</a>
                        <a href="#" className="hover:text-primary-violet transition-colors">개인정보처리방침</a>
                        <a href="#" className="hover:text-primary-violet transition-colors">문의하기</a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground opacity-60">
                    <div>
                        <p className="font-bold mb-2">밤컴퍼니(Bam Company) | 대표: 윤미나</p>
                        <p>사업자 등록번호: 611-48-01140 | 직업정보제공사업 신고번호: J1511020250008</p>
                        <p>주소: 경기도 수원시 권선구 경수대로 384번길 60</p>
                    </div>
                    <div className="md:text-right">
                        <p>
                            이메일: <a href="mailto:bamstar.help@gmail.com" className="hover:text-foreground transition-colors">bamstar.help@gmail.com</a>
                        </p>
                        <p>
                            고객센터: <a href="tel:010-5882-5495" className="hover:text-foreground transition-colors">010-5882-5495</a>
                        </p>
                        <p className="mt-2">&copy; {new Date().getFullYear()} Bam Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
