"use client"

import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react'
import { useTranslations } from 'next-intl';

const faqs = [
    {
        question: "question.1",
        answer:
            "answer.1",
    },
    {
        question: "question.2",
        answer:
            "answer.2",
    },
    {
        question: "question.3",
        answer:
            "answer.3",
    },
    {
        question: "question.4",
        answer:
            "answer.4",
    },
    {
        question: "question.5",
        answer:
            "answer.5",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations('Faq');

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-8">
                <Header />
                <section className="py-20 px-6text-white flex-grow">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-8 text-center">{t('title')}</h3>
                        <ul className="space-y-4">
                            {faqs.map((faq, index) => (
                                <li key={index} className="border border-white/10 rounded-lg">
                                    <button
                                        className="w-full flex justify-between items-center text-left p-4 bg-[#161b22] hover:bg-[#0d1117]"
                                        onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                    >
                                        <span>{t(faq.question)}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform ${index === openIndex ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {index === openIndex && (
                                        <div className="px-4 pb-4 text-sm text-white/80">{t(faq.answer)}</div>
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