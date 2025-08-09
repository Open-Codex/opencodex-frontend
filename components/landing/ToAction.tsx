import { Github } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from 'next-intl';

const ToAction = () => {
    const t = useTranslations('LandingPage.toAction');

    return (
        <section className="py-20 px-6 text-center bg-[#0d1117]">
            <h3 className="text-2xl font-semibold mb-6">{t('title')}</h3>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
                {t('subtitle')}
            </p>
            <div className="flex justify-center gap-4">
                <Button className="bg-[#A855F7] hover:bg-[#9333ea]">{t('button.createAccount')}</Button>
                <Button variant="outline" className="text-white border-white/10 hover:border-white/30">
                    <Github className="w-4 h-4 mr-2" /> {t('button.viewGithub')}
                </Button>
            </div>
        </section>
    )
}

export default ToAction