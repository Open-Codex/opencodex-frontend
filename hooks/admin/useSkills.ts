import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";
import { Skill } from "@/types";

export function useSkills() {
    return useQuery<Skill[]>({
        queryKey: ["skills"],
        queryFn: () => apiFetch("/skills"),
    });
}

export function useCreateSkill() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (data: Partial<Skill>) =>
            apiFetch("/skills", { method: "POST", body: JSON.stringify(data) }),
        onSuccess: () => client.invalidateQueries({ queryKey: ["skills"] }),
    });
}

export function useUpdateSkill() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, name }: { id: string; name: string; }) =>
            apiFetch(`/skills/${id}`, { 
                method: "PUT", 
                body: JSON.stringify({ name }) 
            }),
        onSuccess: () => client.invalidateQueries({ queryKey: ["skills"] }),
    });
}