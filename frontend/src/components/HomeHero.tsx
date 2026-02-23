import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1749746766518-7d52a30c87cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhYnN0cmFjdCUyMGFydHxlbnwxfHx8fDE3NzA2NTUzMjB8MA&ixlib=rb-4.1.0&q=80&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/45 via-neutral-900/35 to-neutral-900/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-6xl text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-wide uppercase"
        >
          Aprende a capturar
          <br />
          la belleza de lo que ves
          <br />
          y convertirlo en arte
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-base sm:text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          Domina acuarela con cursos pregrabados y talleres en vivo, guiados paso
          a paso para principiantes y artistas avanzados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-100 text-base px-8 h-12"
          >
            <Link to="/courses">Explorar Cursos</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-base px-8 h-12"
          >
            <Link to="/contact">Contáctame</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  );
}
