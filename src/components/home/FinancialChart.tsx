import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const metrics = [
  {
    label: "2024 Revenue",
    value: 18.8,
    unit: "억 원",
    suffix: "KRW",
    growth: "+52%",
    icon: TrendingUp,
  },
  {
    label: "Team Growth",
    value: 16,
    unit: "명",
    suffix: "Employees",
    growth: "+166%",
    icon: Users,
  },
  {
    label: "Major Projects",
    value: 10,
    unit: "+",
    suffix: "Enterprise Clients",
    growth: "Ongoing",
    icon: Building,
  },
];

const yearlyData = [
  { year: "2023", revenue: 12.3, employees: 6 },
  { year: "2024", revenue: 18.8, employees: 16 },
  { year: "2025(E)", revenue: 17, employees: 13 },
];

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {displayValue.toFixed(decimals)}
    </span>
  );
}

export default function FinancialChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true });
  const { t } = useLanguage();

  const maxRevenue = Math.max(...yearlyData.map((d) => d.revenue));

  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("strength.tab.financial")}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
            {t("financial.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("financial.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <metric.icon className="w-7 h-7 text-teal" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-navy">
                      <AnimatedNumber value={metric.value} decimals={metric.value % 1 !== 0 ? 1 : 0} />
                    </span>
                    <span className="text-lg text-gray-600">{metric.unit}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{metric.suffix}</p>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {metric.growth}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="font-semibold text-navy mb-6">Revenue & Team Growth</h3>
            
            {/* Bar Chart */}
            <div className="flex items-end justify-around h-64 gap-4 mb-6">
              {yearlyData.map((data, index) => (
                <div key={data.year} className="flex flex-col items-center flex-1">
                  <div className="relative w-full flex justify-center gap-2 h-48 items-end">
                    {/* Revenue Bar */}
                    <motion.div
                      className="w-12 bg-navy rounded-t-lg relative origin-bottom"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-navy whitespace-nowrap">
                        {data.revenue}억
                      </span>
                    </motion.div>
                    {/* Employees indicator */}
                    <div className="absolute bottom-0 right-0 w-8 flex flex-col items-center">
                      <motion.div
                        className="w-2 bg-teal rounded-full"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${(data.employees / 20) * 100}%` } : { height: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                      />
                      <span className="text-xs text-teal mt-1">{data.employees}명</span>
                    </div>
                  </div>
                  <span className="mt-4 text-sm font-medium text-gray-600">{data.year}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-navy rounded" />
                <span className="text-sm text-gray-600">Revenue (억 원)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal rounded" />
                <span className="text-sm text-gray-600">Employees (명)</span>
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              2025 strategy: Conservative revenue target (16-18억) with focus on high-value global AI business
            </p>
          </motion.div>
        </div>

        {/* Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-navy rounded-2xl p-8"
        >
          <h3 className="font-display text-xl font-bold text-white mb-6 text-center">
            Major Track Records
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { client: "AIA Life", project: "Customer Portal Enhancement", highlight: "Financial-grade security & high-traffic handling" },
              { client: "Kyobo Book Centre", project: "Reading Tree Platform Rebuild", highlight: "Customer service platform stability" },
              { client: "Hyundai Motor Group", project: "Subsidiary SI Projects", highlight: "Enterprise-level system integration" },
            ].map((record) => (
              <div key={record.client} className="bg-white/10 rounded-xl p-6">
                <p className="text-teal font-semibold mb-2">{record.client}</p>
                <p className="text-white font-medium mb-2">{record.project}</p>
                <p className="text-gray-300 text-sm">{record.highlight}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
