import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

interface UpdateRolePayload {
    projectId: string;
    targetUserId: string;
    roleId: string;
}

export const useUpdateMemberRole = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ projectId, targetUserId, roleId }: UpdateRolePayload) => {
            return apiFetch(`/projects/${projectId}/members/${targetUserId}/role`, {
                method: 'PUT',
                body: JSON.stringify({ roleId }),
            });
        },
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries(['project', variables.projectId]);
        },
    });
};