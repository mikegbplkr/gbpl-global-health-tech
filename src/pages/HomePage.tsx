import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Globe2, 
  Rocket, 
  Building2, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import GlobalNetworkMap from "@/components/home/GlobalNetworkMap";
import TrustIndicators from "@/components/home/TrustIndicators";
import FinancialChart from "@/components/home/FinancialChart";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const valueProps = [
  {
    icon: Brain,
    title: "AI Medical Imaging",
    description: "Proprietary AI solutions for fatty liver diagnosis and chest X-ray analysis, developed with university hospital data.",
    color: "bg-teal"
  },
  {
    icon: Globe2,
    title: "Global PoC Network",
    description: "Exclusive access to clinical validation in UK, Chile, and Brazil through direct hospital partnerships.",
    color: "bg-coral"
  },
  {
    icon: Rocket,
    title: "Export Execution",
    description: "End-to-end support from regulatory guidance (FDA/CE) to buyer matching and localized sales strategy.",
    color: "bg-navy"
  }
];

const painPoints = [
  {
    problem: "Complex Regulatory Barriers",
    solution: "FDA/CE compliance guides and certification manuals"
  },
  {
    problem: "Data Compatibility Issues",
    solution: "Local system integration and validation testing"
  },
  {
    problem: "No PoC Opportunities",
    solution: "Direct access to overseas hospital testing environments"
  }
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 70px
            )`
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-teal/20 text-teal rounded-full text-sm font-medium mb-6">
                2025 Seoul SBA Strategic Partner
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Accelerate Your
                <span className="text-teal block">Global Market Entry</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                AI-driven, PoC-enabled export platform for Korean health tech SMEs. 
                Bridge your medical innovation to global healthcare markets with proven clinical validation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal hover:bg-teal-dark text-white group">
                  <Link to="/contact">
                    Book Your PoC Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-teal">
                  <Link to="/solutions/ai-platform">
                    Explore Our Platform
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-mono text-3xl font-bold text-teal">52%</p>
                  <p className="text-sm text-gray-400">Revenue Growth</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-bold text-teal">3</p>
                  <p className="text-sm text-gray-400">Global Hubs</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-bold text-teal">10+</p>
                  <p className="text-sm text-gray-400">SME Partners</p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square">
                {/* Animated Globe/Network Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-teal/30 animate-pulse-slow" />
                    {/* Middle ring */}
                    <div className="absolute inset-8 rounded-full border border-teal/50 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                    {/* Inner circle */}
                    <div className="absolute inset-16 rounded-full bg-teal/20 flex items-center justify-center">
                      <Globe2 className="w-24 h-24 text-teal animate-float" />
                    </div>
                    {/* Connection dots */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-coral rounded-full pulse-marker" />
                    <div className="absolute bottom-12 left-8 w-3 h-3 bg-teal rounded-full pulse-marker" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute bottom-12 right-8 w-3 h-3 bg-teal rounded-full pulse-marker" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FAF9F7"/>
          </svg>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              The Hybrid Export Enablement Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining proprietary AI technology with exclusive global networks and comprehensive export execution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 ${prop.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <prop.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
                <Link 
                  to={index === 0 ? "/solutions/ai-platform" : index === 1 ? "/network/overview" : "/solutions/export-services"}
                  className="inline-flex items-center mt-4 text-teal font-medium hover:gap-2 transition-all"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-coral uppercase tracking-wider">The Challenge</span>
              <h2 className="font-display text-3xl font-bold text-navy mt-2 mb-8">
                3 Major Barriers to Global Market Entry
              </h2>
              <div className="space-y-6">
                {painPoints.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="w-8 h-8 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-coral font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.problem}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Korean SMEs face significant challenges with {item.problem.toLowerCase()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-teal uppercase tracking-wider">GBPL Solution</span>
              <h2 className="font-display text-3xl font-bold text-navy mt-2 mb-8">
                Integrated Technology & Network Fusion
              </h2>
              <div className="space-y-6">
                {painPoints.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-teal/5 rounded-xl border border-teal/20">
                    <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.solution}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Dramatically reducing market entry risk for Korean SMEs
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 bg-navy hover:bg-navy/90">
                <Link to="/solutions/export-services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Network Map */}
      <GlobalNetworkMap />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Financial Growth */}
      <FinancialChart />

      {/* Dual CTA Section */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you're an overseas partner seeking innovative solutions or a Korean SME ready for global expansion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For SMEs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                For Korean SMEs
              </h3>
              <p className="text-gray-600 mb-6">
                Access global markets with our proven PoC network and comprehensive export support
              </p>
              <Button asChild className="w-full bg-teal hover:bg-teal-dark">
                <Link to="/contact">
                  Start Your Export Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* For Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-teal to-teal/80 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                For Global Partners
              </h3>
              <p className="text-white/80 mb-6">
                Discover cutting-edge Korean health tech solutions for your clinical environment
              </p>
              <Button asChild variant="outline" className="w-full border-white bg-transparent text-white hover:bg-white hover:text-teal">
                <Link to="/contact">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
