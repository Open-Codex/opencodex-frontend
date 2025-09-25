'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { useProjectAdminAccess } from '@/hooks/projects/useProjectAdminAccess';
import { useProjects } from '@/hooks/projects/useProjects';
import EditProject from './EditProject';
import EditPermissions from './EditPermissions';
import EditRole from './EditRole';
import EditSkills from './EditSkills';
import AddSkills from './AddSkills';
import RemoveSkills from './RemoveSkills';

const ProjectAdminPanel = () => {
    const router = useRouter();
    const { id: projectId } = useParams();
    const { data: hasAccess, isLoading: isCheckingAccess } = useProjectAdminAccess(projectId as string);
    const { data: project, isLoading: isLoadingProject } = useProjects(projectId as string);

    const [tab, setTab] = useState<
        'overview' | 'editProject' | 'editVacancies' | 'editPermissions' | 'editRoles' | 'addSkills' | 'removeSkills'
    >('overview');
    const [currentUserId, setCurrentUserId] = useState<string>('');

    // Decodificar JWT y obtener userId
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwtDecode<{ userId: string }>(token);
                setCurrentUserId(decoded.userId);
            }
        }
    }, []);

    if (isCheckingAccess || isLoadingProject) return <p className="text-center py-10">Loading...</p>;

    if (hasAccess === false) {
        setTimeout(() => router.push('/me'), 5000);
        return <p className="text-center py-10 text-red-500">You do not have access. Redirecting...</p>;
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Project Administration Panel</h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-4">
                <button
                    className={`px-4 py-2 rounded ${tab === 'overview' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`px-4 py-2 rounded ${tab === 'editProject' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('editProject')}
                >
                    Edit Project
                </button>
                <button
                    className={`px-4 py-2 rounded ${tab === 'editVacancies' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('editVacancies')}
                >
                    Edit Vacancies
                </button>
                <button
                    className={`px-4 py-2 rounded ${tab === 'editPermissions' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('editPermissions')}
                >
                    Edit Permissions
                </button>
                <button
                    className={`px-4 py-2 rounded ${tab === 'editRoles' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('editRoles')}
                >
                    Edit Roles
                </button>
                <button
                    className={`px-4 py-2 rounded ${tab === 'addSkills' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('addSkills')}
                >
                    Add Skills
                </button>
                <button
                    className={`px-4 py-2 rounded ${tab === 'removeSkills' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    onClick={() => setTab('removeSkills')}
                >
                    Remove Skills
                </button>
            </div>

            {/* Tab content */}
            <div className="mt-6">
                {tab === 'overview' && <p>Project overview goes here...</p>}

                {tab === 'editProject' && <EditProject projectId={projectId as string} />}

                {tab === 'editVacancies' && <p>Vacancies management will go here...</p>}

                {tab === 'editPermissions' &&
                    currentUserId &&
                    project && (
                        <EditPermissions
                            projectId={projectId as string}
                            currentUserId={currentUserId}
                            members={project.memberships.map((m) => ({
                                id: m.user.id,
                                username: m.user.username,
                                name: m.user.name,
                                permission: m.permission,
                                isCreator: m.user.id === project.creatorId,
                            }))}
                        />
                    )}

                {tab === 'editRoles' && currentUserId && project && (
                    <EditRole projectId={projectId as string} currentUserId={currentUserId} />
                )}

                {tab === 'addSkills' && project && <AddSkills projectId={projectId as string} />}
                
                {tab === 'removeSkills' && project && <RemoveSkills projectId={projectId as string} />}
            </div>
        </div>
    );
};

export default ProjectAdminPanel;