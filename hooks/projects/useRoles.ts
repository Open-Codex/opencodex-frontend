import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";
import { Role } from "@/types";

export function useRoles() {
    return useQuery<Role[], Error>({
        queryKey: ["roles"],
        queryFn: () => apiFetch("/roles"),
    });
}