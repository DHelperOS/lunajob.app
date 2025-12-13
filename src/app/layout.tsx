import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Luna Alba - Pre-registration",
    description: "Anywhere, Anytime. The perfect cross-platform job finder. Join the pre-registration now.",
    icons: {
        icon: "/app_icon_info.webp",
        shortcut: "/app_icon_info.webp",
        apple: "/app_icon_info.webp",
    },
    openGraph: {
        title: "Luna Alba - Pre-registration",
        description: "Anywhere, Anytime. The perfect cross-platform job finder.",
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className="antialiased bg-background text-foreground font-suite min-h-screen">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* <Suspense fallback={null}>
                        <Analytics />
                    </Suspense> */}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
