// app/projects/page.tsx
'use client';

import { useProjects } from '@/hooks/useProjects'; // si está en hooks/useProjects.ts
import React from 'react';

export default function ProjectsPage() {
    const { data, isLoading, error } = useProjects();

    if (isLoading) return <p>Cargando proyectos...</p>;
    if (error) return <p>Error al cargar proyectos.</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
            <ul className="space-y-2">
                {data.map((project: any) => (
                    <li key={project.id} className="p-4 border rounded">
                        <h2 className="text-lg font-semibold">{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
