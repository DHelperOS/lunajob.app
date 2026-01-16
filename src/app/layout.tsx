import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://luna-job.com"),
    title: "야간 알바 | 전문 야간 구인구직 플랫폼 - 루나알바",
    description: "번호 노출 없이 안전한 전문 야간 구인구직 플랫폼 루나알바. 저녁 파트타임, 야간 서비스직 실시간 AI 매칭. 철저한 프라이버시 보호 시스템으로 안심하고 지원하세요. 지금 사전예약 프리미엄 혜택을 확인하세요.",
    keywords: [
        "야간 알바", "저녁 파트타임", "전문 야간 구인구직", "안심 매칭 서비스",
        "야간 일자리 플랫폼", "프라이머시 보호 구인", "전문 서비스직 모집",
        "루나알바", "안전한 야간 업무", "저녁 알바 추천", "야간 채용 정보"
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
        title: "야간 알바 | 전문 저녁 파트타임 구인구직 - 루나알바",
        description: "번호 노출 없이 안전한 전문 야간 구인구직 플랫폼. 저녁 파트타임, 야간 서비스직 실시간 AI 매칭.",
        url: "https://luna-job.com",
        images: [
            {
                url: "/app_icon_info.webp",
                width: 1200,
                height: 630,
                alt: "루나알바 - 프리미엄 전문 야간 구인구직 플랫폼",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "야간 알바 | 저녁 파트타임 서비스직 - 루나알바",
        description: "번호 노출 없이 안전한 야간 일자리 플랫폼. AI 매칭으로 최적의 업무 연결.",
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
