"use client"

import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'

const Privacy = () => {

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-8">
                <Header />
                <section className="py-20 px-6text-white flex-grow">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6 text-center">Política de Privacidad</h3>
                        <p className="text-white/80 text-sm mb-4">
                            En OpenCodeX valoramos tu privacidad. Esta plataforma fue construida para ser un espacio seguro de colaboración. Aquí te explicamos cómo manejamos tus datos:
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-sm text-white/70">
                            <li>No compartimos tu información personal con terceros sin tu consentimiento.</li>
                            <li>La información que compartes (como tus habilidades o perfil) solo será visible dentro de la plataforma.</li>
                            <li>Usamos herramientas seguras de autenticación y cifrado para proteger tu cuenta.</li>
                            <li>Puedes solicitar eliminar tu cuenta en cualquier momento y todos tus datos serán eliminados.</li>
                            <li>No enviamos correos masivos ni vendemos listas de usuarios.</li>
                        </ul>
                        <p className="text-white/60 text-xs mt-6 text-center">
                            Última actualización: Julio 2025
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default Privacy