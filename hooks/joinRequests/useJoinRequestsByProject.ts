import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';

export function useJoinRequestsByProject(projectId: string) {
  return useQuery({
    queryKey: ['joinRequests', projectId],
    queryFn: async () => {
      return apiFetch(`/join-requests/${projectId}`);
    },
    enabled: !!projectId,
  });
}