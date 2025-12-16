import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

interface GrowthSectionProps {
  language: 'en' | 'ko';
}

export default function GrowthSection({ language }: GrowthSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      title: 'Growth & Performance',
      subtitle: 'Financial Stability Meets Innovation',
      metrics: [
        {
          icon: TrendingUp,
          label: '2024 Revenue',
          value: '₩1.88B',
          change: '+52% YoY',
          color: '#0A5F5F',
        },
        {
          icon: Users,
          label: 'Team Growth',
          value: '16',
          change: 'From 6 in 2023',
          color: '#D4622C',
        },
        {
          icon: Award,
          label: '2025 Forecast',
          value: '₩1.6-1.8B',
          change: 'High-value focus',
          color: '#0A5F5F',
        },
      ],
      timeline: [
        { year: '2023', revenue: 1.24, employees: 6 },
        { year: '2024', revenue: 1.88, employees: 16 },
        { year: '2025', revenue: 1.7, employees: 20 },
      ],
      clients: {
        title: 'Trusted by Industry Leaders',
        list: ['AIA Life', 'Kyobo Book Centre', 'Major IT/SI Clients'],
      },
    },
    ko: {
      title: '성장 및 실적',
      subtitle: '재정 안정성과 혁신의 만남',
      metrics: [
        {
          icon: TrendingUp,
          label: '2024년 매출',
          value: '₩18.8억',
          change: '전년 대비 +52%',
          color: '#0A5F5F',
        },
        {
          icon: Users,
          label: '팀 성장',
          value: '16명',
          change: '2023년 6명에서',
          color: '#D4622C',
        },
        {
          icon: Award,
          label: '2025년 전망',
          value: '₩16-18억',
          change: '고부가가치 집중',
          color: '#0A5F5F',
        },
      ],
      timeline: [
        { year: '2023', revenue: 1.24, employees: 6 },
        { year: '2024', revenue: 1.88, employees: 16 },
        { year: '2025', revenue: 1.7, employees: 20 },
      ],
      clients: {
        title: '업계 리더들의 신뢰',
        list: ['AIA 생명', '교보문고', '주요 IT/SI 고객'],
      },
    },
  };

  const t = content[language];

  return (
    <section
      id="track-record"
      ref={sectionRef}
      className="py-32 bg-[#F8F6F3] relative overflow-hidden"
    >
      <div className="absolute inset-0 noise-texture" />
      
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

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {t.metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>

                <div className="text-sm text-[#1A1A1D]/60 mb-2">{metric.label}</div>
                <div
                  className="font-mono text-4xl font-bold mb-2"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-[#1A1A1D]/70">{metric.change}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Growth Timeline Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="font-heading text-2xl text-[#1A1A1D] mb-8 text-center">
              Revenue Growth (Billion KRW)
            </h3>

            <div className="relative h-64">
              {/* Y-axis */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-[#1A1A1D]/60 font-mono">
                <span>2.0</span>
                <span>1.5</span>
                <span>1.0</span>
                <span>0.5</span>
                <span>0.0</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full flex items-end justify-around gap-8">
                {t.timeline.map((data, index) => {
                  const heightPercent = (data.revenue / 2.0) * 100;
                  return (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={isVisible ? { height: `${heightPercent}%` } : { height: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.2, ease: 'easeOut' }}
                      className="flex-1 relative group"
                    >
                      <div
                        className="w-full bg-gradient-to-t from-[#0A5F5F] to-[#0A5F5F]/60 rounded-t-lg transition-all duration-300 group-hover:from-[#D4622C] group-hover:to-[#D4622C]/60"
                        style={{ height: '100%' }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-sm font-bold text-[#0A5F5F] whitespace-nowrap">
                          ₩{data.revenue}B
                        </div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-heading text-sm text-[#1A1A1D]">
                        {data.year}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trusted Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-heading text-xl text-[#1A1A1D] mb-8">
            {t.clients.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {t.clients.list.map((client, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-white rounded-xl shadow-md font-heading text-[#1A1A1D]/70 hover:shadow-lg transition-shadow"
              >
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
