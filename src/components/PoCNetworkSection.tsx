import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Users, TrendingUp } from 'lucide-react';

interface PoCNetworkSectionProps {
  language: 'en' | 'ko';
}

export default function PoCNetworkSection({ language }: PoCNetworkSectionProps) {
  const [selectedHub, setSelectedHub] = useState<number | null>(null);

  const content = {
    en: {
      title: 'Global PoC Network',
      subtitle: 'Three Strategic Hubs',
      hubs: [
        {
          region: 'United Kingdom',
          flag: '🇬🇧',
          color: '#0A5F5F',
          partner: 'Bristol NHS Medical Staff',
          status: 'Active Discussions',
          purpose: 'European Gateway',
          description:
            'Securing clinical feedback and real-world validation in an advanced market with over 60% NHS AI adoption.',
          projects: [
            'Brain tumor observation AI solution project',
            'Clinical validation protocols',
            'NHS integration pathways',
          ],
          stats: [
            { label: 'AI Adoption', value: '60%+' },
            { label: 'Active Projects', value: '3' },
          ],
        },
        {
          region: 'Chile',
          flag: '🇨🇱',
          color: '#D4622C',
          partner: 'BIOANDINA SPA & Ministry of Health',
          status: 'MOU Signed',
          purpose: 'LatAm Bridgehead',
          description:
            'Verification and pilot application aligning with government-led healthcare digitalization.',
          projects: [
            'Government healthcare digitalization',
            'Regional pilot programs',
            'LatAm market gateway',
          ],
          stats: [
            { label: 'MOH Partnership', value: 'Active' },
            { label: 'Pilot Sites', value: '5' },
          ],
        },
        {
          region: 'Brazil',
          flag: '🇧🇷',
          color: '#0A5F5F',
          partner: 'Local Medical Institutions',
          status: 'Validation Phase',
          purpose: 'LatAm Major Market',
          description:
            'Conducting validation to meet local registration and sales requirements in the largest South American medical market.',
          projects: [
            'Local registration compliance',
            'Clinical validation studies',
            'Distribution network development',
          ],
          stats: [
            { label: 'Market Size', value: '#1 LatAm' },
            { label: 'Partners', value: '8+' },
          ],
        },
      ],
    },
    ko: {
      title: '글로벌 PoC 네트워크',
      subtitle: '3개의 전략적 허브',
      hubs: [
        {
          region: '영국',
          flag: '🇬🇧',
          color: '#0A5F5F',
          partner: 'Bristol NHS 의료진',
          status: '활발한 논의 중',
          purpose: '유럽 관문',
          description:
            '60% 이상의 NHS AI 채택률을 보이는 선진 시장에서 임상 피드백 및 실제 검증을 확보합니다.',
          projects: [
            '뇌종양 관찰 AI 솔루션 프로젝트',
            '임상 검증 프로토콜',
            'NHS 통합 경로',
          ],
          stats: [
            { label: 'AI 채택률', value: '60%+' },
            { label: '활성 프로젝트', value: '3' },
          ],
        },
        {
          region: '칠레',
          flag: '🇨🇱',
          color: '#D4622C',
          partner: 'BIOANDINA SPA 및 보건부',
          status: 'MOU 체결',
          purpose: '중남미 교두보',
          description:
            '정부 주도 의료 디지털화에 맞춘 검증 및 파일럿 애플리케이션.',
          projects: [
            '정부 의료 디지털화',
            '지역 파일럿 프로그램',
            '중남미 시장 관문',
          ],
          stats: [
            { label: '보건부 파트너십', value: '활성' },
            { label: '파일럿 사이트', value: '5' },
          ],
        },
        {
          region: '브라질',
          flag: '🇧🇷',
          color: '#0A5F5F',
          partner: '현지 의료 기관',
          status: '검증 단계',
          purpose: '중남미 주요 시장',
          description:
            '남미 최대 의료 시장에서 현지 등록 및 판매 요구 사항을 충족하기 위한 검증을 수행합니다.',
          projects: [
            '현지 등록 준수',
            '임상 검증 연구',
            '유통 네트워크 개발',
          ],
          stats: [
            { label: '시장 규모', value: '중남미 1위' },
            { label: '파트너', value: '8+' },
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="poc-network" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F3] to-white" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl lg:text-6xl text-[#1A1A1D] mb-4">
            {t.title}
          </h2>
          <p className="font-heading text-2xl text-[#0A5F5F]">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.hubs.map((hub, index) => {
            const isSelected = selectedHub === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isSelected ? 'ring-2 ring-offset-4' : ''
                }`}
                style={{
                  ringColor: isSelected ? hub.color : 'transparent',
                }}
                onClick={() => setSelectedHub(isSelected ? null : index)}
              >
                {/* Pulse indicator */}
                <div className="absolute -top-2 -right-2">
                  <div className="relative">
                    <div
                      className="w-4 h-4 rounded-full animate-ping absolute"
                      style={{ backgroundColor: hub.color, opacity: 0.4 }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: hub.color }}
                    />
                  </div>
                </div>

                <div className="text-5xl mb-4">{hub.flag}</div>

                <h3 className="font-heading text-2xl text-[#1A1A1D] mb-2">
                  {hub.region}
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-heading mb-4"
                  style={{
                    backgroundColor: `${hub.color}20`,
                    color: hub.color,
                  }}
                >
                  {hub.status}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#0A5F5F] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#1A1A1D]/70">{hub.partner}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0A5F5F] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#1A1A1D]/70">{hub.purpose}</span>
                  </div>
                </div>

                <p className="text-sm text-[#1A1A1D]/60 mb-6 leading-relaxed">
                  {hub.description}
                </p>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 border-t pt-6"
                    >
                      <div>
                        <h4 className="font-heading text-sm text-[#1A1A1D] mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Active Projects
                        </h4>
                        <ul className="space-y-2">
                          {hub.projects.map((project, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{ backgroundColor: hub.color }}
                              />
                              <span className="text-[#1A1A1D]/70">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {hub.stats.map((stat, i) => (
                          <div key={i} className="text-center p-3 bg-[#F8F6F3] rounded-lg">
                            <div
                              className="font-mono text-xl font-bold mb-1"
                              style={{ color: hub.color }}
                            >
                              {stat.value}
                            </div>
                            <div className="text-xs text-[#1A1A1D]/60">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  className="mt-4 text-sm font-heading transition-colors"
                  style={{ color: hub.color }}
                >
                  {isSelected ? '− Close' : '+ View Details'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
