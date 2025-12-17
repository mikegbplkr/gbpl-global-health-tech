import { motion } from "framer-motion";
import { Building2, Award, Users, Calendar, Target, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";

const timeline = [
  {
    year: "2022",
    month: "June",
    title: "Company Founded",
    description: "GBPL Co., Ltd. established in Seoul with a focus on AI and IT solutions",
    icon: Building2,
  },
  {
    year: "2023",
    month: "Q2",
    title: "Research Institute Certification",
    description: "Obtained corporate research institute certification, strengthening R&D capabilities",
    icon: Lightbulb,
  },
  {
    year: "2023",
    month: "Q4",
    title: "Venture Enterprise Certification",
    description: "Recognized as a venture enterprise, validating innovative business model",
    icon: Award,
  },
  {
    year: "2024",
    month: "Q1",
    title: "AI Voucher Supplier Registration",
    description: "Registered as an official AI voucher supplier, expanding service offerings",
    icon: Target,
  },
  {
    year: "2024",
    month: "Q3",
    title: "Global PoC Network Expansion",
    description: "Established partnerships with UK NHS, Chile MOH, and Brazil medical institutions",
    icon: Users,
  },
  {
    year: "2024",
    month: "Q4",
    title: "Revenue Milestone",
    description: "Achieved KRW 1.88 billion revenue with 52% year-over-year growth",
    icon: Calendar,
  },
];

const leadership = [
  {
    name: "Kim Su-bong",
    role: "CEO & Founder",
    description: "13-year full-stack developer with deep expertise in AI and enterprise systems",
    expertise: ["AI/ML Development", "Enterprise Architecture", "Global Business Strategy"],
  },
];

export default function CompanyProfilePage() {
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
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Company Profile
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A Seoul-based company combining proprietary AI medical imaging technology 
              with an exclusive global PoC network to help Korean health tech SMEs enter international markets.
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
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To bridge Korean medical innovation with global healthcare markets by providing 
                comprehensive, technology-driven export enablement services that dramatically 
                reduce market entry risk for health tech SMEs.
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
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading hybrid export enablement platform in Asia, supporting 
                the global expansion of 10+ Korean medical device and health tech SMEs annually 
                while establishing a sustainable ecosystem for international healthcare innovation.
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
            <span className="text-sm font-medium text-teal uppercase tracking-wider">Our Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2">
              Company Timeline
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
            <span className="text-sm font-medium text-teal uppercase tracking-wider">Leadership</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2">
              Meet Our Team
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
              Certifications & Recognition
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
