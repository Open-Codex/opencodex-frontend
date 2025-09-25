import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useRemoveProjectSkill(projectId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (skillId: string) => {
            return apiFetch(`/projects/${projectId}/skills/${skillId}`, {
                method: "DELETE",
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
    });
}