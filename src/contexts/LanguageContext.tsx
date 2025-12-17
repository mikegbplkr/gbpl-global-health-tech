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
