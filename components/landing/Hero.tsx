import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className="text-center pt-38 pb-20 px-6 bg-[#0d1117]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Conecta. Colabora. Crea.
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
                La plataforma de código abierto donde desarrolladores encuentran proyectos apasionantes y creadores buscan colaboradores talentosos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#A855F7] hover:bg-[#9333ea]">Explorar Proyectos</Button>
                <Button variant="outline" className="text-white border-white/10 hover:border-white/30">
                    Buscar Colaborador
                </Button>
            </div>
        </section>
    )
}

export default Hero