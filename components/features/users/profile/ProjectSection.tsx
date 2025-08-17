'use client'

import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface Project {
    id: string;
    name: string;
    imageUrl?: string;
    status: string;
}

interface Membership {
    project: Project;
    permission: string;
    role?: {
        name: string;
    };
    joinedAt: string;
}

interface ProjectsSectionProps {
    memberships?: Membership[];
}

const ProjectsSection = ({ memberships = [] }: ProjectsSectionProps) => (
    <div className="mt-6">
        <h2 className="font-semibold mb-4">Proyectos</h2>
        {memberships.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
                {memberships.map((membership) => (
                    <div key={membership.project.id} className="bg-[#161b22] rounded-md p-4">
                        {membership.project.imageUrl && (
                            <Image
                                src={membership.project.imageUrl}
                                alt={membership.project.name}
                                width={400}
                                height={200}
                                className="w-full h-32 object-cover rounded mb-2"
                            />
                        )}
                        <h3 className="font-medium">{membership.project.name}</h3>
                        <p className="text-gray-400 text-sm">
                            Rol: {membership.role?.name || membership.permission}
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            Unido el: {formatDate(membership.joinedAt)}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${membership.project.status === 'ACTIVE'
                                ? 'bg-green-900 text-green-300'
                                : 'bg-gray-700 text-gray-300'
                            }`}>
                            {membership.project.status === 'ACTIVE' ? 'Activo' : 'Inactivo'}
                        </span>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-gray-500">No participa en ningún proyecto</p>
        )}
    </div>
);

export default ProjectsSection;