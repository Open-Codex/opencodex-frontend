import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl';
import {Link} from '@/i18n/navigation';
import { useLogin } from '@/hooks/auth/useLogin';
import { useState } from 'react';

const LoginForm = () => {
    const t = useTranslations('Auth.Login');

    const [formData, setFormData] = useState({
    username: '',
    password: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    const { mutate, isPending, error } = useLogin();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
        }));
        // Limpiar errores al escribir
        if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
        }
    };

        const validateForm = () => {
        let valid = true;
        const newErrors = {
        username: '',
        password: ''
        };

        if (!formData.username.trim()) {
        newErrors.username = 'User Required';
        valid = false;
        } else if (formData.username.length < 3) {
        newErrors.username = 'Minimum 3 characters';
        valid = false;
        }

        if (!formData.password) {
        newErrors.password = 'Password required';
        valid = false;
        } else if (formData.password.length < 2) { // 2 solo para test
        newErrors.password = 'Minimum 6 characters';
        valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
        if (validateForm()) {
        mutate({
            username: formData.username,
            password: formData.password
        });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center pb-32">
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
                    <h2 className="text-xl font-semibold text-center mb-1">{t('title')}</h2>
                    <p className="text-sm text-center text-white/60 mb-6">
                        {t('subtitle')}
                    </p>

                    {error && (
                    <div className="mb-4 p-2 bg-red-500/20 text-red-300 text-sm rounded">
                        {error.message}
                    </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm mb-1 block">{t('form.username')}</label>
                            <input
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder={t('form.usernamePlaceholder')}
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <label>{t('form.password')}</label>
                                <Link href="#" className="text-[#a855f7] hover:underline">
                                    {t('form.forgot')}
                                </Link>
                            </div>
                            <input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">{t('form.remember')}</label>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full bg-[#a855f7] hover:bg-[#9333ea]"
                            disabled={isPending}
                        >
                            {isPending ? 'Sign In...' : 'Sign In'}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/70">
                        {t('notAccount')}{" "}
                        <Link href="/auth/register" className="text-[#a855f7] hover:underline">
                            {t('register')}
                        </Link>
                    </p>
                </div>

                {/* Terms & Privacy */}
                <p className="text-center text-xs text-white/50">
                    {t('accept')}{" "}
                    <Link href="#/legal/terms" className="text-[#a855f7] hover:underline">
                        {t('terms')}
                    </Link>{" "}
                    &{" "}
                    <Link href="/privacy" className="text-[#a855f7] hover:underline">
                        {t('privacy')}
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default LoginForm