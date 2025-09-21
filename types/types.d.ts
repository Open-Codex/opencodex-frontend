// ENUMS TYPES

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

export enum RequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
}

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
}

// BASE TYPES

interface Skill {
    id: string;
    name: string;
}

export interface Role {
    id: string;
    name: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}

// RELATION TYPES

export interface ProjectSkill {
    id: string;
    projectId: string;
    skillId: string;
    skill: Skill;
}

export interface VacancySkill {
    id: string;
    vacancyId: string;
    skillId: string;
    skill: Skill;
}

export interface Vacancy {
    id: string;
    projectId: string;
    title: string;
    description: string;
    isFilled: boolean;
    createdAt: Date;
    requiredSkills: VacancySkill[];
}

interface Membership {
    id: string;
    userId: string;
    projectId: string;
    roleId: string;
    permission: ProjectPermission;
    joinedAt: Date;

    user: User;
    project: Project;
    role: Role;
}

export interface JoinRequest {
    id: string;
    userId: string;
    projectId: string;
    message?: string;
    status: RequestStatus;
    createdAt: Date;
    reviewedAt?: Date;

    user: User;
    project: Project;
}

export interface ProjectLike {
    id: string;
    userId: string;
    projectId: string;
    createdAt: Date;
}

export interface ProjectFavorite {
    id: string;
    userId: string;
    projectId: string;
    createdAt: Date;
}

// USER TYPES

interface UserSkill {
    id: string;
    userId: string;
    skillId: string;
    skill: Skill;
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    avatarUrl?: string;
    registeredAt?: Date;
    lastLogin?: Date;
    status?: UserStatus;
    userRol?: UserRole;
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
    description?: string;
    discordId?: string;
    
    memberships?: Membership[];
    likesReceived?: number;
    dislikesReceived?: number;
    userSkills?: UserSkill[];
    createdProjects?: Project[];
    projectLikes?: ProjectLike[];
    projectFavorites?: ProjectFavorite[];
}

// PROJECT TYPES

interface Project {
    id: string;
    name: string;
    description: string;
    readme?: string;
    imageUrl?: string;

    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;

    likesCount: number;
    favoritesCount: number;

    createdAt: Date;
    status: ProjectStatus;

    creatorId: string;
    creator: User;

    categoryId?: string;
    category?: Category;

    discordChannelId?: string;

    memberships?: Membership[];
    vacancies?: Vacancy[];
    requiredSkills?: ProjectSkill[];
    joinRequests?: JoinRequest[];

    projectLikes?: ProjectLike[];
    projectFavorites?: ProjectFavorite[];
}