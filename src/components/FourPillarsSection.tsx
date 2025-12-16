import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, FileCheck, Package, Settings } from 'lucide-react';

interface FourPillarsSectionProps {
  language: 'en' | 'ko';
}

export default function FourPillarsSection({ language }: FourPillarsSectionProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const content = {
    en: {
      title: 'The 4 Pillars',
      subtitle: 'Export Support Services',
      pillars: [
        {
          icon: Network,
          title: 'Global PoC & Validation',
          shortDesc: 'Direct cooperation with overseas hospitals for proof-of-concept validation.',
          longDesc:
            'Exclusive access to our proprietary PoC networks in UK, Chile, and Brazil. Test your products in real clinical environments, drastically lowering market entry risk.',
          usps: [
            'Immediate access to overseas clinical testing',
            'Real-world validation with medical professionals',
            'Reduced time-to-market by 40%',
          ],
        },
        {
          icon: FileCheck,
          title: 'End-to-End Export Execution',
          shortDesc: 'Comprehensive support from market research to final distribution.',
          longDesc:
            'Full-cycle support covering market research, regulatory compliance (FDA/CE), buyer/distributor matching, and localized sales strategy planning.',
          usps: [
            'Complete regulatory guidance',
            'Buyer and distributor matching',
            'Localized market entry strategies',
          ],
        },
        {
          icon: Package,
          title: 'Joint-Package Export',
          shortDesc: 'Bundle AI software with Korean medical hardware for co-export.',
          longDesc:
            'Combine our proprietary MCV V1 AI platform with Korean-made medical devices (ultrasound, body composition analyzers) to enhance market entry success rates.',
          usps: [
            'Increased PoC success probability',
            'High recognition from overseas partners',
            'Bundled value proposition',
          ],
        },
        {
          icon: Settings,
          title: 'Technical Consulting',
          shortDesc: 'Development and verification based on hospital data and feedback.',
          longDesc:
            'Continuous performance improvement and adaptation based on strict overseas medical field requirements, ensuring quality assurance throughout the process.',
          usps: [
            'Hospital data-driven development',
            'Local medical staff feedback integration',
            'Ongoing performance optimization',
          ],
        },
      ],
    },
    ko: {
      title: '4가지 핵심',
      subtitle: '수출 지원 서비스',
      pillars: [
        {
          icon: Network,
          title: '글로벌 PoC 및 검증',
          shortDesc: '해외 병원과의 직접 협력을 통한 개념 증명 검증.',
          longDesc:
            '영국, 칠레, 브라질의 독점 PoC 네트워크에 대한 독점 액세스. 실제 임상 환경에서 제품을 테스트하여 시장 진입 위험을 대폭 낮춥니다.',
          usps: [
            '해외 임상 테스트에 즉시 액세스',
            '의료 전문가와의 실제 검증',
            '시장 출시 시간 40% 단축',
          ],
        },
        {
          icon: FileCheck,
          title: '엔드투엔드 수출 실행',
          shortDesc: '시장 조사부터 최종 유통까지 포괄적인 지원.',
          longDesc:
            '시장 조사, 규제 준수(FDA/CE), 구매자/유통업체 매칭, 현지화된 판매 전략 계획을 포함하는 전체 주기 지원.',
          usps: [
            '완전한 규제 지침',
            '구매자 및 유통업체 매칭',
            '현지화된 시장 진입 전략',
          ],
        },
        {
          icon: Package,
          title: '공동 패키지 수출',
          shortDesc: 'AI 소프트웨어와 한국 의료 하드웨어를 번들로 공동 수출.',
          longDesc:
            '독점 MCV V1 AI 플랫폼을 한국산 의료 기기(초음파, 체성분 분석기)와 결합하여 시장 진입 성공률을 높입니다.',
          usps: [
            'PoC 성공 확률 증가',
            '해외 파트너로부터 높은 인정',
            '번들 가치 제안',
          ],
        },
        {
          icon: Settings,
          title: '기술 컨설팅',
          shortDesc: '병원 데이터 및 피드백을 기반으로 한 개발 및 검증.',
          longDesc:
            '엄격한 해외 의료 분야 요구 사항을 기반으로 지속적인 성능 개선 및 적응을 보장하여 프로세스 전반에 걸쳐 품질을 보장합니다.',
          usps: [
            '병원 데이터 기반 개발',
            '현지 의료진 피드백 통합',
            '지속적인 성능 최적화',
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="export-services" className="py-32 bg-[#1A1A1D] relative overflow-hidden">
      <div className="absolute inset-0 noise-texture opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl lg:text-6xl text-white mb-4">
            {t.title}
          </h2>
          <p className="font-heading text-2xl text-[#0A5F5F]">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {t.pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isExpanded ? 'md:col-span-2' : ''
                }`}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0A5F5F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading text-2xl text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white/70 mb-4">{pillar.shortDesc}</p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <p className="text-white/80 leading-relaxed">
                            {pillar.longDesc}
                          </p>

                          <div className="space-y-2">
                            {pillar.usps.map((usp, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#D4622C] rounded-full mt-2 flex-shrink-0" />
                                <span className="text-white/70">{usp}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button className="mt-4 text-[#0A5F5F] font-heading text-sm hover:text-[#D4622C] transition-colors">
                      {isExpanded ? '− Close' : '+ Learn More'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
