import { motion } from 'framer-motion';
import { Brain, Scan, Cloud, CheckCircle } from 'lucide-react';

interface AIPlatformSectionProps {
  language: 'en' | 'ko';
}

export default function AIPlatformSection({ language }: AIPlatformSectionProps) {
  const content = {
    en: {
      title: 'AI Medical Imaging Platform',
      subtitle: 'MCV V1 Technology',
      description:
        'Our proprietary AI platform delivers automated medical image analysis with clinical-grade accuracy, optimized for global deployment.',
      features: [
        {
          icon: Brain,
          title: 'Fatty Liver Diagnosis',
          description:
            'Automated analysis of fatty liver severity using ultrasound images for early, non-invasive diagnosis.',
          benefits: ['Early detection', 'Non-invasive', 'Clinical validation'],
        },
        {
          icon: Scan,
          title: 'Chest X-ray Detection',
          description:
            'Advanced algorithms for detecting pulmonary nodules and pleural diseases on chest X-rays.',
          benefits: ['Enhanced accuracy', 'Faster diagnosis', 'Respiratory focus'],
        },
        {
          icon: Cloud,
          title: 'Cloud-Based Platform',
          description:
            'Scalable SaaS model for medical image upload and automatic AI analysis report generation.',
          benefits: ['Scalable deployment', 'Real-time analysis', 'PoC optimized'],
        },
      ],
      cta: 'Request Demo',
    },
    ko: {
      title: 'AI 의료 이미징 플랫폼',
      subtitle: 'MCV V1 기술',
      description:
        '독점 AI 플랫폼은 임상 등급 정확도로 자동화된 의료 이미지 분석을 제공하며 글로벌 배포에 최적화되어 있습니다.',
      features: [
        {
          icon: Brain,
          title: '지방간 진단',
          description:
            '초음파 이미지를 사용한 지방간 중증도의 자동 분석으로 조기 비침습적 진단을 제공합니다.',
          benefits: ['조기 발견', '비침습적', '임상 검증'],
        },
        {
          icon: Scan,
          title: '흉부 X선 검출',
          description:
            '흉부 X선에서 폐 결절 및 흉막 질환을 감지하는 고급 알고리즘.',
          benefits: ['향상된 정확도', '빠른 진단', '호흡기 집중'],
        },
        {
          icon: Cloud,
          title: '클라우드 기반 플랫폼',
          description:
            '의료 이미지 업로드 및 자동 AI 분석 보고서 생성을 위한 확장 가능한 SaaS 모델.',
          benefits: ['확장 가능한 배포', '실시간 분석', 'PoC 최적화'],
        },
      ],
      cta: '데모 요청',
    },
  };

  const t = content[language];

  return (
    <section id="ai-platform" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 noise-texture" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl lg:text-6xl text-[#1A1A1D] mb-4">
            {t.title}
          </h2>
          <p className="font-heading text-2xl text-[#0A5F5F] mb-6">{t.subtitle}</p>
          <p className="text-lg text-[#1A1A1D]/70 leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-gradient-to-br from-[#0A5F5F]/5 to-transparent rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#0A5F5F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-heading text-xl text-[#1A1A1D] mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#1A1A1D]/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0A5F5F] flex-shrink-0" />
                      <span className="text-sm text-[#1A1A1D]/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#D4622C] text-white font-heading text-lg rounded-xl hover:bg-[#D4622C]/90 transition-all hover:scale-[0.98] shadow-xl"
          >
            {t.cta}
          </a>
        </motion.div>

        {/* Visual representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#0A5F5F] to-[#1A1A1D] rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 noise-texture opacity-20" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-mono text-4xl font-bold text-white mb-2">95%+</div>
                <div className="text-white/70 text-sm">Diagnostic Accuracy</div>
              </div>
              <div>
                <div className="font-mono text-4xl font-bold text-white mb-2">&lt;2s</div>
                <div className="text-white/70 text-sm">Analysis Time</div>
              </div>
              <div>
                <div className="font-mono text-4xl font-bold text-white mb-2">100K+</div>
                <div className="text-white/70 text-sm">Images Processed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
