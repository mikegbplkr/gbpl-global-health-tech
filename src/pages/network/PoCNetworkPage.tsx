import { motion } from "framer-motion";
import { Building2, CheckCircle2, Globe2, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const networkHubs = [
  {
    id: "uk",
    country: "United Kingdom",
    city: "Bristol",
    flag: "🇬🇧",
    partner: "Bristol NHS Medical Staff",
    status: "Active PoC",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "Securing clinical feedback and real-world validation in an advanced market with over 60% NHS AI adoption.",
    highlights: [
      "NHS medical AI adoption rate over 60%",
      "Liver/chest disease AI validation and clinical feedback",
      "Brain tumor observation AI joint research discussions",
      "Gateway to European healthcare market",
    ],
    projects: [
      { name: "Fatty Liver AI Validation", status: "Completed" },
      { name: "Chest X-ray Analysis PoC", status: "In Progress" },
      { name: "Brain Tumor AI Research", status: "Discussion" },
    ],
  },
  {
    id: "chile",
    country: "Chile",
    city: "Santiago",
    flag: "🇨🇱",
    partner: "BIOANDINA SPA & Ministry of Health",
    status: "MOU Signed",
    statusColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    description: "Verification and pilot application aligning with government-led healthcare digitalization, serving as a gateway to the Latin American market.",
    highlights: [
      "Government healthcare digitalization alignment",
      "Ministry of Health affiliated organizations",
      "Latin American market entry testbed",
      "Pilot application for regional expansion",
    ],
    projects: [
      { name: "Healthcare Digitalization Pilot", status: "In Progress" },
      { name: "Regional Expansion Planning", status: "Planning" },
    ],
  },
  {
    id: "brazil",
    country: "Brazil",
    city: "São Paulo",
    flag: "🇧🇷",
    partner: "Local Medical Institutions & Healthcare Firms",
    status: "Active PoC",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    description: "Conducting validation to meet local registration and sales requirements in the largest South American medical market.",
    highlights: [
      "Largest South American medical market",
      "ANVISA registration support available",
      "Local compliance validation",
      "Distribution network establishment",
    ],
    projects: [
      { name: "ANVISA Registration Support", status: "In Progress" },
      { name: "Local Validation Testing", status: "In Progress" },
    ],
  },
];

export default function PoCNetworkPage() {
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
              {t("pocnetwork.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("pocnetwork.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("pocnetwork.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Our Network */}
      <section className="py-16 bg-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Building2, title: "National/Public Institutions", desc: "Not private hospitals - government-affiliated for credibility" },
              { icon: FileCheck, title: "Beyond MOUs", desc: "Actual PoC execution stage, not just agreements" },
              { icon: Globe2, title: "Strategic Coverage", desc: "UK for Europe, Chile/Brazil for Latin America" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Hubs */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {networkHubs.map((hub, index) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={hub.image}
                      alt={`${hub.city}, ${hub.country}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                    <span className="text-4xl">{hub.flag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${hub.statusColor}`}>
                      {hub.status}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-navy mb-2">
                    {hub.country}
                  </h2>
                  <p className="text-lg text-teal font-medium mb-4">{hub.city}</p>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <Building2 className="w-4 h-4" />
                    <span>{hub.partner}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hub.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {hub.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h4 className="font-semibold text-navy mb-4">Current Projects</h4>
                    <div className="space-y-3">
                      {hub.projects.map((project) => (
                        <div key={project.name} className="flex items-center justify-between">
                          <span className="text-gray-700">{project.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === "Completed" ? "bg-green-100 text-green-700" :
                            project.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-600"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Global Network
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you're a Korean SME seeking global validation or an overseas partner 
              looking for innovative health tech solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal hover:bg-teal-dark">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/network/success-stories">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
