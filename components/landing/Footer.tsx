import { useTranslations } from 'next-intl';
import {Link} from '@/i18n/navigation';

const Footer = () => {
    const t = useTranslations('LandingPage.footer');

    return (
        <footer className="bg-[#161b22] text-white/50 py-10 px-6 border-t border-white/10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm max-w-full mx-auto">
                <div>
                    <h4 className="font-semibold text-white mb-2">OpenCodeX</h4>
                    <p>{t('title')}</p><p className='text-[#161b22]'>this is a easter egg for solution a bug..........................................................</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2">{t('platform')}</h4>
                    <ul className="space-y-1">
                        <li><Link href="#">{t('button.projects')}</Link></li>
                        <li><Link href="#">{t('button.developers')}</Link></li>
                        <li><Link href="#">{t('button.createProject')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2">{t('community')}</h4>
                    <ul className="space-y-1">
                        <li><Link href="#">FAQ</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Discord</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-2">{t('support')}</h4>
                    <ul className="space-y-1">
                        <li><Link href="#">{t('button.helpCenter')}</Link></li>
                        <li><Link href="#">{t('button.privacity')}</Link></li>
                        <li><Link href="#">{t('button.contact')}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-xs">
                {t('copy')}
            </div>
        </footer>
    );
}

export default Footer;