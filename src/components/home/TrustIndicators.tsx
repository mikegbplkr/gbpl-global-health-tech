import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  { name: "AIA Life", logo: "AIA" },
  { name: "Kyobo Book Centre", logo: "KYOBO" },
  { name: "Hyundai Motor Group", logo: "HYUNDAI" },
  { name: "Bristol NHS", logo: "NHS" },
  { name: "BIOANDINA", logo: "BIOANDINA" },
];

const certifications = [
  { name: "Venture Enterprise", icon: "🏢" },
  { name: "Research Institute", icon: "🔬" },
  { name: "AI Voucher Supplier", icon: "🤖" },
];

export default function TrustIndicators() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {t("trust.title")}
          </p>
        </motion.div>

        {/* Client Logos - Horizontal Scroll */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal/10 transition-colors">
                  <span className="font-display font-bold text-gray-400 hover:text-navy transition-colors">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200"
            >
              <span className="text-lg">{cert.icon}</span>
              <span className="text-sm font-medium text-gray-700">{cert.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
