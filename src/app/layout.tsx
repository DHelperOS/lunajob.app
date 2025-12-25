import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://luna-job.com"),
    title: "루나알바 - 프리미엄 밤알바 구인구직 (사전예약)",
    description: "당신의 프라이버시를 지키는 프리미엄 밤알바 플랫폼, 루나알바. 여성알바, 고수익알바, 퀸알바, 여우알바보다 확실한 선택. 지금 사전예약하고 특별한 혜택을 받으세요.",
    keywords: ["밤알바", "여성알바", "고수익알바", "여자알바", "퀸알바", "온니잡", "레이디알바", "여우알바", "루나알바", "유흥알바", "룸알바", "노래방알바"],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.png",
    },
    openGraph: {
        title: "루나알바 - 프리미엄 밤알바 구인구직",
        description: "번호 노출 없이 안전하게. 당신을 위한 프리미엄 밤알바 플랫폼.",
        images: [
            {
                url: "/app_icon_info.webp",
                width: 800,
                height: 600,
                alt: "Luna App Icon",
            },
        ],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

import { Suspense } from "react";
// import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";
import KaleidoscopeBackground from "@/components/KaleidoscopeBackground";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className="antialiased text-foreground font-suite min-h-screen relative">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <KaleidoscopeBackground />
                    {/* <Suspense fallback={null}>
                        <Analytics />
                    </Suspense> */}
                    <div className="relative z-10">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
