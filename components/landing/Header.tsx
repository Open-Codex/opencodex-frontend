"use client";

import { useTranslations } from 'next-intl';
import {Link} from '@/i18n/navigation';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const Header = () => {
    const t = useTranslations('LandingPage');
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'text-purple-500 font-semibold' : 'hover:text-purple-500';
    };

    return (
        <header className="fixed top-0 left-0 w-full xl:px-32 px-4 py-4 flex justify-between items-center border-b border-white/10 bg-[#161b22] z-50">
            <h1 className="text-xl font-bold text-white">
                <span className="text-purple-600">■</span>
                <Link href="/"> OpenCodeX</Link>
            </h1>
            <nav className="hidden md:flex gap-6 text-sm">
                <Link href="/projects" className={isActive('/projects')}>{t('nav_projects')}</Link>
                <Link href="/users" className={isActive('/developers')}>{t('nav_developers')}</Link>
                <Link href="/about" className={isActive('/about')}>{t('nav_about')}</Link> {/* Aquí marcamos el enlace activo */}
                <Link href="/contact" className={isActive('/contact')}>{t('nav_contact')}</Link>
                <Link href="/faq" className={isActive('/faq')}>{t('nav_faq')}</Link>
            </nav>
            <div className="flex gap-2">
                <Link href="/auth/login">
                    <Button variant="ghost" className="text-white">{t('button_login')}</Button>
                </Link>
                <Link href="/auth/register">
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">{t('button_register')}</Button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
