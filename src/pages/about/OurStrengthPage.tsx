import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Globe2, TrendingUp, CheckCircle2, Building2, Shield, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const differentiators = [
  {
    category: "General Export Consulting",
    weaknesses: ["No technical understanding", "No development capability", "No network access"],
    strength: "Administrative support only",
  },
  {
    category: "General AI Medical Companies",
    weaknesses: ["Limited network (academic only)", "No export know-how", "Single solution focus"],
    strength: "Strong technology",
  },
  {
    category: "GBPL",
    strengths: ["University hospital-grade technology", "3 global hubs (UK/Chile/Brazil)", "One-stop PoC to distribution"],
    highlight: true,
  },
];

export default function OurStrengthPage() {
  const [activeTab, setActiveTab] = useState("technical");
  const { t } = useLanguage();

  const strengthTabs = [
    {
      id: "technical",
      label: t("strength.tab.technical"),
      icon: Brain,
      content: {
        title: t("strength.tab.technical.title"),
        description: t("strength.tab.technical.description"),
        features: [
          {
            title: t("strength.feature.aiModels"),
            description: t("strength.feature.aiModels.desc"),
            icon: Brain,
          },
          {
            title: t("strength.feature.infrastructure"),
            description: t("strength.feature.infrastructure.desc"),
            icon: Shield,
          },
          {
            title: t("strength.feature.improvement"),
            description: t("strength.feature.improvement.desc"),
            icon: Zap,
          },
        ],
        stats: [
          { label: t("strength.stat.aiModels"), value: "3+" },
          { label: t("strength.stat.dataPoints"), value: "100K+" },
          { label: t("strength.stat.accuracy"), value: "95%+" },
        ],
      },
    },
    {
      id: "global",
      label: t("strength.tab.global"),
      icon: Globe2,
      content: {
        title: t("strength.tab.global.title"),
        description: t("strength.tab.global.description"),
        features: [
          {
            title: t("strength.feature.uk"),
            description: t("strength.feature.uk.desc"),
            icon: Globe2,
          },
          {
            title: t("strength.feature.chile"),
            description: t("strength.feature.chile.desc"),
            icon: Globe2,
          },
          {
            title: t("strength.feature.brazil"),
            description: t("strength.feature.brazil.desc"),
            icon: Globe2,
          },
        ],
        stats: [
          { label: t("strength.stat.globalHubs"), value: "3" },
          { label: t("strength.stat.partners"), value: "5+" },
          { label: t("strength.stat.activePocs"), value: "4" },
        ],
      },
    },
    {
      id: "financial",
      label: t("strength.tab.financial"),
      icon: TrendingUp,
      content: {
        title: t("strength.tab.financial.title"),
        description: t("strength.tab.financial.description"),
        features: [
          {
            title: t("strength.feature.revenue"),
            description: t("strength.feature.revenue.desc"),
            icon: TrendingUp,
          },
          {
            title: t("strength.feature.enterprise"),
            description: t("strength.feature.enterprise.desc"),
            icon: Building2,
          },
          {
            title: t("strength.feature.team"),
            description: t("strength.feature.team.desc"),
            icon: CheckCircle2,
          },
        ],
        stats: [
          { label: t("strength.stat.revenue2024"), value: "₩1.88B" },
          { label: t("strength.stat.yoyGrowth"), value: "52%" },
          { label: t("strength.stat.teamSize"), value: "16" },
        ],
      },
    },
  ];

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
              {t("strength.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("strength.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("strength.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-white p-1 rounded-xl shadow-sm">
              {strengthTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 data-[state=active]:bg-navy data-[state=active]:text-white rounded-lg py-3"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {strengthTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="font-display text-3xl font-bold text-navy mb-4">
                      {tab.content.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {tab.content.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                    {tab.content.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-mono text-3xl font-bold text-teal">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {tab.content.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                      >
                        <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                          <feature.icon className="w-6 h-6 text-teal" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-navy mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">Market Positioning</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              Competitive Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GBPL fills a critical gap by offering integrated technical depth with international execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  item.highlight
                    ? "bg-navy text-white"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <h3 className={`font-display text-xl font-bold mb-6 ${
                  item.highlight ? "text-white" : "text-navy"
                }`}>
                  {item.category}
                </h3>

                {item.highlight ? (
                  <div className="space-y-4">
                    {item.strengths?.map((strength) => (
                      <div key={strength} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{strength}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {item.weaknesses?.map((weakness) => (
                        <div key={weakness} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-500 text-xs">✕</span>
                          </span>
                          <span className="text-gray-600">{weakness}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item.strength}</span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-navy">GBPL</span> provides an{" "}
              <span className="text-teal font-semibold">actionable hybrid export model</span>{" "}
              that bridges technology and market access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose GBPL */}
      <section className="py-24 bg-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
              The Optimal Partner for Seoul SMEs
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Brain, label: "Proprietary AI Technology" },
                { icon: Globe2, label: "3 Global PoC Hubs" },
                { icon: CheckCircle2, label: "One-Stop Export Support" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
