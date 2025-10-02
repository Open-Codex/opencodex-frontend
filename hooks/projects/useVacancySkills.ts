import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useAddSkillsToVacancy() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ projectId, vacancyId, skillIds }: { projectId: string; vacancyId: string; skillIds: string[] }) => {
            return apiFetch(`/vacancies/${vacancyId}/skills`, {
                method: "POST",
                body: JSON.stringify({ projectId, skillIds }),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["vacancies"]);
        },
    });
}

export function useRemoveSkillsFromVacancy() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ projectId, vacancyId, skillIds }: { projectId: string; vacancyId: string; skillIds: string[] }) => {
            return apiFetch(`/vacancies/${vacancyId}/skills`, {
                method: "DELETE",
                body: JSON.stringify({ projectId, skillIds }),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["vacancies"]);
        },
    });
}