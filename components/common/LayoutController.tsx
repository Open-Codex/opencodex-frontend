"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Sidebar from "./Sidebar";
//import Footer from "@/components/Footer";

export default function LayoutController({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const landingRoutes = ["/", "/about", "/contact", "/faq", "/privacy"];
    const isLanding = landingRoutes.includes(pathname);
    const isAuth = pathname.startsWith("/auth");

    const showLayout = !isLanding && !isAuth;

    return (
        <>
            <div className="flex min-h-screen">
                {showLayout && <Sidebar />}

                <div className="flex-1 flex flex-col">
                    {showLayout && <Navbar />}

                    <main className="flex-1 py-4 mx-auto">{children}</main>
                </div>
            </div>
        </>
    );
}