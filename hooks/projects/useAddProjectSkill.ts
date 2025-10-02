import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useAddProjectSkill(projectId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ skillIds }: { skillIds: string[] }) => {
            if (!skillIds || skillIds.length === 0) throw new Error("Must provide at least one skill");
            return apiFetch(`/projects/${projectId}/skills`, {
                method: "POST",
                body: JSON.stringify({ skillIds }),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
    });
}