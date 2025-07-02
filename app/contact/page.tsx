"use client"

import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/Header"
import { MessageSquareText } from "lucide-react"

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
            <Header />
            <section className="py-20 px-6text-white flex-grow">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Contacto</h3>
                    <p className="text-white/80 text-sm mb-10">
                        ¿Tienes dudas, sugerencias o quieres colaborar con nosotros?
                        Escríbenos y te responderemos lo antes posible.
                    </p>

                    <form className="grid gap-6 text-left">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm text-white/70">Nombre</label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full bg-[#161b22] border border-white/10 px-4 py-2 rounded-md text-sm text-white placeholder:text-white/30"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm text-white/70">Correo</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full bg-[#161b22] border border-white/10 px-4 py-2 rounded-md text-sm text-white placeholder:text-white/30"
                                placeholder="tunombre@correo.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 text-sm text-white/70">Mensaje</label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                className="w-full bg-[#161b22] border border-white/10 px-4 py-2 rounded-md text-sm text-white placeholder:text-white/30"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-[#A855F7] hover:bg-[#9333ea] text-white text-sm font-medium py-2 px-4 rounded-md transition"
                        >
                            <MessageSquareText size={16} />
                            Enviar Mensaje
                        </button>
                    </form>

                    <div className="mt-10 text-sm text-white/60">
                        También puedes escribirnos directamente a:{" "}
                        <a
                            href="mailto:contacto@opencode.com"
                            className="text-[#A855F7] hover:underline"
                        >
                            hardcode.contacto@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact