import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export function useUsers(username: string) {
    return useQuery({
        queryKey: ['user', username],
        queryFn: async () => {
            try {
                return await apiFetch(`/users/${username}`);
            } catch (err: any) {
                if (err.status === 404) {
                    return null; // no user
                }
                throw err;
            }
        },
        enabled: !!username,
    });
}