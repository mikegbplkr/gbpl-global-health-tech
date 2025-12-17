import { motion } from "framer-motion";
import { Building2, Award, Users, Calendar, Target, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const leadership = [
  {
    name: "Kim Su-bong",
    role: "CEO & Founder",
    description: "13-year full-stack developer with deep expertise in AI and enterprise systems",
    expertise: ["AI/ML Development", "Enterprise Architecture", "Global Business Strategy"],
  },
];

export default function CompanyProfilePage() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2022",
      month: "June",
      title: t("timeline.2022.title"),
      description: t("timeline.2022.description"),
      icon: Building2,
    },
    {
      year: "2023",
      month: "Q2",
      title: t("timeline.2023q2.title"),
      description: t("timeline.2023q2.description"),
      icon: Lightbulb,
    },
    {
      year: "2023",
      month: "Q4",
      title: t("timeline.2023q4.title"),
      description: t("timeline.2023q4.description"),
      icon: Award,
    },
    {
      year: "2024",
      month: "Q1",
      title: t("timeline.2024q1.title"),
      description: t("timeline.2024q1.description"),
      icon: Target,
    },
    {
      year: "2024",
      month: "Q3",
      title: t("timeline.2024q3.title"),
      description: t("timeline.2024q3.description"),
      icon: Users,
    },
    {
      year: "2024",
      month: "Q4",
      title: t("timeline.2024q4.title"),
      description: t("timeline.2024q4.description"),
      icon: Calendar,
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
              {t("company.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("company.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("company.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-teal" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">{t("company.mission.heading")}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t("company.mission.text")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-coral" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">{t("company.vision.heading")}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t("company.vision.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("company.journey.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2">
              {t("company.journey.title")}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}>
                      <span className="text-sm text-teal font-medium">{item.year} · {item.month}</span>
                      <h3 className="font-display text-xl font-bold text-navy mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 bg-navy rounded-full flex items-center justify-center shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("company.leadership.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2">
              {t("company.leadership.title")}
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl font-display font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-display text-2xl font-bold text-navy">{leader.name}</h3>
                    <p className="text-teal font-medium mb-4">{leader.role}</p>
                    <p className="text-gray-600 mb-4">{leader.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {leader.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {t("company.certifications.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Venture Enterprise", desc: "Certified innovative business model", icon: "🏆" },
              { title: "Research Institute", desc: "Corporate R&D capabilities certified", icon: "🔬" },
              { title: "AI Voucher Supplier", desc: "Official AI service provider", icon: "🤖" },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 rounded-2xl p-8 text-center"
              >
                <span className="text-4xl mb-4 block">{cert.icon}</span>
                <h3 className="font-display text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-300">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
