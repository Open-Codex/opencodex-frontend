'use client';

import { useJoinRequestsByProject } from '@/hooks/joinRequests/useJoinRequestsByProject';
import { useUpdateJoinRequestStatus } from '@/hooks/joinRequests/useUpdateJoinRequestStatus';
import { useDeleteJoinRequest } from '@/hooks/joinRequests/useDeleteJoinRequest';

const ViewJoinRequests = ({ projectId }: { projectId: string }) => {
    const { data: joinRequests = [], isLoading } = useJoinRequestsByProject(projectId);
    const updateStatus = useUpdateJoinRequestStatus(projectId);
    const deleteRequest = useDeleteJoinRequest(projectId);

    if (isLoading) return <p>Loading join requests...</p>;

    if (joinRequests.length === 0)
        return <p className="text-gray-400">No pending join requests for this project.</p>;

    const handleStatusChange = (id: string, status: 'ACCEPTED' | 'REJECTED') => {
        updateStatus.mutate({ requestId: id, status });
    };

    const handleDelete = (id: string) => {
        deleteRequest.mutate(id);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Join Requests</h2>

            <ul className="space-y-4">
                {joinRequests.map((req: any) => (
                    <li
                        key={req.id}
                        className="p-4 border border-gray-700 rounded bg-gray-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                        {/* 🧍 User Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={req.user?.avatarUrl || '/default-avatar.png'}
                                alt={req.user?.username}
                                className="w-12 h-12 rounded-full border border-gray-700"
                            />
                            <div>
                                <p className="font-semibold">{req.user?.username}</p>
                                <p className="text-sm text-gray-400">Message: {req.message || 'No message'}</p>
                                <p className="text-xs text-gray-500">
                                    Sent at: {new Date(req.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/* 🧩 Actions */}
                        <div className="flex gap-2 justify-end">
                            {req.status === 'PENDING' ? (
                                <>
                                    <button
                                        onClick={() => handleStatusChange(req.id, 'ACCEPTED')}
                                        className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => handleStatusChange(req.id, 'REJECTED')}
                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                                    >
                                        Reject
                                    </button>
                                </>
                            ) : (
                                <span
                                    className={`text-sm font-semibold px-2 py-1 rounded ${req.status === 'ACCEPTED'
                                            ? 'bg-green-900 text-green-300'
                                            : 'bg-red-900 text-red-300'
                                        }`}
                                >
                                    {req.status}
                                </span>
                            )}
                            <button
                                onClick={() => handleDelete(req.id)}
                                className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewJoinRequests;