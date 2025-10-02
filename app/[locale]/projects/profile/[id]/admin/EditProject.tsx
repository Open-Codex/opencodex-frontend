'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProjects } from '@/hooks/projects/useProjects';
import { useUpdateProject } from '@/hooks/projects/useUpdateProject';

const EditProject = ({ projectId }: { projectId: string }) => {
    const { data: project, isLoading } = useProjects(projectId);
    const updateProject = useUpdateProject(projectId);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        github: '',
        linkedin: '',
        twitter: '',
        website: '',
    });

    useEffect(() => {
        if (project) {
            setFormData({
                name: project.name || '',
                description: project.description || '',
                github: project.github || '',
                linkedin: project.linkedin || '',
                twitter: project.twitter || '',
                website: project.website || '',
            });
        }
    }, [project]);

    if (isLoading) return <p>Loading project...</p>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateProject.mutate(formData, {
            onSuccess: () => alert('Project updated successfully!'),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Project Name" className="p-2 border rounded" />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded" />
            <input name="github" value={formData.github} onChange={handleChange} placeholder="GitHub" className="p-2 border rounded" />
            <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn" className="p-2 border rounded" />
            <input name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter" className="p-2 border rounded" />
            <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="p-2 border rounded" />
            <button type="submit" className="bg-purple-600 text-white p-2 rounded">Update Project</button>
        </form>
    );
};

export default EditProject;