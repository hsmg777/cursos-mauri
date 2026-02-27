import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-20 flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-5 py-6 sm:mt-0 sm:min-h-screen sm:px-4 sm:py-0">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        aria-label={t("homeHero.videoLabel")}
      >
        {/* .mov puede fallar en Chrome/Windows. Mantener .mp4 H.264 como fallback es mas seguro. */}
        <source src="/video/hero.mov" type='video/quicktime; codecs="hvc1"' />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/35 to-neutral-950/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-6xl text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[9ch] text-[clamp(1.6rem,7.5vw,2.7rem)] font-light uppercase leading-[1.08] tracking-wide sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:leading-[1.05]"
        >
          {t("homeHero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-4 max-w-[18.5rem] text-[0.95rem] leading-relaxed text-white/95 sm:mt-8 sm:max-w-3xl sm:text-lg md:text-2xl"
        >
          {t("homeHero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 flex w-full max-w-[18rem] flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-100 text-base px-8 h-12 w-full sm:w-auto"
          >
            <Link to="/courses">{t("homeHero.explore")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-base px-8 h-12 w-full sm:w-auto"
          >
            <Link to="/contact">{t("homeHero.contact")}</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  );
}
