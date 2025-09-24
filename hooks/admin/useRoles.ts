import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";
import { Role } from "@/types";

export function useRoles() {
    return useQuery<Role[]>({
        queryKey: ["roles"],
        queryFn: () => apiFetch("/roles"),
    });
}

export function useCreateRole() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (data: Partial<Role>) =>
            apiFetch("/roles", { method: "POST", body: JSON.stringify(data) }),
        onSuccess: () => client.invalidateQueries({ queryKey: ["roles"] }),
    });
}

export function useUpdateRole() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, name }: { id: string; name: string; }) =>
            apiFetch(`/roles/${id}`, { 
                method: "PUT", 
                body: JSON.stringify({ name }) 
            }),
        onSuccess: () => client.invalidateQueries({ queryKey: ["roles"] }),
    });
}