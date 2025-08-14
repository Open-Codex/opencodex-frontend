"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Sidebar from "./Sidebar";
//import Footer from "@/components/Footer";

export default function LayoutController({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const landingRoutes = ["/en", "/es", "/en/about", "/es/about", "/en/contact", "/es/contact", "/en/faq", "/es/faq", "/en/privacy", "/es/privacy"];
    const isLanding = landingRoutes.includes(pathname);
    const authRoutes = ["/en/auth/login", "/es/auth/login", "/en/auth/register", "/es/auth/register"];
    const isAuth = authRoutes.includes(pathname);

    const showLayout = !isLanding && !isAuth;

    if (!showLayout) {
        // Para landing y auth devolvemos directamente el contenido
        return <>{children}</>;
    }

    return (
        <>
            <div className="flex min-h-screen">
                {showLayout && <Sidebar />}

                <div className="flex-1 flex flex-col overflow-hidden">
                    {showLayout && <Navbar />}

                    <main
                        className={`flex-1 overflow-y-auto ${showLayout ? "pt-[64px] pl-[240px] p-4" : ""
                            }`}
                    >
                        <div className="max-w-[1500px] mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}