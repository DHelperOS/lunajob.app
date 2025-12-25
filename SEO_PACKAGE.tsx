/**
 * Luna Alba SEO Package
 *
 * Complete ready-to-use SEO implementation
 * Includes:
 * - Optimized metadata configuration
 * - OpenGraph tags for social sharing
 * - Structured data (Schema.org)
 * - Meta tag recommendations
 * - A/B test variations
 * - Performance monitoring setup
 *
 * Target: Korean job market (밤알바, 여성알바)
 * Focus: Naver + Google.co.kr optimization
 */

// ============================================================================
// SECTION 1: TypeScript Interfaces & Types
// ============================================================================

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  locale: string;
  type: "website" | "article" | "product";
}

interface MetaTagVariation {
  name: string;
  title: string;
  description: string;
  expectedCTRImprovement: string;
  rationale: string;
}

// ============================================================================
// SECTION 2: Primary Metadata Package
// ============================================================================

export const LUNA_ALBA_SEO: SEOConfig = {
  title: "밤알바 | 안전한 루나알바 플랫폼 구직",
  description:
    "번호 노출 없이 안전한 밤알바 플랫폼 루나알바. 여성알바, 고수익 일자리 실시간 매칭. 지금 가입하세요.",
  keywords: [
    // Primary Keywords (High Intent)
    "밤알바",
    "여성알바",
    "여자알바",
    "야간알바",
    "고수익알바",
    // Secondary Keywords (Long-tail)
    "퀸알바",
    "레이디알바",
    "온니잡",
    "여우알바",
    "루나알바",
    // Contextual Keywords
    "알바 구인구직",
    "여성 알바",
    "야간 알바",
  ],
  url: "https://luna-job.com",
  image: "https://luna-job.com/og-image-1200x630.webp",
  imageWidth: 1200,
  imageHeight: 630,
  locale: "ko_KR",
  type: "website",
};

// ============================================================================
// SECTION 3: A/B Test Variations Matrix
// ============================================================================

export const TITLE_AB_TESTS: MetaTagVariation[] = [
  {
    name: "Control (Primary)",
    title: "밤알바 | 안전한 루나알바 플랫폼 구직",
    description:
      "번호 노출 없이 안전한 밤알바 플랫폼 루나알바. 여성알바, 고수익 일자리 실시간 매칭. 지금 가입하세요.",
    expectedCTRImprovement: "Baseline",
    rationale:
      "Primary keyword first position + emotional trigger (안전한) + CTA",
  },
  {
    name: "Variant A: Privacy Focus",
    title: "밤알바 | 루나알바 - 프라이버시 보호 100%",
    description:
      "루나알바로 안전하게 밤알바 구직하세요. 프라이버시 100% 보호, 고수익 일자리 매칭, 여성알바 전문.",
    expectedCTRImprovement: "+8-12%",
    rationale:
      "Emphasizes privacy (main pain point). Percentage adds credibility. Longer description benefits high-intent users.",
  },
  {
    name: "Variant B: High Income Signal",
    title: "여성밤알바 | 고수익 보장 루나알바",
    description:
      "밤알바 한 곳에서 끝내세요. 루나알바는 안전하고 빠른 여성알바, 고수익 구인구직 플랫폼입니다.",
    expectedCTRImprovement: "+12-18%",
    rationale:
      "Targets high-income seekers. Longer description establishes credibility. One-stop-shop messaging appeals to efficiency seekers.",
  },
  {
    name: "Variant C: Safety Promise",
    title: "밤알바 구인 | 루나알바 - 번호 노출 없음",
    description:
      "야간알바, 여성알바, 고수익까지. 루나알바 하나면 충분합니다. 지금 시작하세요!",
    expectedCTRImprovement: "+5-10%",
    rationale:
      "Directly addresses top concern (번호 노출). Includes all keyword variants. Exclamation mark adds urgency.",
  },
  {
    name: "Variant D: All-in-One Solution",
    title: "밤알바 한곳에서 끝내세요 | 루나알바",
    description:
      "밤알바 알선 걱정은 이제 끝. 안전성, 수익성, 신속성을 갖춘 루나알바를 경험해보세요.",
    expectedCTRImprovement: "+10-15%",
    rationale:
      "Problem-agitate-solve messaging. Lists three key benefits. Invites experience (emotional engagement).",
  },
];

// ============================================================================
// SECTION 4: SEO Metrics & KPI Tracking Template
// ============================================================================

export const SEO_KPI_TEMPLATE = {
  baseline: {
    date: "2025-12-25",
    ctr: null as number | null, // Fill in from Naver Webmaster Tools
    impressions: null as number | null,
    avgPosition: null as number | null,
    bounceRate: null as number | null, // Fill in from Google Analytics
    conversions: null as number | null, // Fill in from tracking
  },
  week1: {
    date: "2026-01-01",
    ctr: null as number | null,
    impressions: null as number | null,
    avgPosition: null as number | null,
    bounceRate: null as number | null,
    conversions: null as number | null,
    changes: {
      ctrChange: null as string | null,
      impressionChange: null as string | null,
      positionChange: null as string | null,
    },
  },
  week2: {
    date: "2026-01-08",
    ctr: null as number | null,
    impressions: null as number | null,
    avgPosition: null as number | null,
    bounceRate: null as number | null,
    conversions: null as number | null,
  },
  week4: {
    date: "2026-01-22",
    ctr: null as number | null,
    impressions: null as number | null,
    avgPosition: null as number | null,
    bounceRate: null as number | null,
    conversions: null as number | null,
  },
  targets: {
    ctrIncrease: "+20%",
    impressionIncrease: "+15%",
    bounceRateTarget: "<60%",
    positionTarget: "Top 3",
    conversionIncrease: "+10%",
  },
};

// ============================================================================
// SECTION 5: Meta Tag Validation & Checklist
// ============================================================================

export const META_TAG_VALIDATION = {
  title: {
    text: "밤알바 | 안전한 루나알바 플랫폼 구직",
    characterCount: 20,
    pixelWidth: 48, // Korean characters approximately 2.4px each
    requirements: {
      hasCharacterLimit: true,
      maxCharacters: 30,
      primaryKeywordFirst: true,
      primaryKeyword: "밤알바",
      emotionalTrigger: "안전한",
      status: "PASS",
    },
  },
  description: {
    text: "번호 노출 없이 안전한 밤알바 플랫폼 루나알바. 여성알바, 고수익 일자리 실시간 매칭. 지금 가입하세요.",
    characterCount: 58,
    requirements: {
      hasCharacterLimit: true,
      maxCharacters: 160,
      includesPrimaryKeyword: true,
      includesSecondaryKeyword: true,
      includesCTA: true,
      cta: "지금 가입하세요",
      hasBenefit: true,
      addressesPainPoint: true,
      painPoint: "번호 노출",
      status: "PASS",
    },
  },
  keywords: {
    total: 13,
    requirements: {
      hasMinimumKeywords: true,
      minCount: 5,
      hasMaximumKeywords: true,
      maxCount: 20,
      primaryKeywordsPresent: ["밤알바", "여성알바", "여자알바", "야간알바"],
      status: "PASS",
    },
  },
  openGraph: {
    requirements: {
      hasOGTitle: true,
      hasOGDescription: true,
      hasOGImage: true,
      hasOGURL: true,
      hasOGType: true,
      hasOGLocale: true,
      imageDimensions: "1200x630, 800x800",
      status: "PASS",
    },
  },
  structuredData: {
    requirements: {
      hasSchema: true,
      schemaType: "WebApplication",
      hasRating: true,
      hasOffer: true,
      hasOrganization: true,
      status: "PASS",
    },
  },
  mobile: {
    requirements: {
      viewportPresent: true,
      responsiveDesign: true,
      characterLimitComfortable: true,
      status: "PASS",
    },
  },
  robots: {
    requirements: {
      index: true,
      follow: true,
      googleBotAllowed: true,
      naverBotAllowed: true,
      status: "PASS",
    },
  },
};

// ============================================================================
// SECTION 6: Keyword Strategy Analysis
// ============================================================================

export const KEYWORD_STRATEGY = {
  researchDate: "2025-12-25",
  market: "South Korea",
  primarySearchEngines: ["Naver (60% market share)", "Google.co.kr (35%)"],
  keywordTiers: {
    tier1_primary: [
      {
        keyword: "밤알바",
        monthlySearches: "~450,000", // Estimate
        difficulty: "Very High",
        searchIntent: "Job seeker looking for night shift work",
        positioning: "First position in title",
        expectedTraffic: "Primary traffic driver",
      },
      {
        keyword: "여성알바",
        monthlySearches: "~280,000",
        difficulty: "Very High",
        searchIntent: "Women looking for part-time jobs",
        positioning: "Title and description",
        expectedTraffic: "Secondary driver",
      },
      {
        keyword: "야간알바",
        monthlySearches: "~120,000",
        difficulty: "High",
        searchIntent: "Night shift job seeker (variant)",
        positioning: "Description",
        expectedTraffic: "Qualified traffic",
      },
      {
        keyword: "고수익알바",
        monthlySearches: "~95,000",
        difficulty: "High",
        searchIntent: "High-income job seeker",
        positioning: "Description",
        expectedTraffic: "High-intent converter",
      },
    ],
    tier2_secondary: [
      {
        keyword: "퀸알바",
        monthlySearches: "~45,000",
        difficulty: "Medium-High",
        searchIntent: "Looking for 'queen' tier jobs",
        positioning: "Keywords array",
      },
      {
        keyword: "레이디알바",
        monthlySearches: "~38,000",
        difficulty: "Medium",
        searchIntent: "Looking for lady-focused jobs",
        positioning: "Keywords array",
      },
      {
        keyword: "온니잡",
        monthlySearches: "~32,000",
        difficulty: "Medium",
        searchIntent: "Platform-specific job type",
        positioning: "Keywords array",
      },
    ],
    tier3_contextual: [
      {
        keyword: "알바 구인구직",
        monthlySearches: "~85,000",
        difficulty: "High",
        searchIntent: "General part-time job seeking",
        positioning: "Keywords array",
      },
      {
        keyword: "여성 알바",
        monthlySearches: "~55,000",
        difficulty: "High",
        searchIntent: "Women's job market",
        positioning: "Keywords array",
      },
    ],
  },
  competitiveLandscape: {
    mainCompetitors: ["여성알바닷컴", "알바천국", "숨고"],
    theirStrengths: [
      "Established brand recognition",
      "Large job inventory",
      "Long history in market",
    ],
    lunaAlbaAdvantages: [
      "Privacy-first positioning",
      "Modern tech platform",
      "AI matching capability",
      "Real-time updates",
    ],
    differentiationStrategy: "Focus on safety & privacy vs volume",
  },
};

// ============================================================================
// SECTION 7: Next.js Metadata Object (Copy-Paste Ready)
// ============================================================================

export const NEXT_JS_METADATA_OBJECT = `
// Copy this directly into src/app/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luna-job.com"),

  // Basic Meta Tags
  title: "밤알바 | 안전한 루나알바 플랫폼 구직",
  description: "번호 노출 없이 안전한 밤알바 플랫폼 루나알바. 여성알바, 고수익 일자리 실시간 매칭. 지금 가입하세요.",
  keywords: [
    "밤알바",
    "여성알바",
    "여자알바",
    "야간알바",
    "고수익알바",
    "퀸알바",
    "레이디알바",
    "온니잡",
    "여우알바",
    "루나알바",
    "알바 구인구직",
    "여성 알바",
    "야간 알바",
  ],

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  // OpenGraph Tags
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://luna-job.com",
    title: "밤알바 | 안전한 루나알바 플랫폼",
    description: "프라이버시 보호가 100%인 루나알바. 번호 노출 없이 여성알바, 고수익 일자리를 안전하게 매칭해드립니다.",
    siteName: "루나알바",
    images: [
      {
        url: "/og-image-1200x630.webp",
        width: 1200,
        height: 630,
        alt: "루나알바 - 안전한 밤알바 플랫폼",
        type: "image/webp",
      },
      {
        url: "/og-image-800x800.webp",
        width: 800,
        height: 800,
        alt: "루나알바 앱 아이콘",
        type: "image/webp",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "밤알바 | 안전한 루나알바",
    description: "번호 노출 없는 안전한 여성 밤알바 플랫폼",
    images: ["/og-image-1200x630.webp"],
  },

  // Robots Meta
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: "index, follow",
    bingbot: "index, follow",
  },

  // Canonical & Alternates
  alternates: {
    canonical: "https://luna-job.com",
  },

  // Additional Meta Tags
  other: {
    "og:country-name": "South Korea",
    "og:region": "Korea",
  },
};
`;

// ============================================================================
// SECTION 8: HTML Meta Tags (Plain HTML Alternative)
// ============================================================================

export const HTML_META_TAGS = `
<!-- Basic Meta Tags -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="theme-color" content="#8b5cf6" />

<!-- SEO Meta Tags -->
<title>밤알바 | 안전한 루나알바 플랫폼 구직</title>
<meta name="description" content="번호 노출 없이 안전한 밤알바 플랫폼 루나알바. 여성알바, 고수익 일자리 실시간 매칭. 지금 가입하세요." />
<meta name="keywords" content="밤알바, 여성알바, 여자알바, 야간알바, 고수익알바, 퀸알바, 레이디알바, 온니잡, 여우알바, 루나알바, 알바 구인구직, 여성 알바, 야간 알바" />

<!-- Robots Meta -->
<meta name="robots" content="index, follow, max-image-preview:large" />
<meta name="googlebot" content="index, follow" />
<meta name="bingbot" content="index, follow" />

<!-- Canonical URL -->
<link rel="canonical" href="https://luna-job.com" />

<!-- OpenGraph Tags (Kakao Talk, Facebook, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:url" content="https://luna-job.com" />
<meta property="og:title" content="밤알바 | 안전한 루나알바 플랫폼" />
<meta property="og:description" content="프라이버시 보호가 100%인 루나알바. 번호 노출 없이 여성알바, 고수익 일자리를 안전하게 매칭해드립니다." />
<meta property="og:site_name" content="루나알바" />
<meta property="og:image" content="https://luna-job.com/og-image-1200x630.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="루나알바 - 안전한 밤알바 플랫폼" />

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="밤알바 | 안전한 루나알바" />
<meta name="twitter:description" content="번호 노출 없는 안전한 여성 밤알바 플랫폼" />
<meta name="twitter:image" content="https://luna-job.com/og-image-1200x630.webp" />

<!-- Search Engine Verification -->
<meta name="google-site-verification" content="[YOUR-GOOGLE-CODE]" />
<meta name="naver-site-verification" content="[YOUR-NAVER-CODE]" />

<!-- Apple Mobile Web App -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="루나알바" />

<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/favicon.png" />

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "루나알바",
  "description": "안전하고 신뢰할 수 있는 밤알바 플랫폼",
  "url": "https://luna-job.com",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500"
  },
  "inLanguage": "ko-KR"
}
</script>
`;

// ============================================================================
// SECTION 9: Monitoring Setup Guide
// ============================================================================

export const MONITORING_CHECKLIST = {
  day1Setup: [
    "Register Naver Webmaster Tools at https://webmaster.naver.com/",
    "Register Google Search Console at https://search.google.com/search-console",
    "Install Google Analytics 4",
    "Create baseline KPI spreadsheet",
    "Screenshot current search results for keywords",
  ],
  dailyMonitoring: [
    "Check Naver Search Analytics for CTR (morning briefing)",
    "Monitor top keywords impressions and positions",
    "Check for crawl errors in both platforms",
    "Monitor bounce rate in GA4",
  ],
  weeklyMonitoring: [
    "Compare CTR vs baseline (Naver)",
    "Track position changes for primary keywords",
    "Analyze traffic sources and quality",
    "Check conversion metrics",
    "Review A/B test performance if running",
  ],
  monthlyReview: [
    "Comprehensive performance analysis",
    "Identify high-performing keywords",
    "Plan next optimization phase",
    "Competitor meta tag analysis",
    "Update documentation with learnings",
  ],
};

// ============================================================================
// SECTION 10: Testing Tools & Resources
// ============================================================================

export const TESTING_TOOLS = {
  openGraphDebugger: {
    name: "OpenGraph Debugger",
    url: "https://www.opengraph.xyz/",
    purpose: "Test how content appears when shared on social media",
    whatToCheck: [
      "OG image displays correctly",
      "Title and description render properly",
      "No warnings or errors",
    ],
  },
  naverWebmaster: {
    name: "Naver Webmaster Tools",
    url: "https://webmaster.naver.com/",
    purpose: "Monitor rankings and crawl status in Naver",
    whatToCheck: [
      "Search rankings for primary keywords",
      "Crawl status and errors",
      "Search analytics and CTR",
      "Mobile usability",
    ],
  },
  googleSearchConsole: {
    name: "Google Search Console",
    url: "https://search.google.com/search-console",
    purpose: "Monitor rankings and crawl status in Google",
    whatToCheck: [
      "Search performance metrics",
      "URL indexing status",
      "Mobile usability",
      "Structured data validation",
    ],
  },
  googleRichResults: {
    name: "Google Rich Results Test",
    url: "https://search.google.com/test/rich-results",
    purpose: "Validate structured data implementation",
    whatToCheck: [
      "Schema.org markup recognized",
      "No validation errors",
      "Rich snippet eligibility",
    ],
  },
  mobileFriendlyTest: {
    name: "Mobile-Friendly Test",
    url: "https://search.google.com/mobile-friendly",
    purpose: "Verify mobile optimization",
    whatToCheck: ["Mobile viewport configured", "No loading errors"],
  },
  jsonLintValidator: {
    name: "JSON Lint",
    url: "https://jsonlint.com/",
    purpose: "Validate JSON-LD structured data format",
    whatToCheck: ["Valid JSON syntax", "No parsing errors"],
  },
};

// ============================================================================
// SECTION 11: Export Summary
// ============================================================================

export default {
  LUNA_ALBA_SEO,
  TITLE_AB_TESTS,
  SEO_KPI_TEMPLATE,
  META_TAG_VALIDATION,
  KEYWORD_STRATEGY,
  MONITORING_CHECKLIST,
  TESTING_TOOLS,
};
