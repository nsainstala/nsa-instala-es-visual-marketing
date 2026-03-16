import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kitchenImg from "@/assets/kitchen-portfolio.jpg";

const BENEFITS = [
  "Atendimento residencial de alto padrão",
  "Especialistas em cozinhas gourmet",
  "Garantia por escrito em todos os serviços",
  "Atendimento em São Paulo e Grande SP",
  "Também atendemos comercial e industrial",
  "Equipe treinada e uniformizada",
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-nsa-orange/10 blur-3xl scale-95" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src={kitchenImg}
                alt="Cozinha gourmet instalada pela NSA"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nsa-black/60 to-transparent" />
              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="label-mono">Instalação NSA</p>
                  <p className="text-nsa-white font-bold">Área Gourmet Completa</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-nsa-orange animate-pulse" />
              </div>
            </div>
            {/* Corner tag */}
            <div className="absolute -bottom-4 -right-4 card-industrial px-4 py-3">
              <p className="label-mono">São Paulo</p>
              <p className="text-nsa-white font-bold text-sm">Residencial Premium</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <span className="label-mono">Por que a NSA?</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-3 mb-4">
                Qualidade que{" "}
                <span className="text-nsa-orange">você vê</span>
              </h2>
              <span className="section-divider" />
            </div>

            <p className="text-nsa-steel text-lg leading-relaxed">
              Onde a técnica encontra a estética. Cada instalação é realizada com atenção aos detalhes,
              nivelamento perfeito e acabamento impecável — para que sua cozinha gourmet fique exatamente
              como você imaginou.
            </p>

            <ul className="space-y-4">
              {BENEFITS.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3 text-nsa-white"
                >
                  <div className="w-2 h-2 rounded-full bg-nsa-orange flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <a
              href="https://www.instagram.com/nsainstala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-nsa-steel hover:text-nsa-orange transition-colors font-mono text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @nsainstala no Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
