import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export function useMe() {
    return useQuery({
        queryKey: ['me'],
        queryFn: () => apiFetch('/users/me')
    });
}