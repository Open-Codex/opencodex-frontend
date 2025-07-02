import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#161b22] text-white/50 py-10 px-6 border-t border-white/10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm max-w-full mx-auto">
                <div>
                    <h4 className="font-semibold text-white mb-2">OpenCodeX</h4>
                    <p>Conectando desarrolladores con proyectos de código abierto desde 2025.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2">Plataforma</h4>
                    <ul className="space-y-1">
                        <li><Link href="#">Explorar Proyectos</Link></li>
                        <li><Link href="#">Desarrolladores</Link></li>
                        <li><Link href="#">Crear Proyecto</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2">Comunidad</h4>
                    <ul className="space-y-1">
                        <li><Link href="#">FAQ</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Discord</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2">Soporte</h4>
                    <ul className="space-y-1">
                        <li><Link href="#">Centro de Ayuda</Link></li>
                        <li><Link href="#">Privacidad</Link></li>
                        <li><Link href="#">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-xs">
                © 2025 OpenCodeX. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;