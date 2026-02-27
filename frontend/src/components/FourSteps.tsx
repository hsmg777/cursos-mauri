import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function FourSteps() {
  const { t } = useTranslation();
  const steps = [
    t("fourSteps.step1"),
    t("fourSteps.step2"),
    t("fourSteps.step3"),
    t("fourSteps.step4"),
    t("fourSteps.step5"),
  ];

  return (
    <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs tracking-wider uppercase text-neutral-600 mb-5">
              {t("fourSteps.badge")}
            </div>
            <h2 className="mb-6 text-3xl font-light leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {t("fourSteps.title")}
            </h2>
            <p className="mb-8 text-base text-neutral-600 sm:text-lg">
              {t("fourSteps.subtitle")}
            </p>

            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-700 sm:text-base">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <img
              src="/images/4pasos.png"
              alt="Los 4 pasos para aprender acuarela"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
