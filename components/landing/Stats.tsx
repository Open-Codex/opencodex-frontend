import { useTranslations } from 'next-intl';

const Stats = () => {
    const t = useTranslations('LandingPage.stats');

    return (
        <section className="flex justify-center sm:gap-20 gap-8 py-8 border-y border-white/10 text-center text-lg bg-[#161b22]">
            <div>
                <p className="text-purple-500 font-bold text-2xl">1.024</p>
                <span>{t('projects')}</span>
            </div>
            <div>
                <p className="text-purple-500 font-bold text-2xl">2.230</p>
                <span>{t('developers')}</span>
            </div>
            <div>
                <p className="text-purple-500 font-bold text-2xl">4.096</p>
                <span>{t('collaborations')}</span>
            </div>
        </section>
    )
}

export default Stats