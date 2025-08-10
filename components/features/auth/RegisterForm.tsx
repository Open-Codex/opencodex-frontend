import { Button } from '@/components/ui/button';
import {Link} from '@/i18n/navigation';
import { useRegister } from '@/hooks/auth/useRegister';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const RegisterForm = () => {
    const t = useTranslations('Auth.Register');

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    const [errors, setErrors] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: ''
    });

    const { mutate, isPending, error } = useRegister();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

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
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: ''
        };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is Required';
            valid = false;
        }

        if (!formData.username.trim()) {
            newErrors.username = 'Username is Required';
            valid = false;
        } else if (formData.username.length < 3) {
            newErrors.username = 'Minimum 3 characters';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is Required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email not valid';
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is Required';
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Minimum 6 characters';
            valid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            mutate(formData);
        }
    };

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
                            <label className="text-sm mb-1 block">{t('form.name')}<strong className='text-purple-500'>*</strong></label>
                            <input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Chonka Perez"
                                className={`w-full bg-transparent border ${
                                errors.name ? 'border-red-500' : 'border-white/20'
                                } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]`}
                            />
                            {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm mb-1 block">{t('form.username')}<strong className='text-purple-500'>*</strong></label>
                            <input
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="username"
                                className={`w-full bg-transparent border ${
                                errors.username ? 'border-red-500' : 'border-white/20'
                                } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]`}
                            />
                            {errors.username && (
                            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm mb-1 block">{t('form.email')}<strong className='text-purple-500'>*</strong></label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={`w-full bg-transparent border ${
                                errors.email ? 'border-red-500' : 'border-white/20'
                                } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]`}
                            />
                            {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <label>{t('form.password')}<strong className='text-purple-500'>*</strong></label>
                            </div>
                            <input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className={`w-full bg-transparent border ${
                                errors.password ? 'border-red-500' : 'border-white/20'
                                } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]`}
                            />
                            {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <label>{t('form.confirmPassword')}<strong className='text-purple-500'>*</strong></label>
                            </div>
                            <input
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className={`w-full bg-transparent border ${
                                errors.confirmPassword ? 'border-red-500' : 'border-white/20'
                                } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]`}
                            />
                            {errors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                            <input 
                            type="checkbox" 
                            id="accept_terms" 
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            />
                            <label htmlFor="accept_terms">
                            {t('checkbox1')}<Link href="/terms" className="text-[#a855f7] hover:underline">{t('checkbox2')}</Link>{t('checkbox3')} <Link href="/privacy" className="text-[#a855f7] hover:underline">{t('checkbox4')}</Link>
                            {errors.acceptTerms && (
                                <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
                            )}
                            </label>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full bg-[#a855f7] hover:bg-[#9333ea]"
                            disabled={isPending}
                        >
                            {isPending ? 'Register...' : 'Register'}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/70">
                        {t('haveAccount')}
                        <Link href="/auth/login" className="text-[#a855f7] hover:underline">
                            {t('signInHere')}
                        </Link>
                    </p>
                </div>

                {/* Terms & Privacy */}
                <p className="text-center text-xs text-white/50">
                    {t('acceptOurTerms')}
                    <Link href="/privacy" className="text-[#a855f7] hover:underline">
                        {t('terms')}
                    </Link>
                    {t('and')}
                    <Link href="/privacy" className="text-[#a855f7] hover:underline">
                        {t('privacy')}
                    </Link>
                    .
                </p>
            </div>
        </>
    )
}

export default RegisterForm