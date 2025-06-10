import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export function useProjects() {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => apiFetch('/project')
    });
}