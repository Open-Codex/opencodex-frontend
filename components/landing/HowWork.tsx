import { BrainCircuit, Sparkles, Users2 } from 'lucide-react'

const HowWork = () => {
    return (
        <section className="py-20 px-6 text-center bg-[#161b22]">
            <h3 className="text-2xl font-semibold mb-10">¿Cómo Funciona?</h3>
            <div className="grid gap-10 sm:grid-cols-3 max-w-5xl mx-auto">
                <div>
                    <Users2 className="mx-auto w-10 h-10 mb-4 text-[#A855F7]" />
                    <h4 className="font-bold mb-2">1. Regístrate</h4>
                    <p className="text-sm text-white/70">
                        Crea tu perfil y muestra tus habilidades, experiencia y proyectos anteriores
                    </p>
                </div>
                <div>
                    <BrainCircuit className="mx-auto w-10 h-10 mb-4 text-[#A855F7]" />
                    <h4 className="font-bold mb-2">2. Explora o Publica</h4>
                    <p className="text-sm text-white/70">
                        Busca proyectos interesantes para colaborar o publica tu propia idea
                    </p>
                </div>
                <div>
                    <Sparkles className="mx-auto w-10 h-10 mb-4 text-[#A855F7]" />
                    <h4 className="font-bold mb-2">3. Colabora</h4>
                    <p className="text-sm text-white/70">
                        Conecta con otros desarrolladores y comienza a construir algo increíble juntos
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowWork