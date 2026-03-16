import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Wrench } from "lucide-react";
import heroHood from "@/assets/hero-hood.png";

const EASE = "easeOut";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-nsa-orange/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-nsa-orange/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0 }}
          >
            <span className="label-mono">⚙ Especialistas em Instalação Residencial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]"
          >
            SOLUÇÃO EM{" "}
            <span className="text-nsa-orange block">INSTALAÇÕES</span>
            GOURMET
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="text-nsa-steel text-lg max-w-md leading-relaxed"
          >
            Especialistas em coifas, cooktops, fornos e áreas gourmet.
            Precisão técnica e atendimento residencial de alto padrão em São Paulo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5511947974649?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20técnico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action group text-base"
            >
              Solicitar Orçamento Técnico
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 px-6 py-4 border border-white/10 rounded-lg text-nsa-white font-semibold hover:border-nsa-orange/50 transition-colors duration-300"
            >
              Ver Serviços
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5"
          >
            {[
              { icon: <Shield size={16} />, value: "100%", label: "Garantia" },
              { icon: <Star size={16} />, value: "5★", label: "Avaliação" },
              { icon: <Wrench size={16} />, value: "+500", label: "Instalações" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-1.5 text-nsa-orange">
                  {stat.icon}
                  <span className="font-mono font-bold count-up text-xl">{stat.value}</span>
                </div>
                <span className="label-mono text-nsa-steel">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hood Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative flex items-center justify-center z-10"
        >
          <div className="absolute w-80 h-80 rounded-full bg-nsa-orange/15 blur-[60px]" />
          <img
            src={heroHood}
            alt="Coifa profissional em aço inox"
            className="relative z-10 w-full max-w-sm md:max-w-md float-animate drop-shadow-2xl"
          />
          {/* Badge top right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
            className="absolute top-8 right-0 card-industrial px-4 py-3 text-right"
          >
            <p className="label-mono">Padrão NSA</p>
            <p className="text-nsa-white font-bold text-sm">Instalação Certificada</p>
          </motion.div>
          {/* Badge bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: EASE }}
            className="absolute bottom-12 left-0 card-industrial px-4 py-3"
          >
            <p className="label-mono">Atendimento</p>
            <p className="text-nsa-white font-bold text-sm">SP e Grande SP</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-nsa-orange animate-pulse" />
        <span className="label-mono text-[10px]">Role para baixo</span>
      </div>
    </section>
  );
}
