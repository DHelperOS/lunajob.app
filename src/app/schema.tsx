export function LunaAlbaSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://luna-job.com/#organization",
                "name": "루나알바",
                "alternateName": ["LunaAlba", "Luna Alba", "루나 알바"],
                "description": "번호 노출 없이 안전한 프리미엄 전문 야간 구인구직 플랫폼",
                "url": "https://luna-job.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://luna-job.com/favicon.png",
                    "width": 512,
                    "height": 512
                },
                "image": {
                    "@type": "ImageObject",
                    "url": "https://luna-job.com/app_icon_info.webp",
                    "width": 1200,
                    "height": 630
                },
                "sameAs": [
                    "https://apps.apple.com/kr/app/%EB%A3%A8%EB%82%98%EC%95%8C%EB%B0%94/id6756914273",
                    "https://play.google.com/store/apps/details?id=app.lunajob"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "availableLanguage": ["ko", "en"]
                },
                "areaServed": "KR",
                "foundingDate": "2025",
                "knowsAbout": [
                    "야간 알바",
                    "저녁 파트타임",
                    "전문 야간 구인구직",
                    "안심 매칭 서비스",
                    "야간 일자리 플랫폼",
                    "전문 서비스직 모집",
                    "안전한 야간 업무",
                    "구인구직 플랫폼"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://luna-job.com/#website",
                "name": "루나알바",
                "description": "프리미엄 전문 야간 구인구직 플랫폼",
                "url": "https://luna-job.com",
                "inLanguage": "ko-KR",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://luna-job.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                },
                "publisher": {
                    "@id": "https://luna-job.com/#organization"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://luna-job.com/#webpage",
                "url": "https://luna-job.com",
                "name": "야간 알바 | 전문 저녁 파트타임 구인구직 - 루나알바",
                "description": "번호 노출 없이 안전한 전문 야간 구인구직 플랫폼. 저녁 파트타임, 야간 서비스직 실시간 AI 매칭.",
                "isPartOf": {
                    "@id": "https://luna-job.com/#website"
                },
                "about": {
                    "@id": "https://luna-job.com/#organization"
                },
                "inLanguage": "ko-KR"
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://luna-job.com/#app",
                "name": "루나알바",
                "description": "안전하고 투명한 전문 야간 구인구직 매칭 플랫폼",
                "url": "https://luna-job.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": ["iOS", "Android", "Web"],
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "KRW"
                },
                "author": {
                    "@id": "https://luna-job.com/#organization"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://luna-job.com/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "루나알바는 어떤 플랫폼인가요?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "루나알바는 번호 노출 없이 안전하게 전문 야간 업무, 저녁 파트타임을 구할 수 있는 프리미엄 구인구직 플랫폼입니다. AI 매칭 시스템으로 최적의 일자리를 연결해드립니다."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "루나알바는 기존 플랫폼과 무엇이 다른가요?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "루나알바는 프라이버시 보호를 최우선으로 합니다. 번호 노출 없이 안전하게 전문 서비스직을 구할 수 있으며, 투명한 정액제 요금과 AI 기반 매칭으로 차별화됩니다."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "야간 업무 구직 시 안전한가요?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "네, 루나알바는 개인정보 보호와 신원 검증 시스템을 갖추고 있습니다. 번호 노출 없이 안전하게 야간 알바, 저녁 파트타임을 구직할 수 있습니다."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "루나알바 요금제는 어떻게 되나요?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "기본 무료 베이직부터 프리미엄(₩120,000)까지 4단계 투명한 정액제를 제공합니다. 복잡한 과금 없이 명확한 요금제를 운영합니다."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "언제 루나알바를 이용할 수 있나요?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "루나알바는 2026년 1월 12일 그랜드 오프닝 예정입니다. 지금 사전예약하시면 특별 혜택을 받으실 수 있습니다."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
