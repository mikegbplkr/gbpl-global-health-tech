import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Activity, Cloud, ChevronDown, ChevronUp, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    id: "fatty-liver",
    name: "Fatty Liver Diagnosis AI",
    icon: Activity,
    description: "Automated analysis of fatty liver severity using ultrasound images",
    advantage: "Early, non-invasive diagnosis supporting preventative care in clinical settings",
    details: [
      "Analyzes upper abdominal ultrasound images",
      "Classifies severity from mild to severe",
      "Provides quantitative assessment scores",
      "Supports clinical decision-making",
      "Validated with university hospital data",
    ],
    accuracy: "94%",
    processingTime: "< 5 sec",
  },
  {
    id: "chest-xray",
    name: "Chest X-ray Disease Detection",
    icon: Brain,
    description: "Algorithm for detecting pulmonary nodules and pleural diseases",
    advantage: "Enhanced diagnostic speed and accuracy for common respiratory conditions",
    details: [
      "Detects pulmonary nodules",
      "Identifies pleural diseases",
      "Highlights areas of concern",
      "Generates detailed analysis reports",
      "Continuous learning from clinical feedback",
    ],
    accuracy: "96%",
    processingTime: "< 3 sec",
  },
  {
    id: "platform",
    name: "Data Analysis Platform",
    icon: Cloud,
    description: "Cloud-based platform for medical image upload and AI analysis",
    advantage: "Scalable SaaS model optimized for overseas deployment and technical verification",
    details: [
      "Secure cloud infrastructure",
      "HIPAA-compliant data handling",
      "API integration capabilities",
      "Multi-language support",
      "Real-time analysis dashboard",
    ],
    accuracy: "99.9%",
    processingTime: "Uptime",
  },
];

const comparisonData = [
  {
    feature: "Deployment Model",
    gbpl: "Cloud SaaS + On-premise options",
    traditional: "On-premise only",
  },
  {
    feature: "Integration Time",
    gbpl: "2-4 weeks",
    traditional: "3-6 months",
  },
  {
    feature: "Clinical Validation",
    gbpl: "University hospital data + Global PoC",
    traditional: "Limited local validation",
  },
  {
    feature: "Regulatory Support",
    gbpl: "FDA/CE guidance included",
    traditional: "Not included",
  },
  {
    feature: "Localization",
    gbpl: "Multi-language, local adaptation",
    traditional: "Single language",
  },
  {
    feature: "Support Model",
    gbpl: "24/7 with local partners",
    traditional: "Business hours only",
  },
];

export default function AIPlatformPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>("fatty-liver");
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
              {t("aiplatform.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("aiplatform.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t("aiplatform.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal hover:bg-teal-dark">
                {t("aiplatform.demo.cta")}
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                <Play className="w-4 h-4 mr-2" />
                Watch Overview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("aiplatform.products.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("aiplatform.products.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("aiplatform.subtitle")}
            </p>
          </motion.div>

          {/* Feature Cards with Expandable Details */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy mb-1">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-8">
                      <div className="text-center">
                        <p className="font-mono text-2xl font-bold text-teal">{feature.accuracy}</p>
                        <p className="text-xs text-gray-500">Accuracy</p>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-2xl font-bold text-navy">{feature.processingTime}</p>
                        <p className="text-xs text-gray-500">Processing</p>
                      </div>
                    </div>
                    {expandedFeature === feature.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedFeature === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8 border-t border-gray-100"
                  >
                    <div className="pt-6 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-navy mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {feature.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-4">Key Advantage</h4>
                        <div className="bg-teal/5 rounded-xl p-6 border border-teal/20">
                          <p className="text-gray-700">{feature.advantage}</p>
                        </div>
                        <div className="mt-6 flex gap-4 md:hidden">
                          <div className="text-center flex-1 bg-gray-50 rounded-lg p-4">
                            <p className="font-mono text-xl font-bold text-teal">{feature.accuracy}</p>
                            <p className="text-xs text-gray-500">Accuracy</p>
                          </div>
                          <div className="text-center flex-1 bg-gray-50 rounded-lg p-4">
                            <p className="font-mono text-xl font-bold text-navy">{feature.processingTime}</p>
                            <p className="text-xs text-gray-500">Processing</p>
                          </div>
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

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("aiplatform.features.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("aiplatform.features.title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-navy">Feature</th>
                  <th className="text-left py-4 px-6 font-semibold text-teal bg-teal/5">GBPL Platform</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-500">Traditional Solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-4 px-6 font-medium text-navy">{row.feature}</td>
                    <td className="py-4 px-6 text-gray-700 bg-teal/5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal" />
                        {row.gbpl}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
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
                See the Platform in Action
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Watch how our AI medical imaging platform analyzes ultrasound and X-ray images 
                in real-time, providing clinicians with actionable insights within seconds.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time image analysis demonstration",
                  "Clinical workflow integration",
                  "Report generation process",
                  "Multi-language interface",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-teal hover:bg-teal-dark">
                Schedule Live Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80"
                  alt="Medical imaging platform demo"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
