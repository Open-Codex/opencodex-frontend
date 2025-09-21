import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export function useProjects(id: string) {
    return useQuery({
        queryKey: ['project', id],
        queryFn: async () => {
            try {
                return await apiFetch(`/projects/${id}`);
            } catch (err: any) {
                if (err.status === 404) {
                    return null; // no project
                }
                throw err;
            }
        },
        enabled: !!id,
    });
}