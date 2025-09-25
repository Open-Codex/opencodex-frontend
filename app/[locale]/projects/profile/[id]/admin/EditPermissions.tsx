'use client';

import { useUpdateMemberPermission } from '@/hooks/projects/useUpdateMemberPermission';
import { useProjects } from '@/hooks/projects/useProjects';
import { useState, useEffect } from 'react';

interface Member {
    id: string;
    username: string;
    name: string;
    permission: 'ADMIN' | 'MODERATOR' | 'MEMBER';
    isCreator: boolean;
    role?: string; // nombre del role
}

interface Props {
    projectId: string;
    currentUserId: string;
}

const PERMISSIONS = ['ADMIN', 'MODERATOR', 'MEMBER'] as const;

const EditPermissions = ({ projectId, currentUserId }: Props) => {
    const { data: project, isLoading } = useProjects(projectId);
    const { mutateAsync: updatePermission, isLoading: isUpdating } = useUpdateMemberPermission();
    const [members, setMembers] = useState<Member[]>([]);
    const [error, setError] = useState('');

    // Mapear miembros cuando se cargue el proyecto
    useEffect(() => {
        if (project?.memberships) {
            setMembers(
                project.memberships.map((m) => ({
                    id: m.user.id,
                    username: m.user.username,
                    name: m.user.name,
                    permission: m.permission,
                    isCreator: m.user.id === project.creatorId,
                    role: m.role?.name, // agregamos el role
                }))
            );
        }
    }, [project]);

    const handleChange = async (memberId: string, newPermission: 'ADMIN' | 'MODERATOR' | 'MEMBER') => {
        setError('');
        try {
            await updatePermission({ projectId, targetUserId: memberId, newPermission });
            // actualizar localmente para reflejar el cambio sin recargar
            setMembers((prev) =>
                prev.map((m) =>
                    m.id === memberId ? { ...m, permission: newPermission } : m
                )
            );
        } catch (err: any) {
            setError(err?.message || 'Error updating permission');
        }
    };

    if (isLoading) return <p>Loading members...</p>;

    return (
        <div className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            {members.map((member) => {
                const disabled = member.id === currentUserId || member.isCreator;
                return (
                    <div key={member.id} className="flex items-center justify-between gap-4 bg-gray-800 p-2 rounded">
                        <span>
                            {member.name} ({member.username} | {member.role ? `${member.role}` : ''})
                        </span>
                        <select
                            value={member.permission}
                            disabled={disabled || isUpdating}
                            onChange={(e) =>
                                handleChange(member.id, e.target.value as 'ADMIN' | 'MODERATOR' | 'MEMBER')
                            }
                            className={`bg-gray-700 text-white p-1 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {PERMISSIONS.map((perm) => (
                                <option key={perm} value={perm}>
                                    {perm}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            })}
        </div>
    );
};

export default EditPermissions;