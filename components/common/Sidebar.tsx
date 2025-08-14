"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
    ChevronDown,
    ChevronRight,
    User,
    LayoutDashboard,
    Folder,
    Users,
    Globe,
    Settings,
    FileSearch,
    Briefcase
} from "lucide-react";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { jwtDecode } from "jwt-decode";

interface NavItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    children?: { label: string; href: string; icon?: React.ReactNode }[];
}

interface TokenPayload {
    name: string;
    email: string;
    userId: string;
    userRol: string;
    iat: number;
    exp: number;
}

const Sidebar = () => {
    const t = useTranslations('App.Sidebar');
    const pathname = usePathname();
    const [openProjects, setOpenProjects] = useState(true);
    const [openCommunity, setOpenCommunity] = useState(true);
    const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode<TokenPayload>(token);
                setUserInfo({ name: decoded.name, email: decoded.email });
            } catch (err) {
                console.error("Token inválido:", err);
                setUserInfo(null);
            }
        }
    }, []);

    const normalizePath = (path: string) => {
        const segments = path.split("/").filter(Boolean);
        if (segments.length > 1 && segments[0].length === 2) {
            return '/' + segments.slice(1).join('/');
        }
        return path;
    };

    const normalizedPath = normalizePath(pathname);
    const isActive = (href?: string) => href && normalizedPath === href;

    const navItems: NavItem[] = [
        { label: t('me'), href: "/me", icon: <User size={16} /> },
        { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={16} /> },
        {
            label: t('projects'),
            icon: <Folder size={16} />,
            children: [
                { label: t('exploreAll'), href: "/projects", icon: <FileSearch size={16} /> },
                { label: t('myProjects'), href: "/my-projects", icon: <Briefcase size={16} /> },
            ],
        },
        { label: t('developers'), href: "/developers", icon: <Users size={16} /> },
        {
            label: t('community'),
            icon: <Globe size={16} />,
            children: [
                { label: "Discord", href: "/discord", icon: <Globe size={16} /> },
                { label: "Blog", href: "/blog", icon: <Globe size={16} /> },
            ],
        },
        { label: t('settings'), href: "/settings", icon: <Settings size={16} /> },
    ];

    return (
        <aside className="w-60 h-screen fixed left-0 top-0 flex flex-col bg-[#161b22] text-white border-r border-gray-800 z-10">
            {/* Logo */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                <span className="text-[#a855f7] text-2xl">⌘</span>
                <span className="font-semibold text-sm">OpenCodeX</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 text-sm space-y-1">
                {navItems.map((item) => {
                    if (item.children) {
                        const isProjects = item.label === "Proyectos";
                        const isOpen = isProjects ? openProjects : openCommunity;
                        const toggle = isProjects
                            ? () => setOpenProjects(!openProjects)
                            : () => setOpenCommunity(!openCommunity);

                        const hasActiveChild = item.children.some((c) => isActive(c.href));

                        return (
                            <div key={item.label}>
                                <button
                                    onClick={toggle}
                                    className={`flex items-center justify-between w-full px-2 py-1 rounded hover:bg-gray-800 ${hasActiveChild ? "bg-gray-800" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                </button>
                                {isOpen && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-800 ${isActive(child.href) ? "bg-gray-800" : ""
                                                    }`}
                                            >
                                                {child.icon}
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.href}
                            href={item.href!}
                            className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-800 ${isActive(item.href) ? "bg-gray-800" : ""
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer Sidebar */}
            <div className="p-4 border-t border-gray-800 flex items-center justify-between text-xs">
                <div>
                    <div className="font-medium">
                        {userInfo ? userInfo.name : t("login")}
                    </div>
                    <div className="text-gray-400">
                        {userInfo ? userInfo.email : t("register")}
                    </div>
                </div>
                <div className="w-4 h-4 bg-gray-400 rounded-sm" />
            </div>
        </aside>
    );
};

export default Sidebar;