import { Vacancy } from '@/types';
import { useTranslations } from 'next-intl';

interface Props {
    vacancy: Vacancy;
}

const VacancyCard = ({ vacancy }: Props) => {
    const t = useTranslations('App.Page.Vacancies');

    return (
        <div className="bg-gray-800 rounded-2xl p-5 shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-white mb-2">{vacancy.title}</h2>
            <p className="text-gray-300 mb-4">{vacancy.description}</p>

            <p className="text-sm mb-2">
                <span className="font-semibold">{t('status')}:</span>{' '}
                {vacancy.isFilled ? (
                    <span className="text-red-400">{t('filled')}</span>
                ) : (
                    <span className="text-green-400">{t('open')}</span>
                )}
            </p>

            {vacancy.requiredSkills?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {vacancy.requiredSkills.map((vs) => (
                        <span
                            key={vs.id}
                            className="bg-purple-600/30 text-purple-300 px-2 py-1 rounded-lg text-xs"
                        >
                            {vs.skill.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default VacancyCard;