import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useVacanciesByProject(projectId: string) {
  return useQuery({
    queryKey: ["vacancies", projectId],
    queryFn: () => apiFetch(`/vacancies/project/${projectId}`),
    enabled: !!projectId,
  });
}