import { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DualValueSection from './DualValueSection';
import FourPillarsSection from './FourPillarsSection';
import PoCNetworkSection from './PoCNetworkSection';
import AIPlatformSection from './AIPlatformSection';
import GrowthSection from './GrowthSection';

function Home() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <DualValueSection language={language} />
      <FourPillarsSection language={language} />
      <PoCNetworkSection language={language} />
      <AIPlatformSection language={language} />
      <GrowthSection language={language} />
      
      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-5xl lg:text-6xl text-[#1A1A1D] mb-8">
            {language === 'en' ? 'Get in Touch' : '문의하기'}
          </h2>
          <p className="text-xl text-[#1A1A1D]/70 mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Ready to explore partnership opportunities or need export support? Contact us today.'
              : '파트너십 기회를 탐색하거나 수출 지원이 필요하신가요? 오늘 문의하세요.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:contact@gbpl.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0A5F5F] text-white font-heading rounded-lg hover:bg-[#0A5F5F]/90 transition-all hover:scale-[0.98]"
            >
              {language === 'en' ? 'Partnership Inquiry' : '파트너십 문의'}
            </a>
            <a
              href="mailto:support@gbpl.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4622C] text-white font-heading rounded-lg hover:bg-[#D4622C]/90 transition-all hover:scale-[0.98]"
            >
              {language === 'en' ? 'SME Support Request' : 'SME 지원 요청'}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1D] py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="font-display text-2xl text-white mb-4">GBPL</div>
          <p className="text-white/60 text-sm">
            © 2024 GBPL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home
