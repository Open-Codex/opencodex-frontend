import { Button } from '../ui/button'
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('LandingPage.hero');

    return (
        <section className="text-center pt-38 pb-20 px-6 bg-[#0d1117]">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
                {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#A855F7] hover:bg-[#9333ea]">{t('button.exploreProjects')}</Button>
                <Button variant="outline" className="text-white border-white/10 hover:border-white/30">
                    {t('button.searchCollaborator')}
                </Button>
            </div>
        </section>
    )
}

export default Hero