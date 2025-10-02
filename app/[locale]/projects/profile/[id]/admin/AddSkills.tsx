'use client';

import { useState, useMemo } from "react";
import { useProjects } from "@/hooks/projects/useProjects";
import { useSkills } from "@/hooks/projects/useSkills";
import { useAddProjectSkill } from "@/hooks/projects/useAddProjectSkill";

interface Props {
    projectId: string;
}

export default function AddSkills({ projectId }: Props) {
    const { data: project } = useProjects(projectId);
    const { data: allSkills = [] } = useSkills();
    const addSkill = useAddProjectSkill(projectId);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const availableSkills = useMemo(
        () =>
            allSkills.filter(
                (s) =>
                    !project?.skills?.some((ps: any) => ps.skill.id === s.id) &&
                    s.name.toLowerCase().includes(search.toLowerCase())
            ),
        [allSkills, project?.skills, search]
    );

    const handleAdd = async (skillId: string) => {
        setError("");
        try {
            await addSkill.mutateAsync({ skillIds: [skillId] });
        } catch (err: any) {
            setError(err?.message || "Error adding skill");
        }
    };

    return (
        <div className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                placeholder="Search skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
            />
            <ul>
                {availableSkills.length === 0 && <li className="text-gray-400">No skills found</li>}
                {availableSkills.map((skill) => (
                    <li key={skill.id} className="flex justify-between p-2 bg-gray-800 rounded mb-1">
                        <span>{skill.name}</span>
                        <button
                            onClick={() => handleAdd(skill.id)}
                            className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                        >
                            Add
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}