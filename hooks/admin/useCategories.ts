import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";
import { Category } from "@/types";

export function useCategories() {
    return useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: () => apiFetch("/categories"),
    });
}

export function useCreateCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (data: Partial<Category>) =>
            apiFetch("/categories", { method: "POST", body: JSON.stringify(data) }),
        onSuccess: () => client.invalidateQueries({ queryKey: ["categories"] }),
    });
}

export function useUpdateCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: ({ id, name, description }: { id: string; name: string; description: string }) =>
            apiFetch(`/categories/${id}`, { 
                method: "PUT", 
                body: JSON.stringify({ name, description }) 
            }),
        onSuccess: () => client.invalidateQueries({ queryKey: ["categories"] }),
    });
}