import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";
import { Skill } from "@/types";

export function useSkills() {
    return useQuery<Skill[]>({
        queryKey: ["skills"],
        queryFn: () => apiFetch("/skills"),
    });
}