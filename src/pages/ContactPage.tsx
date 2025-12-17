import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import GoogleMap from "@/components/ui/GoogleMap";
import { useLanguage } from "@/contexts/LanguageContext";

// Seoul Global Marketing Center coordinates
const OFFICE_LOCATION = {
  lat: 37.5665,
  lng: 126.978,
};

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const inquiryTypes = [
    { value: "sme-partnership", label: t("contact.inquiry.sme") },
    { value: "global-partner", label: t("contact.inquiry.global") },
    { value: "poc-request", label: t("contact.inquiry.poc") },
    { value: "ai-platform", label: t("contact.inquiry.ai") },
    { value: "export-services", label: t("contact.inquiry.export") },
    { value: "general", label: t("contact.inquiry.general") },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

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
              {t("contact.hero.badge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("contact.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                {t("contact.form.heading")}
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">
                    {t("contact.form.success.title")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t("contact.form.success.message")}
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    {t("contact.form.success.button")}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.form.name.label")}</Label>
                      <Input
                        id="name"
                        placeholder={t("contact.form.name.placeholder")}
                        {...register("name")}
                        className={errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-teal focus:border-teal"}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.form.email.label")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contact.form.email.placeholder")}
                        {...register("email")}
                        className={errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-teal focus:border-teal"}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("contact.form.company.label")}</Label>
                      <Input
                        id="company"
                        placeholder={t("contact.form.company.placeholder")}
                        {...register("company")}
                        className={errors.company ? "border-red-500 focus:ring-red-500" : "focus:ring-teal focus:border-teal"}
                      />
                      {errors.company && (
                        <p className="text-sm text-red-500">{errors.company.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">{t("contact.form.inquiryType.label")}</Label>
                      <Select onValueChange={(value) => setValue("inquiryType", value)}>
                        <SelectTrigger className={errors.inquiryType ? "border-red-500" : ""}>
                          <SelectValue placeholder={t("contact.form.inquiryType.placeholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && (
                        <p className="text-sm text-red-500">{errors.inquiryType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message.label")}</Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.message.placeholder")}
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-teal focus:border-teal"}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-teal hover:bg-teal-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("contact.form.submitting.text")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.submit.text")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                {t("contact.info.heading")}
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t("contact.info.address.label")}</h3>
                    <p className="text-gray-600">
                      {t("contact.info.address.value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t("contact.info.email.label")}</h3>
                    <a href="mailto:contact@gbpl.co.kr" className="text-teal hover:underline">
                      contact@gbpl.co.kr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t("contact.info.phone.label")}</h3>
                    <a href="tel:+82-2-1234-5678" className="text-teal hover:underline">
                      +82-2-1234-5678
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                {GOOGLE_MAPS_API_KEY ? (
                  <GoogleMap
                    apiKey={GOOGLE_MAPS_API_KEY}
                    center={OFFICE_LOCATION}
                    zoom={15}
                    markerTitle="GBPL Headquarters"
                    className="aspect-[4/3] w-full"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-gray-100 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2!2d126.978!3d37.5665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzU5LjQiTiAxMjbCsDU4JzQwLjgiRQ!5e0!3m2!1sen!2skr!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GBPL Office Location"
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy mb-4">{t("contact.info.hours.label")}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("contact.info.hours.value")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "For Korean SMEs", desc: "Start your global export journey", link: "/solutions/export-services" },
              { title: "For Global Partners", desc: "Explore partnership opportunities", link: "/network/overview" },
              { title: "Request Demo", desc: "See our AI platform in action", link: "/solutions/ai-platform" },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl hover:bg-teal/5 hover:border-teal border border-transparent transition-all group"
              >
                <h3 className="font-semibold text-navy group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
