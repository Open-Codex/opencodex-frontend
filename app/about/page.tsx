"use client"

import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/Header"

const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-8">
                <Header />
                <section className="py-20 px-6 text-white">
                    <div className="max-w-5xl mx-auto space-y-20">
                        {/* ¿Que es? */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">¿Qué es OpenCodeX?</h2>
                            <p className="text-lg text-white/80">
                                OpenCodeX es una plataforma de colaboración que conecta desarrolladores con proyectos de código abierto o sin fines de lucro.
                                Aquí puedes aportar con tus habilidades, aprender en equipo y contribuir a ideas reales que impactan a otros.
                            </p>
                        </div>

                        {/* Como nacio la idea */}
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-purple-500 mb-3">💡 Cómo nació la idea</h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                La idea de OpenCodeX nació al ver cómo muchos desarrolladores (especialmente estudiantes o autodidactas)
                                tienen las ganas de colaborar en proyectos reales, pero no encuentran dónde hacerlo.
                                Creamos este espacio para que cualquiera pueda encontrar proyectos interesantes o iniciar el suyo,
                                con un enfoque en el aprendizaje y el trabajo en equipo.
                            </p>
                        </div>

                        {/* Nuestros valores */}
                        <div>
                            <h3 className="text-2xl font-semibold text-purple-500 mb-6 text-center">🤝 Nuestros valores</h3>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="bg-[#161b22] p-4 rounded-xl border border-white/10">
                                    <h4 className="font-semibold text-lg mb-2">Colaboración</h4>
                                    <p className="text-sm text-white/70">Creemos en el poder de trabajar en equipo y crecer juntos.</p>
                                </div>
                                <div className="bg-[#161b22] p-4 rounded-xl border border-white/10">
                                    <h4 className="font-semibold text-lg mb-2">Transparencia</h4>
                                    <p className="text-sm text-white/70">Todos los proyectos aquí son abiertos y accesibles para contribuir.</p>
                                </div>
                                <div className="bg-[#161b22] p-4 rounded-xl border border-white/10">
                                    <h4 className="font-semibold text-lg mb-2">Aprendizaje</h4>
                                    <p className="text-sm text-white/70">Fomentamos el aprendizaje continuo a través de la práctica real.</p>
                                </div>
                            </div>
                        </div>

                        {/* Nuestro equipo */}
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-purple-500 mb-4">👥 Nuestro equipo</h3>
                            <p className="text-white/70 max-w-2xl mx-auto mb-6 text-sm">
                                Somos un pequeño grupo de desarrolladores y diseñadores apasionados por el código abierto y la colaboración.
                                Estamos construyendo OpenCodeX como un espacio libre y accesible para todos.
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
