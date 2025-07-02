import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginForm = () => {
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

                {/* Login Form Card */}
                <div className="bg-[#161b22] border border-white/10 rounded-xl p-8 text-white">
                    <h2 className="text-xl font-semibold text-center mb-1">Iniciar Sesión</h2>
                    <p className="text-sm text-center text-white/60 mb-6">
                        Accede a tu cuenta para continuar colaborando
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="text-sm mb-1 block">Email o nombre de usuario</label>
                            <input
                                type="email"
                                placeholder="tu@email.com o tu-usuario"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <label>Contraseña</label>
                                <Link href="#" className="text-[#a855f7] hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Recordarme</label>
                        </div>

                        <Button type="submit" className="w-full bg-[#a855f7] hover:bg-[#9333ea]">
                            Iniciar Sesión
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/70">
                        ¿No tienes una cuenta?{" "}
                        <Link href="/auth/register" className="text-[#a855f7] hover:underline">
                            Regístrate aquí
                        </Link>
                    </p>
                </div>

                {/* Terms & Privacy */}
                <p className="text-center text-xs text-white/50">
                    Al iniciar sesión, aceptas nuestros{" "}
                    <Link href="#/legal/terms" className="text-[#a855f7] hover:underline">
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

export default LoginForm