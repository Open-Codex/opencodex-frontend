import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export const useUpdateProject = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: {
            name?: string;
            description?: string;
            readme?: string;
            github?: string;
            linkedin?: string;
            twitter?: string;
            website?: string;
        }) => {
            return apiFetch(`/projects/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['project', id]);
        },
    });
};