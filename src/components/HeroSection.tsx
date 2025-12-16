import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  language: 'en' | 'ko';
}

export default function HeroSection({ language }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw world map outline (simplified)
    const hubs = [
      { x: canvas.width * 0.25, y: canvas.height * 0.35, label: 'UK', delay: 0 },
      { x: canvas.width * 0.35, y: canvas.height * 0.65, label: 'Brazil', delay: 0.2 },
      { x: canvas.width * 0.38, y: canvas.height * 0.7, label: 'Chile', delay: 0.4 },
    ];

    let animationProgress = 0;

    const animate = () => {
      if (animationProgress < 1) {
        animationProgress += 0.01;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        ctx.strokeStyle = 'rgba(10, 95, 95, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);

        hubs.forEach((hub, i) => {
          if (i < hubs.length - 1) {
            const progress = Math.max(0, Math.min(1, (animationProgress - hub.delay) * 2));
            ctx.beginPath();
            ctx.moveTo(hubs[0].x, hubs[0].y);
            ctx.lineTo(
              hubs[0].x + (hub.x - hubs[0].x) * progress,
              hubs[0].y + (hub.y - hubs[0].y) * progress
            );
            ctx.stroke();
          }
        });

        // Draw hub markers
        hubs.forEach((hub) => {
          const progress = Math.max(0, Math.min(1, (animationProgress - hub.delay) * 3));
          if (progress > 0) {
            // Outer pulse
            ctx.beginPath();
            ctx.arc(hub.x, hub.y, 20 * progress, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(10, 95, 95, ${0.1 * (1 - progress)})`;
            ctx.fill();

            // Inner dot
            ctx.beginPath();
            ctx.arc(hub.x, hub.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#0A5F5F';
            ctx.fill();

            // Label
            ctx.fillStyle = '#1A1A1D';
            ctx.font = '12px "Space Grotesk", sans-serif';
            ctx.fillText(hub.label, hub.x + 12, hub.y - 12);
          }
        });

        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const content = {
    en: {
      headline: 'AI-Driven Global Market Entry',
      subheadline: 'for Health Tech',
      description:
        'Bridging Korean medical device SMEs with global markets through proprietary AI technology and exclusive PoC networks in the UK, Chile, and Brazil.',
      cta1: 'Partner With Us',
      cta2: 'Explore Solutions',
    },
    ko: {
      headline: 'AI 기반 글로벌 시장 진출',
      subheadline: '헬스테크를 위한',
      description:
        '독점 AI 기술과 영국, 칠레, 브라질의 PoC 네트워크를 통해 한국 의료기기 중소기업과 글로벌 시장을 연결합니다.',
      cta1: '파트너십 문의',
      cta2: '솔루션 탐색',
    },
  };

  const t = content[language];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-5" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-[#1A1A1D] mb-4">
                {t.headline}
              </h1>
              <p className="font-display text-5xl lg:text-6xl text-[#0A5F5F]">
                {t.subheadline}
              </p>
            </div>

            <p className="text-lg lg:text-xl text-[#1A1A1D]/70 max-w-xl leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D4622C] text-white font-heading rounded-lg hover:bg-[#D4622C]/90 transition-all hover:scale-[0.98] active:scale-95 shadow-lg"
              >
                {t.cta1}
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0A5F5F] text-white font-heading rounded-lg hover:bg-[#0A5F5F]/90 transition-all hover:scale-[0.98] active:scale-95"
              >
                {t.cta2}
              </a>
            </div>
          </motion.div>

          {/* Right: Animated World Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-[500px] rounded-2xl bg-white/50 backdrop-blur-sm shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#0A5F5F] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#0A5F5F] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
