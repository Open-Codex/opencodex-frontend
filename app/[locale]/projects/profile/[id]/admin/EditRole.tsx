'use client';

import { useProjects } from '@/hooks/projects/useProjects';
import { useUpdateMemberRole } from '@/hooks/projects/useUpdateMemberRole';
import { useRoles } from '@/hooks/projects/useRoles';
import { useState, useEffect } from 'react';

interface Props {
    projectId: string;
    currentUserId: string;
}

const EditRole = ({ projectId, currentUserId }: Props) => {
    const { data: project, isLoading: isLoadingProject } = useProjects(projectId);
    const { data: roles, isLoading: isLoadingRoles } = useRoles();
    const { mutateAsync: updateRole, isLoading: isUpdating } = useUpdateMemberRole();

    const [members, setMembers] = useState<any[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (project?.memberships) {
            setMembers(
                project.memberships.map((m: any) => ({
                    id: m.user.id,
                    username: m.user.username,
                    name: m.user.name,
                    roleId: m.role.id,
                    roleName: m.role.name,
                    isCreator: m.user.id === project.creatorId,
                }))
            );
        }
    }, [project]);

    const handleChange = async (memberId: string, newRoleId: string) => {
        setError('');
        try {
            await updateRole({ projectId, targetUserId: memberId, roleId: newRoleId });
            setMembers(prev =>
                prev.map(m => (m.id === memberId ? { ...m, roleId: newRoleId } : m))
            );
        } catch (err: any) {
            setError(err?.message || 'Error updating role');
        }
    };

    if (isLoadingProject || isLoadingRoles) return <p className="text-center py-4">Loading members and roles...</p>;

    return (
        <div className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            {members.map(member => {
                const disabled = member.id === currentUserId || member.isCreator;
                return (
                    <div
                        key={member.id}
                        className="flex items-center justify-between gap-4 bg-gray-800 p-2 rounded"
                    >
                        <span>{member.name} ({member.username})</span>
                        <select
                            value={member.roleId}
                            disabled={disabled || isUpdating}
                            onChange={e => handleChange(member.id, e.target.value)}
                            className={`bg-gray-700 text-white p-1 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {roles?.map((role: any) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            })}
        </div>
    );
};

export default EditRole;