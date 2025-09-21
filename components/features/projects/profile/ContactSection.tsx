'use client'
import { useTranslations } from 'next-intl';

const ContactSection = () => {
    const t = useTranslations('App.Page.Project');

    return (
        <div className="bg-[#161b22] rounded-md p-4">
            <h2 className="font-semibold mb-2">{t('contact')}</h2>
            <p className="text-gray-300 text-sm mb-4">
                {t('contactText')}
            </p>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">Email:</span>
                    <span>usuario@ejemplo.com</span>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;