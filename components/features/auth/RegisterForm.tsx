import { Button } from '@/components/ui/button'
import Link from 'next/link'

const RegisterForm = () => {
    return (
        <>
            <div className="w-full max-w-md space-y-6 pt-16">
                {/* Logo and Brand */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-[#a855f7] text-2xl">⌘</span>
                        <Link href="/">
                            <h1 className="text-2xl font-bold text-white">OpenCodeX</h1>
                        </Link>
                    </div>
                </div>

                {/* Register Form Card */}
                <div className="bg-[#161b22] border border-white/10 rounded-xl p-8 text-white">
                    <h2 className="text-xl font-semibold text-center mb-1">Registrarse</h2>
                    <p className="text-sm text-center text-white/60 mb-6">
                        Crea tu cuenta y comienza a colaborar en proyectos
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="text-sm mb-1 block">Nombre Completo <strong className='text-purple-500'>*</strong></label>
                            <input
                                type="text"
                                placeholder="Chonka Perez"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-1 block">Nombre de Usuario <strong className='text-purple-500'>*</strong></label>
                            <input
                                type="text"
                                placeholder="username"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-1 block">Email <strong className='text-purple-500'>*</strong></label>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <label>Contraseña <strong className='text-purple-500'>*</strong></label>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <label>Confirmar Contraseña <strong className='text-purple-500'>*</strong></label>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                            <input type="checkbox" id="accept_terms" />
                            <label htmlFor="accept_terms">Acepto los <strong className='text-purple-500'>Terminos y Condiciones</strong> y la <strong className='text-purple-500'>Politica de Privacidad</strong></label>
                        </div>

                        <Button type="submit" className="w-full bg-[#a855f7] hover:bg-[#9333ea]">
                            Registrarse
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/70">
                        ¿Ya tienes una cuenta?{" "}
                        <Link href="/auth/login" className="text-[#a855f7] hover:underline">
                            Inicia Sesión aquí
                        </Link>
                    </p>
                </div>

                {/* Terms & Privacy */}
                <p className="text-center text-xs text-white/50">
                    Al registrarse, aceptas nuestros{" "}
                    <Link href="/privacy" className="text-[#a855f7] hover:underline">
                        términos de servicio
                    </Link>{" "}
                    y{" "}
                    <Link href="/privacy" className="text-[#a855f7] hover:underline">
                        política de privacidad
                    </Link>
                    .
                </p>
            </div>
        </>
    )
}

export default RegisterForm