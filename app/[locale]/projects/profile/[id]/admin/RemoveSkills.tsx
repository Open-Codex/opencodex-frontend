'use client';

import { useState, useMemo } from "react";
import { useProjects } from "@/hooks/projects/useProjects";
import { useRemoveProjectSkill } from "@/hooks/projects/useRemoveProjectSkill";

interface Props {
    projectId: string;
}

export default function RemoveSkills({ projectId }: Props) {
    const { data: project, isLoading } = useProjects(projectId);
    const removeSkill = useRemoveProjectSkill(projectId);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    if (isLoading) return <p>Loading skills...</p>;

    const removableSkills = useMemo(
        () =>
            project?.requiredSkills?.filter((ps: any) =>
                ps.skill.name.toLowerCase().includes(search.toLowerCase())
            ) || [],
        [project?.requiredSkills, search]
    );

    const handleRemove = async (skillId: string) => {
        setError("");
        try {
            await removeSkill.mutateAsync(skillId);
        } catch (err: any) {
            setError(err?.message || "Error removing skill");
        }
    };

    return (
        <div className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                placeholder="Search project skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
            />
            <ul>
                {removableSkills.length === 0 && (
                    <li className="text-gray-400">No skills found</li>
                )}
                {removableSkills.map((ps: any) => (
                    <li
                        key={ps.id}
                        className="flex justify-between p-2 bg-gray-800 rounded mb-1"
                    >
                        <span>{ps.skill.name}</span>
                        <button
                            onClick={() => handleRemove(ps.skill.id)}
                            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}