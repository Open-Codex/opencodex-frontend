import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export function useUsers(username: string) {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => apiFetch(`/users/${username}`),
        enabled: !!username,
    });
}