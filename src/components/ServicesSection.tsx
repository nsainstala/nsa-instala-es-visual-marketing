import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "coifas",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="48" height="8" rx="2" />
        <path d="M12 16L18 48H46L52 16" />
        <line x1="20" y1="42" x2="44" y2="42" />
        <line x1="22" y1="36" x2="42" y2="36" />
        <path d="M28 54 L28 58 M36 54 L36 58" />
      </svg>
    ),
    label: "Coifas",
    description: "Instalação e manutenção de coifas de parede e ilha em cozinhas gourmet residenciais.",
    detail: "Elétrica + Duto",
  },
  {
    id: "cooktops",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="14" width="52" height="36" rx="3" />
        <circle cx="20" cy="26" r="5" />
        <circle cx="44" cy="26" r="5" />
        <circle cx="20" cy="42" r="5" />
        <circle cx="44" cy="42" r="5" />
        <circle cx="20" cy="26" r="2" />
        <circle cx="44" cy="26" r="2" />
        <circle cx="20" cy="42" r="2" />
        <circle cx="44" cy="42" r="2" />
      </svg>
    ),
    label: "Cooktops",
    description: "Montagem e ligação de cooktops a gás e indução com todo suporte técnico.",
    detail: "Gás + Indução",
  },
  {
    id: "fornos",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="10" width="48" height="44" rx="3" />
        <rect x="14" y="20" width="36" height="26" rx="2" />
        <circle cx="24" cy="14" r="2" />
        <circle cx="32" cy="14" r="2" />
        <circle cx="40" cy="14" r="2" />
        <line x1="20" y1="26" x2="44" y2="26" strokeDasharray="3 3" />
        <line x1="20" y1="38" x2="44" y2="38" strokeDasharray="3 3" />
      </svg>
    ),
    label: "Fornos",
    description: "Instalação de fornos de embutir elétricos e a gás com nivelamento e teste.",
    detail: "Elétrico + Gás",
  },
  {
    id: "churrasqueiras",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 30 C12 18 20 10 32 10 C44 10 52 18 52 30" />
        <rect x="10" y="30" width="44" height="4" rx="1" />
        <path d="M14 34 L14 50 L50 50 L50 34" />
        <line x1="28" y1="50" x2="24" y2="58" />
        <line x1="36" y1="50" x2="40" y2="58" />
        <path d="M24 20 Q26 14 28 20 Q30 14 32 20" />
      </svg>
    ),
    label: "Churrasqueiras",
    description: "Projetos e instalação de churrasqueiras gourmet em áreas internas e externas.",
    detail: "Gourmet + Forno",
  },
  {
    id: "grills",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="26" width="44" height="24" rx="3" />
        <path d="M10 30 L54 30" />
        <line x1="18" y1="30" x2="18" y2="50" />
        <line x1="25" y1="30" x2="25" y2="50" />
        <line x1="32" y1="30" x2="32" y2="50" />
        <line x1="39" y1="30" x2="39" y2="50" />
        <line x1="46" y1="30" x2="46" y2="50" />
        <path d="M20 20 Q22 14 24 20 Q26 14 28 20 Q30 14 32 20" />
        <path d="M28 26 L28 30" />
      </svg>
    ),
    label: "Grills",
    description: "Instalação de grills e chapas profissionais para áreas gourmet de alto padrão.",
    detail: "Pro + Chapa",
  },
  {
    id: "manutencao",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M40 8 C50 18 50 30 40 36 L22 54 C19 57 15 57 12 54 C9 51 9 47 12 44 L30 26 C24 16 26 4 36 2" />
        <circle cx="17" cy="49" r="3" />
        <path d="M38 12 L44 18" />
      </svg>
    ),
    label: "Manutenção",
    description: "Revisão, limpeza e manutenção preventiva de todos os equipamentos instalados.",
    detail: "Preventiva",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.08,
    },
  }),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="label-mono">Especialidades Técnicas</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-3 mb-4">
            Nossos <span className="text-nsa-orange">Serviços</span>
          </h2>
          <span className="section-divider" />
          <p className="text-nsa-steel mt-4 max-w-xl text-lg">
            Do projeto à instalação certificada. Cada serviço é executado com precisão técnica e garantia NSA.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="card-industrial p-8 group cursor-default"
            >
              <div className="text-nsa-orange mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                {svc.icon}
              </div>
              <span className="label-mono mb-2 block">{svc.detail}</span>
              <h3 className="text-xl font-bold text-nsa-white mb-3 tracking-tight">{svc.label}</h3>
              <p className="text-nsa-steel text-sm leading-relaxed">{svc.description}</p>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={`https://wa.me/5511947974649?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(svc.label)}.%20Gostaria%20de%20um%20orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-nsa-orange text-sm font-semibold hover:gap-3 transition-all duration-300"
                >
                  Solicitar Orçamento <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
