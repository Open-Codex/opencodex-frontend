"use client"

import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import { useTranslations } from 'next-intl';

const Privacy = () => {
    const t = useTranslations('Privacy');

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-8">
                <Header />
                <section className="py-20 px-6text-white flex-grow">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6 text-center">{t('title')}</h3>
                        <p className="text-white/80 text-sm mb-4">
                            {t('subtitle')}
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-sm text-white/70">
                            <li>{t('list.1')}</li>
                            <li>{t('list.2')}</li>
                            <li>{t('list.3')}</li>
                            <li>{t('list.4')}</li>
                            <li>{t('list.5')}</li>
                        </ul>
                        <p className="text-white/60 text-xs mt-6 text-center">
                            {t('lastUpdate')}
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default Privacy