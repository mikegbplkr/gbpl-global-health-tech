import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "EN" | "KO";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navigation
    "nav.home": "Home",
    "nav.aboutUs": "About Us",
    "nav.companyProfile": "Company Profile",
    "nav.ourStrength": "Our Strength",
    "nav.solutions": "Solutions",
    "nav.aiPlatform": "AI Platform",
    "nav.exportServices": "Export Services",
    "nav.globalNetwork": "Global Network",
    "nav.pocNetwork": "PoC Network",
    "nav.successStories": "Success Stories",
    "nav.performance": "Performance",
    "nav.trackRecord": "Track Record",
    "nav.roadmap": "Roadmap",
    "nav.contact": "Contact",
    "nav.contactUs": "Contact Us",

    // Hero Section
    "hero.badge": "2025 Seoul SBA Strategic Partner",
    "hero.title1": "Accelerate Your",
    "hero.title2": "Global Market Entry",
    "hero.description": "AI-driven, PoC-enabled export platform for Korean health tech SMEs. Bridge your medical innovation to global healthcare markets with proven clinical validation.",
    "hero.cta1": "Book Your PoC Consultation",
    "hero.cta2": "Explore Our Platform",
    "hero.stat1": "Revenue Growth",
    "hero.stat2": "Global Hubs",
    "hero.stat3": "SME Partners",

    // Value Props
    "value.title": "The Hybrid Export Enablement Platform",
    "value.subtitle": "Combining proprietary AI technology with exclusive global networks and comprehensive export execution",
    "value.ai.title": "AI Medical Imaging",
    "value.ai.description": "Proprietary AI solutions for fatty liver diagnosis and chest X-ray analysis, developed with university hospital data.",
    "value.network.title": "Global PoC Network",
    "value.network.description": "Exclusive access to clinical validation in UK, Chile, and Brazil through direct hospital partnerships.",
    "value.export.title": "Export Execution",
    "value.export.description": "End-to-end support from regulatory guidance (FDA/CE) to buyer matching and localized sales strategy.",

    // Problem-Solution
    "problem.title": "SME Pain Points",
    "solution.title": "GBPL Solutions",
    "problem1": "Complex Regulatory Barriers",
    "solution1": "FDA/CE compliance guides and certification manuals",
    "problem2": "Data Compatibility Issues",
    "solution2": "Local system integration and validation testing",
    "problem3": "No PoC Opportunities",
    "solution3": "Direct access to overseas hospital testing environments",

    // Network Map
    "network.title": "Our Global PoC Network",
    "network.subtitle": "Strategic partnerships across three continents for clinical validation and market entry",
    "network.clickToExplore": "Click markers to explore our network",

    // Trust Indicators
    "trust.title": "Trusted By Industry Leaders",

    // Financial Chart
    "financial.title": "Proven Financial Growth",
    "financial.subtitle": "Consistent year-over-year revenue growth demonstrating market validation and business sustainability",
    "financial.revenue": "Revenue",
    "financial.growth": "YoY Growth",

    // CTA Section
    "cta.title": "Ready to Go Global?",
    "cta.subtitle": "Whether you're an overseas partner seeking innovative Korean health tech or an SME looking to expand internationally, we're here to help.",
    "cta.forPartners": "For Partners",
    "cta.forPartners.desc": "Access cutting-edge Korean medical technology through our curated SME portfolio",
    "cta.forSMEs": "For SMEs",
    "cta.forSMEs.desc": "Get comprehensive export support from regulatory guidance to market entry",
    "cta.explorePartnership": "Explore Partnership",
    "cta.startJourney": "Start Your Journey",

    // Footer
    "footer.description": "AI-driven, PoC-enabled export platform for Korean health tech SMEs. Bridging medical innovation to global healthcare markets.",
    "footer.quickLinks": "Quick Links",
    "footer.solutions": "Solutions",
    "footer.contact": "Contact",
    "footer.address": "Seoul, South Korea",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to accelerate your global market entry? Let's discuss how GBPL can help you achieve your international expansion goals.",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company Name",
    "contact.form.inquiryType": "Inquiry Type",
    "contact.form.inquiryType.placeholder": "Select inquiry type",
    "contact.form.inquiryType.partnership": "Partnership Inquiry",
    "contact.form.inquiryType.sme": "SME Export Support",
    "contact.form.inquiryType.ai": "AI Platform Demo",
    "contact.form.inquiryType.general": "General Inquiry",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message Sent!",
    "contact.form.successDesc": "Thank you for reaching out. Our team will get back to you within 24 hours.",
    "contact.form.sendAnother": "Send Another Message",
    "contact.info.title": "Contact Information",
    "contact.info.visitUs": "Visit Us",
    "contact.info.callUs": "Call Us",
    "contact.info.emailUs": "Email Us",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursValue": "Mon - Fri: 9:00 AM - 6:00 PM KST",

    // About - Company Profile
    "company.title": "Company Profile",
    "company.subtitle": "Building bridges between Korean health tech innovation and global healthcare markets since 2019",
    "company.mission.title": "Our Mission",
    "company.mission.description": "To accelerate the global expansion of Korean health tech SMEs by providing comprehensive AI-driven solutions and exclusive access to international clinical validation networks.",
    "company.timeline.title": "Our Journey",

    // About - Our Strength
    "strength.title": "Our Strength",
    "strength.subtitle": "What sets GBPL apart in the health tech export enablement space",
    "strength.tab.technical": "Technical Foundation",
    "strength.tab.global": "Global Reach",
    "strength.tab.financial": "Financial Stability",

    // Solutions - AI Platform
    "aiplatform.title": "AI Medical Imaging Platform",
    "aiplatform.subtitle": "Proprietary AI solutions developed with university hospital data for accurate medical diagnosis",
    "aiplatform.features.title": "Platform Features",
    "aiplatform.demo.title": "See It In Action",

    // Solutions - Export Services
    "exportservices.title": "Export Support Services",
    "exportservices.subtitle": "Comprehensive end-to-end support for Korean health tech SMEs entering global markets",

    // Network - PoC Network
    "pocnetwork.title": "Global PoC Network",
    "pocnetwork.subtitle": "Strategic partnerships across three continents for clinical validation and market entry",

    // Network - Success Stories
    "successstories.title": "Success Stories",
    "successstories.subtitle": "Real results from our partnership with Korean health tech SMEs",

    // Performance - Track Record
    "trackrecord.title": "Track Record",
    "trackrecord.subtitle": "Proven results in helping Korean health tech SMEs achieve global success",

    // Performance - Roadmap
    "roadmap.title": "Roadmap & Commitment",
    "roadmap.subtitle": "Our strategic vision for the future of Korean health tech exports",

    // Common
    "common.learnMore": "Learn More",
    "common.viewAll": "View All",
    "common.readMore": "Read More",
    "common.loading": "Loading...",

    // Company Profile Page
    "company.hero.badge": "About Us",
    "company.hero.title": "Company Profile",
    "company.hero.description": "A Seoul-based company combining proprietary AI medical imaging technology with an exclusive global PoC network to help Korean health tech SMEs enter international markets.",
    "company.mission.heading": "Our Mission",
    "company.mission.text": "To bridge Korean medical innovation with global healthcare markets by providing comprehensive, technology-driven export enablement services that dramatically reduce market entry risk for health tech SMEs.",
    "company.vision.heading": "Our Vision",
    "company.vision.text": "To become the leading hybrid export enablement platform in Asia, supporting the global expansion of 10+ Korean medical device and health tech SMEs annually while establishing a sustainable ecosystem for international healthcare innovation.",
    "company.journey.badge": "Our Journey",
    "company.journey.title": "Company Timeline",
    "company.leadership.badge": "Leadership",
    "company.leadership.title": "Meet Our Team",
    "company.leadership.expertise": "Areas of Expertise",
    "company.certifications.badge": "Certifications",
    "company.certifications.title": "Official Recognitions",

    // Timeline items
    "timeline.2022.title": "Company Founded",
    "timeline.2022.description": "GBPL Co., Ltd. established in Seoul with a focus on AI and IT solutions",
    "timeline.2023q2.title": "Research Institute Certification",
    "timeline.2023q2.description": "Obtained corporate research institute certification, strengthening R&D capabilities",
    "timeline.2023q4.title": "Venture Enterprise Certification",
    "timeline.2023q4.description": "Recognized as a venture enterprise, validating innovative business model",
    "timeline.2024q1.title": "AI Voucher Supplier Registration",
    "timeline.2024q1.description": "Registered as an official AI voucher supplier, expanding service offerings",
    "timeline.2024q3.title": "Global PoC Network Expansion",
    "timeline.2024q3.description": "Established partnerships with UK NHS, Chile MOH, and Brazil medical institutions",
    "timeline.2024q4.title": "Revenue Milestone",
    "timeline.2024q4.description": "Achieved KRW 1.88 billion revenue with 52% year-over-year growth",

    // Our Strength Page
    "strength.hero.badge": "Our Strength",
    "strength.hero.title": "What Sets Us Apart",
    "strength.hero.description": "Discover the unique combination of technology, network, and financial stability that makes GBPL the ideal partner for your global expansion.",
    "strength.tab.technical.title": "University Hospital-Grade AI Technology",
    "strength.tab.technical.description": "Proven AI model development based on university hospital data and stability from large-scale IT/SI projects.",
    "strength.tab.global.title": "Exclusive 3-Hub PoC Network",
    "strength.tab.global.description": "Direct partnerships with national and public healthcare institutions across three strategic regions.",
    "strength.tab.financial.title": "Proven Growth & Stable Cash Flow",
    "strength.tab.financial.description": "Strong financial foundation with explosive growth and stable enterprise client base.",
    "strength.feature.aiModels": "Proprietary AI Models",
    "strength.feature.aiModels.desc": "Fatty liver diagnosis and chest X-ray analysis algorithms developed with clinical data",
    "strength.feature.infrastructure": "Enterprise-Grade Infrastructure",
    "strength.feature.infrastructure.desc": "Scalable SaaS platform optimized for overseas deployment and technical verification",
    "strength.feature.improvement": "Continuous Improvement",
    "strength.feature.improvement.desc": "Algorithm enhancement based on real clinical feedback from overseas medical staff",
    "strength.feature.uk": "UK - European Gateway",
    "strength.feature.uk.desc": "Bristol NHS collaboration with 60%+ AI adoption rate, brain tumor AI project discussions",
    "strength.feature.chile": "Chile - LatAm Bridgehead",
    "strength.feature.chile.desc": "BIOANDINA SPA & Ministry of Health MOU for government-led healthcare digitalization",
    "strength.feature.brazil": "Brazil - Major Market",
    "strength.feature.brazil.desc": "Local medical institution partnerships with ANVISA registration support",
    "strength.feature.revenue": "Revenue Growth",
    "strength.feature.revenue.desc": "52% year-over-year growth from KRW 1.23B (2023) to KRW 1.88B (2024)",
    "strength.feature.enterprise": "Enterprise Clients",
    "strength.feature.enterprise.desc": "Major IT/SI projects with AIA Life, Kyobo Book Centre, Hyundai Motor Group",
    "strength.feature.team": "Team Expansion",
    "strength.feature.team.desc": "166% workforce growth from 6 to 16 employees, demonstrating scaling capability",
    "strength.stat.aiModels": "AI Models Deployed",
    "strength.stat.dataPoints": "Clinical Data Points",
    "strength.stat.accuracy": "Accuracy Rate",
    "strength.stat.globalHubs": "Global Hubs",
    "strength.stat.partners": "Partner Institutions",
    "strength.stat.activePocs": "Active PoCs",
    "strength.stat.revenue2024": "2024 Revenue",
    "strength.stat.yoyGrowth": "YoY Growth",
    "strength.stat.teamSize": "Team Size",

    // AI Platform Page
    "aiplatform.hero.badge": "AI Solutions",
    "aiplatform.hero.title": "AI Medical Imaging Platform",
    "aiplatform.hero.description": "Proprietary AI solutions developed with university hospital data for accurate medical diagnosis and clinical decision support.",
    "aiplatform.products.badge": "Our Products",
    "aiplatform.products.title": "AI Diagnostic Solutions",
    "aiplatform.features.badge": "Platform Features",
    "aiplatform.features.title": "Technical Capabilities",
    "aiplatform.demo.badge": "See It In Action",
    "aiplatform.demo.title": "Platform Demo",
    "aiplatform.demo.description": "Experience our AI medical imaging platform in action. Contact us for a personalized demonstration.",
    "aiplatform.demo.cta": "Request Demo",

    // Export Services Page
    "exportservices.hero.badge": "Export Support",
    "exportservices.hero.title": "Export Support Services",
    "exportservices.hero.description": "Comprehensive end-to-end support for Korean health tech SMEs entering global markets.",
    "exportservices.pillars.badge": "Our Services",
    "exportservices.pillars.title": "Four Pillars of Export Support",
    "exportservices.process.badge": "How It Works",
    "exportservices.process.title": "Export Journey",
    "exportservices.cta.title": "Ready to Start Your Export Journey?",
    "exportservices.cta.description": "Let us help you navigate the complexities of international market entry.",
    "exportservices.cta.button": "Get Started",

    // PoC Network Page
    "pocnetwork.hero.badge": "Global Network",
    "pocnetwork.hero.title": "PoC Network Overview",
    "pocnetwork.hero.description": "Strategic partnerships across three continents for clinical validation and market entry.",
    "pocnetwork.regions.badge": "Our Regions",
    "pocnetwork.regions.title": "Global PoC Hubs",
    "pocnetwork.benefits.badge": "Why PoC?",
    "pocnetwork.benefits.title": "Benefits of Our Network",
    "pocnetwork.status.active": "Active PoC",
    "pocnetwork.status.mou": "MOU Signed",
    "pocnetwork.status.planning": "In Planning",

    // Success Stories Page
    "successstories.hero.badge": "Success Stories",
    "successstories.hero.title": "Client Success Stories",
    "successstories.hero.description": "Real results from our partnership with Korean health tech SMEs.",
    "successstories.cases.badge": "Case Studies",
    "successstories.cases.title": "Featured Success Stories",
    "successstories.metrics.badge": "Results",
    "successstories.metrics.title": "Impact Metrics",

    // Track Record Page
    "trackrecord.hero.badge": "Performance",
    "trackrecord.hero.title": "Track Record",
    "trackrecord.hero.description": "Proven results in helping Korean health tech SMEs achieve global success.",
    "trackrecord.projects.badge": "Our Projects",
    "trackrecord.projects.title": "Project Showcase",
    "trackrecord.metrics.badge": "Key Metrics",
    "trackrecord.metrics.title": "Performance Highlights",

    // Roadmap Page
    "roadmap.hero.badge": "Future Plans",
    "roadmap.hero.title": "Roadmap & Commitment",
    "roadmap.hero.description": "Our strategic vision for the future of Korean health tech exports.",
    "roadmap.timeline.badge": "Timeline",
    "roadmap.timeline.title": "Strategic Roadmap",
    "roadmap.commitment.badge": "Our Commitment",
    "roadmap.commitment.title": "What We Promise",
    "roadmap.2025.title": "2025 Goals",
    "roadmap.2026.title": "2026 Goals",
    "roadmap.2027.title": "2027 Goals",

    // Contact Page
    "contact.hero.badge": "Get in Touch",
    "contact.hero.title": "Contact Us",
    "contact.hero.description": "Ready to accelerate your global market entry? Let's discuss how GBPL can support your health tech export journey.",
    "contact.form.heading": "Send Us a Message",
    "contact.form.name.label": "Full Name *",
    "contact.form.name.placeholder": "John Doe",
    "contact.form.email.label": "Email Address *",
    "contact.form.email.placeholder": "john@company.com",
    "contact.form.company.label": "Company Name *",
    "contact.form.company.placeholder": "Your Company",
    "contact.form.inquiryType.label": "Inquiry Type *",
    "contact.form.message.label": "Message *",
    "contact.form.message.placeholder": "Tell us about your project or inquiry...",
    "contact.form.submit.text": "Send Message",
    "contact.form.submitting.text": "Sending...",
    "contact.form.success.title": "Thank You!",
    "contact.form.success.message": "Your message has been sent successfully. We'll get back to you within 24-48 hours.",
    "contact.form.success.button": "Send Another Message",
    "contact.info.heading": "Contact Information",
    "contact.info.address.label": "Visit Us",
    "contact.info.address.value": "Seoul Global Marketing Center, 400 World Cup buk-ro, Mapo-gu, Seoul",
    "contact.info.phone.label": "Call Us",
    "contact.info.email.label": "Email Us",
    "contact.info.hours.label": "Business Hours",
    "contact.info.hours.value": "Mon - Fri: 9:00 AM - 6:00 PM KST",
    "contact.inquiry.sme": "SME Partnership Inquiry",
    "contact.inquiry.global": "Global Partner Inquiry",
    "contact.inquiry.poc": "PoC Request",
    "contact.inquiry.ai": "AI Platform Demo",
    "contact.inquiry.export": "Export Services",
    "contact.inquiry.general": "General Inquiry",
  },
  KO: {
    // Navigation
    "nav.home": "홈",
    "nav.aboutUs": "회사 소개",
    "nav.companyProfile": "회사 개요",
    "nav.ourStrength": "핵심 역량",
    "nav.solutions": "솔루션",
    "nav.aiPlatform": "AI 플랫폼",
    "nav.exportServices": "수출 지원 서비스",
    "nav.globalNetwork": "글로벌 네트워크",
    "nav.pocNetwork": "PoC 네트워크",
    "nav.successStories": "성공 사례",
    "nav.performance": "실적",
    "nav.trackRecord": "실적 현황",
    "nav.roadmap": "로드맵",
    "nav.contact": "문의",
    "nav.contactUs": "문의하기",

    // Hero Section
    "hero.badge": "2025 서울 SBA 전략 파트너",
    "hero.title1": "글로벌 시장 진출을",
    "hero.title2": "가속화하세요",
    "hero.description": "한국 헬스테크 중소기업을 위한 AI 기반, PoC 지원 수출 플랫폼. 검증된 임상 검증을 통해 의료 혁신을 글로벌 헬스케어 시장으로 연결합니다.",
    "hero.cta1": "PoC 상담 예약하기",
    "hero.cta2": "플랫폼 살펴보기",
    "hero.stat1": "매출 성장률",
    "hero.stat2": "글로벌 거점",
    "hero.stat3": "SME 파트너",

    // Value Props
    "value.title": "하이브리드 수출 지원 플랫폼",
    "value.subtitle": "독자적인 AI 기술과 독점적인 글로벌 네트워크, 종합적인 수출 실행력을 결합",
    "value.ai.title": "AI 의료 영상",
    "value.ai.description": "대학병원 데이터로 개발된 지방간 진단 및 흉부 X선 분석을 위한 독자적 AI 솔루션.",
    "value.network.title": "글로벌 PoC 네트워크",
    "value.network.description": "영국, 칠레, 브라질의 병원 파트너십을 통한 독점적 임상 검증 접근.",
    "value.export.title": "수출 실행",
    "value.export.description": "규제 가이드(FDA/CE)부터 바이어 매칭, 현지화 영업 전략까지 엔드투엔드 지원.",

    // Problem-Solution
    "problem.title": "SME 고충",
    "solution.title": "GBPL 솔루션",
    "problem1": "복잡한 규제 장벽",
    "solution1": "FDA/CE 준수 가이드 및 인증 매뉴얼",
    "problem2": "데이터 호환성 문제",
    "solution2": "현지 시스템 통합 및 검증 테스트",
    "problem3": "PoC 기회 부재",
    "solution3": "해외 병원 테스트 환경 직접 접근",

    // Network Map
    "network.title": "글로벌 PoC 네트워크",
    "network.subtitle": "임상 검증 및 시장 진입을 위한 3개 대륙 전략적 파트너십",
    "network.clickToExplore": "마커를 클릭하여 네트워크 탐색",

    // Trust Indicators
    "trust.title": "업계 리더들의 신뢰",

    // Financial Chart
    "financial.title": "검증된 재무 성장",
    "financial.subtitle": "시장 검증과 비즈니스 지속가능성을 보여주는 지속적인 연간 매출 성장",
    "financial.revenue": "매출",
    "financial.growth": "전년 대비 성장률",

    // CTA Section
    "cta.title": "글로벌 진출 준비되셨나요?",
    "cta.subtitle": "혁신적인 한국 헬스테크를 찾는 해외 파트너이든, 국제적으로 확장하려는 중소기업이든, 저희가 도와드리겠습니다.",
    "cta.forPartners": "파트너용",
    "cta.forPartners.desc": "엄선된 SME 포트폴리오를 통해 최첨단 한국 의료 기술에 접근하세요",
    "cta.forSMEs": "SME용",
    "cta.forSMEs.desc": "규제 가이드부터 시장 진입까지 종합적인 수출 지원을 받으세요",
    "cta.explorePartnership": "파트너십 탐색",
    "cta.startJourney": "여정 시작하기",

    // Footer
    "footer.description": "한국 헬스테크 중소기업을 위한 AI 기반, PoC 지원 수출 플랫폼. 의료 혁신을 글로벌 헬스케어 시장으로 연결합니다.",
    "footer.quickLinks": "빠른 링크",
    "footer.solutions": "솔루션",
    "footer.contact": "연락처",
    "footer.address": "대한민국 서울",
    "footer.rights": "모든 권리 보유.",
    "footer.privacy": "개인정보 처리방침",
    "footer.terms": "이용약관",

    // Contact Page
    "contact.title": "문의하기",
    "contact.subtitle": "글로벌 시장 진출을 가속화할 준비가 되셨나요? GBPL이 국제 확장 목표 달성을 어떻게 도울 수 있는지 논의해 보겠습니다.",
    "contact.form.title": "메시지 보내기",
    "contact.form.name": "성명",
    "contact.form.email": "이메일 주소",
    "contact.form.company": "회사명",
    "contact.form.inquiryType": "문의 유형",
    "contact.form.inquiryType.placeholder": "문의 유형 선택",
    "contact.form.inquiryType.partnership": "파트너십 문의",
    "contact.form.inquiryType.sme": "SME 수출 지원",
    "contact.form.inquiryType.ai": "AI 플랫폼 데모",
    "contact.form.inquiryType.general": "일반 문의",
    "contact.form.message": "메시지",
    "contact.form.submit": "메시지 보내기",
    "contact.form.submitting": "전송 중...",
    "contact.form.success": "메시지 전송 완료!",
    "contact.form.successDesc": "문의해 주셔서 감사합니다. 24시간 이내에 답변 드리겠습니다.",
    "contact.form.sendAnother": "다른 메시지 보내기",
    "contact.info.title": "연락처 정보",
    "contact.info.visitUs": "방문",
    "contact.info.callUs": "전화",
    "contact.info.emailUs": "이메일",
    "contact.info.hours": "영업 시간",
    "contact.info.hoursValue": "월 - 금: 오전 9:00 - 오후 6:00 KST",

    // About - Company Profile
    "company.title": "회사 개요",
    "company.subtitle": "2019년부터 한국 헬스테크 혁신과 글로벌 헬스케어 시장을 연결하는 다리 구축",
    "company.mission.title": "우리의 미션",
    "company.mission.description": "종합적인 AI 기반 솔루션과 국제 임상 검증 네트워크에 대한 독점적 접근을 제공하여 한국 헬스테크 중소기업의 글로벌 확장을 가속화합니다.",
    "company.timeline.title": "우리의 여정",

    // About - Our Strength
    "strength.title": "핵심 역량",
    "strength.subtitle": "헬스테크 수출 지원 분야에서 GBPL을 차별화하는 요소",
    "strength.tab.technical": "기술 기반",
    "strength.tab.global": "글로벌 도달",
    "strength.tab.financial": "재무 안정성",

    // Solutions - AI Platform
    "aiplatform.title": "AI 의료 영상 플랫폼",
    "aiplatform.subtitle": "정확한 의료 진단을 위해 대학병원 데이터로 개발된 독자적 AI 솔루션",
    "aiplatform.features.title": "플랫폼 기능",
    "aiplatform.demo.title": "실제 작동 보기",

    // Solutions - Export Services
    "exportservices.title": "수출 지원 서비스",
    "exportservices.subtitle": "글로벌 시장에 진출하는 한국 헬스테크 중소기업을 위한 종합적인 엔드투엔드 지원",

    // Network - PoC Network
    "pocnetwork.title": "글로벌 PoC 네트워크",
    "pocnetwork.subtitle": "임상 검증 및 시장 진입을 위한 3개 대륙 전략적 파트너십",

    // Network - Success Stories
    "successstories.title": "성공 사례",
    "successstories.subtitle": "한국 헬스테크 중소기업과의 파트너십을 통한 실제 결과",

    // Performance - Track Record
    "trackrecord.title": "실적 현황",
    "trackrecord.subtitle": "한국 헬스테크 중소기업의 글로벌 성공을 돕는 검증된 결과",

    // Performance - Roadmap
    "roadmap.title": "로드맵 및 약속",
    "roadmap.subtitle": "한국 헬스테크 수출의 미래를 위한 전략적 비전",

    // Common
    "common.learnMore": "더 알아보기",
    "common.viewAll": "전체 보기",
    "common.readMore": "더 읽기",
    "common.loading": "로딩 중...",

    // Company Profile Page
    "company.hero.badge": "회사 소개",
    "company.hero.title": "회사 개요",
    "company.hero.description": "독자적인 AI 의료 영상 기술과 독점적인 글로벌 PoC 네트워크를 결합하여 한국 헬스테크 중소기업의 해외 시장 진출을 지원하는 서울 기반 기업입니다.",
    "company.mission.heading": "우리의 미션",
    "company.mission.text": "기술 기반의 종합적인 수출 지원 서비스를 제공하여 헬스테크 중소기업의 시장 진입 리스크를 획기적으로 줄이고, 한국 의료 혁신을 글로벌 헬스케어 시장과 연결합니다.",
    "company.vision.heading": "우리의 비전",
    "company.vision.text": "아시아 최고의 하이브리드 수출 지원 플랫폼이 되어, 매년 10개 이상의 한국 의료기기 및 헬스테크 중소기업의 글로벌 확장을 지원하고 국제 헬스케어 혁신을 위한 지속 가능한 생태계를 구축합니다.",
    "company.journey.badge": "우리의 여정",
    "company.journey.title": "회사 연혁",
    "company.leadership.badge": "리더십",
    "company.leadership.title": "팀 소개",
    "company.leadership.expertise": "전문 분야",
    "company.certifications.badge": "인증",
    "company.certifications.title": "공식 인증",

    // Timeline items
    "timeline.2022.title": "회사 설립",
    "timeline.2022.description": "AI 및 IT 솔루션에 중점을 둔 GBPL 주식회사 서울 설립",
    "timeline.2023q2.title": "기업부설연구소 인증",
    "timeline.2023q2.description": "기업부설연구소 인증 획득, R&D 역량 강화",
    "timeline.2023q4.title": "벤처기업 인증",
    "timeline.2023q4.description": "벤처기업으로 인정받아 혁신적인 비즈니스 모델 검증",
    "timeline.2024q1.title": "AI 바우처 공급기업 등록",
    "timeline.2024q1.description": "공식 AI 바우처 공급기업으로 등록, 서비스 제공 확대",
    "timeline.2024q3.title": "글로벌 PoC 네트워크 확장",
    "timeline.2024q3.description": "영국 NHS, 칠레 보건부, 브라질 의료기관과 파트너십 체결",
    "timeline.2024q4.title": "매출 마일스톤",
    "timeline.2024q4.description": "전년 대비 52% 성장한 18.8억원 매출 달성",

    // Our Strength Page
    "strength.hero.badge": "핵심 역량",
    "strength.hero.title": "차별화 요소",
    "strength.hero.description": "GBPL을 글로벌 확장의 이상적인 파트너로 만드는 기술, 네트워크, 재무 안정성의 독특한 조합을 발견하세요.",
    "strength.tab.technical.title": "대학병원급 AI 기술",
    "strength.tab.technical.description": "대학병원 데이터 기반의 검증된 AI 모델 개발과 대규모 IT/SI 프로젝트의 안정성.",
    "strength.tab.global.title": "독점적 3개 거점 PoC 네트워크",
    "strength.tab.global.description": "3개 전략 지역의 국가 및 공공 의료기관과의 직접 파트너십.",
    "strength.tab.financial.title": "검증된 성장 및 안정적 현금흐름",
    "strength.tab.financial.description": "폭발적 성장과 안정적인 기업 고객 기반을 갖춘 강력한 재무 기반.",
    "strength.feature.aiModels": "독자적 AI 모델",
    "strength.feature.aiModels.desc": "임상 데이터로 개발된 지방간 진단 및 흉부 X선 분석 알고리즘",
    "strength.feature.infrastructure": "엔터프라이즈급 인프라",
    "strength.feature.infrastructure.desc": "해외 배포 및 기술 검증에 최적화된 확장 가능한 SaaS 플랫폼",
    "strength.feature.improvement": "지속적 개선",
    "strength.feature.improvement.desc": "해외 의료진의 실제 임상 피드백을 기반으로 한 알고리즘 개선",
    "strength.feature.uk": "영국 - 유럽 관문",
    "strength.feature.uk.desc": "60% 이상의 AI 도입률을 가진 Bristol NHS 협력, 뇌종양 AI 프로젝트 논의",
    "strength.feature.chile": "칠레 - 중남미 교두보",
    "strength.feature.chile.desc": "정부 주도 헬스케어 디지털화를 위한 BIOANDINA SPA 및 보건부 MOU",
    "strength.feature.brazil": "브라질 - 주요 시장",
    "strength.feature.brazil.desc": "ANVISA 등록 지원과 함께 현지 의료기관 파트너십",
    "strength.feature.revenue": "매출 성장",
    "strength.feature.revenue.desc": "12.3억원(2023)에서 18.8억원(2024)으로 전년 대비 52% 성장",
    "strength.feature.enterprise": "기업 고객",
    "strength.feature.enterprise.desc": "AIA생명, 교보문고, 현대자동차그룹과의 주요 IT/SI 프로젝트",
    "strength.feature.team": "팀 확장",
    "strength.feature.team.desc": "6명에서 16명으로 166% 인력 성장, 확장 역량 입증",
    "strength.stat.aiModels": "배포된 AI 모델",
    "strength.stat.dataPoints": "임상 데이터 포인트",
    "strength.stat.accuracy": "정확도",
    "strength.stat.globalHubs": "글로벌 거점",
    "strength.stat.partners": "파트너 기관",
    "strength.stat.activePocs": "활성 PoC",
    "strength.stat.revenue2024": "2024 매출",
    "strength.stat.yoyGrowth": "전년 대비 성장률",
    "strength.stat.teamSize": "팀 규모",

    // AI Platform Page
    "aiplatform.hero.badge": "AI 솔루션",
    "aiplatform.hero.title": "AI 의료 영상 플랫폼",
    "aiplatform.hero.description": "정확한 의료 진단 및 임상 의사결정 지원을 위해 대학병원 데이터로 개발된 독자적 AI 솔루션.",
    "aiplatform.products.badge": "제품",
    "aiplatform.products.title": "AI 진단 솔루션",
    "aiplatform.features.badge": "플랫폼 기능",
    "aiplatform.features.title": "기술 역량",
    "aiplatform.demo.badge": "실제 작동 보기",
    "aiplatform.demo.title": "플랫폼 데모",
    "aiplatform.demo.description": "AI 의료 영상 플랫폼을 직접 체험해 보세요. 맞춤형 데모를 위해 문의해 주세요.",
    "aiplatform.demo.cta": "데모 요청",

    // Export Services Page
    "exportservices.hero.badge": "수출 지원",
    "exportservices.hero.title": "수출 지원 서비스",
    "exportservices.hero.description": "글로벌 시장에 진출하는 한국 헬스테크 중소기업을 위한 종합적인 엔드투엔드 지원.",
    "exportservices.pillars.badge": "서비스",
    "exportservices.pillars.title": "수출 지원의 4대 축",
    "exportservices.process.badge": "진행 방식",
    "exportservices.process.title": "수출 여정",
    "exportservices.cta.title": "수출 여정을 시작할 준비가 되셨나요?",
    "exportservices.cta.description": "국제 시장 진입의 복잡성을 함께 해결해 드리겠습니다.",
    "exportservices.cta.button": "시작하기",

    // PoC Network Page
    "pocnetwork.hero.badge": "글로벌 네트워크",
    "pocnetwork.hero.title": "PoC 네트워크 개요",
    "pocnetwork.hero.description": "임상 검증 및 시장 진입을 위한 3개 대륙 전략적 파트너십.",
    "pocnetwork.regions.badge": "지역",
    "pocnetwork.regions.title": "글로벌 PoC 거점",
    "pocnetwork.benefits.badge": "왜 PoC인가?",
    "pocnetwork.benefits.title": "네트워크의 이점",
    "pocnetwork.status.active": "활성 PoC",
    "pocnetwork.status.mou": "MOU 체결",
    "pocnetwork.status.planning": "계획 중",

    // Success Stories Page
    "successstories.hero.badge": "성공 사례",
    "successstories.hero.title": "고객 성공 사례",
    "successstories.hero.description": "한국 헬스테크 중소기업과의 파트너십을 통한 실제 결과.",
    "successstories.cases.badge": "사례 연구",
    "successstories.cases.title": "주요 성공 사례",
    "successstories.metrics.badge": "결과",
    "successstories.metrics.title": "영향 지표",

    // Track Record Page
    "trackrecord.hero.badge": "실적",
    "trackrecord.hero.title": "실적 현황",
    "trackrecord.hero.description": "한국 헬스테크 중소기업의 글로벌 성공을 돕는 검증된 결과.",
    "trackrecord.projects.badge": "프로젝트",
    "trackrecord.projects.title": "프로젝트 쇼케이스",
    "trackrecord.metrics.badge": "주요 지표",
    "trackrecord.metrics.title": "성과 하이라이트",

    // Roadmap Page
    "roadmap.hero.badge": "미래 계획",
    "roadmap.hero.title": "로드맵 및 약속",
    "roadmap.hero.description": "한국 헬스테크 수출의 미래를 위한 전략적 비전.",
    "roadmap.timeline.badge": "타임라인",
    "roadmap.timeline.title": "전략적 로드맵",
    "roadmap.commitment.badge": "약속",
    "roadmap.commitment.title": "우리의 약속",
    "roadmap.2025.title": "2025년 목표",
    "roadmap.2026.title": "2026년 목표",
    "roadmap.2027.title": "2027년 목표",

    // Contact Page
    "contact.hero.badge": "문의하기",
    "contact.hero.title": "연락처",
    "contact.hero.description": "글로벌 시장 진출을 가속화할 준비가 되셨나요? GBPL이 헬스테크 수출 여정을 어떻게 지원할 수 있는지 논의해 보겠습니다.",
    "contact.form.heading": "메시지 보내기",
    "contact.form.name.label": "성명 *",
    "contact.form.name.placeholder": "홍길동",
    "contact.form.email.label": "이메일 주소 *",
    "contact.form.email.placeholder": "hong@company.com",
    "contact.form.company.label": "회사명 *",
    "contact.form.company.placeholder": "회사명",
    "contact.form.inquiryType.label": "문의 유형 *",
    "contact.form.message.label": "메시지 *",
    "contact.form.message.placeholder": "프로젝트나 문의 사항에 대해 알려주세요...",
    "contact.form.submit.text": "메시지 보내기",
    "contact.form.submitting.text": "전송 중...",
    "contact.form.success.title": "감사합니다!",
    "contact.form.success.message": "메시지가 성공적으로 전송되었습니다. 24-48시간 이내에 답변 드리겠습니다.",
    "contact.form.success.button": "다른 메시지 보내기",
    "contact.info.heading": "연락처 정보",
    "contact.info.address.label": "방문",
    "contact.info.address.value": "서울특별시 마포구 월드컵북로 400, 서울글로벌마케팅센터",
    "contact.info.phone.label": "전화",
    "contact.info.email.label": "이메일",
    "contact.info.hours.label": "영업 시간",
    "contact.info.hours.value": "월 - 금: 오전 9:00 - 오후 6:00 KST",
    "contact.inquiry.sme": "SME 파트너십 문의",
    "contact.inquiry.global": "글로벌 파트너 문의",
    "contact.inquiry.poc": "PoC 요청",
    "contact.inquiry.ai": "AI 플랫폼 데모",
    "contact.inquiry.export": "수출 서비스",
    "contact.inquiry.general": "일반 문의",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("gbpl-language");
    return (saved as Language) || "EN";
  });

  useEffect(() => {
    localStorage.setItem("gbpl-language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
