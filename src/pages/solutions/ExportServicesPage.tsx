import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe2, 
  FileCheck, 
  Package, 
  Settings, 
  ChevronDown, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const servicePillars = [
  {
    id: "poc",
    icon: Globe2,
    title: "Global PoC & Validation Linkage",
    subtitle: "Direct cooperation with overseas hospitals",
    description: "Operate a proof-of-concept (PoC) based export model with direct cooperation from overseas hospitals and medical professionals.",
    usp: "Exclusive Access",
    value: "Provides a platform for Korean SMEs to immediately test their products in actual overseas clinical environments, drastically lowering market entry risk.",
    benefits: [
      "Direct access to UK NHS, Chile MOH, Brazil medical institutions",
      "Real clinical environment testing",
      "Local medical staff feedback and validation",
      "Technical verification service reports",
    ],
    color: "bg-teal",
  },
  {
    id: "export",
    icon: FileCheck,
    title: "End-to-End Export Execution",
    subtitle: "Comprehensive support from PoC to sales",
    description: "Comprehensive support including market research, regulatory/compliance guides (FDA/CE), buyer/distributor matching, and localized sales strategy planning.",
    usp: "Full-Cycle Support",
    value: "Covers everything from validation (PoC) to regulatory compliance and final sales/distribution, which is a major pain point for SMEs.",
    benefits: [
      "Market research and demand analysis by country",
      "FDA/CE regulatory guidance and documentation",
      "Overseas buyer and distributor matching",
      "Localized sales strategy consulting",
    ],
    color: "bg-coral",
  },
  {
    id: "joint",
    icon: Package,
    title: "Joint-Package Export Model",
    subtitle: "H/W + S/W bundled export",
    description: "Bundling proprietary AI software (MCV V1) with Korean-made medical hardware (e.g., ultrasound devices, body composition analyzers) for co-export.",
    usp: "Increased Success Rate",
    value: "This joint approach enhances market entry probability and PoC success, receiving high recognition from overseas partners.",
    benefits: [
      "AI software + Korean medical device bundling",
      "Ultrasound, body composition analyzer integration",
      "Maximized market entry efficiency",
      "Higher PoC success rate strategy",
    ],
    color: "bg-navy",
  },
  {
    id: "consulting",
    icon: Settings,
    title: "Technical Consulting & Localization",
    subtitle: "Development and verification services",
    description: "Development and technical verification services based on hospital data and local medical staff feedback.",
    usp: "Quality Assurance",
    value: "Ensures continuous performance improvement and adaptation based on the strict requirements of the overseas medical field.",
    benefits: [
      "Algorithm optimization based on local data",
      "Compatibility testing with local systems",
      "Customization for regional requirements",
      "Continuous improvement based on feedback",
    ],
    color: "bg-teal",
  },
];

export default function ExportServicesPage() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>("poc");
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-teal/20 text-teal rounded-full text-sm font-medium mb-6">
              {t("exportservices.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("exportservices.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("exportservices.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("exportservices.pillars.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("exportservices.pillars.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GBPL leverages its AI and IT background to provide crucial services that conventional consultants or pure AI firms cannot
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {servicePillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-gray-500">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedPillar === pillar.id ? "rotate-180" : ""
                    }`} 
                  />
                </button>

                {expandedPillar === pillar.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-gray-100"
                  >
                    <div className="pt-6">
                      <p className="text-gray-600 mb-6">{pillar.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-navy mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                            {pillar.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-xl p-6">
                          <span className={`inline-block px-3 py-1 ${pillar.color} text-white text-xs font-medium rounded-full mb-3`}>
                            {pillar.usp}
                          </span>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {pillar.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">How It Works</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              Your Export Journey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Initial Consultation", desc: "Assess your product and target markets" },
              { step: 2, title: "PoC Planning", desc: "Match with appropriate overseas partners" },
              { step: 3, title: "Validation & Testing", desc: "Clinical environment testing and feedback" },
              { step: 4, title: "Market Entry", desc: "Regulatory approval and distribution setup" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="font-mono text-2xl font-bold text-teal">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 -ml-3" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GBPL */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Choose GBPL for Export?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Unlike general export consultants who lack technical understanding, or AI companies 
                without export know-how, GBPL provides an integrated platform that bridges both worlds.
              </p>
              <div className="space-y-4">
                {[
                  "Technical expertise from 13+ years of development experience",
                  "Direct partnerships with national healthcare institutions",
                  "Proven track record with major enterprise clients",
                  "One-stop service from PoC to market entry",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8 bg-teal hover:bg-teal-dark">
                <Link to="/contact">
                  {t("exportservices.cta.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "10+", label: "SME Partners Target" },
                { value: "3", label: "Global PoC Hubs" },
                { value: "52%", label: "Revenue Growth" },
                { value: "2026", label: "FDA/CE Guides Ready" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="font-mono text-3xl font-bold text-teal mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
