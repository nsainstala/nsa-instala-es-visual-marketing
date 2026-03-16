import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Instagram, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contato" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nsa-orange/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card-industrial p-10 md:p-16 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nsa-orange to-transparent" />
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-4 right-8 text-[200px] font-mono font-black leading-none text-nsa-orange select-none">NSA</div>
          </div>
          <span className="label-mono block mb-4">Fale Conosco</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Pronto para sua{" "}
            <span className="text-nsa-orange">instalação?</span>
          </h2>
          <p className="text-nsa-steel text-xl mb-10 max-w-xl mx-auto">
            Solicite um orçamento técnico gratuito. Atendemos toda São Paulo e Grande SP.
          </p>
          <a
            href="https://wa.me/5511947974649?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20técnico%20para%20instalação."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action inline-flex text-lg px-10 py-5"
          >
            <MessageCircle size={22} />
            Chamar no WhatsApp
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              icon: <Phone size={24} />,
              label: "Telefone",
              value: "11 94797-4649",
              href: "tel:+5511947974649",
            },
            {
              icon: <Mail size={24} />,
              label: "E-mail",
              value: "instalacoesnsa@gmail.com",
              href: "mailto:instalacoesnsa@gmail.com",
            },
            {
              icon: <Instagram size={24} />,
              label: "Instagram",
              value: "@nsainstala",
              href: "https://www.instagram.com/nsainstala",
            },
            {
              icon: <MapPin size={24} />,
              label: "Área de Atendimento",
              value: "São Paulo e Grande SP",
              href: "#",
            },
          ].map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
              className="card-industrial p-6 flex flex-col gap-3 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-nsa-orange group-hover:scale-110 transition-transform duration-300 w-fit">
                {contact.icon}
              </div>
              <span className="label-mono text-nsa-steel">{contact.label}</span>
              <p className="text-nsa-white font-semibold text-sm leading-tight">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
