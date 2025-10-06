import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/fetcher";

export function useCreateJoinRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ projectId, message }: { projectId: string; message?: string }) => {
      return apiFetch(`/join-requests`, {
        method: "POST",
        body: JSON.stringify({ projectId, message }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["joinRequests"]);
    },
  });
}