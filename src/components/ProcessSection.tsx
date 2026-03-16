import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Wrench, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <ClipboardList size={28} />,
    title: "Avaliação Técnica",
    description:
      "Visita técnica ao local para avaliação das condições de instalação, medidas e especificações do equipamento. Orçamento detalhado sem custo.",
    tag: "Visita + Orçamento",
  },
  {
    number: "02",
    icon: <Wrench size={28} />,
    title: "Execução Profissional",
    description:
      "Instalação limpa, nivelada e testada. Usamos ferramentas e materiais de alta qualidade, respeitando normas técnicas de segurança.",
    tag: "Instalação + Teste",
  },
  {
    number: "03",
    icon: <BadgeCheck size={28} />,
    title: "Certificação NSA",
    description:
      "Garantia por escrito, passagem completa de como operar o equipamento e suporte pós-instalação. O Padrão NSA de excelência.",
    tag: "Garantia + Suporte",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="processo" className="py-32 relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-nsa-orange/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <span className="label-mono">Como Trabalhamos</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-3 mb-4">
            O <span className="text-nsa-orange">Padrão NSA</span>
          </h2>
          <span className="section-divider" />
          <p className="text-nsa-steel mt-4 text-lg">
            Três etapas. Zero surpresas. Máxima qualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-nsa-orange/40 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
              className="relative"
            >
              {/* Step number circle */}
              <div className="w-24 h-24 rounded-full border-2 border-nsa-orange/40 flex items-center justify-center mb-8 relative bg-nsa-carbon">
                <div className="absolute inset-2 rounded-full bg-nsa-orange/10" />
                <div className="relative text-nsa-orange">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-nsa-orange flex items-center justify-center">
                  <span className="font-mono font-bold text-black text-xs">{step.number}</span>
                </div>
              </div>

              <span className="label-mono block mb-3">{step.tag}</span>
              <h3 className="text-2xl font-bold text-nsa-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-nsa-steel leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
