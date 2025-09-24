"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
    name: string;
    email: string;
    userId: string;
    userRol: string;
    iat: number;
    exp: number;
}

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [allowed, setAllowed] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Restricted access: only administrators can enter.");
            router.push("/auth/login");
            setAllowed(false);
            return;
        }

        try {
            const decoded = jwtDecode<TokenPayload>(token);
            if (decoded.userRol !== "ADMIN") {
                alert("Restricted access: only administrators can enter.");
                router.push("/auth/login");
                setAllowed(false);
            } else {
                setAllowed(true);
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            router.push("/auth/login");
            setAllowed(false);
        }
    }, [router]);

    if (allowed === null) {
        return <p className="p-4">Verifying permissions...</p>;
    }

    return allowed ? <>{children}</> : null;
}