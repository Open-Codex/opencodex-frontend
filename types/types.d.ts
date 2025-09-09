interface Membership {
    id: string;
    userId: string;
    projectId: string;
    roleId: string;
    permission: ProjectPermission;
    joinedAt: Date;
    project: Project;
    role: Role;
}

interface UserSkill {
    id: string;
    userId: string;
    skillId: string;
    skill: Skill;
}

interface Skill {
    id: string;
    name: string;
}

interface Project {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    status: ProjectStatus;
}

export enum ProjectStatus {
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED",
    COMPLETED = "COMPLETED"
}

export enum ProjectPermission {
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    MEMBER = "MEMBER"
}

export enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BANNED = "BANNED"
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    avatarUrl?: string;
    registeredAt?: Date;
    status?: UserStatus;
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
    description?: string;
    discordId?: string;
    
    memberships?: Membership[];
    likesReceived?: number;
    userSkills?: UserSkill[];
    createdProjects?: Project[];
}