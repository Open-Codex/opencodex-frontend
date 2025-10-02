import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useCreateVacancy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { projectId: string; title: string; description: string }) => {
      return apiFetch(`/vacancies`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries(["vacancies", variables.projectId]);
    },
  });
}