import { BrainCircuit, Sparkles, Users2 } from 'lucide-react'
import { useTranslations } from 'next-intl';

const HowWork = () => {
    const t = useTranslations('LandingPage.howWork');

    return (
        <section className="py-20 px-6 text-center bg-[#161b22]">
            <h3 className="text-2xl font-semibold mb-10">{t('title')}</h3>
            <div className="grid gap-10 sm:grid-cols-3 max-w-5xl mx-auto">
                <div>
                    <Users2 className="mx-auto w-10 h-10 mb-4 text-[#A855F7]" />
                    <h4 className="font-bold mb-2">{t('subtitle.1')}</h4>
                    <p className="text-sm text-white/70">
                        {t('description.1')}
                    </p>
                </div>
                <div>
                    <BrainCircuit className="mx-auto w-10 h-10 mb-4 text-[#A855F7]" />
                    <h4 className="font-bold mb-2">{t('subtitle.2')}</h4>
                    <p className="text-sm text-white/70">
                        {t('description.2')}
                    </p>
                </div>
                <div>
                    <Sparkles className="mx-auto w-10 h-10 mb-4 text-[#A855F7]" />
                    <h4 className="font-bold mb-2">{t('subtitle.3')}</h4>
                    <p className="text-sm text-white/70">
                        {t('description.3')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowWork