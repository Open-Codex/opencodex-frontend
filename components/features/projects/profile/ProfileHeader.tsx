'use client'

import Image from "next/image";
import { Project } from "@/types/types";
import { formatDate } from "@/lib/utils";
import {
    Github,
    XIcon,
    Linkedin,
    Globe
} from "lucide-react";
import { useTranslations } from 'next-intl';

const ProfileHeader = ({ project }: { project: Project }) => {
    const t = useTranslations('App.Page.Project');

    return (
        <div className="flex items-center gap-4">
            {project.imageUrl ? (
                <Image
                    src={project.imageUrl}
                    alt={`Avatar de ${project.name}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                />
            ) : (
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
                    {project.name?.charAt(0).toUpperCase()}
                </div>
            )}
            <div>
                <h1 className="text-lg font-semibold">
                    @{project.name} | {project.name}
                </h1>
                <p className="text-gray-400 text-sm">
                    {t('registeredAt')} {project.createdAt ? formatDate(project.createdAt) : "fecha desconocida"}
                </p>
                <div className="flex gap-2 mt-2">
                    {project.github && (
                        <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                                <Github />
                            </div>
                        </a>
                    )}
                    {project.twitter && (
                        <a href={`https://twitter.com/${project.twitter}`} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                                <XIcon />
                            </div>
                        </a>
                    )}
                    {project.linkedin && (
                        <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                                <Linkedin />
                            </div>
                        </a>
                    )}
                    {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                                <Globe />
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;