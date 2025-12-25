import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://luna-job.com"),
    title: "밤알바 | 야간알바 여성알바 구인구직 - 루나알바",
    description: "번호 노출 없이 안전한 밤알바 플랫폼 루나알바. 야간알바, 여성알바, 여자알바 실시간 AI 매칭. 퀸알바, 온니잡, 레이디알바, 여우알바보다 확실한 선택. 지금 사전예약하세요.",
    keywords: [
        "밤알바", "야간알바", "여성알바", "여자알바",
        "퀸알바", "온니잡", "레이디알바", "여우알바",
        "루나알바", "고수익알바", "유흥알바", "룸알바",
        "노래방알바", "밤알바 구인", "여성 야간알바", "안전한 밤알바"
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://luna-job.com",
    },
    openGraph: {
        type: "website",
        locale: "ko_KR",
        siteName: "루나알바",
        title: "밤알바 | 야간알바 여성알바 - 루나알바",
        description: "번호 노출 없이 안전한 밤알바 플랫폼. 여성알바, 야간알바, 여자알바 실시간 AI 매칭.",
        url: "https://luna-job.com",
        images: [
            {
                url: "/app_icon_info.webp",
                width: 1200,
                height: 630,
                alt: "루나알바 - 프리미엄 밤알바 여성알바 플랫폼",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "밤알바 | 야간알바 여성알바 - 루나알바",
        description: "번호 노출 없이 안전한 밤알바 플랫폼. AI 매칭으로 최적의 일자리.",
        images: ["/app_icon_info.webp"],
    },
    verification: {
        google: "google-site-verification-code",
        other: {
            "naver-site-verification": "naver-site-verification-code",
        },
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
import { LunaAlbaSchema } from "./schema";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head>
                <LunaAlbaSchema />
            </head>
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
