import { motion } from 'framer-motion';
import { Building2, Rocket } from 'lucide-react';

interface DualValueSectionProps {
  language: 'en' | 'ko';
}

export default function DualValueSection({ language }: DualValueSectionProps) {
  const content = {
    en: {
      overseas: {
        title: 'For Overseas Partners',
        subtitle: 'Validated AI Solutions',
        description:
          'Access cutting-edge medical AI technology with proven clinical validation. Our PoC-enabled platform ensures seamless integration into your healthcare ecosystem.',
        features: [
          'NHS-validated AI imaging solutions',
          'Regulatory compliance support (FDA/CE)',
          'Real-world clinical data integration',
          'Ongoing technical consultation',
        ],
        cta: 'Explore Partnership',
      },
      sme: {
        title: 'For Korean SMEs',
        subtitle: 'Complete Export Support',
        description:
          'Navigate global markets with confidence. We provide end-to-end support from PoC validation to final distribution, leveraging our exclusive international networks.',
        features: [
          'Direct access to UK/Chile/Brazil PoC networks',
          'Full regulatory guidance and compliance',
          'Joint-package export opportunities',
          'Market research and buyer matching',
        ],
        cta: 'Get Export Support',
      },
    },
    ko: {
      overseas: {
        title: '해외 파트너를 위한',
        subtitle: '검증된 AI 솔루션',
        description:
          '임상적으로 검증된 최첨단 의료 AI 기술에 액세스하세요. PoC 지원 플랫폼은 귀하의 의료 생태계에 원활한 통합을 보장합니다.',
        features: [
          'NHS 검증 AI 이미징 솔루션',
          '규제 준수 지원 (FDA/CE)',
          '실제 임상 데이터 통합',
          '지속적인 기술 컨설팅',
        ],
        cta: '파트너십 탐색',
      },
      sme: {
        title: '한국 중소기업을 위한',
        subtitle: '완전한 수출 지원',
        description:
          '자신감을 가지고 글로벌 시장을 탐색하세요. PoC 검증부터 최종 유통까지 독점 국제 네트워크를 활용한 엔드투엔드 지원을 제공합니다.',
        features: [
          '영국/칠레/브라질 PoC 네트워크 직접 액세스',
          '완전한 규제 지침 및 준수',
          '공동 패키지 수출 기회',
          '시장 조사 및 구매자 매칭',
        ],
        cta: '수출 지원 받기',
      },
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Overseas Partners Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 noise-texture"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A5F5F]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#0A5F5F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-display text-4xl text-[#1A1A1D] mb-2">
                {t.overseas.title}
              </h3>
              <p className="font-heading text-xl text-[#0A5F5F] mb-6">
                {t.overseas.subtitle}
              </p>

              <p className="text-[#1A1A1D]/70 mb-8 leading-relaxed">
                {t.overseas.description}
              </p>

              <ul className="space-y-3 mb-8">
                {t.overseas.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0A5F5F] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1A1A1D]/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0A5F5F] text-white font-heading rounded-lg hover:bg-[#0A5F5F]/90 transition-all hover:scale-[0.98]"
              >
                {t.overseas.cta}
              </a>
            </div>
          </motion.div>

          {/* Korean SMEs Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 noise-texture"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4622C]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#D4622C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-display text-4xl text-[#1A1A1D] mb-2">
                {t.sme.title}
              </h3>
              <p className="font-heading text-xl text-[#D4622C] mb-6">
                {t.sme.subtitle}
              </p>

              <p className="text-[#1A1A1D]/70 mb-8 leading-relaxed">
                {t.sme.description}
              </p>

              <ul className="space-y-3 mb-8">
                {t.sme.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#D4622C] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1A1A1D]/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#D4622C] text-white font-heading rounded-lg hover:bg-[#D4622C]/90 transition-all hover:scale-[0.98]"
              >
                {t.sme.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
