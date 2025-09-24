"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface BackToAdminButtonProps {
    label?: string;
    className?: string;
}

export default function BackToAdminButton({ label = "Back to Admin Panel", className = "" }: BackToAdminButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/admin");
    };

    return (
        <Button onClick={handleClick} className={className} variant="default">
            {label}
        </Button>
    );
}