import { motion } from "framer-motion";
import { 
  Target, 
  Globe2, 
  FileCheck, 
  Users, 
  Building2, 
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const roadmap2026 = [
  {
    category: "PoC Expansion",
    icon: Globe2,
    title: "UK/Latin America Validation Deepening",
    description: "Expand Bristol NHS and Chile/Brazil validation sites, secure additional data",
    color: "bg-teal",
  },
  {
    category: "Regulatory/Certification",
    icon: FileCheck,
    title: "FDA/CE Response Guide Production",
    description: "Distribute regulatory response manuals and certification guidelines for partner companies",
    color: "bg-coral",
  },
  {
    category: "Global Marketing",
    icon: Rocket,
    title: "Major Medical Expo Participation",
    description: "UK Med-Tech Expo, KOTRA export consultation (4 times/year) joint pavilion operation",
    color: "bg-navy",
  },
];

const roadmap2027 = [
  {
    category: "Target Goal",
    icon: Target,
    title: "2 Additional European PoCs",
    description: "Expand validation network to major European countries beyond UK, secure references",
    color: "bg-teal",
  },
  {
    category: "Co-Growth",
    icon: Users,
    title: "10 Companies Joint Expansion",
    description: "Support 10 Seoul/domestic medical device companies for overseas joint expansion, secure 20 export-focused company pool",
    color: "bg-coral",
  },
  {
    category: "Distribution/Model",
    icon: Building2,
    title: "Official Supply Chain Establishment",
    description: "Establish official solution supply chain for Latin American medical institutions, settle Joint-Package model",
    color: "bg-navy",
  },
];

const commitments = [
  {
    title: "CES 2026 Participation",
    description: "Build international networks, scout new technologies, and secure partnerships in the North American market",
    date: "January 2026",
    icon: Rocket,
  },
  {
    title: "10 SME Support Target",
    description: "Dedicated plan to support the global expansion of 10 Korean medical device/health tech SMEs by 2026",
    date: "By 2026",
    icon: Users,
  },
  {
    title: "FDA/CE Compliance Guides",
    description: "Development of FDA/CE compliance guides and certification manuals to de-risk market entry for partner SMEs",
    date: "By 2026",
    icon: FileCheck,
  },
];

const centerUtilization = [
  {
    title: "Global Networking Hub",
    subtitle: "Overseas Buyer Invitation & Consultation",
    items: [
      "Invite UK/Chile/Brazil medical staff and institution representatives",
      "Host online/offline export consultation meetings using center meeting rooms",
    ],
    contribution: "Promote international cooperation and induce actual contract conclusion using center credibility",
  },
  {
    title: "Co-Growth Platform",
    subtitle: "Domestic Company Support",
    items: [
      "Joint workshops and IR for medical/healthcare companies",
      "Arrange meetings between GBPL's overseas network and domestic companies",
    ],
    contribution: "Serve as overseas expansion base for Seoul SMEs and lead cooperation programs",
  },
  {
    title: "Digital Content Studio",
    subtitle: "Joint Marketing & PR",
    items: [
      "Produce solution introduction videos using center S-LIVE studio",
      "Create English/local language promotional content for overseas distribution",
    ],
    contribution: "Increase center digital infrastructure utilization and establish joint promotional content production standards",
  },
  {
    title: "Knowledge Sharing",
    subtitle: "Validation Results Sharing & Dissemination",
    items: [
      "Overseas hospital PoC results presentation and SME joint IR",
      "Publish success case white papers and promote center tenant company achievements",
    ],
    contribution: "Maximize center external awareness and brand value through investment attraction linkage and performance promotion",
  },
];

export default function RoadmapPage() {
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
              {t("roadmap.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("roadmap.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("roadmap.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* 2026 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <span className="font-mono text-6xl font-bold text-navy">2026</span>
                <h2 className="font-display text-2xl font-bold text-navy mt-2">
                  {t("roadmap.2026.title")}
                </h2>
                <div className="w-full h-1 bg-teal mt-4" />
              </div>

              <div className="space-y-6">
                {roadmap2026.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-teal uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-navy mt-1 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 2027 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <span className="font-mono text-6xl font-bold text-teal">2027</span>
                <h2 className="font-display text-2xl font-bold text-navy mt-2">
                  {t("roadmap.2027.title")}
                </h2>
                <div className="w-full h-1 bg-navy mt-4" />
              </div>

              <div className="space-y-6">
                {roadmap2027.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-coral uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-navy mt-1 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("roadmap.commitment.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("roadmap.commitment.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <commitment.icon className="w-8 h-8 text-teal" />
                </div>
                <span className="text-sm text-teal font-medium">{commitment.date}</span>
                <h3 className="font-display text-xl font-bold text-navy mt-2 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Center Utilization */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">Center Utilization</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Global Marketing Center Contribution
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Building a global export hub and fostering co-growth with Seoul SMEs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {centerUtilization.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 rounded-2xl p-8"
              >
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-teal text-sm mb-4">{item.subtitle}</p>
                
                <div className="space-y-3 mb-6">
                  {item.items.map((listItem) => (
                    <div key={listItem} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{listItem}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Center Contribution</p>
                  <p className="text-gray-300 text-sm">{item.contribution}</p>
                </div>
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
            <div className="bg-teal/20 rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-white text-lg font-medium mb-2">
                "Making the Center a Hub for Global Export Cooperation"
              </p>
              <p className="text-gray-300">
                Beyond simple tenancy, we will create an open innovation platform 
                where Seoul SMEs can grow together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Partner with GBPL to accelerate your global market entry and be part of 
              our mission to support Korean health tech innovation worldwide.
            </p>
            <Button asChild size="lg" className="bg-white text-teal hover:bg-gray-100">
              <Link to="/contact">
                Start Your Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
