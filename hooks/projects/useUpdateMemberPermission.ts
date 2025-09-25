import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

interface UpdatePermissionPayload {
    projectId: string;
    targetUserId: string;
    newPermission: 'ADMIN' | 'MODERATOR' | 'MEMBER';
}

export const useUpdateMemberPermission = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ projectId, targetUserId, newPermission }: UpdatePermissionPayload) => {
            const res = await apiFetch(`/projects/${projectId}/members/${targetUserId}/permission`, {
                method: 'PUT',
                body: JSON.stringify({ permission: newPermission }),
            });
            return res;
        },
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries(['project', variables.projectId]);
        },
    });
};