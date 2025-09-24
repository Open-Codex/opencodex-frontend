import { useTranslations } from 'next-intl';

interface Props {
    page: number;
    limit: number;
    total: number;
    onPageChange: (page: number) => void;
}

const VacanciesPagination = ({ page, limit, total, onPageChange }: Props) => {
    const totalPages = Math.ceil(total / limit);
    const t = useTranslations('App.Page.Vacancies');

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center gap-2">
            <button
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
            >
                {t('prev')}
            </button>

            <span className="text-gray-300">
                {t('page')} {page} {t('of')} {totalPages}
            </span>

            <button
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
            >
                {t('next')}
            </button>
        </div>
    );
}

export default VacanciesPagination;