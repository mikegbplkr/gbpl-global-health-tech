import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Shield, Users, TrendingUp, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    client: "AIA Life Insurance",
    category: "Financial Services",
    project: "Customer Portal Enhancement",
    description: "Comprehensive upgrade of customer-facing portal with financial-grade security and high-traffic handling capabilities.",
    highlights: [
      "Financial-grade security implementation",
      "High-traffic handling optimization",
      "User experience enhancement",
      "Mobile responsiveness",
    ],
    metrics: {
      users: "500K+",
      uptime: "99.9%",
      performance: "+40%",
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: 2,
    client: "Kyobo Book Centre",
    category: "Retail/E-commerce",
    project: "Reading Tree Platform Rebuild",
    description: "Complete reconstruction of customer service platform ensuring stability and scalability for millions of users.",
    highlights: [
      "Platform architecture redesign",
      "Service stability enhancement",
      "Scalability improvements",
      "Customer experience optimization",
    ],
    metrics: {
      users: "1M+",
      uptime: "99.95%",
      performance: "+55%",
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 3,
    client: "Hyundai Motor Group",
    category: "Automotive/Enterprise",
    project: "Subsidiary SI Projects",
    description: "Enterprise-level system integration across multiple subsidiaries with complex data flows and security requirements.",
    highlights: [
      "Multi-subsidiary integration",
      "Enterprise security compliance",
      "Data flow optimization",
      "Legacy system modernization",
    ],
    metrics: {
      systems: "15+",
      uptime: "99.9%",
      efficiency: "+35%",
    },
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    id: 4,
    client: "University Hospital",
    category: "Healthcare",
    project: "AI Medical Imaging Development",
    description: "Development of proprietary AI algorithms for medical image analysis using clinical data and expert validation.",
    highlights: [
      "Fatty liver diagnosis AI",
      "Chest X-ray analysis",
      "Clinical data integration",
      "Expert validation process",
    ],
    metrics: {
      accuracy: "94%+",
      images: "100K+",
      models: "3",
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
  },
];

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Financial-grade security implementations meeting the strictest compliance requirements",
  },
  {
    icon: TrendingUp,
    title: "High Performance",
    description: "Optimized systems handling millions of users with 99.9%+ uptime",
  },
  {
    icon: Users,
    title: "Large Scale",
    description: "Experience with enterprise clients serving millions of end users",
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Deep knowledge across finance, retail, automotive, and healthcare sectors",
  },
];

export default function TrackRecordPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
              {t("trackrecord.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("trackrecord.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("trackrecord.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "₩1.88B", label: "2024 Revenue" },
              { value: "52%", label: "YoY Growth" },
              { value: "10+", label: "Enterprise Clients" },
              { value: "99.9%", label: "Avg. Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("trackrecord.projects.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("trackrecord.projects.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of enterprise projects demonstrating our technical capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2 py-1 bg-teal text-white text-xs rounded-full">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-2">
                      {project.client}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-navy mb-2">{project.project}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center bg-gray-50 rounded-lg p-2">
                        <p className="font-mono text-lg font-bold text-teal">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Hover Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredProject === project.id ? "auto" : 0,
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <h5 className="text-sm font-semibold text-navy mb-2">Key Highlights</h5>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("trackrecord.metrics.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("trackrecord.metrics.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stable Cash Cow */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Stable Foundation for Global Expansion
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our stable SI/ITO business provides a secure revenue base that enables 
              sustainable investment in global medical AI expansion without excessive risk.
            </p>
            <div className="bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                The existing SI/ITO business's stable revenue foundation offsets the initial risks 
                of the global medical AI business and enables sustainable investment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
