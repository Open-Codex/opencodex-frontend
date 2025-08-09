"use client"

import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react'

const faqs = [
    {
        question: "¿Necesito experiencia previa para unirme?",
        answer:
            "No. OpenCodeX está abierto a todos los niveles. Puedes aprender colaborando en proyectos reales.",
    },
    {
        question: "¿Cómo me uno a un proyecto?",
        answer:
            "Puedes explorar proyectos y enviar una solicitud para unirte. El creador o moderador evaluará tu perfil.",
    },
    {
        question: "¿OpenCodeX es gratuito?",
        answer:
            "Sí. Es una plataforma sin fines de lucro para fomentar la colaboración y el aprendizaje.",
    },
    {
        question: "¿Puedo publicar mi propio proyecto?",
        answer:
            "Sí. Una vez registrado puedes crear un proyecto, describirlo y buscar colaboradores.",
    },
    {
        question: "¿Dónde se comunican los equipos?",
        answer:
            "Principalmente a través de Discord. Cada proyecto puede tener su propio servidor o canal de comunicación.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-8">
                <Header />
                <section className="py-20 px-6text-white flex-grow">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h3>
                        <ul className="space-y-4">
                            {faqs.map((faq, index) => (
                                <li key={index} className="border border-white/10 rounded-lg">
                                    <button
                                        className="w-full flex justify-between items-center text-left p-4 bg-[#161b22] hover:bg-[#0d1117]"
                                        onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform ${index === openIndex ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {index === openIndex && (
                                        <div className="px-4 pb-4 text-sm text-white/80">{faq.answer}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default Faq