import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface HeaderProps {
  language: 'en' | 'ko';
  onLanguageChange: (lang: 'en' | 'ko') => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      home: 'Home',
      aboutUs: 'About Us',
      companyProfile: 'Company Profile',
      ourStrength: 'Our Strength',
      solutions: 'Solutions',
      aiPlatform: 'AI Imaging Platform',
      exportServices: 'Export Support Services',
      globalNetwork: 'Global Network',
      pocNetwork: 'PoC Network Overview',
      successStories: 'Success Stories',
      performance: 'Performance',
      trackRecord: 'Track Record',
      roadmap: 'Roadmap',
      contact: 'Contact',
    },
    ko: {
      home: '홈',
      aboutUs: '회사소개',
      companyProfile: '회사 프로필',
      ourStrength: '우리의 강점',
      solutions: '솔루션',
      aiPlatform: 'AI 이미징 플랫폼',
      exportServices: '수출 지원 서비스',
      globalNetwork: '글로벌 네트워크',
      pocNetwork: 'PoC 네트워크 개요',
      successStories: '성공 사례',
      performance: '실적',
      trackRecord: '실적 기록',
      roadmap: '로드맵',
      contact: '문의',
    },
  };

  const t = content[language];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F6F3]/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-display text-2xl text-[#1A1A1D]">
            GBPL
          </a>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className="font-heading text-sm px-4 py-2 hover:text-[#0A5F5F] transition-colors"
                >
                  {t.home}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading text-sm">
                  {t.aboutUs}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink
                        href="#company-profile"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.companyProfile}
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#our-strength"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.ourStrength}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading text-sm">
                  {t.solutions}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink
                        href="#ai-platform"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.aiPlatform}
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#export-services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.exportServices}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading text-sm">
                  {t.globalNetwork}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink
                        href="#poc-network"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.pocNetwork}
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#success-stories"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.successStories}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading text-sm">
                  {t.performance}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink
                        href="#track-record"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.trackRecord}
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#roadmap"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A5F5F]/10"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t.roadmap}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="font-heading text-sm px-4 py-2 hover:text-[#0A5F5F] transition-colors"
                >
                  {t.contact}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLanguageChange(language === 'en' ? 'ko' : 'en')}
            className="flex items-center gap-2 font-heading"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'KO' : 'EN'}
          </Button>
        </div>
      </div>
    </header>
  );
}
