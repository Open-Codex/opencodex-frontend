"use client"

import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/Header"
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('About');

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-8">
                <Header />
                <section className="py-20 px-6 text-white">
                    <div className="max-w-5xl mx-auto space-y-20">
                        {/* ¿Que es? */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
                            <p className="text-lg text-white/80">
                                {t('subtitle')}
                            </p>
                        </div>

                        {/* Como nacio la idea */}
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-purple-500 mb-3">💡 {t('idea')}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                {t('ideaDesc')}
                            </p>
                        </div>

                        {/* Nuestros valores */}
                        <div>
                            <h3 className="text-2xl font-semibold text-purple-500 mb-6 text-center">🤝 {t('ourValues')}</h3>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="bg-[#161b22] p-4 rounded-xl border border-white/10">
                                    <h4 className="font-semibold text-lg mb-2">{t('ourValuesTitle.1')}</h4>
                                    <p className="text-sm text-white/70">{t('ourValuesDesc.1')}</p>
                                </div>
                                <div className="bg-[#161b22] p-4 rounded-xl border border-white/10">
                                    <h4 className="font-semibold text-lg mb-2">{t('ourValuesTitle.2')}</h4>
                                    <p className="text-sm text-white/70">{t('ourValuesDesc.2')}</p>
                                </div>
                                <div className="bg-[#161b22] p-4 rounded-xl border border-white/10">
                                    <h4 className="font-semibold text-lg mb-2">{t('ourValuesTitle.3')}</h4>
                                    <p className="text-sm text-white/70">{t('ourValuesDesc.3')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Nuestro equipo */}
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-purple-500 mb-4">👥 {t('ourTeam')}</h3>
                            <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm">
                                {t('ourTeamDesc')}
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                {/* Aquí puedes reemplazar con datos reales */}
                                <div className="bg-[#161b22] p-4 rounded-xl w-48 border border-white/10">
                                    <div className="h-20 w-20 bg-[#2e2e42] rounded-full mx-auto mb-3" />
                                    <h4 className="text-sm font-semibold">Felipe Castillo</h4>
                                    <p className="text-xs text-white/60">Founder & Dev</p>
                                </div>
                                <div className="bg-[#161b22] p-4 rounded-xl w-48 border border-white/10">
                                    <div className="h-20 w-20 bg-[#2e2e42] rounded-full mx-auto mb-3" />
                                    <h4 className="text-sm font-semibold">Nombre Apellido</h4>
                                    <p className="text-xs text-white/60">Dev & UX Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default About
