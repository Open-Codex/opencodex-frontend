import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useUpdateVacancy() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, data, projectId }: { id: string; data: any; projectId?: string }) => {
            const payload = projectId ? { ...data, projectId } : data;
            return apiFetch(`/vacancies/${id}`, {
                method: "PUT",
                body: JSON.stringify(payload),
            });
        },
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries(["vacancies", variables.projectId]);
        },
    });
}