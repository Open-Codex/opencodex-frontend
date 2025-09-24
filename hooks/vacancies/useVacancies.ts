import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { apiFetch } from "@/lib/fetcher";
import { Vacancy } from "@/types";

interface VacanciesResponse {
    data: Vacancy[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export const useVacancies = (page: number, limit: number) => {
    return useQuery<VacanciesResponse>({
        queryKey: ['vacancies', page, limit],
        queryFn: () => apiFetch<VacanciesResponse>(`/vacancies?page=${page}&limit=${limit}`),
        placeholderData: (prev) => prev,
    });
};