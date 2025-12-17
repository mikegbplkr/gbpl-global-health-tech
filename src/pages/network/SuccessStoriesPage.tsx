import { motion } from "framer-motion";
import { Quote, TrendingUp, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const caseStudies = [
  {
    id: 1,
    title: "Bristol NHS AI Validation Project",
    partner: "Bristol NHS Medical Staff",
    location: "United Kingdom",
    flag: "🇬🇧",
    category: "Clinical Validation",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    challenge: "Needed real-world clinical validation for fatty liver diagnosis AI in a highly regulated European healthcare environment.",
    solution: "Partnered with Bristol NHS medical staff to conduct comprehensive PoC testing with actual patient data and clinical workflows.",
    results: [
      { metric: "Validation Time", before: "12+ months", after: "4 months" },
      { metric: "Clinical Accuracy", before: "N/A", after: "94%" },
      { metric: "Staff Adoption", before: "0%", after: "85%" },
    ],
    quote: {
      text: "The GBPL team's technical expertise combined with their understanding of clinical workflows made this validation project remarkably smooth.",
      author: "NHS Clinical Lead",
      role: "Bristol NHS",
    },
    outcomes: [
      "Successful clinical validation in NHS environment",
      "Positive feedback from medical staff",
      "Foundation for brain tumor AI collaboration",
      "Pathway to CE marking established",
    ],
  },
  {
    id: 2,
    title: "Chile Healthcare Digitalization Pilot",
    partner: "BIOANDINA SPA & Ministry of Health",
    location: "Chile",
    flag: "🇨🇱",
    category: "Government Partnership",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    challenge: "Required alignment with government healthcare digitalization initiatives while establishing presence in Latin American market.",
    solution: "Developed MOU with BIOANDINA SPA and Ministry of Health-affiliated organizations for pilot implementation.",
    results: [
      { metric: "Partnership Setup", before: "6+ months", after: "2 months" },
      { metric: "Government Alignment", before: "None", after: "Full MOU" },
      { metric: "Market Access", before: "Limited", after: "Regional Hub" },
    ],
    quote: {
      text: "GBPL's approach to combining AI technology with local healthcare needs perfectly aligns with our national digitalization goals.",
      author: "Healthcare Director",
      role: "BIOANDINA SPA",
    },
    outcomes: [
      "Official MOU with government-affiliated organizations",
      "Pilot program for healthcare digitalization",
      "Gateway to broader Latin American market",
      "Local regulatory pathway established",
    ],
  },
  {
    id: 3,
    title: "Brazil ANVISA Registration Support",
    partner: "Local Medical Institutions",
    location: "Brazil",
    flag: "🇧🇷",
    category: "Regulatory Compliance",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    challenge: "Navigating complex ANVISA registration requirements while establishing local validation partnerships in South America's largest market.",
    solution: "Partnered with local medical institutions to conduct validation testing while preparing ANVISA registration documentation.",
    results: [
      { metric: "Registration Progress", before: "Not Started", after: "In Process" },
      { metric: "Local Partnerships", before: "0", after: "3+" },
      { metric: "Market Readiness", before: "0%", after: "75%" },
    ],
    quote: {
      text: "Having a partner who understands both the technology and local regulatory requirements has been invaluable for our market entry.",
      author: "Medical Director",
      role: "Partner Institution",
    },
    outcomes: [
      "ANVISA registration support initiated",
      "Local validation testing completed",
      "Distribution network discussions",
      "Compliance documentation prepared",
    ],
  },
];

export default function SuccessStoriesPage() {
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
              {t("successstories.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("successstories.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("successstories.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{study.flag}</span>
                      <span className="px-3 py-1 bg-teal text-white text-sm rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-gray-300">{study.partner} · {study.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                      <div className="mb-8">
                        <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                          <span className="w-8 h-8 bg-coral/10 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-coral" />
                          </span>
                          The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                          <span className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-teal" />
                          </span>
                          Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Quote */}
                      <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal">
                        <Quote className="w-8 h-8 text-teal/30 mb-3" />
                        <p className="text-gray-700 italic mb-4">"{study.quote.text}"</p>
                        <div>
                          <p className="font-semibold text-navy">{study.quote.author}</p>
                          <p className="text-sm text-gray-500">{study.quote.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Results */}
                      <div className="mb-8">
                        <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          </span>
                          Results
                        </h3>
                        <div className="space-y-4">
                          {study.results.map((result) => (
                            <div key={result.metric} className="bg-gray-50 rounded-xl p-4">
                              <p className="text-sm text-gray-500 mb-2">{result.metric}</p>
                              <div className="flex items-center gap-4">
                                <div className="flex-1">
                                  <p className="text-sm text-gray-400">Before</p>
                                  <p className="font-mono text-lg text-gray-600">{result.before}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-teal" />
                                <div className="flex-1">
                                  <p className="text-sm text-teal">After</p>
                                  <p className="font-mono text-lg font-bold text-navy">{result.after}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h3 className="font-semibold text-navy mb-4">Key Outcomes</h3>
                        <ul className="space-y-3">
                          {study.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Join the growing list of Korean SMEs successfully entering global markets 
              with GBPL's integrated export enablement platform.
            </p>
            <Button asChild size="lg" className="bg-white text-teal hover:bg-gray-100">
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
