"use client";

import { useState } from "react";
import { useCreateJoinRequest } from "@/hooks/joinRequests/useCreateJoinRequest";

interface ApplyModalProps {
    projectId: string;
    userId: string;
    onClose: () => void;
}

export default function ApplyModal({ projectId, userId, onClose }: ApplyModalProps) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const createJoinRequest = useCreateJoinRequest();

    const handleSubmit = () => {
        if (!projectId || !userId) {
            setError("Missing userId or projectId");
            return;
        }

        createJoinRequest.mutate(
            { userId, projectId, message },
            {
                onError: (err: any) => {
                    console.error("❌ Error al crear JoinRequest:", err);
                    setError(
                        err?.response?.data?.message ||
                        "You have already applied to this project's vacancies"
                    );
                },
                onSuccess: () => {
                    setError(null);
                    onClose();
                },
            }
        );
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-[#161b22] p-6 rounded-md w-96 border border-gray-700">
                <h2 className="text-lg font-semibold mb-3">Apply to Project</h2>

                <textarea
                    className="w-full p-2 rounded bg-gray-800 text-gray-200 mb-4"
                    placeholder="Write a message (optional)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 text-sm mb-2">
                        {error}
                    </p>
                )}

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}