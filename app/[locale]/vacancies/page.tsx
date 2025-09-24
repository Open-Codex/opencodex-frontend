'use client';

import { useState } from 'react';
import { useVacancies } from '@/hooks/vacancies/useVacancies';
import VacancyCard from '@/components/features/vacancies/VacancyCard';
import VacanciesPagination from '@/components/features/vacancies/VacanciesPagination';
import { useTranslations } from 'next-intl';

const Vacancies = () => {
    const [page, setPage] = useState(1);
    const limit = 6;
    const t = useTranslations('App.Page.Vacancies');

    const { data, isLoading, error } = useVacancies(page, limit);

    if (isLoading) return <p className="text-center py-10">Loading vacancies...</p>;
    if (error) return <p className="text-center py-10 text-red-500">Error loading vacancies</p>;

    const vacancies = data?.data || [];
    const pagination = data?.pagination;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacancies.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">{t('noVacancies')}</p>
                ) : (
                    vacancies.map(v => <VacancyCard key={v.id} vacancy={v} />)
                )}
            </div>

            {pagination && (
                <div className="mt-8 flex justify-center">
                    <VacanciesPagination
                        page={pagination.page}
                        limit={pagination.limit}
                        total={pagination.total}
                        onPageChange={setPage}
                    />
                </div>
            )}
        </div>
    );
}

export default Vacancies;