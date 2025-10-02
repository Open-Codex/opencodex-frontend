import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export const useProjectAdminAccess = (id: string) => {
    return useQuery({
        queryKey: ['projectAdminAccess', id],
        queryFn: async () => {
            try {
                const res = await apiFetch(`/projects/${id}/can-admin`);
                return res.success;
            } catch {
                return false;
            }
        },
        staleTime: Infinity,
    });
};